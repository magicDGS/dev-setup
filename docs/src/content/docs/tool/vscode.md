---
title: VS Code
description: Visual Studio Code configuration
---

## Installation

To install, use `winget install Microsoft.VSCode`.

## Settings

- Activate synchronization with the github account
- Font: "FiraCode Nerd Font" as main font, with ligatures ON.

## Extensions

:::caution
For working in WSL properly, the `WSL` extension (see below) should be installed.

In such case, the extensions should also be installed in WSL side.
Note that some extensions doesn't work there (see below).
:::

### Web development

- Astro (`astro-build.astro-vscode`)
- MDX (`unifiedjs.vscode-mdx`)

### Tooling

- WSL (`ms-vscode-remote.remote-wsl`)
- Codeium (`codeium.codeium`) ⚠️Doesn't work in WSL⚠️