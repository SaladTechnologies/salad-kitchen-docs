---
title: Mixed NVIDIA and AMD GPUs
description:
  Why pairing a modern GPU with an old one or a card from the other brand blocks container jobs, and how to fix it.
---

If your PC has a modern NVIDIA GPU (RTX 2000 series or newer) alongside an older card (a GT 210, GT 710, GTX 500 series
or similar), or an NVIDIA card alongside an AMD one, Salad can't run most container jobs on it. The mismatched card
interferes with how Salad detects what your system can do, so the compatibility check fails and most jobs are never
assigned. You will be left with mining, CPU-only containers and bandwidth sharing, and far lower earnings.

The fix is to remove the extra card. Multi-GPU is not supported in any form; see
[Can I use multiple GPUs?](/faq/compatibility/can-i-use-multiple-gpus)

## How to fix it

1. **Identify your GPUs.** Press `Win + R`, type `dxdiag`, and check the Display tabs, or open Device Manager
   (`Win + X` > Device Manager) and expand **Display adapters**.
2. **Remove the older or mismatched GPU.** If it is a card, physically remove it. If it is onboard graphics, disable it
   in your BIOS/UEFI.
3. **Reinstall your drivers cleanly.** Use Display Driver Uninstaller (DDU) in Safe Mode to remove all old drivers, then
   install the current driver for the card you kept. See
   [How to reinstall GPU drivers](/guides/your-pc/how-to-reinstall-gpu-drivers).
4. **Restart your PC.**
5. **Verify in Salad.** Start Chopping and wait for a job to run.

## Still stuck?

Contact [Salad Support](/guides/your-pc/how-to-create-a-support-ticket) with your machine ID, a screenshot of Device
Manager's Display adapters section, and your [log files](/guides/using-salad/how-to-find-your-salad-log-files) zipped.
