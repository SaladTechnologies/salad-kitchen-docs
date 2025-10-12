---
title: Restoring DISM
---

# Restoring DISM

The DISM tool is used to mount virtual system files into the Salad Container Environment. Some Chefs might have a corrupted or otherwise non-usable DISM installation, which will prevent Salad from running properly. Let's look into restoring DISM to its normal state on your machine.

## **Windows Updates**

Chefs should double-check that their machine doesn't have any pending security patches or otherwise system updates first:

- Go to Start &gt; Settings &gt; Update &amp; Security &gt; Windows Update &gt; Check for Updates.

* * *

## **Verifying the system with SFC (System File Checker)**

Try running SFC along with the DISM commands to repair system files:

1\. On the search bar, type "command prompt" and select Run as administrator

2\. Type the following commands in order

1. 1. `sfc /scannow` then press Enter.
   2. `Dism.exe /online /cleanup-image /CheckHealth` then press Enter.
   3. `Dism.exe /online /cleanup-image /ScanHealth` then press Enter.
   4. `Dism.exe /online /cleanup-image /RestoreHealth` then press Enter.

3\. Reboot your machine and check again

* * *

## **Does the issue persist?**

If the issue persist, SFC was possibly not able to fully repair DISM. In these cases, it is recommended to perform a repair install of Windows which fixes the broken system files on your machine.

1. Download the media creation tool here:
   
   \- Windows 10: [https://www.microsoft.com/software-download/windows10](https://www.microsoft.com/software-download/windows10)
   
   \- Windows 11: [https://www.microsoft.com/software-download/windows11](https://www.microsoft.com/software-download/windows11)

(click on "Download tool now") and wait for the download to finish

2. Temporarily disable your firewall/antivirus, then open the tool and select the option "Upgrade this PC now".
3. Wait until your machine goes to the process of repair install. Make sure to select the option to keep your files during the repair process.
