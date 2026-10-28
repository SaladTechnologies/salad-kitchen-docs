---
title: Is My Machine Compatible With Salad?
---

## Graphics Cards (GPUs)

Here's how to find your GPU if you don't know what your computer has:
[How to Find My GPU](/guides/your-pc/how-to-find-your-gpu-or-cpu).

To understand what Graphics Cards (GPUs) are supported on Salad, let's review the different GPU Chopping modes that are
available, and what each entail:

### Container Workloads

For Container Workloads, Salad supports most NVIDIA GPUs - and some recent dedicated AMD GPUs - with a minimum amount of
4GB of VRAM, though we _highly recommend_ 8GB of VRAM or more for optimal performance. Salad does not currently support
Intel dedicated GPUs for container workloads.

Hardware demand from our clients decides what machines will be assigned a workload, so some older GPUs may work such as
the GTX 1650/Ti, though demand is likely to be low and fluctuate.

In addition to the GPU, containers require at least 8GB of RAM and 70GB of free storage space, as well as a 50 megabit
per second internet connection in both upload and download.

Some examples of supported Graphics Cards:

- NVIDIA GeForce RTX 3070/Ti
- NVIDIA GeForce RTX 4060/Ti
- NVIDIA GeForce RTX 5060/Ti
- NVIDIA GeForce RTX 5090
- NVIDIA RTX A5000

A list of in-demand hardware and their earning rates can be found on our
[Network Monitor](https://salad.com/earn/demand) page.

### Cryptomining

Salad can also utilize your GPU to run Cryptomining workloads during periods of low demand for your hardware. These
workloads can be toggled within the application (Performance -> Configure Hardware -> Advanced Options -> Crypto
Mining).

For Cryptomining Workloads, Salad supports most Dedicated GPUs with at least 2GB of VRAM from recent generations. This
generally means that GT/GTX 900 series NVIDIA GPUs, and R9 300 series AMD GPUs and up should work. There are a few
exceptions to this however on older cards, and some may not work even if meeting the VRAM requirement of 2GB.

### Multi-GPU Systems

Salad does not officially support systems with multiple dedicated GPUs. In such configurations, Salad will prioritize
the highest earning GPU. Chefs cannot run GPU heavy process on one GPU while Chopping on their secondary GPU, they must
Chop Salad while AFK in order to receive the most profitable workloads.

---

## Processors (CPUs)

Here's how to find your CPU if you don't know what your computer has:
[How to Find My CPU](/guides/your-pc/how-to-find-your-gpu-or-cpu).

Salad supports most 64-bit x86 Central Processing Units (CPUs) from within the past 10 years, providing they support
[virtualization](/guides/your-pc/how-to-enable-virtualization-support-on-your-machine). Salad requires a CPU with at
least 4 cores and 8 threads, but we recommend using a CPU with at least 6 cores and 12 threads to maximize your earning
potential.

Some examples of supported CPUs:

- Intel Core Ultra 7 270K Plus
- Intel Core i5-12600K
- AMD Ryzen 5 5600X
- AMD Ryzen 7 7800X

## Memory

Salad requires at least 16GB of RAM to run, but we recommend having at least 32GB of RAM to be compatible with most
workloads.

Salad is compatible with any type of memory, as long as you have enough of it. This means you can use any generation
(DDR3, DDR4, DDR5), any speed (1600MT/s, 2133MT/s, 5600MT/s etc), and of any type (ECC, non-ECC, Unbuffered etc).

As described in the CPU section however, you need to be running a modern version of Windows 10 or Windows 11. Some older
platforms that use DDR3 or DDR4 may not be capable of running Windows 11 officially.

---

## Bandwidth Sharing

In addition to compute workloads that utilize your CPU or your GPU, Salad can also leverage your internet bandwidth to
earn some Salad Balance!

Bandwidth Sharing is currently limited in the supported countries, so you'll need to check if
[your country is available](/troubleshooting/bandwidth-sharing-jobs/bandwidth-sharing-quick-troubleshooting-guide).

While the exact requirements depend on client criteria and decisions, we recommend you have at least a 50 megabit per
second internet in both upload and download speeds, and less than 100ms latency to the nearest server.

---

We recommend enabling as much hardware in your system as you can, to maximize your chances of finding a compatible
workload. We are always adding new workloads, so we recommend leaving your hardware enabled, even if it isn't currently
supported. We may add a new workload that is compatible with your machine in the future.

If you're unable to find your machine's CPU or GPU, or think that something else may be causing your PC to be
incompatible with Salad, feel free to visit our Community Support on [Discord.](http://discord.gg/salad)
