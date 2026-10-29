---
title: Enable virtualization on Acer PCs
description: Turn on Intel VT-x or AMD SVM in the BIOS of an Acer desktop or laptop so Salad can run container jobs.
---

These steps cover Acer prebuilt desktops and laptops. The setup key is **F2**. Not sure which CPU you have? See
[Identifying your CPU](/guides/your-pc/identifying-your-cpu). General guidance is in
[How to enable virtualization support](/guides/your-pc/how-to-enable-virtualization-support-on-your-machine).

## Intel processors

1. Restart your PC and press **F2** repeatedly as it boots to open the BIOS Setup Utility.

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-acer-1.png)

2. Use the arrow keys to open the **Advanced** tab.
3. Enable both **Intel VTX** and **Intel VTXD**. On some models these settings are hidden until you press **Ctrl + S**.
4. Press **F10** to save and exit.

## AMD processors

1. Restart your PC and press **F2** repeatedly as it boots to open the BIOS Setup Utility.

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-acer-2.png)

2. Use the arrow keys to open the **Advanced** tab.
3. Enable both **AMD-SVM** and **AMD-IOMMU**. On some models these settings are hidden until you press **Ctrl + S**.
4. Press **F10** to save and exit.
