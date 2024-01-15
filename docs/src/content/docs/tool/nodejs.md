---
title: Node.js
description: Setup for Node.js
---

## Installation

### WSL

To configure Node.js, I use [`fnm`](https://github.com/Schniz/fnm) on WSL.

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

At the moment of this writing, the installation performed was `v20.10.0` (LTS):

```bash
fnm install v20.10.0
```

### Windows

On Windows, sometimes npm is required (i.e., `spotless` plug-in for java with prettier).
Thus, we also install `fnm` in Windows with a node implementation:

```powershell
winget install Schniz.fnm
```

Then add to the end of the profile (`notepad $PROFILE`) the following lines:

```powershell
fnm env --use-on-cd | Out-String | Invoke-Expression
```

### IDEs

As we are using `fnm`, `node` is not added by default to the PATH unless we are on a terminal.
To fix this in IDEs that does not support it, each IDE should take care of the configuration.
