---
title: Can I use multiple GPUs?
description: Salad uses one GPU per machine; a second dedicated card earns nothing and can cause a High GPU usage error.
---

No. Salad uses exactly one GPU per machine, and multi-GPU systems are not supported. A second card won't add earnings,
and it can actively stop you getting jobs.

"GPU" here means a dedicated card (NVIDIA GeForce/RTX, AMD Radeon RX). Integrated graphics, such as Intel UHD or the
Radeon Graphics built into an AMD CPU, are not eligible, don't count as a second GPU and don't interfere.

## What happens with two dedicated GPUs

- **Only one earns.** Salad picks the highest-earning card and assigns jobs to it. Two identical cards, SLI or CrossFire
  make no difference: the job uses one.
- **The other one can trigger "High GPU usage" (Error 16).** Before a job starts, Salad checks that the GPU is free. If
  the extra card has any load on it (a game, a monitor rendering a desktop, another program), the check can see it as
  busy and block the job. See [High GPU usage](/troubleshooting/degraded-state/high-gpu-usage).
- **You can't game on one card while Chopping on the other.** That is exactly the situation the check is designed to
  catch.
- **Mixed brands or generations cause more problems.** NVIDIA plus AMD, or a modern card plus a very old one, can
  confuse hardware detection entirely. See [Mixed NVIDIA and AMD GPUs](/faq/compatibility/mixed-nvidia-and-amd-gpus).

## What to do

Make the card you want to earn with the only one Salad sees:

1. In the Salad app, open **Settings > Configure Hardware** and disable every GPU except the one you want to use. See
   [How to enable and disable hardware](/guides/using-salad/how-to-enable-and-disable-hardware).
2. If errors continue, remove the extra card physically, or disable it in Device Manager.

If you want to run several GPUs for Salad, put each in its own machine. Each machine earns independently on the same
account.

Salad Support can't support multi-GPU setups, so a machine running with several cards enabled is on its own if jobs
fail.
