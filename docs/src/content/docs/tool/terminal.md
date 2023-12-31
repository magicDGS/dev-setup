---
title: Terminal
description: Terminal Configuration
---

## Installation

I use the windows terminal for both PowerShell and WSL.
To install:

```powershell
winget install Microsoft.WindowsTerminal
```

## Profiles

The default profile for Windows Terminal should be PowerShell, because it is easier to move to WSL (by typing `wsl`).
Also, Windows filesystem is too slow on the mounted drive, making `git` to take 2s for a simple `status` command
instead of few milliseconds on PowerShell.

To re-organize the profiles on the settings and new tabs, open the settings.json and re-order the objects there.

### Customization

### PowerShell

The new PowerShell installation should be performed

```powershell
winget install Microsoft.PowerShell
```

For styling [OhMyPosh](https://ohmyposh.dev/) is installed:

```powershell
winget install JanDeDobbeleer.OhMyPosh
```

Also install a font with the interactive command (in my case, `FiraCode`): `oh-my-posh font install`

Then to configure, run `oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\jandedobbeleer.omp.json"`
and run the command that is returned.

To select a different theme, use `Get-PoshThemes` now.
In my case, I have choose `kali` and change the previous command to point to the config
`oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\kali.omp.json"`

The returned command should be pasted on the PowerShell profile (`notepad $PROFILE`).
If the `$PROFILE` is not created, do it with `New-Item -Path $PROFILE -Type File -Force`

For icons on file-listing, install the module with `Install-Module -Name Terminal-Icons -Repository PSGallery`
and activate add the import (`Import-Module Terminal-Icons`) to the profile as before.

For better auto-complete, add also to the profile the `Set-PSReadLineOption -PredictionViewStyle ListView`.

### WSL with ZSH

I use ZSH instead of bash in WSL. To install:

```bash
sudo apt install zsh
chsh -s $(which zsh) # change defaul shell
curl -s https://ohmyposh.dev/install.sh | sudo bash -s # install also ohmyposh
```

Starting the zsh shell, configure using the wizard the history settings and the default completion system.

To share themes with the Windows machine and do not require to download again,
add to the `~/.zshrc` the following command:

```bash
eval "$(oh-my-posh init zsh --config /mnt/c/Users/$USER/AppData/Local/Programs/oh-my-posh/themes/kali.omp.json)"
```

:::note
The $USER variable can be used here because the same name was used for WSL and Windows host machine.
This might differ if not configured like that.

Also, the `kali` theme is hardcoded as it is the one used before.
:::

For the `ls` command, `exa` is used for a more modern feeling:

```bash
sudo apt install exa
```

To add custom aliases, copy the `dotfiles/.aliases` from the repository and add to the `.zshrc` the following line:

```bash
[ -f ~/.aliases ] && source ~/.aliases
```