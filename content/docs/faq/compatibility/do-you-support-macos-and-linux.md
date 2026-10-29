---
title: Do you support macOS and Linux?
description:
  Salad runs on Windows 10 and 11; Linux is a closed beta for fleet operators and there are no plans for macOS.
---

Salad is a Windows application. It supports Windows 10 and Windows 11, and nothing else for individual Chefs.

## Linux

A Linux build exists, but it is a closed beta for operators running large numbers of dedicated machines under a
contract. It is not available to individual Chefs, and Salad Support can't grant access to it on request. If you run a
fleet and want to apply, see [Linux onboarding](/guides/getting-started/linux-onboarding). Running the Windows app
inside a virtual machine on Linux is not supported either; the GPU and virtualization stack has to be native.

## macOS

There are no plans for a macOS version. Modern Macs use Apple's ARM-based chips rather than the dedicated NVIDIA and AMD
GPUs that SaladCloud customers request, and Salad's container environment is built on Windows-specific technology (WSL).
A Mac can't earn on Salad, with or without virtualization.

For the full Windows requirements, see
[Is my machine compatible with Salad?](/faq/compatibility/is-my-machine-compatible-with-salad)
