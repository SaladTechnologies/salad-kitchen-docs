---
title: How does my machine earn Salad Balance?
description: The three workload types Salad can run on your PC, and how the rate you are paid for a job is decided.
---

Your machine earns Salad Balance by running work for SaladCloud customers. There are three workload types. Container
jobs pay the most and are what Salad tries to run first; bandwidth sharing can run alongside them; mining is a backup
for when nothing else is available.

## Container jobs

Container jobs are the main way to earn. SaladCloud customers rent your GPU to run containerized workloads such as AI
image generation, speech-to-text and other inference work. The container is downloaded to your machine before it runs,
so you need a stable connection and enough free space on your C: drive. See
[How do I get container jobs?](/faq/jobs/how-do-i-get-container-jobs) for the requirements.

Jobs are assigned automatically. They are often short, from minutes to a few hours, because customers scale their
workloads up and down. Between jobs the app shows **Finding Job** while it waits for and downloads the next one. You are
credited while the job runs, not when it finishes.

### How the rate is decided

Each customer sets a **priority** for their workload, and that priority decides the rate you are paid while their job
runs on your machine. The same GPU can therefore earn very different amounts from one job to the next. The
[Network Monitor](/faq/jobs/network-monitor) shows the lowest and highest rate a job can pay on each GPU model, and the
demand level for it. Earning anywhere inside that range means your machine is working as intended.

## Bandwidth sharing

Chefs in [eligible regions](/troubleshooting/not-earning/bandwidth-sharing-troubleshooting) can share unused internet
bandwidth for Salad Balance. It needs no special hardware, only a fast enough connection, and it runs at the same time
as container jobs or mining. See [What is bandwidth sharing?](/faq/jobs/what-is-bandwidth-sharing)

## Mining

Mining only runs when no container job is available for your machine. It uses trusted open-source miners and pays per
15-minute interval, but on modern cards it earns cents per day. See
[Mining as a backup workload](/faq/jobs/mining-as-a-backup-workload) for what it pays and how to turn it off.
