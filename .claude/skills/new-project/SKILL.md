---
name: new-project
description: Set up a new project repo with skills included via git subtree. Use this skill when the user wants to create a new repo for a project, side project, or tool. Triggers include "new project", "set up a new repo", "create a project for", "start a new project", or any request to scaffold a fresh repo with Claude Code skills.
---

# New Project

You are setting up a new project repository. Projects are standalone repos that include skills from the `skills` repo via git subtree in `.claude/skills/`.

## What you need from the user

Ask for the following (skip any the user has already provided):

1. **Project name** -- used as the repo directory name and GitHub repo name (e.g. `youtube-transcription`, `deploy-dashboard`). Should be lowercase-kebab-case.
2. **One-line description** -- what this project does, for the README and GitHub repo description.
3. **Language/stack** -- e.g. Python, TypeScript/Node, Go. Determines the .gitignore template and CLAUDE.md commands.
4. **Visibility** -- public or private GitHub repo. Default: private.

## Steps

Once you have the inputs, execute these steps in order:

### 1. Create the repo directory

Create the directory at `~/Documents/GitHub/<project-name>/`.

### 2. Initialize git

Run `git init` in the new directory.

### 3. Create .gitignore

Generate a .gitignore appropriate for the chosen language/stack. Always include:

```
# Claude Code
.claude/memory/
.claude/worktrees/

# OS
.DS_Store
Thumbs.db
```

Plus language-specific entries (node_modules/, __pycache__/, .venv/, dist/, build/, etc.).

### 4. Create README.md

```markdown
# <Project Name>

<one-line description>

## Development

This project uses [Claude Code](https://claude.ai/claude-code) with shared skills via git subtree.

### Update skills

```bash
git subtree pull --prefix .claude/skills https://github.com/SaschaKubisch/skills.git main --squash
```

### Push skill improvements back

```bash
git subtree push --prefix .claude/skills https://github.com/SaschaKubisch/skills.git main
```
```

### 5. Create CLAUDE.md

Generate a minimal CLAUDE.md with:

- **Project overview**: one line linking to the README
- **Commands**: placeholder section with build/test/lint commands for the chosen stack (to be filled in as the project develops)
- **Conventions**: basic conventions for the chosen language (e.g. "Use TypeScript strict mode" or "Use type hints in Python")

Keep it short -- it will grow as the project develops.

### 6. Initial commit

Stage .gitignore, README.md, and CLAUDE.md. Commit with message "Initial project setup".

This must happen before the subtree add (git subtree requires an existing commit history).

### 7. Add skills via git subtree

Run:

```bash
git subtree add --prefix .claude/skills https://github.com/SaschaKubisch/skills.git main --squash
```

This pulls all skills into `.claude/skills/` as part of the repo. Claude Code picks them up automatically -- no flags needed.

### 8. Create on GitHub and push

Run: `gh repo create <project-name> --<visibility> --source=. --description "<one-line description>" --push`

This creates the GitHub repo, sets the remote, and pushes everything (including the subtree).

### 9. Confirm

Tell the user:
- The repo is ready at `~/Documents/GitHub/<project-name>/`
- GitHub repo is at `https://github.com/SaschaKubisch/<project-name>`
- To start working: `cd ~/Documents/GitHub/<project-name> && claude`
- Skills are already in `.claude/skills/` -- no flags needed
- Available skills: /brainstorm, /prd, /spec, /review, /test-plan, /tickets
- To update skills later: `git subtree pull --prefix .claude/skills https://github.com/SaschaKubisch/skills.git main --squash`

## Rules

- Always create the repo in `~/Documents/GitHub/`. Do not create repos elsewhere.
- Always use git subtree to include skills. Never copy files manually.
- The initial commit (step 6) must happen before the subtree add (step 7).
- Keep the initial CLAUDE.md minimal. Do not over-engineer the setup.
- Do not install dependencies or create source files -- that comes later via the brainstorm/prd/spec pipeline.
- If `gh` is not authenticated or not installed, warn the user and skip the GitHub creation step. The local repo is still usable.
