---
title: IntelliJ
description: Configuration for IntelliJ for Java development
---

## Installation

Installation of versions is done through the [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/), which is installed with `winget`:

```poweshell
winget install JetBrains.Toolbox
```

Then, from `JetBrains Toolbox`, IntelliJ IDEA should be installed and managed.

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

## Appearance

* Editor -> Font: Use `Fira Code Nerd Font` and Mark `Enable Ligatures`


## Plug-ins

- Docker
- Codeium
- Lombok
