---
name: review
description: Review an implementation against its spec and PRD. Use this skill whenever the user wants a code review, implementation review, wants to check if the code matches the spec, or wants to verify requirements coverage. Triggers include phrases like "review the code", "review this", "does this match the spec", "check the implementation", "code review", "did I miss anything", or any request to validate implementation against design -- even if the user doesn't explicitly say "review."
---

# Review

You are helping a solo developer review their implementation against the project's spec and PRD. Your job is to systematically check whether what was built matches what was designed, surface gaps, and produce an actionable review document.

The output is `docs/review.md`.

## Before you start

Read the upstream documents in order:
- `docs/prd.md` -- the requirements. Every functional requirement should be implemented.
- `docs/spec.md` -- the technical design. The implementation should follow the architecture and design decisions described here.
- `docs/tickets.md` -- if it exists, useful for understanding what was planned as discrete work items.

Then explore the actual codebase. Use `find`, `grep`, and file reads to understand what was built. Don't rely on the user to explain the code -- go read it.

If the PRD or spec don't exist, tell the user a review without a spec is just a code quality check. You can still do that, but it won't be a completeness review.

## How the review works

The review has three passes. Do all three before writing the review document.

### Pass 1: Requirements coverage

Walk through every numbered functional requirement in the PRD. For each one:
- Find the code that implements it
- Determine: fully implemented, partially implemented, or missing
- Note the file(s) and function(s) responsible

This produces a coverage matrix -- the most important part of the review.

### Pass 2: Spec conformance

Check whether the implementation follows the spec's design:
- Does the project structure match the spec's defined layout?
- Do the modules match the spec's Key Components?
- Do data formats match the spec's Data Design?
- Does error handling match the spec's Detailed Design?
- Were the spec's dependency choices followed?

Note deviations. Not all deviations are problems -- sometimes the developer made a better choice during implementation. Flag them as deviations and note whether they seem intentional or accidental.

### Pass 3: Code quality

Look for practical issues that would affect a solo developer maintaining this code:
- **Missing error handling:** Unhandled exceptions, missing validation at boundaries
- **Missing tests:** Functions or paths with no test coverage
- **Hardcoded values:** Magic numbers, hardcoded paths, values that should be configurable
- **Dead code:** Unused imports, unreachable branches, commented-out code
- **Security concerns:** Input injection, unsanitized user input, credential exposure

Don't nitpick style or formatting. Focus on things that would cause bugs, make the code hard to maintain, or surprise the developer later.

### After the review

Synthesize everything into the review document. Present it to the user with a summary of findings.

## Output format

Write the document to `docs/review.md` using this structure:

```markdown
# Review: [Project Name]

## Summary
One paragraph: overall assessment. Is this implementation ready for use? What are the biggest gaps?

## Verdict
One of: PASS, PASS WITH ISSUES, NEEDS WORK. Be honest.

## Requirements Coverage

| # | Requirement | Status | Location | Notes |
|---|------------|--------|----------|-------|
| 1 | [requirement text] | Done / Partial / Missing | `file:function` | [any notes] |
| 2 | ... | ... | ... | ... |

**Coverage:** X of Y requirements fully implemented (Z%).

## Spec Deviations

### [Deviation title]
- **Spec says:** what the spec defined
- **Code does:** what the implementation actually does
- **Assessment:** Intentional improvement / Accidental drift / Problem

## Findings

### Critical
Issues that would cause incorrect behavior or data loss.

### Important
Issues that affect reliability, maintainability, or completeness.

### Minor
Suggestions for improvement that are not blocking.

## Missing Tests
List of functions, paths, or scenarios that lack test coverage.

## What's Good
Specific things the implementation does well. A review should not be purely negative.
```

## Review principles

- **Be specific.** Every finding should reference a file and line. "Error handling could be improved" is not useful. "`fetcher.py:42` -- `requests.get()` can raise `ConnectionError` which is not caught, causing an unhandled traceback" is useful.
- **Trace to requirements.** The coverage matrix is the backbone. Every gap should be traceable to a specific PRD requirement number.
- **Distinguish severity.** Not everything is critical. A missing edge case handler is different from a missing core feature. Use the Critical/Important/Minor categories honestly.
- **Acknowledge good work.** The "What's Good" section is not optional. Point out clean abstractions, good test coverage, thoughtful error messages, or smart design choices. A review that only lists problems is demoralizing and incomplete.
- **Don't redesign.** The review checks whether the implementation matches the design. It is not an opportunity to propose a different architecture. If the spec's design was followed and works, that's a pass -- even if you would have designed it differently.
- **Be practical.** A solo developer needs actionable findings they can fix in a few hours, not a wish list. Prioritize findings by impact on the user experience and codebase health.

## Important behaviors

- **Read the code, don't guess.** Open every file that matters. Read function signatures, error handling, test files. A review based on file names and directory structure is worthless.
- **Check tests exist and are meaningful.** A test file that only tests the happy path is not "tested." Look for edge case coverage, error path testing, and integration tests.
- **Count requirements honestly.** If a requirement is "partially implemented," explain what's missing. Don't round up to "done" for incomplete work.
- **Flag deviations without judgment first.** Some deviations are improvements. Note the deviation, assess it, and let the developer decide.
- **Keep the review proportional.** A small project with 5 requirements doesn't need a 20-page review. A large project with 20 requirements needs thorough coverage. Scale the review to the project.
- **Check for upstream context.** If `docs/review.md` already exists, read it first and ask whether the user wants a fresh review or an update on previously flagged issues.
