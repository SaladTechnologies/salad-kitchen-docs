---
title: Can I adjust how much of my GPU is used?
description: Why Salad jobs need the whole GPU and why there is no usage slider.
---

No. A customer renting your GPU is paying for a specific card at full performance, and the job is sized for exactly
that. Salad can't hand out half a GPU, so there is no slider for GPU or CPU usage.

The same applies to RAM and CPU: a job uses what the customer's workload asks for, up to a limit the app keeps so your
machine stays responsive. Power limiting or underclocking the card to make it use less is not a workaround either: it
triggers a "GPU Power Limit Set" notification and blocks container jobs. See
[How power limiting impacts your earnings](/troubleshooting/degraded-state/gpu-power-limit).

If you need your PC for something else, stop Chopping, or use
[scheduled Chopping](/guides/using-salad/schedule-chopping) and
[auto-start](/guides/using-salad/how-to-enable-auto-start) so Salad only runs while you are away. For what a job uses,
see [Does Salad use all of my PC's resources?](/faq/jobs/does-salad-use-all-of-my-pcs-resources)
