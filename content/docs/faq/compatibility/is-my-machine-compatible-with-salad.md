---
title: Is My Machine Compatible With Salad?
---

# **GPU:**

To understand what Graphics Cards (GPUs) are supported on Salad, let's review the different GPU Chopping modes that are
available, and what each entail.

## **Container Workloads**

For Container Workloads, Salad currently only supports more recent NVIDIA-only GPUs, with a recommended minimum amount
of 8GB of VRAM. This means that you'll need at least an RTX 2070 and up to be able to Chop containers. As containers are
based on demand from our clients, some older GPUs may work such as the GTX 1650/Ti, though demand is likely to be low
and fluctuate.

In addition to the GPU, containers require at least 8GB of memory (RAM) and 70GB of free storage space, as well as a 15
megabit per second internet connection in both upload and download.

For best performance while Chopping, we recommend **NVIDIA GPUs 3080 and later with a minimum of 16 GB of RAM and 8 GB
of VRAM**

Some examples of supported Graphics Cards:

- NVIDIA GeForce RTX 3070
- NVIDIA GeForce RTX 4060/Ti
- NVIDIA GeForce RTX 4090

## **Cryptomining**

For Cryptomining Workloads, Salad supports most Dedicated GPUs with at least 2GB of VRAM from recent generations. This
generally means that GT/GTX 900 series NVIDIA GPUs, and R9 300 series AMD GPUs and up should work. There are a few
exceptions to this however on older cards, and some may not work even if meeting the VRAM requirement of 2GB.

Some examples of supported Graphics Cards:

- NVIDIA GeForce GTX 1070
- NVIDIA GeForce RTX 4060
- AMD Radeon RX 5700XT
- AMD Radeon RX 7800XT

Salad does **not** currently support Intel dedicated GPUs, or Intel integrated GPUs. Salad does support systems with
only AMD Integrated Vega Graphics (Vega 2, 3, 5, 7, 8, 9, 10, 11, 12) installed, as long as they are the only GPU in the
system. If you have a dedicated GPU along with your Integrated AMD GPU, it may not be used.

In systems with multiple dedicated GPUs, Salad will prioritize the GPU that has an active workload available. Multiple
GPUs in the same machine cannot be utilized at the same time. Chefs cannot run GPU heavy process on one GPU while
Chopping on their secondary GPU, they must Chop Salad while AFK in order to receive the most profitable workloads.

Here's how to find your GPU if you don't know what your computer has:
[How to Find My GPU](/guides/your-pc/how-to-find-your-gpu-or-cpu).

---

### **CPU:**

Salad supports most 64-bit x86 Central Processing Units (CPUs) from within the past 10 years, providing they support
[virtualization.](/guides/your-pc/how-to-enable-virtualization-support-on-your-machine) Quadcore and above CPUs will
perform optimally while running Salad, users may run dualcore CPUs at their own risk.

Some examples of supported CPUs:

- Intel Core i5 8300H
- Intel i5-12600K
- AMD Ryzen 3 3100
- AMD Ryzen 7 7800X

You can find your CPU on the same page as your GPU, after selecting CPU at the top of the page.

If you're unable to find your machine's CPU or GPU, or think that something else may be causing your PC to be
incompatible with Salad, feel free to visit our Community Support on [Discord.](http://discord.gg/salad)

### Memory:

Salad is compatible with any type of memory, as long as you have enough of it. This means you can use any generation
(DDR3, DDR4, DDR5), any speed (1600MT/s, 2133MT/s, 5600MT/s etc), and of any type (ECC, non-ECC, Unbuffered etc).

As described in the CPU section however, you need to be running a modern version of Windows 10 or Windows 11. Some older
platforms that use DDR3 or DDR4 may not be capable of running Windows 11 officially.

---

### **Bandwidth Sharing:**

In addition to compute workloads that utilize your CPU or your GPU, Salad can also leverage your internet bandwidth to
earn some Salad Balance!

Bandwidth Sharing is currently limited in the supported countries, so you'll need to check if
[your country is available](/troubleshooting/bandwidth-sharing-jobs/bandwidth-sharing-quick-troubleshooting-guide).

While the exact requirements depend on client criteria and decisions, we recommend you have at least a 15 megabit per
second internet in both upload and download speeds, and less than 100ms latency to the nearest server.

---

We recommend enabling as much hardware in your system as you can, to maximize your chances of finding a compatible
workload. We are always adding new workloads, so we recommend leaving your hardware enabled, even if it isn't currently
supported. We may add a new workload that is compatible with your machine in the future.
