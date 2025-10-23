---
title: What is WSL?
---

_Last Updated: 23rd October 2025_

WSL (Windows Subsystem for Linux) is a Windows operating system feature that allows a user to run Linux, and Linux
software, on Windows. It's run in a secure virtual environment that provides a level of security between your PC, and
what's running inside.

## Why Do I Need WSL Enabled For Container Workloads?

The container workload jobs are run inside of WSL. We use WSL because it helps keep job data separate from your PC. This
improves security and provides privacy for you and the Customer running the job. It also allows us to ensure
compatibility across the network, by giving all machines the same base to run from.

---

## How Do I Enable WSL?

If virtualization is enabled on your PC, the Salad App will automatically handle the installation of WSL when you set up
container workloads. Here's how that works:

1. When you and your PC are eligible, you will receive a notification in the Salad App widget saying that your PC is
   ready to set up container workloads.
2. Clicking "Setup" in the notification will take you to the Salad App settings. Click "Set up Container Workloads" in
   the settings. This process may take a few minutes.
3. Once the setup is complete, you will need to reboot your PC. On the restart, your PC will say "Updates are underway.
   Please keep your computer on" and "Customizing features for you". These notifications are normal, so don't turn off
   your computer during this process.

When you've rebooted, you're ready to Chop container workloads.

### Enabling WSL Manually

In the extremely rare case that the Salad App fails to enable WSL automatically, you can do it yourself by following
these steps:

1. Press the "Windows" key and type "cmd".
2. Click "Run as administrator" and select "Yes" when prompted with "Do you want to allow this app to make changes to
   your device?"
3. In the command prompt window, type wsl --install
4. Restart your PC.

Once you've rebooted, and if the installation proceeds without error, you have successfully enabled WSL on your PC.

---

## Salad Enterprise Linux

When WSL is installed on your PC, you might see a resource in your Windows Explorer side bar called "Salad Enterprise
Linux". This is where container workloads live and you will be unable to access it (and containers will be unable to
access the rest of your PC!). You can just ignore it, it's just Windows letting you know that WSL is there.

---

### Updating Your Windows OS

Even if you opt-in to container workloads, your operating system software may be too old to run container workloads.
Updating to the latest Windows 10 or 11 can solve this issue. Check for available updates in your PC settings to see if
your system is eligible for an operating system update.

If you have any problems going through these setup steps, or have additional questions about WSL in Salad, contact
[Salad Support](/docs/guides/your-pc/216-how-to-create-a-support-ticket).
