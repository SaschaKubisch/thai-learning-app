# Thai Learning App

An interactive app for learning the Thai language.

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
