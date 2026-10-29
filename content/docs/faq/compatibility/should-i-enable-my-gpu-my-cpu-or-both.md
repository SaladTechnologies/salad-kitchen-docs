---
title: Should I enable my GPU, my CPU, or both?
description: Which hardware to enable in Salad depending on what you have and how you use your PC.
---

You can [enable your GPU, your CPU, or both](/guides/using-salad/how-to-enable-and-disable-hardware). For most Chefs,
enable both and Chop while away from the PC.

## GPU

Your dedicated GPU is almost always the most valuable thing you have, and GPU container jobs pay the most. If your card
is [supported](/faq/compatibility/is-my-machine-compatible-with-salad), enable it. Don't try to game or run other
GPU-heavy programs while it is Chopping: the job will pause and you'll get a notification until you close them.

## CPU

CPU jobs are less frequent and pay less than GPU jobs, but they are the only option if you have no eligible GPU
(integrated graphics, or a very low-end card such as a GT 1030). A mid-range or better CPU can still earn something.
Many CPU jobs leave some cores free, so light use of the PC may be possible; see
[Why is Salad not fully using my CPU?](/faq/compatibility/why-is-salad-not-fully-using-my-cpu)

## Both

With both enabled, Salad can run a GPU job and a CPU job at the same time, which maximizes earnings but can make the PC
sluggish even for basic tasks. Use [auto-start](/guides/using-salad/how-to-enable-auto-start) so Salad only Chops when
you are idle; it stops as soon as you come back. Also check your power draw: a power-hungry CPU adds electricity cost
that a CPU job may not cover, especially if your rates are high. See
[Calculating profitability and electricity costs](/faq/jobs/calculating-profitability-and-electricity-costs).
