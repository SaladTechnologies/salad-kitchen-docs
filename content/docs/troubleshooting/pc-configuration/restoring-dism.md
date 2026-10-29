---
title: Restoring DISM
description:
  Repair a broken DISM with SFC and DISM commands, or a Windows repair install, when Salad reports a storage calculation
  error.
---

Salad uses DISM (Deployment Image Servicing and Management), a Windows tool, to prepare the virtual disk of the
container environment. When DISM is corrupt, Salad shows a **storage calculation error** or cannot set up the container
environment, and the logs show DISM commands failing. Support will usually point you here after reading your logs; see
[How to fix a storage calculation error](/troubleshooting/container-jobs/storage-calculation-error).

## 1. Install pending Windows updates

Open **Settings > Windows Update**, click **Check for updates**, install everything offered and reboot. Half-installed
updates are a common cause of broken system components.

## 2. Repair system files

1. Search for "command prompt" in the Start menu and choose **Run as administrator**.
2. Run these commands one at a time, waiting for each to finish:

   ```
   sfc /scannow
   Dism.exe /online /cleanup-image /CheckHealth
   Dism.exe /online /cleanup-image /ScanHealth
   Dism.exe /online /cleanup-image /RestoreHealth
   ```

3. Reboot, start Salad and check whether the error is gone.

## 3. Repair install Windows

If the commands fail or the error persists, a repair install replaces every system file while keeping your files and
programs:

1. Download the Media Creation Tool for your Windows version:
   [Windows 10](https://www.microsoft.com/software-download/windows10) or
   [Windows 11](https://www.microsoft.com/software-download/windows11) (click **Download now** under "Create Windows
   installation media").
2. Run it and choose **Upgrade this PC now**.
3. When asked, choose to **keep personal files and apps**, then let it finish and reboot.

After the repair install, run Windows Update again, then start Salad. If the storage calculation error still appears,
send [Salad Support](/contact) your machine ID, a screenshot of the notification and your zipped logs. See
[How to create a support ticket](/guides/your-pc/how-to-create-a-support-ticket).
