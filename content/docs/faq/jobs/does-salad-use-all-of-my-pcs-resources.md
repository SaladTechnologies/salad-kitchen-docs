---
title: Does Salad use all of my PC's resources?
description: What a Salad job takes from your GPU, CPU, RAM and internet connection while it runs.
---

While a job is running, Salad can use most of your PC. How much depends on each specific job - some may appear nearly
idle, while some may make use of your GPU, CPU, and RAM simultaneously.

## GPU

A GPU container job is usually GPU-intense. Anything else that needs the GPU should not be run while Salad is Chopping.
Your machine should be fully idle when Salad starts Chopping. See
[Close games and other programs](/guides/getting-jobs/close-games-and-other-programs).

## CPU and RAM

Container jobs also use your CPU and RAM, as much as the customer's workload asks for. Some jobs are light on the CPU,
others keep it busy. If you have enabled your CPU as hardware, CPU-only jobs can use most of it. See
[Why is Salad not fully using my Machine?](/faq/compatibility/why-is-salad-not-fully-using-my-machine)

Workloads can also use large portions of your RAM, but by default is limited to 70% of your machine's total RAM.

## Internet

Container jobs download the container before starting and may then use a modest amount of bandwidth. If you have
[bandwidth sharing](/faq/jobs/what-is-bandwidth-sharing) enabled, Salad can use a large share of your connection. Your
home internet connection may have strong usage while Salad is running.

## Storage

Container jobs need free space on your C: drive for the container environment and images; see
[Can I move Salad from the C drive?](/faq/compatibility/can-i-move-salad-from-the-c-drive)

You can't cap how much of each component a job uses; see
[Can I adjust how much of my GPU is used?](/faq/jobs/can-i-adjust-how-much-of-my-gpu-is-used)
