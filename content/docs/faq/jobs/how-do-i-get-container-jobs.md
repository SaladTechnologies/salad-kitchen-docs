---
title: How do I get container jobs?
description: The requirements your PC must meet to be eligible for container jobs on Salad.
---

Container jobs are assigned automatically to eligible machines. To be eligible, your PC needs:

- A **dedicated GPU that is in demand** on the [Network Monitor](/faq/jobs/network-monitor). Only one GPU is used;
  integrated graphics do not count.
- **32 GB or more of RAM**.
- **70 GB or more free space on your C: drive**. Salad cannot use another drive.
- **Virtualization enabled** in your BIOS/UEFI. See
  [Does my PC support virtualization?](/faq/compatibility/does-my-pc-support-virtualization)
- **WSL** (Windows Subsystem for Linux), which Salad sets up for you. See [What is WSL?](/guides/your-pc/what-is-wsl)
- A **download speed of at least 10 Mbps**, with 100 Mbps recommended for access to more jobs.

The [Chopping Power](/guides/using-salad/chopping-power) bar in the app shows which of these your machine is missing.
For the full setup walkthrough, see [Getting container jobs](/guides/getting-jobs/getting-container-jobs). If you meet
everything and still aren't getting jobs, see
[Not getting container jobs](/troubleshooting/not-earning/not-getting-container-jobs).

Once eligible, how often you get a job depends on demand for your GPU model, and how much each job pays depends on the
priority its customer set. See
[How does my machine earn Salad Balance?](/faq/jobs/how-does-my-machine-earn-salad-balance)
