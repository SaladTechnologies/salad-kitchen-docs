---
title: Can you restart or retry failed jobs on Salad?
description: What Salad does automatically when a container job stops, and why you can't force a retry yourself.
---

No, and you don't need to. Salad handles retries and reassignment automatically, and most things that look like a
"failed job" are a normal job ending.

## Normal reasons a job stops

- The job finished its work (common with [batch jobs](/faq/jobs/what-are-batch-jobs)).
- The SaladCloud customer scaled down and needs fewer machines.
- The customer [reallocated](/troubleshooting/not-earning/how-does-reallocation-work) the job to a different machine.

In each case you are credited for the time the job ran, your machine goes back into the queue, and the app shows
**Finding Job** while it waits for the next one. Nothing to do.

## When Salad retries automatically

If a job stops because of a temporary problem such as a network error or a brief glitch, Salad retries it for you,
provided the customer has configured their workload to allow retries.

## When it won't retry

Some stops can't be retried:

- The customer's container image or workload is misconfigured.
- The workload is an unstable test the customer is still developing.
- The customer's own reallocation rules moved the job off your machine, usually because it ran too slowly, didn't
  produce the expected output, or your connection was too slow or had too much latency.

Those are the customer's decisions and are applied to every machine the same way. Your machine simply returns to the
queue.

## When you need to act

If something on your machine is blocking jobs, the app sends a degraded state notification telling you what to fix.
Until you see one, there is nothing to restart. If jobs keep stopping shortly after starting, see
[Why do jobs keep failing or restarting?](/troubleshooting/not-earning/why-do-jobs-keep-failing-or-restarting)
