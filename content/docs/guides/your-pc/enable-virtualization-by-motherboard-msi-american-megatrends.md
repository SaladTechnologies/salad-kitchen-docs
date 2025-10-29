---
title: 'Enable Virtualization by Motherboard: MSI (American Megatrends)'
---

_Last Updated: 23rd October 2025_

Depending on your hardware configuration, your motherboard manufacturer's software may dictate how and where BIOS
settings can be accessed and modified. This guide details common BIOS setup patterns on machines equipped with a
motherboard manufactured by MSI or American Megatrends.

*If you don't know what kind of motherboard you are using, please
see* [Identifying Your Motherboard](/docs/guides/your-pc/identifying-your-motherboard)_._

**With Intel Processors**

1. Restart or boot your computer.
2. Immediately press the **Del** to enter the BIOS Setup Utility. You will be directed to a screen that says "Aptio
   Setup Utility – American Megatrends, Inc."

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-1.png)

3. Using the arrow keys, navigate to the **Advanced** tab.
4. Scroll down to find the **Intel Virtualization Technology** setting.

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-2.png)

5. Enable this setting with the left or right arrow key.
6. Press **F10** to save your configuration changes and exit.

**With AMD Processors**

_On most systems equipped with an AMD processor and a motherboard from MSI, virtualization is enabled by default._

1. Restart or boot your computer.
2. Immediately press the **Del** to enter the BIOS Setup Utility.
3. Using the arrow keys, navigate to the **Advanced** tab.
4. Enable IOMMU with the left or right arrow key.

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-3.png)

5. Enable SVM Mode with the left or right arrow key.\*

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-4.png)

   \*_In the utility software of certain MSI motherboards (especially those produced since 2019), these virtualization
   features may be listed under the **Overclocking** tab, within the **Advanced CPU Configuration** submenu._

   ![Screenshot of BIOS](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-msi-5.png)

6. Press **F10** to save your configuration changes and exit.
