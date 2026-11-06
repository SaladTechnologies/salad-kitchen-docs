---
title: Why is Salad not fully using my machine?
description:
  Low machine usage while Chopping can be normal, because container jobs only use what the customer's workload needs.
---

Because the job doesn't need it. Salad uses your CPU, GPU, or RAM for container jobs, and each job uses only the
hardware in amounts it needs. Many jobs use well under half of a modern CPU, so seeing low CPU usage while a job is
running is normal and doesn't mean anything is wrong. The same goes for GPU jobs, where the entire GPU may not be needed
or not at all times.

Nonetheless, your machine should remain idle throughout your Chopping session, close any programs and games running on
your machine before starting Salad. See
[Close games and other programs](/guides/getting-jobs/close-games-and-other-programs).

Earnings for a job are set by its customer's priority, and paid for by time running, so low usage isn't costing you
anything - in fact it is beneficial due to lower electric consumption! See
[How does my machine earn Salad Balance?](/faq/jobs/how-does-my-machine-earn-salad-balance)

To see what a job is really using, check the **Performance** tab in the Salad app rather than Task Manager; see
[Why isn't Task Manager showing any activity for Salad?](/faq/jobs/why-isnt-task-manager-showing-any-activity-for-salad)
