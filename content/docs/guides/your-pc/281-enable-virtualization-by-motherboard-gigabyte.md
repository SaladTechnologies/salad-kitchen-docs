---
title: 'Enable Virtualization by Motherboard: Gigabyte'
---

Depending on your hardware configuration, your motherboard manufacturer's software may dictate how and where BIOS
settings can be accessed and modified. This guide details common BIOS setup patterns on machines equipped with a
motherboard manufactured by Gigabyte.

*If you don't know what kind of motherboard you are using, please
see* [Identifying Your Motherboard](/docs/guides/your-pc/280-identifying-your-motherboard)_._

**With Intel Processors**

1. Restart or boot your computer.
2. Immediately press the **BIOS setup key** listed on the Gigabyte loading screen. _(If no key is listed, try pressing
   the **Del** key to enter the BIOS Setup Utility.)_
3. Navigate to the **BIOS Features** tab using the arrow keys or mouse.\*

   \*_In the utility software of certain Gigabyte motherboards, required virtualization support features may be listed
   under the **Chipset** tab._

4. Scroll through the menu to find **Intel Virtualization Technology, Intel Virtualization Technology (VT-x)**, **Intel
   VT**, **VT-d**, or generic terms such as "Virtualization\*\*."\*\*

   ![](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-gigabyte-1.png)([source](https://www.ldplayer.net/blog/enable-virtualization-technology-on-gigabyte-computer-and-motherboard.html))
   ![](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-gigabyte-2.png)([source](https://www.ldplayer.net/blog/enable-virtualization-technology-on-gigabyte-computer-and-motherboard.html))

5. Enable all relevant features with the left or right arrow key.
6. Press **F10** to save your configuration changes and exit.

**With AMD Processors**

1. Restart or boot your computer.
2. Immediately press the **BIOS setup key** listed on the Gigabyte loading screen. _(If no key is listed, try pressing
   the **Del** key to enter the BIOS Setup Utility.)_
3. Navigate to the **M.I.T.** tab using the arrow keys or mouse.
4. Click **Advanced Frequency Settings**.
   ![](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-gigabyte-3.png)([source](https://www.ldplayer.net/blog/enable-virtualization-technology-on-gigabyte-computer-and-motherboard.html))
5. Click **Advanced CPU Core Settings**.

   ![](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-gigabyte-4.png)([source](https://www.ldplayer.net/blog/enable-virtualization-technology-on-gigabyte-computer-and-motherboard.html))

6. Enable **SVM Mode** using the arrow keys or mouse.

   ![](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-gigabyte-5.png)([source](https://www.ldplayer.net/blog/enable-virtualization-technology-on-gigabyte-computer-and-motherboard.html))

   ![](../../../../content/images/guides/your-pc/enable-virtualization-by-motherboard-gigabyte-6.png)([source](https://www.ldplayer.net/blog/enable-virtualization-technology-on-gigabyte-computer-and-motherboard.html))

7. Press **F10** to save your configuration changes and exit.
