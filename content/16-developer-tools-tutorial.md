---
title: "Developer Tools Tutorial"
description: "Learn the developer tools used in real projects, including VS Code, terminal, Git, GitHub, browser DevTools, npm, Postman, database clients, Docker, and deployment workflows."
slug: "developer-tools-tutorial"
date: "2026-10-23"
author: "Yogesh"
image: "/images/developer-tools.png"
category: "Developer Tools"
---

# Developer Tools Complete Guide

## Table of Contents

- [1. Visual Studio Code](#1-visual-studio-code)
- [2. Terminal and Command Line](#2-terminal-and-command-line)
- [3. Git Basics](#3-git-basics)
- [4. GitHub](#4-github)
- [5. Browser Developer Tools](#5-browser-developer-tools)
- [6. npm and Package Managers](#6-npm-and-package-managers)
- [7. ESLint, Prettier, and TypeScript](#7-eslint-prettier-and-typescript)
- [8. Postman and API Testing](#8-postman-and-api-testing)
- [9. Database Tools](#9-database-tools)
- [10. Docker Basics](#10-docker-basics)
- [11. Environment Variables](#11-environment-variables)
- [12. Deployment and CI/CD](#12-deployment-and-cicd)
- [13. Debugging Workflow](#13-debugging-workflow)
- [14. Recommended Learning Order](#14-recommended-learning-order)
- [15. Developer Tools Interview Questions](#15-developer-tools-interview-questions)
- [Conclusion](#conclusion)


Developer tools help you write code, manage projects, debug errors, collaborate with other developers, test APIs, and deploy applications. You do not need to learn every tool immediately. Start with the tools that solve problems in your current projects.

## 1. Visual Studio Code

Visual Studio Code (VS Code) is a source-code editor with extensions, debugging support, source control integration, and an integrated terminal.

### Useful features
- **Explorer:** browse project files.
- **Search:** find code across the project.
- **Terminal:** run commands without leaving the editor.
- **Source Control:** inspect Git changes.
- **Extensions:** add language support, formatters, and debugging tools.
- **Command Palette:** search for editor commands.

### Tips
- Install extensions only when needed and choose trusted publishers.
- Use a formatter consistently across the project.
- Avoid adding unnecessary extensions that slow down the editor.
- Never place API keys or passwords in committed editor settings.

## 2. Terminal and Command Line

The terminal lets you run development tools, inspect files, install packages, and manage servers.

Common commands on macOS/Linux:

```bash
pwd
ls
cd my-project
mkdir src
```

Similar PowerShell commands on Windows:

```powershell
Get-Location
Get-ChildItem
Set-Location .\my-project
New-Item -ItemType Directory src
```

Before running a destructive command, verify your current directory and understand what the command will delete or change.

## 3. Git Basics

Git is a distributed version control system. It tracks changes and lets developers work on branches.

### Start a repository

```bash
git init
git status
git add .
git commit -m "Initial commit"
```

### Daily workflow

```bash
git status
git diff
git add src/
git diff --cached
git commit -m "Fix task validation"
git push
```

### Useful commands

| Command | Purpose |
|---|---|
| `git status` | Show changed and staged files |
| `git diff` | Show unstaged changes |
| `git diff --cached` | Show staged changes |
| `git log --oneline` | Show a compact commit history |
| `git branch` | List branches |
| `git switch -c feature/login` | Create and switch to a branch |
| `git pull` | Fetch and integrate remote changes |
| `git restore file.js` | Discard unstaged changes to a file |

Be careful with commands that discard changes. Review `git status` and `git diff` before using them.

## 4. GitHub

GitHub hosts Git repositories and provides collaboration features such as pull requests, issues, code review, and automation.

A good project repository should include:
- A clear README
- Setup and installation instructions
- Feature list and screenshots
- A live demo link when available
- Required environment variable names, without secret values
- A license if you want to specify reuse permissions

### Never commit secrets

Add private environment files to `.gitignore`:

```gitignore
.env
.env.local
.env.*.local
node_modules/
.next/
dist/
```

Adjust the ignore rules to your project. If a key or password has already been pushed to a repository, deleting it from the latest commit may not remove it from history. Revoke or rotate the exposed credential.

## 5. Browser Developer Tools

Browser DevTools help you inspect and debug frontend applications.

| Panel | What it helps with |
|---|---|
| Elements / Inspector | Inspect HTML and CSS |
| Console | Read errors and logs |
| Network | Inspect requests, responses, and status codes |
| Application / Storage | Inspect cookies and browser storage |
| Performance | Investigate slow rendering |
| Accessibility tools | Find accessibility problems |

### Debugging an API request

If a page does not load data:
1. Open DevTools.
2. Select the Network panel.
3. Reproduce the issue.
4. Select the failed request.
5. Check its URL, method, status code, request body, and response.
6. Read the Console for related errors.

This is often more effective than changing code without evidence.

## 6. npm and Package Managers

npm is commonly used to install JavaScript dependencies and run project scripts. Other package managers include pnpm and Yarn.

```bash
npm install
npm install some-package
npm run dev
npm run build
npm audit
```

Useful project files:
- `package.json` lists project metadata, scripts, and dependency ranges.
- `package-lock.json` records the resolved dependency tree for npm.
- `node_modules/` contains installed packages and is usually not committed.

Use the package manager and lockfile chosen by the project. Review package names and scripts before installing or running unfamiliar dependencies.

## 7. ESLint, Prettier, and TypeScript

- **ESLint:** identifies code patterns and potential issues according to configured rules.
- **Prettier:** formats code consistently.
- **TypeScript:** adds static type checking to JavaScript development.
- **Stylelint:** can check CSS and related stylesheets.

These tools complement one another. A clean lint result does not prove the application is correct, secure, or bug-free; tests and code review are still important.

## 8. Postman and API Testing

Postman and similar API clients help you send HTTP requests and inspect responses.

When testing an endpoint, verify:
- HTTP method and URL
- Headers and content type
- Request body and query parameters
- Authentication
- Response status and body
- Validation and error handling

For a task API, test more than the happy path:
- A valid request
- Missing required fields
- Invalid data types
- An expired or missing token
- Access to another user's resource
- A database or server error

Do not share exported collections or screenshots containing live tokens or private data.

## 9. Database Tools

Database clients make it easier to inspect records, collections, indexes, and queries.

Examples include:
- MongoDB Compass for MongoDB
- pgAdmin for PostgreSQL
- MySQL Workbench for MySQL

Best practices:
- Use a development database for experiments.
- Back up important data before migrations.
- Use accounts with only the permissions they need.
- Avoid destructive operations on production.
- Inspect query plans when investigating performance problems.

## 10. Docker Basics

Docker packages an application and its runtime dependencies into containers. It can help make development and deployment environments more consistent.

Illustrative Dockerfile for a simple Node.js app:

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

This example assumes the project has a suitable `start` script and lockfile. Adapt it to your app's build process and runtime requirements. For production, consider a multi-stage build, a non-root user, health checks, and a small set of necessary files. Never bake secrets into an image.

## 11. Environment Variables

Environment variables configure applications without hardcoding environment-specific values.

Example `.env` file for local development:

```env
DATABASE_URL=your_local_database_url
JWT_SECRET=replace_with_a_long_random_secret
```

Use the variable names your application expects. Keep `.env` files out of source control and configure production variables through the hosting provider's secure settings. Do not use placeholder values in production.

For frontend frameworks, understand which variables are exposed to the browser. For example, in Next.js, variables prefixed with `NEXT_PUBLIC_` are intended to be included in client-side bundles and must not contain secrets.

## 12. Deployment and CI/CD

Deployment makes an application available to users. Platforms differ in supported runtimes and configuration, so check the selected provider's current instructions.

Before deployment, verify:
1. The app builds locally.
2. Required environment variables are configured.
3. Database access and migrations are ready.
4. Authentication callback URLs are correct.
5. Secrets are not included in client bundles or repository files.
6. Logs can be inspected if something fails.
7. The deployed application works on mobile and desktop.

Continuous integration (CI) can run linting, tests, and builds automatically. Continuous delivery/deployment (CD) automates release steps after required checks pass.

## 13. Debugging Workflow

When something breaks:
1. Reproduce the problem.
2. Copy the exact error message.
3. Identify the first relevant failure in the logs.
4. Check recent code changes.
5. Inspect the request, input, or state involved.
6. Reduce the issue to the smallest reproducible example.
7. Make a focused change.
8. Test the original case and nearby edge cases.
9. Record the root cause if it may happen again.

Avoid changing many unrelated files at once; it makes debugging harder.

## 14. Recommended Learning Order

For a beginner web developer:

1. VS Code and terminal basics
2. Git and GitHub
3. Browser DevTools
4. npm and package scripts
5. Postman or an equivalent API client
6. Database client basics
7. ESLint, Prettier, and TypeScript
8. Deployment configuration and logs
9. Docker fundamentals
10. CI/CD concepts

Learn each tool while using it in a small project instead of trying to memorize every feature.

## 15. Developer Tools Interview Questions

1. **What is VS Code?** A source-code editor with extensions, debugging, and integrated tooling.
2. **What is a terminal?** A text-based interface for running commands and programs.
3. **What is Git?** A distributed version control system.
4. **What is GitHub?** A hosting and collaboration platform for Git repositories.
5. **What is a commit?** A recorded set of repository changes.
6. **What is a branch?** An independent line of development.
7. **What is a pull request?** A way to propose and review changes before merging.
8. **What is `.gitignore`?** A file that specifies untracked paths Git should normally ignore.
9. **Why should secrets not be committed?** They can be exposed through repository history and copied by others.
10. **What is DevTools Network used for?** Inspecting HTTP requests and responses.
11. **What is npm?** A package manager and registry ecosystem commonly used with Node.js.
12. **What is a lockfile?** A file recording resolved dependency versions for more reproducible installs.
13. **What is a linter?** A tool that checks code against configured rules.
14. **What is a formatter?** A tool that automatically formats code.
15. **What is Postman used for?** Sending API requests and inspecting responses.
16. **What is Docker?** A platform for building and running containerized applications.
17. **What is CI?** Automated checks and integration of code changes.
18. **What is CD?** Automated delivery or deployment workflows.
19. **Why use environment variables?** To configure an application without hardcoding environment-specific values.
20. **What should you inspect when deployment fails?** Build logs, configuration, environment variables, runtime logs, and service connectivity.

## Conclusion

A developer's productivity depends not on using the most tools, but on using the right tools consistently. Start with VS Code, terminal, Git/GitHub, browser DevTools, npm, and API testing. Add database tools, Docker, and CI/CD as your projects grow.
