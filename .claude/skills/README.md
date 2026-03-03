# Skills

Personal Claude Code skills for software development workflows.

## Skills included

- **brainstorm** -- structured ideation from idea to direction
- **planning** -- comprehensive planning document combining brainstorm + PRD + spec with Mermaid diagrams
- **prd** -- write a Product Requirements Document
- **spec** -- write a technical specification
- **review** -- review implementation against spec/PRD
- **test-plan** -- create a testing strategy
- **tickets** -- break a spec into GitHub Issues
- **new-project** -- scaffold a new project repo with skills
- **video-editing** -- video editing workflows

## Usage

Add to any project as a git subtree:

```bash
git subtree add --prefix .claude/skills git@github.com:SaschaKubisch/skills.git main --squash
```

Pull updates:

```bash
git subtree pull --prefix .claude/skills git@github.com:SaschaKubisch/skills.git main --squash
```

Push skill improvements back:

```bash
git subtree push --prefix .claude/skills git@github.com:SaschaKubisch/skills.git main
```
