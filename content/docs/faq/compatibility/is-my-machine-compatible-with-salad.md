---
title: 'Is my machine compatible with Salad?'
description:
  'The full list of what Salad needs from your PC: GPU, CPU, RAM, storage, internet, operating system and
  virtualization.'
---

Salad runs on Windows PCs with one dedicated GPU that SaladCloud customers are asking for. Here is everything that is
checked, in order of how often it is the problem. The [Chopping Power](/guides/using-salad/chopping-power) bar in the
app tells you which of these your own machine is missing.

## GPU

Not sure what you have? See [How to find your GPU or CPU](/guides/your-pc/how-to-find-your-gpu-or-cpu).

- **It must be listed on the [Network Monitor](/faq/jobs/network-monitor).** Customers request specific GPU models, and
  the Network Monitor lists every model they currently ask for, with its demand level and rate range. A card that isn't
  listed won't receive container jobs.
- **It must be a dedicated card.** Integrated graphics (Intel UHD/Iris, the Radeon Graphics built into AMD CPUs) are not
  eligible and don't count as a GPU.
- **Only one GPU is used.** A second dedicated card doesn't add earnings and can cause errors. See
  [Can I use multiple GPUs?](/faq/compatibility/can-i-use-multiple-gpus) Mixing NVIDIA and AMD, or pairing a modern card
  with a very old one, blocks jobs: see [Mixed NVIDIA and AMD GPUs](/faq/compatibility/mixed-nvidia-and-amd-gpus).
- **AMD:** only the AMD cards listed on the Network Monitor are supported, using the AMD Edition of the Salad app.
  Workstation and pro cards (for example the AMD AI PRO R9700) are not supported.
- **Laptops** are supported if the GPU is in demand, but vendor power modes often cap the GPU and trigger a power limit
  notification. See [How power limiting impacts your earnings](/troubleshooting/degraded-state/gpu-power-limit).
- Run the card at factory settings. Power limiting or underclocking blocks container jobs.

## CPU

Any 64-bit x86 CPU from roughly the last ten years that supports virtualization, with at least 4 cores and 8 threads; 6
cores and 12 threads recommended. Both Intel and AMD are fine.

## RAM

32 GB or more for container jobs. Any generation and speed of memory is fine, as long as there is enough of it.

## Storage

At least 70 GB free on your **C:** drive. Salad installs itself and its container environment on C: and cannot use
another drive; see [Can I move Salad from the C drive?](/faq/compatibility/can-i-move-salad-from-the-c-drive) An SSD is
strongly recommended.

## Internet

At least 10 Mbps download, with 100 Mbps recommended for access to more jobs. Bandwidth sharing has its own
requirements. See
[What is the minimum recommended internet speed?](/faq/compatibility/what-is-the-minimum-recommended-internet-speed-for-salad)

## Operating system

Windows 10 or Windows 11, kept up to date. Linux is a closed beta for large fleet operators only, and there is no macOS
version. See [Do you support macOS and Linux?](/faq/compatibility/do-you-support-macos-and-linux)

## Virtualization and WSL

Container jobs run inside WSL (Windows Subsystem for Linux), which needs hardware virtualization enabled in your
BIOS/UEFI. Check with [Does my PC support virtualization?](/faq/compatibility/does-my-pc-support-virtualization) and
enable it with
[How to enable virtualization support](/guides/your-pc/how-to-enable-virtualization-support-on-your-machine). Salad sets
up WSL for you; see [What is WSL?](/guides/your-pc/what-is-wsl)

## If your machine isn't eligible

Enable the hardware you have anyway: CPU-only jobs and [bandwidth sharing](/faq/jobs/what-is-bandwidth-sharing) don't
need a GPU, and demand changes over time. If Salad doesn't recognize your hardware correctly, see
[What GPU or CPU is Salad detecting?](/guides/your-pc/what-gpu-or-cpu-is-salad-detecting), then contact
[Salad Support](/contact).
