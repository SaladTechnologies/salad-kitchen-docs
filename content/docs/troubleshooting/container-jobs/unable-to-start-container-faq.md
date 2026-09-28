---
title: Unable to Start a Container Workload
---

Salad couldn't start a container workload on your PC. The most common fix is updating your NVIDIA drivers. Work through
the sections below in order, and try running Salad again after each one.

## Update Your NVIDIA Drivers

Salad's container workloads use your GPU through WSL (Windows Subsystem for Linux). GPU support inside WSL comes from
your normal Windows NVIDIA driver, so keeping that driver up to date is important.

1. Install the latest NVIDIA driver for your GPU on Windows. Follow our guide:
   [How to Update Your NVIDIA Drivers](/guides/your-pc/how-to-update-my-nvidia-drivers).
2. Restart your PC.

Do not install any Linux NVIDIA driver inside WSL. The Windows driver is all you need, and a Linux driver inside WSL can
cause problems.

## If You Use Docker Desktop: Disable Resource Saver

If Docker Desktop is installed on your PC, its Resource Saver setting can interfere with Salad's container workloads.

1. Open Docker Desktop.
2. Open Settings and locate Resource Saver.
3. Disable Resource Saver.

## Other Things to Try

1. Restart Salad, then restart your PC.
2. Update WSL. Open a terminal as an administrator, run `wsl --update`, then restart your PC. For more detail, see
   [How to Update the WSL Kernel on Your PC](/guides/your-pc/how-to-update-the-wsl-kernel-on-your-machine).
3. Temporarily turn off any VPN or network filtering apps, then try again.

## Still Stuck?

After trying the fixes above, leave Salad running for 30 to 40 minutes to give it time to start a workload. If you still
see the error, contact [Salad Support](/contact).
