---
title: Does Salad use all of my PC's resources?
description: What a Salad job takes from your GPU, CPU, RAM and internet connection while it runs.
---

While a job is running, Salad can use most of your PC. How much depends on the job.

## GPU

A container job uses your GPU fully. Anything else that needs the GPU (games, video editing, local AI models) will
struggle or crash, so plan on Chopping while you are away from the PC. If you start a GPU-heavy program while Chopping,
Salad pauses the job to protect the customer's work and shows a notification; close the program to resume. See
[Close games and other programs](/guides/getting-jobs/close-games-and-other-programs).

## CPU and RAM

Container jobs also use your CPU and RAM, as much as the customer's workload asks for. Some jobs are light on the CPU,
others keep it busy. If you have enabled your CPU as hardware, CPU-only jobs can use most of it. See
[Why is Salad not fully using my CPU?](/faq/compatibility/why-is-salad-not-fully-using-my-cpu)

## Internet

Container jobs download the container before starting and then use a modest amount of bandwidth. If you have
[bandwidth sharing](/faq/jobs/what-is-bandwidth-sharing) enabled, Salad can use a large share of your connection. If
browsing becomes slow, stop Chopping while you need the connection.

## Storage

Container jobs need free space on your C: drive for the container environment and images; see
[Can I move Salad from the C drive?](/faq/compatibility/can-i-move-salad-from-the-c-drive)

You can't cap how much of each component a job uses; see
[Can I adjust how much of my GPU is used?](/faq/jobs/can-i-adjust-how-much-of-my-gpu-is-used)
