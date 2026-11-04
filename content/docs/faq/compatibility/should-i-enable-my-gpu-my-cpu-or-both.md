---
title: Should I enable my GPU, my CPU, or both?
description: Which hardware to enable in Salad depending on what you have and how you use your PC.
---

You can [enable your GPU, your CPU, or both](/guides/using-salad/how-to-enable-and-disable-hardware). For most Chefs,
enable both and Chop while away from the PC.

## GPU

Your dedicated GPU is almost always the most valuable thing you have, and GPU container jobs pay the most. If your card
is [supported](/faq/compatibility/is-my-machine-compatible-with-salad), we recommend enabling it.

## CPU

CPU jobs are less frequent and pay less than GPU jobs, but they are the only option if you have no eligible GPU
(integrated graphics, or a very low-end card such as a GT 1030). A mid-range or better CPU can still earn something.
Some CPU jobs may not use the machine completely, see
[Why is Salad not fully using my Machine?](/faq/compatibility/why-is-salad-not-fully-using-my-machine)

## Both

With both enabled, Salad can run a GPU job or a CPU job, which maximizes earnings. Use
[auto-start](/guides/using-salad/how-to-enable-auto-start) so Salad only Chops when you are idle; it stops as soon as
you come back.
