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

### WSL

```bash
sudo apt install git
git config --global user.name "GitHub full name"
git config --global user.email "Github email"
git config --global user.username "GitHub user-name"
# configure also the windows credential manager to have the same
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-wincred.exe"
```