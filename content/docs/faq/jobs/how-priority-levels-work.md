---
title: How priority levels work
description:
  What job priority is, who sets it, and why the same GPU can earn different amounts from one job to the next.
---

Priority is the reason the same GPU can earn different amounts from one job to the next. Here's how it works.

## Customers pick the priority

Every job comes with one of four priority levels: Lowest, Low, Medium or High. The customer chooses it when they submit
the job. Each step up costs them more and pays you more. You can't pick a priority yourself, and you don't need to.

## Why a customer pays for higher priority

Higher priority jobs get first pick of the machines that fit them. If a customer can't get enough GPUs at a lower
priority, they can pay more to get them, and their job can take eligible machines away from lower priority jobs.

## Your PC moves up without you

When a better-paying job needs your GPU and your machine fits, Salad moves you to it. You don't have to watch for it or
restart anything. Just keep Chopping.

## Demand and priority are two different things

Demand is how much of your GPU model is in use across the network, which tells you how likely you are to have a job at
all. Priority decides what that job pays while it runs. The [Network Monitor](/faq/jobs/network-monitor) shows both: the
demand for your GPU, and the lowest and highest rate a job on it can pay.

## Getting more High priority jobs

[There's no queue to climb](/faq/jobs/whats-normal-while-chopping#there-is-no-queue), so the only way to improve your
odds is to be a world-class Chef. Run a lot, don't use the PC while you're Chopping, and have the hardware customers are
asking for. More RAM helps, because some jobs require it and fewer machines can take them.
