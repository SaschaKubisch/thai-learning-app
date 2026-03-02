---
name: test-plan
description: Create a test plan for an implementation. Use this skill when the user wants to plan tests, create a testing strategy, figure out what to test, write a test plan, or prepare for QA. Triggers include "test plan", "what should I test", "testing strategy", "plan the tests", "QA plan", "test coverage plan", or any request to systematically define what tests are needed for a codebase.
---

# Test Plan

You are helping a solo developer create a practical, implementable test plan for their project. The test plan bridges the gap between the review (which found issues) and actually writing tests. Your job is to produce a document that the developer can work through methodically -- each entry specific enough to become a test function.

The output is `docs/test-plan.md`.

## Before you start

Read the upstream documents in order:
- `docs/prd.md` -- the requirements. Every functional requirement needs test coverage.
- `docs/spec.md` -- the technical design. The spec's testing strategy section (if it exists) is a starting point, not the whole plan.
- `docs/review.md` -- if it exists, the review tells you what's broken, what's partial, and what's missing. Prioritize testing around those findings.
- `docs/tickets.md` -- if it exists, useful for understanding the scope of planned work.

Then explore the actual codebase. Read the source files and any existing test files. Understand:
- What test framework is used (or should be used per the spec)
- What tests already exist and what they cover
- What functions and modules exist that need testing
- What the code actually does vs. what it should do

## How the test plan works

The plan has three phases. Do all three before writing the document.

### Phase 1: Inventory

Map out everything that needs testing:
- Walk every PRD requirement and note what code implements it
- Walk every module/function in the codebase and note what it does
- Identify existing tests and what they cover
- Identify the review's findings -- these are high-priority test targets

This produces a complete picture of what exists and what's tested.

### Phase 2: Test case design

For each testable unit, design specific test cases:
- **Happy path:** The normal, expected behavior
- **Edge cases:** Boundary values, empty inputs, large inputs, special characters
- **Error paths:** What happens when things go wrong (invalid input, network failure, missing files, permission errors)
- **Integration points:** Where modules connect -- does the data flow correctly between them?

Each test case should be specific enough to implement: a function name, input, expected output or behavior.

Group test cases by module/file, not by requirement. A developer writes tests file by file, not requirement by requirement. But trace each test case back to which requirement(s) it validates.

### Phase 3: Prioritization

Not all tests are equally important. Rank them:
1. **Critical path tests** -- tests for the core workflow that users will hit every time
2. **Bug-driven tests** -- tests that would catch issues identified in the review
3. **Boundary tests** -- edge cases that are likely to break
4. **Completeness tests** -- filling out coverage for less critical paths

If the review identified specific bugs, those become the highest-priority test cases. A test plan that doesn't prioritize around known issues is wasting the developer's time.

## Output format

Write the document to `docs/test-plan.md` using this structure:

```markdown
# Test Plan: [Project Name]

## Overview
One paragraph: what this test plan covers, what test framework to use, and how many test cases are defined. Mention the current state of test coverage (what exists, what's missing).

## Test Environment
- **Framework:** [pytest / vitest / jest / etc.]
- **Run command:** [how to run the tests]
- **Existing tests:** [count and location of existing test files]
- **Coverage gaps:** [brief summary of what's not tested]

## Priority 1: Critical Path

Tests for the core workflow. These should be written first.

### `test_[module].py` (or `.test.ts`, etc.)

#### `test_[function_name]_[scenario]`
- **What:** [one sentence describing what this tests]
- **Input:** [specific input values or setup]
- **Expected:** [specific expected output or behavior]
- **Covers:** PRD #[N], Review finding [X]

#### `test_[function_name]_[scenario]`
...

## Priority 2: Bug-Driven Tests

Tests that validate fixes for issues found in the review.

### `test_[module].py`

#### `test_[function_name]_[scenario]`
...

## Priority 3: Edge Cases and Error Handling

Tests for boundary conditions and error paths.

### `test_[module].py`

#### `test_[function_name]_[scenario]`
...

## Priority 4: Completeness

Tests that fill remaining coverage gaps.

### `test_[module].py`

#### `test_[function_name]_[scenario]`
...

## Requirements Traceability

| PRD # | Requirement | Test Cases | Priority |
|-------|------------|------------|----------|
| 1 | [requirement text] | `test_x`, `test_y` | P1 |
| 2 | ... | ... | ... |

**Coverage:** [X] of [Y] requirements have at least one test case.

## Implementation Order

Numbered list of test files to create, in the order they should be written. Each entry should say what it tests and roughly how many test cases it contains.
```

## Test plan principles

- **Be specific.** Every test case should name a function, provide concrete inputs, and state the expected result. "Test that error handling works" is not a test case. "`test_parse_video_id_invalid_url` -- input: `'not-a-url'`, expected: raises `VideoNotFoundError` with message containing 'not a valid YouTube URL'" is a test case.
- **Test behavior, not implementation.** Tests should verify what the code does, not how it does it internally. If a function returns the right result, the test passes regardless of the algorithm used.
- **Prioritize around risk.** The review tells you where the bugs are. Tests for known-broken code are more valuable than tests for known-working code. Write the tests that would have caught real issues first.
- **Group by file.** Developers write and run tests one file at a time. Organize the plan so each section maps to a test file.
- **Include setup and teardown.** If tests need fixtures (temp directories, mock data, config files), describe what the fixtures contain. Don't leave the developer guessing what test data to create.
- **Count coverage honestly.** The traceability table at the end should show which requirements have test cases and which don't. If a requirement is untestable (non-functional requirement like "installable via pip"), say so.
- **Don't over-test the obvious.** A simple getter doesn't need five test cases. Focus testing effort where complexity and risk are highest.
- **Reference real code.** Every test case should reference the actual function or module in the codebase. If the function doesn't exist yet (noted as missing in the review), say so and describe what the test should verify once it's implemented.

## Important behaviors

- **Read existing tests first.** If tests already exist, understand what they cover before planning new ones. Don't duplicate existing test coverage.
- **Use the review as a guide.** The review's Critical and Important findings should map directly to Priority 1 and Priority 2 test cases. If the review found a specific bug at a specific line, there should be a test case targeting that exact behavior.
- **Match the project's test style.** If existing tests use a specific assertion library, fixture pattern, or naming convention, follow it. Consistency matters more than your preferred style.
- **Be practical about mocking.** If a function calls an external API, note that it needs to be mocked and describe what the mock should return. Don't leave mocking strategy as an exercise for the reader.
- **Scale to the project.** A 5-file project doesn't need 200 test cases. A 20-file project with complex logic needs thorough coverage. Match the plan's depth to the codebase's complexity.
- **Check for upstream context.** If `docs/test-plan.md` already exists, read it first and ask whether the user wants a fresh plan or an update.
