---
title: How does reallocation work?
description:
  What it means when a SaladCloud customer moves a job off your machine, why it happens, and what you can do to keep
  jobs longer.
---

Reallocation is when a SaladCloud customer moves their job from your machine to another one. Your machine stops the job,
is paid for the time it ran, and goes back into the queue for the next job automatically. There's nothing you need to
do.

## Why customers reallocate

Customers choose where their jobs run. They move a job when they're unhappy with its performance on a machine, when they
need a different region or hardware type, when they scale a workload down, or simply as part of how their software
manages its instances. Jobs can also end because the customer withdrew them or because the job
[failed on its own](/troubleshooting/not-earning/why-do-jobs-keep-failing-or-restarting).

## Keeping jobs longer

You can't stop a customer moving a job, but reliable machines are reallocated less:

- Pass every item on [Not getting container jobs](/troubleshooting/not-earning/not-getting-container-jobs).
- Keep the PC idle while Chopping: nothing else on the GPU
  ([why](/troubleshooting/degraded-state/gpu-temporarily-disabled)), and no sleep mode.
- Use a wired, stable connection ([tips](/guides/your-pc/improve-internet-speed)). Jobs that lose contact get moved.
- Run the GPU at stock settings; a power-limited or throttling card performs worse than the customer expects
  ([GPU power limit](/troubleshooting/degraded-state/gpu-power-limit)).
