---
title: Not getting container jobs
description:
  A checklist to make your machine container-ready when it only ever gets bandwidth or mining jobs, or no container jobs
  at all.
---

Container jobs are the best-paying work on Salad, and the network only offers them to machines that pass every check
below. Work through the list; most Chefs who "never get containers" are missing one item.

1. **An in-demand, dedicated GPU.** Check your card on the [Network Monitor](https://salad.com/earn/demand). Integrated
   graphics don't qualify, and only one GPU per PC can earn ([multi-GPU](/faq/compatibility/can-i-use-multiple-gpus)).
2. **GPU and CPU both enabled** under **Settings > Configure Hardware**
   ([how](/guides/using-salad/how-to-enable-and-disable-hardware)).
3. **32 GB or more system RAM.** Salad gives the container environment a share of it; less than that rules out most
   jobs.
4. **At least 70 GB free on the C: drive**, more for larger jobs. Salad can't use other drives
   ([why](/faq/compatibility/can-i-move-salad-from-the-c-drive)).
5. **Virtualization enabled** in the BIOS
   ([how to check and enable it](/guides/your-pc/how-to-enable-virtualization-support-on-your-machine)) and no
   conflicting virtualization software
   ([Android emulators](/troubleshooting/container-jobs/virtualization-conflicts-android-emulators)).
6. **The container environment installed and healthy.** Any Degraded notification blocks container jobs:
   [Degraded State](/troubleshooting/degraded-state).
7. **The latest version of Salad** ([how to update](/guides/using-salad/how-to-update-salad)).
8. **A stable connection with no VPN or proxy.** Salad's startup speed test is used when assigning jobs, so run it on a
   healthy line; wired beats Wi-Fi ([tips](/guides/your-pc/improve-internet-speed)).
9. **The GPU at stock settings** - no power limit, undervolt or thermal throttling
   ([GPU power limit](/troubleshooting/degraded-state/gpu-power-limit)).
10. **Nothing else using the GPU**, and the PC left alone. Salad is designed to run while you're away
    ([close games and other programs](/guides/getting-jobs/close-games-and-other-programs)).
11. **The first compatibility check completed.** After a fresh install the machine has to finish one short check before
    paid jobs are offered; leave Salad running for at least 30 minutes.

If every item is in place and demand for your card is high, see
[Finding Job for hours](/troubleshooting/not-earning/finding-job-for-hours).
