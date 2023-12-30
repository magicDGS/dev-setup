---
title: git
description: Configuration for git
---

## Installation

Git is installed in both Windows and WSL.

### Windows

```pwsh
winget install Git.Git
git config --global user.name "GitHub full name"
git config --global user.email "Github email"
git config --global user.username "GitHub user-name"
```

:::caution
Note that if a clone is setup on WSL, an fatal error can happen in Windows:
`fatal: detected dubious ownership in repository at '//wsl.localhost/Ubuntu/...`,
suggesting to add the path with the following command to the global config:

```pwsh
git config --global --add safe.directory '%(prefix)///wsl.localhost/Ubuntu/*
```

A solution **MUST** be found to prevent this issue in the future, although most of the times WSL should be used.
:::

### WSL

```bash
sudo apt install git
git config --global user.name "GitHub full name"
git config --global user.email "Github email"
git config --global user.username "GitHub user-name"
# configure also the windows credential manager to have the same
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-wincred.exe"
```