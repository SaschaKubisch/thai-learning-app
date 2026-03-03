---
name: release
description: Create a versioned release with notes, tagging, and GitHub release. Use this skill whenever the user wants to release, deploy, cut a release, merge and release, ship it, create a release, tag a new version, or any request to publish a new version of the app. Also use when the user says "release dev to main", "push to production", or asks to merge a development branch for release. Triggers include phrases like "release", "deploy", "ship it", "new version", "cut a release", "merge and release", "release to main", "push to production", or any transition from development to a tagged production release.
---

# Release Skill

Create a versioned release: merge to main, write release notes, tag, push, and create a GitHub release.

## Workflow

### 1. Determine the previous version

```bash
git tag --sort=-version:refname | head -5
```

If no tags exist, treat the starting version as `v0.0.0`.

### 2. Gather changes since last release

```bash
# Get the latest tag
PREV_TAG=$(git tag --sort=-version:refname | head -1)

# Show commits since last tag (or all commits if no tag)
if [ -z "$PREV_TAG" ]; then
  git log --oneline
else
  git log ${PREV_TAG}..HEAD --oneline
fi
```

Also run `git diff --stat ${PREV_TAG}..HEAD` to understand the scope of changes.

### 3. Suggest the next version

Follow semantic versioning (semver):
- **Patch** (0.0.x): Bug fixes, test fixes, minor tweaks
- **Minor** (0.x.0): New features, content additions, non-breaking enhancements
- **Major** (x.0.0): Breaking changes, major rewrites, API changes

Present the suggested version to the user and get confirmation before proceeding.

### 4. Ensure working tree is clean

Commit or stash any uncommitted changes on the current branch before merging. Only commit files relevant to the release -- do not commit unrelated untracked files.

### 5. Merge to main

```bash
git checkout main
git pull origin main
git merge <source-branch> -m "Merge <source-branch>: <summary> (v<VERSION>)"
```

If merge conflicts occur, resolve them and ask the user to confirm before continuing.

### 6. Write release notes

Create `docs/releases/v<VERSION>.md` with this structure:

```markdown
# v<VERSION> -- <Short Title>

**Release date:** YYYY-MM-DD
**Tag:** v<VERSION>

## Summary

<1-3 sentence overview of what this release does and why it matters.>

## Changes

### <Category 1>

- <Change description>
- <Change description>

### <Category 2>

- <Change description>

## Bug fixes

- <Fix description> (if any)

## Files modified

- <List of key files changed, not exhaustive -- focus on source files, not screenshots or generated files>

## Verification

- TypeScript: `npx tsc --noEmit` passes
- Build: `npm run build` succeeds
- Tests: all E2E tests pass
```

Categories should reflect the actual changes (e.g., "Content", "UI", "Infrastructure", "Tests"). Only include sections that have content.

### 7. Commit release notes

```bash
git add docs/releases/v<VERSION>.md
git commit -m "Add v<VERSION> release notes

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

### 8. Tag the release

```bash
git tag -a v<VERSION> -m "v<VERSION>: <Short Title>

<1-2 sentence summary>"
```

### 9. Push

```bash
git push origin main --tags
```

### 10. Create GitHub release

```bash
unset GITHUB_TOKEN && gh release create v<VERSION> \
  --title "v<VERSION>: <Short Title>" \
  --notes-file docs/releases/v<VERSION>.md
```

If `gh` auth fails, use the `gh-auth` skill to re-authenticate first.

### 11. Return to dev branch

```bash
git checkout dev
git merge main
git push origin dev
```

### 12. Report

Print a summary:
- Version released
- GitHub release URL
- Number of commits included
- Key changes

## Important notes

- Always get user confirmation on the version number before tagging.
- Never force-push to main.
- If tests are failing, do NOT release. Fix them first.
- The release notes in `docs/releases/` are the canonical record. The GitHub release body should match.
- Prepend `unset GITHUB_TOKEN &&` to all `gh` commands as a defensive measure against stale tokens.
