---
title: Incompatible Configurations
---

At Salad, we love a good mix - whether it's in a fresh garden bowl or a balanced workload on your machine. But when it
comes to GPUs, some combos just don't work. If you're seeing Node Compatibility Workload (NCW) statuses, and your system
has both a modern NVIDIA GPU (like an RTX 3080 or 2080) and an older model (such as a GT 210, GT 710, or GTX 500
series), then you've found the problem. Unfortunately, this mixed GPU setup is incompatible with Salad and will severely
limit your earning potential.

## The Issue: Old GPUs Spoiling the Batch

Much like adding wilted lettuce to a fresh bowl of greens, pairing an older NVIDIA GPU with a modern one can lead to
instability and incompatibility. Salad relies on the system's GPU capabilities to determine which workloads it can run,
and older GPUs create conflicts that prevent most jobs from being assigned. This means:

- You won't be able to run most compute container jobs.
- You'll be limited to crypto-mining, CPU-only containers, and bandwidth-sharing jobs.
- Your system's performance within Salad will be significantly reduced.

---

## **How to Fix It: Freshen Up Your Salad**

To restore compatibility and get the most out of your setup, follow these steps:

1. **Identify Your GPU Setup:**
   - Press `Win + R` , type `dxdiag` , and navigate to the Display tab.
   - Alternatively, open Device Manager (`Win + X` → `Device Manager` ) and check under `Display Adapters` .

2. **Remove the Older GPU:**
   - If the older GPU is a dedicated card, physically remove it from your machine.
   - If it's an onboard GPU, check your BIOS settings to disable it.

3. **Update/Reinstall NVIDIA Drivers:**
   - Visit [NVIDIA's official site](https://www.nvidia.com/Download/index.aspx) to download the latest drivers for your
     modern GPU.
   - Use `DDU (Display Driver Uninstaller)` in Safe Mode to completely remove old drivers before
     [reinstalling fresh ones](/guides/your-pc/how-to-reinstall-gpu-drivers)

4. **Restart Your System:**
   - After removing the old GPU and installing fresh drivers, restart your machine.

5. **Verify in Salad:**
   - Open Salad and wait for a workload to run. If it does, then your Node Compatibility Workload was successfully run!
   - If issues persist, reach out to Salad Support and make sure to include all relevant information so we can assist
     you.
