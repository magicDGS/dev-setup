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

For the File Explorer, change the options to show hidden files and file-extensions.

## WSL

Windows Subsystem Linux is installed with `wsl --install`, which installs directly Ubuntu.
It requires re-start and after it setup the user-name and password.
I use the same user-name as the Windows machine to simplify configuration.

After installation, perform the following to have it up-to-date:

```bash
sudo apt update
sudo apt upgrade
sudo apt install curl zip # tools without configuration
```

Then enter in the `\\wsl$\` folder and map the network drive to the `W:` drive.

## Winget

For `winget`, some hang might happen if you are not in the latest version.
Ensure that the Microsoft store software is up-to-date.

On the terminal, run `winget upgrade --all` to update all out-of-date already installed applications.

:::note[TODO]
It would be useful to prepare a [winget config file](https://learn.microsoft.com/en-us/windows/package-manager/configuration/) to automatize further the installation of the apps instead of doing it manually.
:::

The following packages would be installed with `winget`:

- `JetBrains.IntelliJIDEA.Community`
- `Microsoft.VSCode`
- `Docker.DockerDesktop`
- `Mozilla.Firefox`
- `Google.Chrome`

:::tip
Other software should be also installed with `winget` but it is not listed here as it might require extra configuration.
:::

## Tools

- [Terminal](/dev-setup/tool/terminal)
- [Git](/dev-setup/tool/git)
