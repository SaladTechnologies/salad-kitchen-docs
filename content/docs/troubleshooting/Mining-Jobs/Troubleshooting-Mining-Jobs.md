---
title: 'Troubleshooting Mining Jobs'
---

_Last Updated September 11, 2025_

If you're experiencing issues running [Cryptomining Jobs](/docs/Guides/Getting-Jobs/Getting-Cryptomining-Jobs), here are
some troubleshooting steps you can take to resolve it.

1. Make sure Salad is whitelisted in your [Firewall and Antivirus](/docs/Troubleshooting/Antivirus). If Salad is being
   blocked by your firewall or antivirus, it may not be able to run Cryptomining Jobs properly.
2. Ensure your GPU drivers are up to date. Outdated drivers can cause performance issues and may prevent Cryptomining
   Jobs from running correctly. You can find guides here for
   [NVIDIA](/docs/Guides/Your-PC/174-how-to-update-my-nvidia-drivers),
   [AMD](/docs/Guides/Your-PC/175-how-to-update-my-amd-drivers), and
   [Intel](/docs/Guides/Your-PC/How-to-Update-your-Intel-Drivers) GPUs.
3. Check that you have Proof of Work enabled in your
   [Salad App Settings](/docs/Guides/Using-the-Salad-App/353-Salad-App-settings). Proof of Work is required to run
   Cryptomining Jobs.
4. Ensure that your GPU is [compatible](/docs/FAQ/Compatibility/78-is-my-machine-compatible-with-salad) with
   Cryptomining Jobs.
5. Install the latest MSVC++ Redistributable package. This is required for some of our miner libraries to run properly.
   You can download it from the official Microsoft website
   [here](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).
6. Ensure your GPU is at stock settings. Overclocked, or underclocked, GPUs can cause instability and may prevent
   Cryptomining Jobs from running correctly. If you have overclocked your GPU, try resetting it to its default settings.
   We do not support overclocked hardware.

If you're still experiencing issues after trying these steps, please reach out to
[Salad Support](/docs/Guides/Your-PC/216-how-to-create-a-support-ticket) for further assistance.
