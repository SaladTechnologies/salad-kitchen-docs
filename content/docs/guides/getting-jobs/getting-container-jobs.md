---
title: Getting container jobs
description:
  What container jobs are and the hardware, storage, Windows and network requirements your PC must meet to get them.
---

Container jobs are the best-paying work on Salad. They run inside an
[isolated container environment](/guides/your-pc/what-is-wsl) on your PC, so the workload never touches your Windows
installation. The Salad app fetches and runs them automatically when one is available for your hardware and your machine
is set up correctly.

## What my PC needs

To be offered container jobs, your machine must meet all of these:

- **An in-demand GPU.** Check the [Network Monitor](/faq/jobs/network-monitor). Even a top-end card gets few container
  jobs when there is no demand for it.
- **One dedicated GPU.** Integrated graphics can't run container jobs, and Salad only uses one GPU per machine; see
  [Can I use multiple GPUs?](/faq/compatibility/can-i-use-multiple-gpus).
- **32 GB or more of system RAM.**
- **70 GB or more free on your C: drive.** Container jobs are large and Salad can't use
  [another drive](/faq/compatibility/can-i-move-salad-from-the-c-drive).
- **Virtualization enabled** in your BIOS/UEFI; see
  [How to enable virtualization support on your machine](/guides/your-pc/how-to-enable-virtualization-support-on-your-machine).
- **The container environment (WSL) installed.** Salad sets it up during onboarding; see
  [What is WSL?](/guides/your-pc/what-is-wsl) if it reports a problem.
- **A download speed of at least 10 Mbps.** Faster is better: jobs are downloaded before they run. See
  [What is the minimum recommended internet speed for Salad?](/faq/compatibility/what-is-the-minimum-recommended-internet-speed-for-salad).
- **Salad actively Chopping with nothing else using the GPU.** Container jobs don't run while you are using
  [games or other GPU programs](/guides/getting-jobs/close-games-and-other-programs).

The [Chopping Power](/guides/using-salad/chopping-power) bar in the app shows which of these your machine still needs.

## Container jobs are not guaranteed

Jobs are assigned based on customer demand for your hardware, so there is no fixed wait time. When demand for your GPU
is low you wait longer in "Finding Job". While no container job is available, Salad falls back to
[bandwidth sharing](/guides/getting-jobs/getting-bandwidth-sharing-jobs) or
[cryptomining](/guides/getting-jobs/getting-cryptomining-jobs) if you are opted in and compatible.

If you are not getting container jobs at all, work through
[Not getting container jobs](/troubleshooting/not-earning/not-getting-container-jobs). If there is simply no demand for
your hardware, consider pausing Salad and setting up a [demand alert](/guides/getting-jobs/how-to-set-up-a-demand-alert)
so you know when to start again.
