# Testing Skill Plan

## Problem Statement

When making UI changes to the Thai Learning App, we ran the full Playwright E2E suite (14 spec files, 39 tests) without first verifying that the app even loads. A runtime crash caused the app to render blank pages, which meant every single test timed out waiting for elements that would never appear. With a 60-second default timeout and sequential execution (`workers: 1`), this wasted 30+ minutes before we recognized the root cause: the app was broken at startup.

The core issue is not the tests themselves but the workflow. There was no fast gate to catch "the app does not render at all" before committing to a full test run. A 5-second smoke check would have saved 30 minutes of timeout loops.

Additionally, the current Playwright config has `headless: false` and `slowMo: 100`, which further increases wall-clock time and is unnecessary for CI-style validation runs.

## Proposed Testing Skill Rules

### Rule 1: Smoke Test First

Before running the full E2E suite, always verify:

1. The TypeScript compiler is happy (`npx tsc --noEmit`).
2. The dev server starts and serves HTML (not a blank page or error).
3. A single fast test passes (e.g., "home page loads and shows title").

If any of these fail, stop immediately. Do not run the full suite.

### Rule 2: Build-Test-Verify Loop

After every code change, follow this sequence in order:

1. **Type check** -- `npx tsc --noEmit`. Catches import errors, type mismatches, missing exports.
2. **Build** -- `npm run build`. Catches bundler errors, missing modules, syntax issues.
3. **Quick smoke** -- Start dev server, confirm the page returns valid HTML and the home screen renders.
4. **Full suite** -- Only after smoke passes, run the complete Playwright suite.

Never skip steps 1-3 to "save time." They take seconds and prevent multi-minute timeout cascades.

### Rule 3: Fast-Fail Configuration

Configure Playwright to stop early when multiple tests fail. If 3 tests fail in a row, the remaining 36 tests are very likely to fail too. Stopping early saves time and produces a more readable failure report.

Use `maxFailures: 3` in `playwright.config.ts` or pass `--max-failures=3` on the command line.

### Rule 4: Headless First

Run tests in headless mode by default. The current config has `headless: false` and `slowMo: 100`, which is useful for watching tests run but adds significant overhead:

- `slowMo: 100` adds 100ms to every Playwright action (clicks, navigations, assertions). Across hundreds of actions, this adds minutes.
- Headed mode requires a display and is slower to launch.

Use headed mode only when debugging a specific failing test, not for routine validation.

### Rule 5: Console Error Detection

When a test fails, the first diagnostic step should be checking the browser console for errors -- not re-running the test or reading the test code. A `TypeError` or `Module not found` in the console immediately explains why the page is blank, while staring at timeout errors does not.

Capture console errors programmatically and include them in test failure output.

## Proposed Skill Implementation

Create a Claude Code skill at `.claude/skills/test/SKILL.md` that can be invoked with `/test`. The skill encodes the build-test-verify loop so it is followed automatically.

### Skill Workflow

```
/test
  |
  v
Step 1: npx tsc --noEmit
  |-- FAIL --> Report type errors, stop.
  v
Step 2: npm run build
  |-- FAIL --> Report build errors, stop.
  v
Step 3: Start dev server, curl http://localhost:5173, verify HTML response
  |-- FAIL --> Report "app does not serve HTML", stop.
  v
Step 4: Run single smoke test
         npx playwright test e2e/home.spec.ts --grep "displays app title" --max-failures=1
  |-- FAIL --> Take screenshot, capture console errors, report, stop.
  v
Step 5: Run full suite
         npx playwright test --max-failures=3
  |-- FAIL --> Report failures with screenshots and console logs.
  |-- PASS --> Report success.
```

### Skill Modes

- **`/test`** -- Full workflow (steps 1-5). Default mode.
- **`/test smoke`** -- Steps 1-4 only. Fast validation without the full suite.
- **`/test debug`** -- Before running any tests, start the dev server, navigate to the app in a browser, take a screenshot, and dump console errors. Useful when you suspect the app is broken but want visual confirmation before investigating.
- **`/test full`** -- Skip smoke, run the entire suite (for cases where you know the app works and want comprehensive results).

### Skill Pseudo-Implementation

The skill file (`.claude/skills/test/SKILL.md`) should instruct the agent to:

```markdown
1. Run `npx tsc --noEmit`. If it fails, report the errors and stop.

2. Run `npm run build`. If it fails, report the errors and stop.

3. Start the dev server if not already running:
   - Run `npm run dev` in the background.
   - Wait up to 10 seconds for http://localhost:5173 to respond.
   - Verify the response contains `<div id="root">` (the React mount point).
   - If it does not respond or returns unexpected content, report and stop.

4. Run the smoke test:
   - `npx playwright test e2e/home.spec.ts -g "displays app title" --max-failures=1`
   - If it fails, read the screenshot and console output. Report the findings and stop.

5. Run the full suite:
   - `npx playwright test --max-failures=3`
   - If tests fail, summarize: how many passed, how many failed, what the common
     failure pattern is (e.g., "all failures are timeouts" suggests a rendering issue).
   - Include screenshot paths and console errors from the first failure.
```

## Playwright Config Improvements

The following changes to `playwright.config.ts` support the fast-fail workflow.

### Current Config Issues

| Setting | Current Value | Problem |
|---------|--------------|---------|
| `headless` | `false` | Slower, requires display |
| `slowMo` | `100` | Adds ~100ms per action across the entire suite |
| `maxFailures` | not set | Suite runs all 39 tests even if every one fails |
| `timeout` | default (30s) | Reasonable, but could be lower for smoke tests |

### Recommended Changes

```typescript
// playwright.config.ts
export default defineConfig({
  testDir: './e2e',
  outputDir: './e2e/test-results',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  maxFailures: 3,                          // NEW: stop after 3 failures
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',              // CHANGED: reduce trace overhead
    screenshot: 'only-on-failure',         // CHANGED: only capture on failure
    video: 'retain-on-failure',            // CHANGED: only retain on failure
    headless: true,                        // CHANGED: headless by default
    // slowMo removed                      // CHANGED: no artificial slowdown
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
})
```

### Global Setup for App Health Check

Consider adding a Playwright global setup that verifies the app loads before any tests run:

```typescript
// e2e/global-setup.ts
import { chromium } from '@playwright/test'

export default async function globalSetup() {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  try {
    await page.goto('http://localhost:5173', { timeout: 10000 })
    const root = await page.locator('#root').innerHTML({ timeout: 5000 })
    if (!root || root.trim() === '') {
      throw new Error(
        'App health check failed: #root is empty. The app is not rendering. '
        + 'Check the browser console for runtime errors.'
      )
    }
  } finally {
    await browser.close()
  }
}
```

Then reference it in `playwright.config.ts`:

```typescript
export default defineConfig({
  globalSetup: './e2e/global-setup.ts',
  // ... rest of config
})
```

This makes the entire test suite fail immediately with a clear error message if the app is broken, rather than timing out test by test.

## Verification Checklist

Follow this checklist after every code change, before considering the change "done":

- [ ] Does `npx tsc --noEmit` pass with no errors?
- [ ] Does `npm run build` succeed?
- [ ] Does the dev server start and serve HTML at `http://localhost:5173`?
- [ ] Does the `#root` element contain rendered content (not empty)?
- [ ] Does a single smoke test (`home.spec.ts` -- "displays app title") pass?
- [ ] Do all E2E tests pass with `--max-failures=3`?

If any step fails, fix the issue before proceeding to the next step. Do not skip ahead to the full test suite hoping the problem resolves itself.
