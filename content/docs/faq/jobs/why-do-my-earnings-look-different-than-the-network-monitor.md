---
title: Why do my earnings look different than the Network Monitor?
description: Why your earning rate can sit above or below the averages shown on the Network Monitor.
---

The [Network Monitor](/faq/jobs/network-monitor) shows a rate range and averages for each GPU model. The averages
combine every Chef with that card, across all job types, so your own machine will rarely match them exactly. As long as
your rate is somewhere inside the range shown for your GPU, your machine is working as intended.

## Why are my earnings higher?

- **You have a higher-priority job.** Each SaladCloud customer sets a priority on their workload, and higher priority
  pays more. Two Chefs with the same GPU can earn very different amounts at the same time.
- **You are running more than one workload.** A container job with
  [bandwidth sharing](/faq/jobs/what-is-bandwidth-sharing) on top will beat the average for your card.

## Why are my earnings lower?

- **You have a lower-priority job.** The range for your GPU covers every priority a customer can choose, and you cannot
  pick which one you get. Being at the bottom of the range for a while is normal. See
  [Network Monitor](/faq/jobs/network-monitor) for why demand and priority are separate things.
- **You are between jobs.** While the app shows **Finding Job**, nothing is being earned. Gaps are common at Low or
  Moderate demand.
- **You are only mining.** If no container job is available, Salad may fall back to
  [mining](/faq/jobs/mining-as-a-backup-workload), which on modern cards pays cents per day and will sit well below the
  container averages.

If your machine has not had a container job in a long time, or earns nothing while a job is running, start with
[Not getting container jobs](/troubleshooting/not-earning/not-getting-container-jobs) and
[Job running but no earnings](/troubleshooting/not-earning/job-running-but-no-earnings).
