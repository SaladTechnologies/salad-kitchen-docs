---
title: Why is my earning rate sporadic?
description: Why your Salad earning rate rises, falls and sometimes drops to zero over a day or week.
---

Because your rate is decided job by job, and jobs come and go. A rate that changes through the day is normal; a rate
that stays at zero for a long time may not be depending on demand.

## Container jobs

Each job pays the rate set by its customer's priority, so your next job can pay more or less than the last one. Jobs can
be short, and customers scale up and down, so between jobs you sit in **Finding Job** earning nothing. How long those
gaps last depends on demand for your GPU model, which changes hour to hour. See
[Network Monitor](/faq/jobs/network-monitor) for how demand and priority interact.

## Bandwidth sharing

[Bandwidth sharing](/faq/jobs/what-is-bandwidth-sharing) depends on demand in your region, which can follow the time of
day or specific events, so earnings are higher during some hours than others. You are paid per megabit transferred, so
high-usage periods may net higher earnings temporarily.

## Mining

If [mining](/faq/jobs/mining-as-a-backup-workload) is enabled as a backup, it credits every 15 minutes or so, but some
intervals are empty because mining is inherently not stable. On modern cards it may pay cents per day either way.

## What is not normal

- A job running for hours with **no** earnings: see
  [Job running but no earnings](/troubleshooting/not-earning/job-running-but-no-earnings).
- Rate dropped to zero and stays there: see
  [My earning rate has dropped to 0](/troubleshooting/not-earning/my-earning-rate-has-dropped-to-0).
- Hours in Finding Job on an in-demand GPU: see
  [Finding Job for hours](/troubleshooting/not-earning/finding-job-for-hours).
