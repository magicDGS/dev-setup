---
title: IntelliJ
description: Configuration for IntelliJ for Java development
---

## Installation

Installation is done in Windows with PowerShell.

```poweshell
winget install JetBrains.IntelliJIDEA.Community
```

## JRE/JDK configuration

:::danger
IntelliJ on WSL is not really working yet as expected.
The IDE hangs if maven/java is used from WSL and thus the one from Windows should be used.
:::

The JRE/JDK and tooling (maven, gradle, etc.) should __*NOT*__ be located on the WSL system.
See [Java tool setup](/dev-setup/tools/java.md) for more information on how to setup them on Windows.

## Sources

It is recommended to import/create the source code for IntelliJ on the Windows filesystem,
as I/O operations are slow if they are done through WSL from the Windows application.

Sources can also be located on WSL if I/O is not a problem,
but should be imported/created on the mapped network drive.
Otherwise, IntelliJ will try to use the support for WSL and will hang.

## Plug-ins

- Docker
- Codeium