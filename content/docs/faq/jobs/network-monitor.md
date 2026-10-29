---
title: Network Monitor
description:
  What the Network Monitor shows for each GPU, what demand means, and why you can be paid less than the top rate.
---

The [Network Monitor](https://salad.com/earn/demand) is a live view of the state of the network for each supported GPU
model: how much it is in use, and what jobs on it are paying. Use it to see what to expect from your hardware and to
check that your own rate is normal.

## What the table shows

For each GPU, from left to right:

- **GPU** and its **earning rate range**: the lowest and highest hourly rate a running container job can pay on that
  card.
- **Recommended specs**: the RAM and storage customers most often request alongside that GPU. Not meeting them does not
  block you from jobs, but meeting them makes your machine eligible for more of them.
- **Demand**: Low, Moderate or High. How much of that GPU model is currently in use across the network.
- **Average earning rate, hourly**: the average across all Chefs with that GPU.
- **Average earning rate, top 25%**: the average for the top quarter of earners with that GPU.

## What the demand levels mean

- **Low**: more Chefs are Chopping and waiting with this GPU than there are jobs for it. Expect gaps between jobs.
- **Moderate**: jobs are available, but there may still be idle periods because there are more Chefs than jobs.
- **High**: Chefs with this GPU should get jobs fairly consistently, with minimal gaps.

Even at Low or Moderate demand there are jobs for the GPU; you will just spend more time in **Finding Job** after one
ends. Demand is a compound signal built from the GPU's utilization across the network, average earnings and average
running time over the last 24 hours. A plain count of machines would not tell you whether it is worth bringing your
hardware online, because a single 24-hour job may be served by several machines that come and go during the day.

## Demand and priority are not the same thing

This is the most common source of confusion, so it is worth separating the two:

- **Demand** is how much of a GPU model is in use across the network. It tells you how likely you are to have a job
  running at all.
- **Priority** is set by each SaladCloud customer on their own workload, and it decides the rate you are paid while that
  job runs on your machine. Higher priority pays more.

Priority tends to rise with demand, because when a GPU model is scarce, low-priority jobs get pushed off machines to
make room for higher-priority ones. But there is no guarantee. A GPU can be marked High demand while most of the jobs
running on it are low or medium priority, so a busy card is not always a well-paid card.

## Why am I paid less than the top rate?

Because you are running a job whose customer chose a lower priority. The range shown for your GPU covers every priority
a customer can pick, and job assignment is automatic: you cannot choose which priority you get. Earning anywhere inside
the range means your machine is working exactly as intended, even if it is at the bottom of it for hours at a time.

What you can control is keeping your machine online, stable and eligible: the longer and more reliably it Chops, the
more jobs it sees, including the higher-priority ones when they come along. See
[Why do my earnings look different than the Network Monitor?](/faq/jobs/why-do-my-earnings-look-different-than-the-network-monitor)
if your rate sits outside the range entirely.

## How can I get into the top 25% of earners?

Chop more hours. That is by far the biggest factor. Beyond that, clear every item in your
[Chopping Power](/guides/using-salad/chopping-power) checklist in the app, so your machine is eligible for the widest
set of jobs.

## Why do some averages sit above the reference rate range?

The range only covers the GPU itself. Some jobs also request extra RAM or CPU and pay a little more for them. Usually
that is a small addition, but at times a GPU may have enough of those jobs to pull its average above the reference
range.
