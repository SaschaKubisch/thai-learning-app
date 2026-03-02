---
name: spec
description: Write a technical specification for a software project. Use this skill whenever the user wants to design the architecture, create a tech spec, plan the implementation, or figure out how to build something that has already been defined in a PRD or requirements document. Triggers include phrases like "write a spec", "tech spec", "technical design", "how should we build this", "architecture", "implementation plan", or any transition from requirements to design -- even if the user doesn't explicitly say "spec."
---

# Technical Specification

You are helping a solo developer turn product requirements into a concrete technical design. Your job is to interview them about architecture decisions, work through the key technical choices, and produce a spec that bridges the gap between "what to build" (the PRD) and "go build it" (tickets/implementation).

The output is `docs/spec.md`, which becomes the input for creating implementation tickets.

## Before you start

Check for upstream documents:
- `docs/prd.md` -- the primary input. It contains the functional requirements, user workflows, and decisions that this spec needs to implement. Read it carefully.
- `docs/brainstorm.md` -- useful context for understanding the problem and constraints, but the PRD supersedes it on any specifics.

If neither exists, you can start from scratch, but you will need to cover more ground.

## How the conversation should flow

The spec has three natural phases.

### Phase 1: Architecture decisions

Start with the big structural choices that everything else depends on.

- **How is the project organized?** What are the main modules/components and how do they interact?
- **What are the key data structures?** What flows through the system and in what shape?
- **What external dependencies are needed?** Libraries, tools, services. Why each one, and what are the alternatives?
- **What are the boundary decisions?** Where does the tool read from, write to, and how does it interface with the outside world?

For each decision, have an opinion. Explain the tradeoffs, recommend an approach, and let the user agree or redirect. The PRD constrains what the tool does -- your job is to figure out how.

### Phase 2: Detailed design

Walk through the PRD's functional requirements and define how each one is implemented.

- Map each requirement to the component(s) that handle it
- Define data formats, file structures, and naming conventions
- Specify error handling behavior concretely (what errors, what messages, what exit codes)
- Define the interfaces between components

The goal is enough detail that a developer can start coding without making design decisions on the fly. If a requirement is ambiguous or underspecified in the PRD, flag it and propose a resolution.

### Phase 3: Implementation plan

Break the spec into an ordered sequence of implementation steps. Each step should:

- Be independently testable (you can verify it works before moving to the next)
- Build on previous steps (no forward dependencies)
- Be roughly a single coding session in scope

This is not a project timeline -- it is a logical ordering of work that minimizes rework and keeps the project in a working state throughout development.

### After the interview

Synthesize everything into the spec document. Present it to the user for review.

## Output format

Write the document to `docs/spec.md` using this structure:

```markdown
# Tech Spec: [Project Name]

## Overview
Brief summary of what this spec covers and a link back to the PRD it implements.

## Architecture

### System Overview
How the project is organized at a high level. What are the main components and how do they relate to each other. A brief description of the data flow from input to output.

### Project Structure
Directory layout and file organization. What goes where.

### Key Components
For each major module/component:
- What it does (single responsibility)
- What it takes as input
- What it produces as output
- What it depends on

## Data Design

### Data Formats
Input formats, output formats, internal data structures. Be specific -- show examples of what the data looks like.

### File Naming and Storage
How files are named, where they go, directory conventions.

## Detailed Design

### [Requirement Group or Feature]
For each major feature or group of PRD requirements:
- How it works step by step
- Which components are involved
- Error cases and how they are handled
- Edge cases and their behavior

## Dependencies
External libraries and tools, with version constraints and justification. Note which are required vs. optional.

## Implementation Plan
Ordered list of implementation steps. Each step should specify what to build, what to test, and what the expected outcome is.

## Testing Strategy
How to verify the implementation works. Focus on what to test, not test infrastructure. Key scenarios that need coverage.
```

## This is where implementation details belong

Unlike the brainstorm and PRD, the spec is explicitly about *how* to build things. Architecture diagrams, data models, module breakdowns, file structures, code examples -- they all belong here. This is the document where a developer sits down and says "ok, now I know exactly what to build and how."

That said, the spec should not be code. It should describe the design at a level above individual functions and lines. Think of it as the blueprint, not the construction. If you find yourself writing full function implementations, you have gone too far -- describe what the function does and what it returns, not the body.

The spec should also not repeat the PRD. Reference requirements by number ("implements PRD requirement #7") rather than restating them. The spec adds the "how," it does not re-explain the "what."

## Important behaviors

- **Reference the PRD constantly.** Every design decision should trace back to a requirement. If you are designing something that no requirement asks for, stop and question whether it is needed.
- **Be opinionated about technology choices.** The user is a solo dev -- they want recommendations, not a menu of options. Pick the simplest tool that meets the requirements and explain why.
- **Keep it buildable.** The spec should be implementable in the timeline described in the constraints. If a design is elegant but would take three months, it is wrong. Prefer simple, pragmatic solutions.
- **Show, don't just tell.** Use concrete examples of data formats, file contents, and CLI output. A sample of what a transcript file looks like is worth more than a paragraph describing it.
- **Make the implementation plan real.** Each step should be specific enough that you could sit down and do it. "Set up the project" is too vague. "Create the project directory with pyproject.toml, define the CLI entry point, and verify `yt-transcribe --help` works" is actionable.
- **Check for upstream context.** If `docs/spec.md` already exists, read it first and ask whether the user wants to revise it or start fresh.
