---
title: "Git and GitHub Tutorial "
description: "Learn Git and GitHub from beginner to advanced, including repositories, commits, branches, merges, conflict resolution, pull requests, collaboration, GitHub Actions, and interview questions."
slug: "git-github-tutorial"
date: "2026-10-23"
author: "Yogesh"
image: "/images/git-github.png"
category: "Developer Tools"
---

# Git and GitHub Tutorial

Git and GitHub are essential tools for modern software development. Git tracks changes in your code, while GitHub hosts Git repositories online and provides collaboration features such as pull requests, issues, code review, and automation.

This guide explains the core concepts, practical commands, team workflows, common mistakes, and interview questions.

## Table of Contents

1. [What Is Git?](#what-is-git)
2. [What Is GitHub?](#what-is-github)
3. [Install and Configure Git](#install-and-configure-git)
4. [Create a Repository](#create-a-repository)
5. [Git's Three Main Areas](#gits-three-main-areas)
6. [Essential Git Commands](#essential-git-commands)
7. [Branches](#branches)
8. [Merge and Rebase](#merge-and-rebase)
9. [Resolve Merge Conflicts](#resolve-merge-conflicts)
10. [Connect a Local Project to GitHub](#connect-a-local-project-to-github)
11. [Push and Pull Changes](#push-and-pull-changes)
12. [Pull Requests and Code Review](#pull-requests-and-code-review)
13. [Undo Changes Safely](#undo-changes-safely)
14. [Git Ignore and Secrets](#git-ignore-and-secrets)
15. [Forks, Issues, and Collaboration](#forks-issues-and-collaboration)
16. [Tags and Releases](#tags-and-releases)
17. [GitHub Actions Basics](#github-actions-basics)
18. [Useful Workflows](#useful-workflows)
19. [Common Problems and Fixes](#common-problems-and-fixes)
20. [Practice Projects](#practice-projects)
21. [Interview Questions and Answers](#interview-questions-and-answers)

## 1. What Is Git?

Git is a distributed version control system. It records project history so developers can review changes, work on separate branches, and collaborate without relying on one central copy of the repository.

### Why use Git?

- Track code changes over time.
- Review and compare versions.
- Restore earlier committed states.
- Work on features independently using branches.
- Collaborate with other developers.
- Maintain a history of project decisions.

A Git repository stores history and metadata in a hidden `.git` directory.

## 2. What Is GitHub?

GitHub is an online platform for hosting Git repositories. It adds collaboration and project-management features, including remote repository hosting, pull requests, code review, issues, releases, and GitHub Actions.

Git and GitHub are not the same thing. You can use Git without GitHub, and Git repositories can be hosted on other platforms.

## 3. Install and Configure Git

Install Git from the official Git website, then verify:

```bash
git --version
```

Set the author information used for new commits:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use an email address you intend to associate with your commits. Git configuration identity is commit metadata; it is not the same as authentication to GitHub.

Check settings:

```bash
git config --global --list
```

## 4. Create a Repository

Create a folder and initialize Git:

```bash
mkdir my-project
cd my-project
git init
```

Create a file, such as `README.md`, and inspect the repository:

```bash
git status
```

To clone an existing remote repository instead:

```bash
git clone https://github.com/OWNER/REPOSITORY.git
cd REPOSITORY
```

Replace `OWNER` and `REPOSITORY` with the actual repository path.

## 5. Git's Three Main Areas

Git workflows are often explained using three areas:

1. **Working directory:** the files you are editing.
2. **Staging area (index):** changes selected for the next commit.
3. **Repository history:** committed snapshots stored by Git.

A typical workflow:

```bash
git status
git add README.md
git diff --staged
git commit -m "Add project README"
```

- `git add` stages selected changes.
- `git diff --staged` reviews staged changes.
- `git commit` records the staged snapshot in local history.

A commit is local until you push it to a remote repository.

## 6. Essential Git Commands

| Command | Purpose |
|---|---|
| `git status` | Show current changes and branch state |
| `git add FILE` | Stage a file |
| `git add .` | Stage changes under the current directory |
| `git diff` | Review unstaged changes |
| `git diff --staged` | Review staged changes |
| `git commit -m "message"` | Create a commit |
| `git log --oneline` | View compact commit history |
| `git show` | Inspect a commit |
| `git branch` | List branches |
| `git switch BRANCH` | Switch branches |
| `git fetch` | Download remote updates without integrating them |
| `git pull` | Fetch and integrate remote changes |
| `git push` | Send local commits to a remote |
| `git remote -v` | List remote URLs |

Review `git status` before staging or committing. Avoid blindly staging everything if the project may contain secrets, generated files, or unrelated changes.

## 7. Branches

A branch lets you work on a line of development separately from other work.

Create and switch to a branch:

```bash
git switch -c feature/profile-page
```

List branches:

```bash
git branch
```

Switch back:

```bash
git switch main
```

The default branch may be named `main` or another name depending on repository configuration.

### A typical feature workflow

```bash
git switch main
git pull
git switch -c feature/task-filter
# Edit and test files
git add .
git commit -m "Add task filtering"
git push -u origin feature/task-filter
```

The final command assumes a remote named `origin` already exists. After pushing, open a pull request if that is your team's workflow.

## 8. Merge and Rebase

### Merge

Merge integrates changes from one branch into the currently checked-out branch:

```bash
git switch main
git merge feature/task-filter
```

A merge may create a merge commit or fast-forward, depending on history and configuration.

### Rebase

Rebase replays commits onto a new base:

```bash
git switch feature/task-filter
git rebase main
```

Rebasing can create a more linear history, but it rewrites commit IDs for the commits being replayed. Avoid rebasing shared commits unless the team has agreed on that workflow.

If conflicts occur during a rebase, resolve them and then run:

```bash
git add FILE
git rebase --continue
```

To stop the rebase and return to its original state:

```bash
git rebase --abort
```

## 9. Resolve Merge Conflicts

A conflict occurs when Git cannot automatically combine changes, often because two branches changed overlapping parts of a file.

Git may mark the file like this:

```text
<<<<<<< HEAD
Current branch version
=======
Incoming branch version
>>>>>>> feature-branch
```

To resolve it:

1. Open the conflicted file.
2. Decide which changes to keep and combine them if necessary.
3. Remove all conflict markers.
4. Run the relevant tests.
5. Stage the resolved file.
6. Complete the merge or rebase.

For a merge:

```bash
git add path/to/file
git commit
```

For a rebase, use `git rebase --continue` after staging the resolution. Do not resolve a conflict by automatically choosing one side unless you understand the impact.

## 10. Connect a Local Project to GitHub

Create an empty repository on GitHub. If you already have a local project, add the remote URL:

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git branch -M main
git add .
git commit -m "Initial commit"
git push -u origin main
```

Replace the placeholders with your actual repository details. If the project already has commits, do not repeat the initial commit unnecessarily.

If the remote repository already contains a README or commits, its history may differ from the local history. Inspect both histories before deciding how to integrate them.

## 11. Push and Pull Changes

### Push

After committing:

```bash
git push
```

The first push for a new branch often uses:

```bash
git push -u origin feature/task-filter
```

The `-u` option sets the upstream branch for future push and pull commands.

### Fetch versus pull

```bash
git fetch
```

Downloads remote references and objects without automatically integrating them into the current branch.

```bash
git pull
```

Fetches and then integrates the upstream changes, usually by merge or rebase depending on configuration.

Before pulling, commit or otherwise safely preserve your local work. Review the repository status and team workflow.

### Authentication

GitHub supports HTTPS authentication with supported credential methods and SSH keys. Do not put passwords, personal access tokens, or private SSH keys directly in source code or repository URLs. Use a credential manager or SSH configuration and follow GitHub's current authentication guidance.

## 12. Pull Requests and Code Review

A pull request (PR) proposes changes from one branch into another so teammates can review them before integration.

Typical process:

1. Create a feature branch.
2. Make focused changes.
3. Commit and push the branch.
4. Open a pull request on GitHub.
5. Explain the problem and solution.
6. Link related issues and add screenshots where useful.
7. Run tests and respond to review comments.
8. Merge when checks and required approvals are complete.

Good pull requests are focused, easy to review, and include testing information. Do not include unrelated formatting changes unless they are necessary.

## 13. Undo Changes Safely

Different commands undo different kinds of changes. Check `git status` first and understand whether the work is committed.

### Discard unstaged changes in a file

```bash
git restore path/to/file
```

This discards local unstaged edits to that file. Those edits may be difficult or impossible to recover.

### Unstage a file

```bash
git restore --staged path/to/file
```

This removes the file from the staging area but keeps its working-directory changes.

### Create a new commit that reverses a commit

```bash
git revert COMMIT_ID
```

This is often appropriate for shared branches because it records a new reversing commit rather than rewriting existing history.

### Reset local history

```bash
git reset --soft HEAD~1
```

This moves the current branch back one commit while keeping the changes staged. Other reset modes have different effects; `--hard` can discard uncommitted work and should be used only when you are certain.

### Recovering mistakes

Use `git reflog` to inspect recent local reference movements:

```bash
git reflog
```

The reflog can help recover commits after some local history changes, but it is not a substitute for backups. Avoid force-pushing shared branches unless you understand the consequences and have coordinated with collaborators.

## 14. Git Ignore and Secrets

Create a `.gitignore` file to exclude files that should not be committed.

Example for a Node.js project:

```gitignore
node_modules/
.env
.env.*
!.env.example
dist/
build/
coverage/
.next/
.DS_Store
```

Adjust these patterns for your project's needs. Keep a safe `.env.example` with placeholder values so teammates know which variables to configure.

### Important security rules

- Never commit database passwords, API keys, JWT secrets, or private keys.
- Check staged changes before committing.
- If a secret is exposed, revoke or rotate it immediately.
- Removing a secret in a later commit does not erase it from Git history.
- Use a secret manager for deployment secrets.

## 15. Forks, Issues, and Collaboration

A **fork** is a separate copy of a repository under another account or organization. Forks are commonly used for open-source contributions.

An **issue** tracks a bug, feature request, task, or question. A useful issue includes context, expected behavior, actual behavior, and reproducible steps.

Collaboration tips:

- Keep commits focused and messages descriptive.
- Pull or fetch regularly according to the team workflow.
- Communicate before rewriting shared history.
- Review code before merging.
- Add tests for important behavior.
- Protect the main branch with required checks where appropriate.

## 16. Tags and Releases

Tags identify specific points in history, often for releases.

Create an annotated tag:

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

List tags:

```bash
git tag
```

A release can include notes, downloadable artifacts, and a description of changes. Use a versioning strategy that fits your project.

## 17. GitHub Actions Basics

GitHub Actions automates workflows such as tests, linting, and builds. Workflow files live in `.github/workflows/`.

Example Node.js workflow, `ci.yml`:

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
```

This example assumes the project has a valid lockfile and a `test` script. Update the Node.js version and action versions according to your project's support policy and current GitHub guidance. Review third-party actions before using them, especially in workflows that access secrets.

## 18. Useful Workflows

### Save and push your work

```bash
git status
git diff
git add path/to/changed-file
git diff --staged
git commit -m "Describe the change"
git push
```

### Update a feature branch

```bash
git fetch origin
git switch feature/my-feature
git merge origin/main
```

Use rebase instead of merge only if that matches your team's policy and you understand the history implications.

### Check what changed

```bash
git status
git diff
git diff --staged
git log --oneline --graph --decorate -10
```

### Rename a branch

```bash
git branch -m new-branch-name
```

If the old branch is already on a remote, coordinate before deleting or renaming the remote branch.

## 19. Common Problems and Fixes

### `fatal: not a git repository`

You may be outside the project directory. Navigate to the folder containing `.git`, or initialize the intended directory with `git init`.

### `nothing to commit`

Git may have no new changes, or changes may be ignored. Check `git status` and review `.gitignore`.

### `rejected` when pushing

The remote may contain commits you do not have locally, or branch rules may prevent the push. Fetch and inspect the histories, integrate changes safely, and check the repository's branch protection rules. Do not immediately force-push.

### Merge conflicts

Edit the conflicted files, remove markers, test the result, stage the resolutions, and complete the merge or rebase.

### `.env` was committed

Remove it from tracking if appropriate, but assume any exposed secret is compromised. Rotate the secret. History cleanup may be needed, but it does not replace revocation and requires coordination with collaborators.

### Large files are rejected

Check whether the file belongs in Git at all. Use appropriate artifact or object storage for generated files, and Git LFS when versioning large binary assets is genuinely necessary. Follow the hosting provider's limits.

### Authentication failed

Check the remote URL and configured authentication method. Use a credential manager or SSH key; do not paste secrets into chat, logs, or source files.

## 20. Practice Projects

1. **Personal portfolio repository:** use a clear README, branches, and meaningful commits.
2. **Task manager:** create branches for CRUD features and fix bugs through pull requests.
3. **Team blog:** simulate code review and resolve a deliberate merge conflict.
4. **Open-source contribution:** fork a public project, make a small improvement, and submit a PR.
5. **CI-enabled Node.js API:** run tests automatically on pull requests.
6. **Release workflow:** use tags and release notes for versioned releases.
7. **Documentation website:** manage Markdown articles, review changes, and deploy through automation.

For each project, keep commits small, write a useful README, and explain how to run and test the application.

## 21. Interview Questions and Answers

### 1. What is Git?

Git is a distributed version control system used to track changes and manage project history.

### 2. What is GitHub?

GitHub is a platform that hosts Git repositories and provides collaboration tools such as pull requests, issues, and Actions.

### 3. What is the difference between Git and GitHub?

Git is the version control tool. GitHub is an online hosting and collaboration platform for Git repositories.

### 4. What is a repository?

A repository is a project directory tracked by Git, including its history and metadata.

### 5. What is a commit?

A commit records a snapshot of staged changes in the local repository history.

### 6. What is the staging area?

It is the area where you select changes to include in the next commit.

### 7. What does `git status` do?

It reports the current branch and the state of working-directory and staged changes.

### 8. What does `git add` do?

It stages changes for the next commit.

### 9. What does `git commit` do?

It records staged changes as a new commit in local history.

### 10. What is a branch?

A branch is a movable reference to a line of development, allowing work to proceed independently.

### 11. What is merging?

Merging integrates changes from another branch into the current branch.

### 12. What is rebasing?

Rebasing replays commits onto a different base, creating new commit IDs for the replayed commits.

### 13. What is a merge conflict?

It is a situation where Git cannot automatically combine overlapping changes.

### 14. What is a remote?

A remote is a named reference to another repository, often hosted online. `origin` is a common default name.

### 15. What is `git clone`?

It creates a local copy of a repository and its available history.

### 16. What is the difference between `git fetch` and `git pull`?

Fetch downloads remote updates without integrating them. Pull fetches and then integrates updates into the current branch.

### 17. What is `git push`?

It sends local commits to a remote repository.

### 18. What is a pull request?

A pull request proposes changes for review and integration into another branch or repository.

### 19. What is a fork?

A fork is a separate repository copy under another account or organization.

### 20. What is `.gitignore`?

It specifies intentionally untracked files that Git should ignore.

### 21. Does `.gitignore` remove a file already tracked by Git?

No. It does not stop tracking files that are already tracked. You must remove them from the index if appropriate, while preserving the local file when needed.

### 22. How do you unstage a file?

Use `git restore --staged FILE` to remove it from the staging area while retaining working-directory changes.

### 23. What is `git revert`?

It creates a new commit that reverses the changes introduced by a specified commit.

### 24. What is `git reset`?

It moves the current branch reference and updates the index and working tree according to the selected mode. Some modes can discard work, so use it carefully.

### 25. What is `git reflog`?

It records recent movements of local references and can help locate commits after certain history changes.

### 26. What is a tag?

A tag is a named reference to a particular point in repository history, often used for releases.

### 27. What is a GitHub Action?

It is an automation workflow or component used to run tasks such as tests, builds, and deployment.

### 28. What is CI?

Continuous Integration is a practice of frequently integrating changes and running automated checks to find problems early.

### 29. How should you store API keys in a GitHub project?

Do not commit them. Use repository or environment secrets for supported workflows and the hosting platform's secret configuration for deployment.

### 30. What should you do if a secret is committed?

Revoke or rotate it immediately, assess potential exposure, and coordinate any history cleanup. Deleting it in a later commit is not enough.

### 31. Why use feature branches?

They isolate work, make review easier, and reduce the risk of unfinished changes entering the main branch.

### 32. How do you resolve a conflict during a rebase?

Edit conflicted files, remove markers, test, stage the resolved files, and run `git rebase --continue`. Use `git rebase --abort` to cancel the operation.

### 33. What is a fast-forward merge?

It moves the branch reference forward when the target branch is directly ahead and no divergent history needs to be combined.

### 34. What is the purpose of a README?

It explains what a project does and how to install, configure, run, test, and contribute to it.

### 35. What Git workflow should a beginner learn first?

Learn status, add, commit, log, branch, switch, merge, clone, pull, push, and conflict resolution. Then practice pull requests and automated checks.

## Conclusion

Git helps you manage code history, while GitHub makes it easier to share, review, and automate work. Practice the core commands on small projects, learn to branch and resolve conflicts, and use pull requests to build collaboration skills.

For a professional portfolio, keep repositories organized, write clear READMEs, never commit secrets, add tests where appropriate, and show a meaningful history of your work.
