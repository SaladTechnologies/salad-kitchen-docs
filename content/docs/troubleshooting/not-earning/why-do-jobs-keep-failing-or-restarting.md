---
title: Why do jobs keep failing or restarting?
description:
  Why container jobs can stop, restart or last only minutes without any error in the app, and why that usually isn't
  your machine.
---

If container jobs regularly stop, restart or last only a few minutes, and the app shows **no** Degraded notification,
the cause is almost always on the customer's side rather than yours. You're paid for the time each job ran, and the
machine goes straight back into the queue.

## What's usually happening

- **The customer ended or moved the job.** Customers scale their workloads up and down all day, and they can
  [reallocate](/troubleshooting/not-earning/how-does-reallocation-work) a job to another machine at any time. Short jobs
  are normal.
- **The job itself has a problem.** A customer still testing a new workload may ship one that crashes or fails its own
  health check; it restarts a few times and is then withdrawn. Salad tells the customer automatically. Nothing for you
  to do.
- **It was a [batch job](/faq/jobs/what-are-batch-jobs)** - a job meant to run for a bounded time and finish.

## When it is your machine

If restarts come with a notification, follow it: [Degraded State](/troubleshooting/degraded-state). Restarts can also
come from a connection that drops (the job loses contact and is moved), from the PC sleeping, or from another program
grabbing the GPU mid-job. A wired connection and leaving the PC alone fix most of these:
[Improve your internet connection](/guides/your-pc/improve-internet-speed),
[Disable sleep mode](/guides/using-salad/how-to-disable-sleep-mode).

If every job on your machine lasts under a few minutes for a whole day, send [Salad Support](/contact) your machine ID
and your logs folder zipped ([how to find it](/guides/using-salad/how-to-find-your-salad-log-files)); the logs show
whether the job exited on its own or was stopped from outside.
