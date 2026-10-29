---
title: Enable virtualization on Dell PCs
description: Turn on Virtualization and VT-d in the BIOS of a Dell desktop or laptop so Salad can run container jobs.
---

These steps cover Dell prebuilt desktops and laptops. The setup key is **F2**. Not sure which CPU you have? See
[Identifying your CPU](/guides/your-pc/identifying-your-cpu). General guidance is in
[How to enable virtualization support](/guides/your-pc/how-to-enable-virtualization-support-on-your-machine).

1. Restart your PC. When the Dell logo appears, press **F2** to open the BIOS Setup Utility.
2. Open the **Advanced** tab. Some systems have a separate **Virtualization Support** section instead; open that one if
   you see it.
3. Select **Virtualization**.
4. Enable **Virtualization** and **Virtualization for Direct-IO** (called **VT-d** on Intel systems).
5. Save your changes and exit. The PC reboots.
