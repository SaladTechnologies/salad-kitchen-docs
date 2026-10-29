---
title: What are batch jobs?
description: What a batch job is on Salad, and how it differs from a long-running container job.
---

A batch job is a container job that has a fixed amount of work to do and then ends. It typically runs for a few hours or
days across many machines at once, and once the customer's work is finished the job is gone from the network.

## How batch jobs differ from other container jobs

A typical batch job is something like password recovery with a tool such as HashCat, or a one-off data processing run:
it needs a lot of GPUs for a while, and once the result is found there is nothing left to do. While a batch job is
active it usually wants a large number of machines, so it is easy to get one; when it completes, your machine goes back
to **Finding Job**.

Most other container jobs are long-running services, such as serving an AI model, that keep processing new requests for
weeks or months. Those are scaled up and down by the customer as their traffic changes, which is why even a long-running
job can come and go from your machine. It is common to receive the same job again later.

Both kinds pay at the rate set by the customer's chosen priority; see
[How does my machine earn Salad Balance?](/faq/jobs/how-does-my-machine-earn-salad-balance) When a job ends on your
machine, it is credited for the time it ran, and Salad looks for the next one automatically.
