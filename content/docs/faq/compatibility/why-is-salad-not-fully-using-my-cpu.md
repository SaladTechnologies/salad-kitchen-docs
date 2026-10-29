---
title: Why is Salad not fully using my CPU?
description: Low CPU usage while Chopping is normal, because container jobs only use what the customer's workload needs.
---

Because the job doesn't need it. Salad uses your CPU for container jobs, and each job uses only the cores and threads
the customer's workload asks for. Many jobs use well under half of a modern CPU, so seeing low CPU usage while a job is
running is normal and doesn't mean anything is wrong. The same goes for GPU jobs, where the CPU does little more than
feed the card.

Earnings for a job are set by its customer's priority, not by how hard your CPU works, so low usage isn't costing you
anything. See [How does my machine earn Salad Balance?](/faq/jobs/how-does-my-machine-earn-salad-balance)

To see what a job is really using, check the **Performance** tab in the Salad app rather than Task Manager; see
[Why isn't Task Manager showing any activity for Salad?](/faq/jobs/why-isnt-task-manager-showing-any-activity-for-salad)
