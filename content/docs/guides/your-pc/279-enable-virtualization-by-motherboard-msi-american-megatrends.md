---
title: 'Enable Virtualization by Motherboard: MSI (American Megatrends)'
---

# Enable Virtualization by Motherboard: MSI (American Megatrends)

Depending on your hardware configuration, your motherboard manufacturer’s software may dictate how and where BIOS
settings can be accessed and modified. This guide details common BIOS setup patterns on machines equipped with a
motherboard manufactured by MSI or American Megatrends.

*If you don’t know what kind of motherboard you are using, please
see* [Identifying Your Motherboard](https://support.salad.com/article/280-identifying-your-motherboard)_._

**With Intel Processors**

1. Restart or boot your computer.
2. Immediately press the **Del** to enter the BIOS Setup Utility. You will be directed to a screen that says “Aptio
   Setup Utility – American Megatrends, Inc.”

   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/6351841c9471985a5ac54156/file-svZsFTmxqk.png)([Source](https://us.informatiweb.net/tutorials/it/bios/enable-virtualization-intel-vt-x-amd-v--3.html#msi-bios-american-megatrends))

3. Using the arrow keys, navigate to the **Advanced** tab.
4. Scroll down to find the **Intel Virtualization Technology** setting.

   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/6351842e927a2c1634dfc480/file-XYaqCcBBht.png)([Source](https://us.informatiweb.net/tutorials/it/bios/enable-virtualization-intel-vt-x-amd-v--3.html#msi-bios-american-megatrends))

5. Enable this setting with the left or right arrow key.
6. Press **F10** to save your configuration changes and exit.

**With AMD Processors**

*On most systems equipped with an AMD processor and a motherboard from MSI, virtualization is enabled by default.* 

1. Restart or boot your computer.
2. Immediately press the **Del** to enter the BIOS Setup Utility.
3. Using the arrow keys, navigate to the **Advanced** tab.
4. Enable IOMMU with the left or right arrow key.

   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/63518501927a2c1634dfc485/file-Cg6UQBK3GU.png)([Source](http://www.gigabyte.com/support-downloads/faq-page.aspx?fid=1391))

5. Enable SVM Mode with the left or right arrow key.\*

   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/635185139471985a5ac5415b/file-zFGNvSszrM.png)([Source](http://www.gigabyte.com/support-downloads/faq-page.aspx?fid=1391))

   \*_In the utility software of certain MSI motherboards (especially those produced since 2019), these virtualization
   features may be listed under the **Overclocking** tab, within the **Advanced CPU Configuration** submenu._

   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/635185319471985a5ac5415e/file-sUEt1HfQUv.png)([Source](https://www.technewstoday.com/how-to-enable-virtualization-in-bios/))

6. Press **F10** to save your configuration changes and exit.
