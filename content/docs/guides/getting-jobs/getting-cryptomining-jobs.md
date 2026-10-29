---
title: Getting cryptomining jobs
description:
  Why mining only runs as a backup when no container job is available, what it pays, and how to turn it on or off.
---

Cryptomining is Salad's **backup workload**. It only runs when there is no container job available for your machine, so
you keep earning something instead of sitting in "Finding Job". It pays very little on modern cards, and it never
replaces a container job: as soon as one becomes available Salad switches to it. See
[Mining as a backup workload](/faq/jobs/mining-as-a-backup-workload).

## How do I get cryptomining jobs?

Your machine needs a [compatible dedicated GPU](/guides/your-pc/how-to-find-your-gpu-or-cpu) and Crypto Mining enabled
in your [Salad app settings](/guides/using-salad/salad-app-settings) (Settings -> Workload Preferences -> Advanced
Options -> Crypto Mining). It is enabled by default; turn it off there if you would rather your GPU stay idle between
container jobs.

Salad supports most dedicated GPUs from recent generations with at least 2 GB of VRAM for mining. Older cards may not
work even if they meet the VRAM requirement. See
[Is my machine compatible with Salad?](/faq/compatibility/is-my-machine-compatible-with-salad).

## Mining isn't starting

Make sure your [antivirus](/troubleshooting/antivirus) and
[firewall](/troubleshooting/antivirus/how-to-whitelist-salads-miners-in-windows-firewall) are not blocking Salad's
miners, then see [Troubleshooting mining jobs](/troubleshooting/not-earning/troubleshooting-mining-jobs).
