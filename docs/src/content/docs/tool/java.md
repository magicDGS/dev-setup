---
title: Java
description: Java installation and management
---

## Installation

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

### Windows

For Windows, we might also want to install a java version with winget. For example, for java 21 temurin:

```powershell
winget install EclipseAdoptium.Temurin.21.JDK
```
