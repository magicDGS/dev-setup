---
title: Java
description: Java installation and management
---

## Installation

### Windows

For Windows, java versions should be installed with winget.
For example, at the moment of this writing:

```powershell
winget install EclipseAdoptium.Temurin.21.JDK
```

In the case of maven, the version should be installed manually untill a package is available
(see the [winget issue with the request](https://github.com/microsoft/winget-pkgs/issues/65391)).

Maven should be unzipped under `C:\Program Files\Maven` and set the environment:
- Variable `MAVEN_HOME` set to that path
- The `Path` variable should contain `%MAVEN_PATH%/bin`

### WSL

Installation of java and related tools is made with [`sdkman`](https://sdkman.io/) on WSL:

```bash
 curl -s "https://get.sdkman.io" | bash 
```

At the moment of this writing, the following versions are installed for both java and maven:

```bash
sdk install java 21.0.1-tem
sdk install maven 3.9.6
```
:::caution
The WSL environment is not working for the [IntelliJ IDEA](/dev-tools/tools/intellij-idea.md).
Should not be used there!!
:::
