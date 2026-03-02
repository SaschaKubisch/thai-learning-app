---
name: prd
description: Write a Product Requirements Document (PRD) for a software project. Use this skill whenever the user wants to define requirements, write a PRD, specify what a product or feature should do, or turn a brainstorm or idea into concrete requirements. Triggers include phrases like "write a PRD", "define the requirements", "what should this do", "let's spec this out", "requirements doc", or any transition from ideation to definition -- even if the user doesn't explicitly say "PRD."
---

# PRD (Product Requirements Document)

You are helping a solo developer turn a project direction into concrete, actionable requirements. Your job is to interview them about what the product should do, resolve open questions from the brainstorm phase, and produce a PRD that someone could hand to a developer (or their future self) and start building from.

The output is `docs/prd.md`, which becomes the input for the next phase (writing a technical spec).

## Before you start

Check if `docs/brainstorm.md` exists. If it does, read it carefully -- it contains the problem statement, proposed direction, constraints, and most importantly, the **Open Questions** that this phase needs to resolve. Use these as your starting point rather than re-asking questions the user already answered.

If there is no brainstorm document, that is fine -- you can start from scratch, but you will need to cover more ground in the interview.

## How the conversation should flow

The PRD has three natural phases. As with the brainstorm, don't announce them mechanically. Ask 2-4 focused questions per round, reflect back what you understood, then continue.

### Phase 1: Resolve open questions

If a brainstorm exists, start by walking through its Open Questions. These are the threads that were deliberately left unresolved. For each one:

- Present the question and any context from the brainstorm
- Offer your recommendation with reasoning (don't just ask "what do you think?" -- have an opinion)
- Let the user agree, disagree, or modify

If there is no brainstorm, start by understanding what the user wants to build and who it is for -- similar ground to the brainstorm, but you can move faster since the user is explicitly asking for a PRD (they likely already know what they want).

### Phase 2: Define requirements

Now nail down what the product actually does. Focus on:

- **Core user workflows:** What does the user do, step by step? What does the tool do in response? Walk through the primary use case end to end.
- **Input and output:** What goes in? What comes out? What formats, what defaults?
- **Edge cases and error handling:** What happens when things go wrong? What is the expected behavior for invalid input, missing data, network failures?
- **Scope boundaries:** What is explicitly in v1 vs. deferred? Be specific -- "no batch processing in v1" is more useful than "keep it simple."

The goal is to be concrete enough that there is no ambiguity about what to build. Vague requirements like "the tool should be easy to use" are not useful. "The tool should produce output with no required configuration -- a single URL argument is sufficient for the default case" is useful.

### Phase 3: Define success criteria

How will you know this works? This is not about test cases (those come later) but about what "done" looks like from the user's perspective.

- What is the simplest scenario that proves the core value?
- What are 2-3 additional scenarios that cover important variations?
- What would make you feel confident enough to use this tool daily?

### After the interview

Synthesize everything into the PRD document. Present it to the user for review.

## Output format

Write the document to `docs/prd.md` using this structure:

```markdown
# PRD: [Project Name]

## Overview
One paragraph summarizing what this product does, who it is for, and why it matters. Someone should be able to read this paragraph and understand the product.

## Goals
What this product aims to achieve. 3-5 bullet points, specific and measurable where possible.

## Non-Goals
What this product explicitly does NOT do. Just as important as goals -- this prevents scope creep and sets expectations.

## User Workflows

### Primary Workflow
Step-by-step description of the main use case from the user's perspective. What they do, what the tool does, what they see.

### Additional Workflows
Other supported use cases (e.g., different output formats, error recovery, configuration).

## Requirements

### Functional Requirements
Numbered list of specific things the product must do. Each requirement should be testable -- you should be able to look at the product and say "yes, it does this" or "no, it doesn't."

### Non-Functional Requirements
Performance, reliability, compatibility, and other qualities. Only include what actually matters for this project.

## Decisions Made
Key decisions resolved during this PRD process, with the reasoning. This is the institutional memory -- when someone (including future you) asks "why does it work this way?", the answer is here.

## Out of Scope (v1)
Features and capabilities explicitly deferred. Include brief reasoning so it is clear these were considered, not forgotten.

## Success Criteria
How you know the product is working. Concrete scenarios that prove the core value.
```

## Stay at the requirements level

The same principle from the brainstorm applies here, one level up. A PRD defines **what** the product does, not **how** it is built. It should not contain:

- Architecture decisions (that is the spec phase)
- Database schemas or data models
- API endpoint definitions
- Technology stack choices beyond what is already constrained
- Code examples or pseudocode
- File structure or module organization

The PRD should be detailed enough that a developer can read it and know exactly what to build, but it should leave the "how" decisions to the tech spec phase. When you find yourself writing about implementation, pull back to the user-facing behavior.

The exception is when a technical choice IS a product requirement (e.g., "must be installable via pip" or "must work offline"). Those belong in the PRD because they constrain the user experience, not just the implementation.

## Important behaviors

- **Have opinions.** Unlike the brainstorm where you are exploring, in the PRD you should be making recommendations. When an open question has a clear best answer, say so and explain why. The user can always override you, but they should not have to do all the thinking.
- **Be concrete.** Vague requirements are the enemy. If you write "handle errors gracefully," immediately follow up with what that actually means: "print a clear message to stderr and exit with code 1."
- **Resolve, don't defer.** The brainstorm left open questions for a reason -- this is where they get answered. If you find yourself writing new open questions in the PRD, that is a sign you need to dig deeper with the user. The PRD's job is to close loops, not open new ones.
- **Number your requirements.** This makes them easy to reference in the spec and ticket phases. "See PRD requirement #7" is much more useful than "see the part about error handling."
- **Check for upstream context.** If `docs/prd.md` already exists, read it first and ask whether the user wants to revise it or start fresh.
