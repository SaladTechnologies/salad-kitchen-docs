---
title: How much electricity does Salad use?
description: What decides how much power your PC draws while Chopping, and how to work out the cost.
---

It depends on your hardware and how much you run Salad. A container job generally keeps your GPU fully busy, so your
machine draws roughly what it does during a demanding game: the more powerful the components, the more power. Some jobs
also use your CPU, so count both when estimating.

You can find the power ratings of [your GPU and CPU](/guides/your-pc/how-to-find-your-gpu-or-cpu) on the manufacturers'
pages, or measure the real draw with a plug-in meter. Then use the profitability calculator on our
[download page](https://salad.com/download), or follow
[Calculating profitability and electricity costs](/faq/jobs/calculating-profitability-and-electricity-costs) for the
full method.

When Salad is not Chopping, it uses next to no power. The only extra cost then is keeping the PC on just for Salad,
which you can limit by [scheduling Chopping](/guides/using-salad/schedule-chopping).

Don't try to save electricity by power limiting or underclocking your GPU: it blocks container jobs. See
[How power limiting impacts your earnings](/troubleshooting/degraded-state/gpu-power-limit).
