---
title: 'Enable virtualization by motherboard: MSI (American Megatrends)'
description: Turn on Intel Virtualization Technology or AMD SVM Mode and IOMMU in the Aptio BIOS of an MSI motherboard.
---

These steps cover MSI motherboards, which use the American Megatrends (Aptio) BIOS. The setup key is **Del**. Not sure
which board you have? See [Identifying your motherboard](/guides/your-pc/identifying-your-motherboard). General guidance
is in [How to enable virtualization support](/guides/your-pc/how-to-enable-virtualization-support-on-your-machine).

## Intel processors

1. Restart your PC and press **Del** repeatedly as it boots. The BIOS shows "Aptio Setup Utility – American Megatrends,
   Inc." at the top.

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-1.png)

2. Open the **Advanced** tab and scroll to **Intel Virtualization Technology**.

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-2.png)

3. Set it to **Enabled**.
4. Press **F10** to save and exit.

## AMD processors

On most MSI boards with an AMD CPU, virtualization is already enabled. If it is not:

1. Restart your PC and press **Del** repeatedly as it boots.
2. Open the **Advanced** tab.
3. Set **IOMMU** to **Enabled**.

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-3.png)

4. Set **SVM Mode** to **Enabled**.

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-4.png)

   On newer MSI boards (Click BIOS 5), SVM Mode is under the **OC** (Overclocking) tab, in **Advanced CPU
   Configuration**.

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-5.png)

5. Press **F10** to save and exit.
