---
title: IntelliJ
description: Configuration for IntelliJ for Java development
---

## Installation

Installation is done in Windows with PowerShell.

```poweshell
winget install JetBrains.IntelliJIDEA.Community
```

:::note
To enable the command-line launcher, the folllowing should be added to the Windows `%Path%` variable:

```
%LOCALAPPDATA%\JetBrains\%IDEA_VERSION%\bin
```

Note that you should replace the following variables`%IDEA_VERSION%` with the proper installed version
(i.e., IntelliJ IDEA Community Edition 2023.3.2)

To simplify the process when the software is updated, a %IDEA_VERSION% variable can be added to the Windows Variables and use it.
:::

## JRE/JDK configuration

:::danger
IntelliJ on WSL is not really working yet as expected.
The IDE hangs if maven/java is used from WSL and thus the one from Windows should be used.
:::

The JRE/JDK and tooling (maven, gradle, etc.) should __*NOT*__ be located on the WSL system.
See [Java tool setup](/dev-setup/tools/java.md) for more information on how to setup them on Windows.

## Node configuration

After having installed [nodejs](/dev/tool/nodejs.md), we need to provide to maven the path to its installation in case that we use a project that might use `npm` (i.e., `spotless`):

* Go to Settings -> Build, Execution, Deployment --> Build Tools --> Maven --> Runner
* Add a new property: `npm.exec` and set to `%APPDATA%\fnm\node-versions\v20.10.0\installation` (note that the version might differ between projects)

## Sources

It is recommended to import/create the source code for IntelliJ on the Windows filesystem,
as I/O operations are slow if they are done through WSL from the Windows application.

Sources can also be located on WSL if I/O is not a problem,
but should be imported/created on the mapped network drive.
Otherwise, IntelliJ will try to use the support for WSL and will hang.

## Plug-ins

- Docker
- Codeium
