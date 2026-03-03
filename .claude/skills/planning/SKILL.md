---
name: planning
description: Create a comprehensive planning document for a feature or project. Use this skill whenever the user wants to plan a feature, create a planning doc, or needs a combined brainstorm + PRD + spec in a single document. Triggers include phrases like "plan this", "create a plan", "planning document", "plan the feature", "write a plan for", or any request for a comprehensive planning document that combines ideation, requirements, and technical design -- even if the user doesn't explicitly say "planning."
---

# Planning Document

You are helping a developer create a comprehensive planning document that combines brainstorming, product requirements, and technical specification into a single, cohesive document. This skill orchestrates the thinking from the brainstorm, PRD, and spec phases, but assembles the output into one planning document rather than three separate files.

The output is a single file at `docs/YYMMDD-<topic>.md` where YYMMDD is today's date and `<topic>` is a kebab-case slug describing the subject (e.g., `docs/260303-content-improvement-plan.md`).

## Before you start

1. **Determine today's date.** Use it for the filename prefix in YYMMDD format.
2. **Check for existing planning documents.** Look in `docs/` for any files matching the `YYMMDD-*.md` pattern. If one exists for today's topic, ask the user if they want to revise it or start fresh.
3. **Check for upstream context.** Look for `docs/brainstorm.md`, `docs/prd.md`, or `docs/spec.md`. If any exist, read them -- they contain prior thinking that should inform the planning document. Also check the project's README and CLAUDE.md for project context.

## How the conversation should flow

The planning document covers three phases in sequence. For each phase, use the techniques and interview approach from the corresponding standalone skill -- but keep the conversation moving. The goal is a single cohesive document, not three separate interviews.

### Phase 1: Brainstorm (problem and direction)

Follow the brainstorm skill's approach:

- Understand the problem. What is broken, missing, or painful? Why now?
- Explore 2-3 possible approaches. Push for alternatives if the user jumps straight to one solution.
- Settle on a direction with clear reasoning.

Ask 2-4 focused questions per round. Reflect back what you understood before moving on. If the user already has a clear direction, acknowledge it and move quickly to Phase 2.

### Phase 2: Requirements (what to build)

Follow the PRD skill's approach:

- Define the core user workflows step by step.
- Nail down functional requirements -- each one specific and testable.
- Set explicit scope boundaries: what is in v1, what is deferred.
- Define success criteria: how do you know it works?

Have opinions. Recommend approaches for open questions rather than just asking "what do you think?" Be concrete -- vague requirements are the enemy.

### Phase 3: Technical design (how to build it)

Follow the spec skill's approach:

- Make architecture decisions: project structure, key components, data flow.
- Map each requirement to the components that handle it.
- Define an ordered implementation plan where each step is independently testable.

Be opinionated about technology choices. Show concrete examples of data formats and structures. Keep the design buildable within the project's constraints.

### After the interview

Synthesize everything into the planning document. Present it to the user for review. Iterate if they want changes.

## Mermaid diagrams

Include Mermaid diagrams wherever they clarify the document. Diagrams are not decoration -- each one should communicate something that would be harder to understand as text alone. Use them for:

- **Architecture overviews:** Show how components relate to each other.
  ```mermaid
  graph TD
      A[Component A] --> B[Component B]
      A --> C[Component C]
      B --> D[Shared Service]
      C --> D
  ```

- **User workflows:** Show the steps a user goes through.
  ```mermaid
  flowchart LR
      Start --> Step1 --> Decision{Choice?}
      Decision -->|Yes| PathA --> End
      Decision -->|No| PathB --> End
  ```

- **Data flow:** Show how data moves through the system.
  ```mermaid
  sequenceDiagram
      User->>App: Action
      App->>Service: Process
      Service-->>App: Result
      App-->>User: Display
  ```

- **State diagrams:** Show lifecycle states of key entities.
- **Implementation timelines:** Show phase dependencies using Gantt charts.
  ```mermaid
  gantt
      title Implementation Phases
      section Phase 1
      Task A :a1, 2024-01-01, 3d
      Task B :after a1, 2d
      section Phase 2
      Task C :after a1, 4d
  ```

Rules for diagrams:
- Every diagram must have a brief text description above or below it explaining what it shows and why it matters.
- Do not add diagrams just to fill space. If a section is clear without a diagram, leave it as text.
- Prefer simple diagrams. If a diagram needs more than 15-20 nodes, split it into multiple diagrams or simplify.
- Use consistent naming: node labels should match the terms used in the text.

## Output format

Write the document to `docs/YYMMDD-<topic>.md` using this structure:

```markdown
# [Planning Document Title]

> **Date:** YYYY-MM-DD
> **Status:** Draft | In Progress | Approved
> **Author:** [name or "AI-assisted"]

## Overview

One paragraph summarizing what this planning document covers: the problem, the proposed solution, and the scope. Someone should be able to read this paragraph and understand what is being planned.

---

## Problem & Context

### Problem Statement
What problem are we solving and why it matters. Written as a clear narrative.

### Current Situation
How things work today. What is painful, slow, or missing.

### Goals
- Goal 1 (specific and measurable where possible)
- Goal 2
- Goal 3

### Non-Goals
What this plan explicitly does NOT address. Prevents scope creep.

---

## Proposed Solution

### Direction
The chosen approach, described concretely. Include a Mermaid diagram showing the high-level architecture or workflow if it helps.

### Alternatives Considered
Other approaches that were evaluated, with brief reasoning for why they were not chosen.

---

## Requirements

### User Workflows

#### Primary Workflow
Step-by-step description of the main use case. Include a Mermaid flowchart if the workflow has branching or multiple paths.

#### Additional Workflows
Other supported use cases.

### Functional Requirements
Numbered list of specific things the product must do. Each requirement should be testable.

1. Requirement one
2. Requirement two
3. ...

### Non-Functional Requirements
Performance, reliability, compatibility -- only what actually matters.

---

## Technical Design

### Architecture
How the system is organized. Include a Mermaid diagram showing component relationships.

### Key Components
For each major module/component:
- What it does
- Inputs and outputs
- Dependencies

### Data Design
Data structures, formats, storage. Show concrete examples.

### Implementation Plan
Ordered list of implementation steps. Each step should be independently testable and build on previous steps.

| Step | Description | Validates |
|------|-------------|-----------|
| 1    | ...         | ...       |
| 2    | ...         | ...       |

---

## Success Criteria

How you know this is working. Concrete scenarios that prove the core value.

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

---

## Open Questions

Things that still need answers or decisions. Each question should note who can answer it and what the impact of the decision is.

---

## Appendix

Any supporting material: reference links, data tables, extended examples. Keep the main document focused and put supplementary detail here.
```

## Important behaviors

- **One document, three levels of thinking.** The planning document is not three documents stapled together. Each section should flow into the next. The brainstorm thinking informs the requirements, and the requirements drive the technical design. Cross-reference between sections rather than repeating information.
- **Mermaid diagrams are required where they add clarity.** At minimum, include a diagram for the architecture overview and at least one user workflow. Add more where they help -- but never where they don't.
- **Use the YYMMDD prefix.** The filename must start with today's date in YYMMDD format. This is the project's standard for planning documents.
- **Have opinions throughout.** This is a single conversation, not three separate phases. Carry context forward -- decisions made in the brainstorm section should be reflected in the requirements, and requirements should directly inform the technical design.
- **Keep it buildable.** The planning document should be concrete enough that someone could create implementation tickets directly from the Technical Design section's implementation plan.
- **Stay proportional.** Not every project needs a 20-page plan. A small feature might need a 2-page planning document. Scale the depth to the complexity of what is being planned.
- **Date the document.** Include the full date (YYYY-MM-DD) in the metadata header, and the YYMMDD prefix in the filename.
