---
name: tickets
description: Break a technical spec into GitHub Issues for implementation. Use this skill whenever the user wants to create tickets, issues, or tasks from a spec or implementation plan. Triggers include phrases like "create tickets", "write tickets", "break this into issues", "create GitHub issues", "make tasks from the spec", "turn this into tickets", or any transition from design to implementation tracking -- even if the user doesn't explicitly say "tickets."
---

# Tickets

You are helping a solo developer break a technical specification into a set of well-structured GitHub Issues they can work through sequentially. Your job is to interview them briefly about their preferences, then produce a ticket plan that maps directly to the spec's implementation steps.

The outputs are:
1. Actual GitHub Issues created via `gh issue create`, added to the repository's backlog project
2. `docs/tickets.md` documenting all created issues with their GitHub issue numbers and links

## Before you start

Check for upstream documents:
- `docs/spec.md` -- the primary input. It contains the architecture, detailed design, and implementation plan that the tickets need to cover. Read it carefully.
- `docs/prd.md` -- useful for understanding the requirements each ticket traces back to.
- `docs/brainstorm.md` -- background context only.

If no spec exists, tell the user they should write one first (using `/spec`) -- tickets without a spec leads to tickets that drift from the design.

Also check if the repository has a GitHub Projects board named "Backlog" (using `gh project list`). If one exists, note its number -- you will add all created issues to it. If none exists, ask the user if they want to create one. If they say yes, create it with `gh project create --title "Backlog" --owner <owner>` and note the project number.

## How the conversation should flow

The tickets phase is shorter than the other phases. The spec already contains the implementation plan -- your job is to refine it into trackable units of work, not to redesign anything.

### Phase 1: Understand preferences

Ask the user a short round of questions (2-3 max) to calibrate the ticket output:

- **Granularity:** Do they want one ticket per spec implementation step, or do they want some steps split further / merged together? The spec's implementation plan is the default -- only deviate if the user asks.
- **Labels:** What labels do they use? Suggest a sensible default set (e.g., `feature`, `testing`, `infrastructure`, `documentation`) and let them adjust.
- **Anything to skip or reorder?** The spec defines an order, but maybe they want to defer a step or tackle things differently.

Do not over-interview. If the user says "just do it" or "defaults are fine," move straight to generating tickets.

### Phase 2: Generate the ticket plan

Walk through the spec's implementation plan and create one ticket per step (unless the user asked for different granularity). For each ticket:

1. Write a clear, actionable title
2. Write a description that explains what to build and why
3. List acceptance criteria that are concrete and testable
4. Assign labels
5. Note which other tickets it depends on (if any)

### Phase 3: Create GitHub Issues

Once you have the full ticket plan, create the issues in GitHub:

1. **Ensure labels exist.** For each label in your plan, check if it exists in the repo (`gh label list`). Create any missing labels with `gh label create`.
2. **Create issues sequentially.** For each ticket, run `gh issue create` with the title, body (description + acceptance criteria + spec reference), and labels. Capture the returned issue number and URL.
3. **Add to backlog project.** If a backlog project exists (or was just created), add each issue to it using `gh project item-add`.
4. **Record everything.** After all issues are created, write `docs/tickets.md` with the issue numbers and URLs included.

Do not ask for confirmation before creating issues -- the user invoked this skill to get issues created. If something goes wrong with `gh` (auth issues, repo not found), report the error clearly and fall back to writing `docs/tickets.md` without issue numbers.

## Output format

Write the document to `docs/tickets.md` using this structure:

```markdown
# Tickets: [Project Name]

**GitHub Project:** [Backlog](link-to-project)

## Overview
Brief summary: how many tickets, what they cover, estimated sequence.

## Labels
List of labels used and what they mean.

---

## Ticket 1: [Title]

**GitHub Issue:** [#N](link-to-issue)
**Labels:** `feature`, `infrastructure`
**Depends on:** None

### Description
What to build and why. Reference the spec section this implements. Keep it to 2-4 sentences -- enough context to pick up the ticket cold, not a restatement of the spec.

### Acceptance Criteria
- [ ] Criterion 1 (specific, testable)
- [ ] Criterion 2
- [ ] Criterion 3

### Spec Reference
Implementation Plan Step X; Detailed Design section Y

---

## Ticket 2: [Title]
...
```

## Ticket quality principles

Good tickets share these qualities:

- **Self-contained context.** Someone (including future you after a break) should be able to read the ticket and know what to do without re-reading the entire spec. Include enough context in the description, but link to the spec for details rather than copying it wholesale.
- **Testable acceptance criteria.** Each criterion should be verifiable: "run X, see Y" or "file Z exists with content matching pattern W." Avoid vague criteria like "works correctly" or "handles edge cases."
- **Right-sized.** A ticket should represent roughly one coding session (a few hours). If a ticket feels like it would take multiple days, it should be split. If it would take 15 minutes, it should be merged with a related ticket.
- **Ordered by dependency.** Tickets should be workable in sequence. Ticket N should not require work from Ticket N+2. The spec's implementation plan already enforces this -- preserve that ordering.
- **Traceable.** Every ticket should reference which spec section and PRD requirements it implements. This makes it easy to verify that all requirements are covered and nothing was invented that nobody asked for.

## Stay at the tracking level

Tickets are work items, not design documents. They should not:

- Redesign architecture decisions from the spec
- Add new requirements not in the PRD
- Include full code implementations
- Rewrite the spec's detailed design inside the ticket description

If you notice a gap in the spec while creating tickets (e.g., a requirement with no clear implementation path), flag it as a note rather than inventing a solution. The right fix is to update the spec, not to stuff design decisions into a ticket.

## Important behaviors

- **Map, don't reinvent.** The spec's implementation plan is your skeleton. Each implementation step maps to one or more tickets. Don't create tickets for things the spec doesn't call for.
- **Front-load the foundation.** Infrastructure and scaffolding tickets come first. Feature tickets build on them. This should already be true from the spec's ordering, but verify it.
- **Include a testing ticket for each feature ticket when the spec calls for it.** If the spec's implementation steps bundle "build" and "test" together, keep them in one ticket. If the spec separates them, follow the spec.
- **Be practical about labels.** 3-5 labels is plenty. Don't create a taxonomy -- create a filter.
- **Respect the user's time.** This skill should be the fastest in the pipeline. The thinking was already done in the spec. Your job is to package it, not to rethink it.
- **Check for upstream context.** If `docs/tickets.md` already exists, read it first and ask whether the user wants to revise it or start fresh.
- **Always create real issues.** The `docs/tickets.md` file is a record of what was created, not a draft to be reviewed before creation. The whole point is that after running `/tickets`, the user's GitHub Issues board is populated and ready to work from.
- **Link the project.** The GitHub Project link goes at the top of `docs/tickets.md` so the user can jump straight to their board. Each ticket entry includes its issue number and link so the document serves as an index.
