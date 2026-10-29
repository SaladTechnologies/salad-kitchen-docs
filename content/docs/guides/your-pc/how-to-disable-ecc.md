---
title: How to disable ECC
description:
  Turn off ECC memory on an NVIDIA GPU with nvidia-smi so the full VRAM is available to Salad's container jobs.
---

ECC (error-correcting code) memory reserves part of a GPU's VRAM to detect and correct memory errors. That is useful in
data centres but not for Salad, and the reserved VRAM can leave your card just below what some container jobs need.
Disabling ECC gives Salad the full VRAM and makes you eligible for more jobs.

ECC is mainly found on workstation and data-center NVIDIA cards (and on some high-end GeForce cards). AMD cards also
support ECC, but turning it off depends on AMD's own tools.

## Step 1: check whether ECC is enabled

1. Open Command Prompt or PowerShell.
2. Run:

```
nvidia-smi --query-gpu=ecc.mode.current --format=csv
```

If the result says `Enabled`, ECC is active. `N/A` means your GPU does not support ECC and there is nothing to change.

## Step 2: disable ECC

1. Open Command Prompt or PowerShell **as administrator**.
2. Run:

```
nvidia-smi -e 0
```

3. You should see a confirmation. Restart your PC to apply the change.

## Step 3: verify

Run the command from step 1 again. It should now say `Disabled`.

## Troubleshooting

- **Command not found:** `nvidia-smi` is part of the NVIDIA driver.
  [Reinstall your drivers](/guides/your-pc/how-to-reinstall-gpu-drivers) if it is missing.
- **Option not available:** some workstation GPUs force ECC on and do not allow it to be turned off.
- **Still enabled after a reboot:** run the command again as administrator and restart once more.
