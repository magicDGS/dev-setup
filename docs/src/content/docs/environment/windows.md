---
title: Windows setup
description: Setup for the Windows development environment
---

Development environment for Windows 11 is based on:

- winget to install applications (if available)
- WSL

## Windows Features

Turn on the following Windows Features:

- Virtual Machine Platform
- Windows Hypervisor Platform
- WIndows Subsystem Linux

## WSL

Windows Subsystem Linux is installed with `wsl --install`, which installs directly Ubuntu.
It requires re-start and after it setup the user-name and password.

## Winget

For `winget`, some hang might happen if you are not in the latest version.
Ensure that the Microsoft store software is up-to-date.

On the terminal, run `winget upgrade --all` to update all out-of-date already installed applications.

The following packages would be installed with `winget`:

- `Microsoft.WindowsTerminal` (see configuration in [Terminal Configuration](/tool/terminal))
- `Microsoft.PowerShell`
- `Git.Git`
- `JetBrains.IntelliJIDEA.Community`
- `Microsoft.VSCode`
- `Docker.DockerDesktop`
- `Mozilla.Firefox`
- `Google.Chrome`

:::note[TODO]
It would be useful to prepare a [winget config file](https://learn.microsoft.com/en-us/windows/package-manager/configuration/) to automatize further the installation of the apps.
:::

