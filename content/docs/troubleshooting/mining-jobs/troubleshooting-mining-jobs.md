---
title: 'Troubleshooting Mining Jobs'
---

If you're experiencing issues running [Cryptomining Jobs](/guides/getting-jobs/getting-cryptomining-jobs), here are some
troubleshooting steps you can take to resolve it.

1. Make sure Salad is whitelisted in your [Firewall and Antivirus](/troubleshooting/antivirus). If Salad is being
   blocked by your firewall or antivirus, it may not be able to run Cryptomining Jobs properly.
2. Ensure your GPU drivers are up to date. Outdated drivers can cause performance issues and may prevent Cryptomining
   Jobs from running correctly. You can find guides here for [NVIDIA](/guides/your-pc/how-to-update-my-nvidia-drivers),
   [AMD](/guides/your-pc/how-to-update-my-amd-drivers), and [Intel](/guides/your-pc/how-to-update-your-intel-drivers)
   GPUs.
3. Check that you have Proof of Work enabled in your [Salad App Settings](/guides/using-salad/salad-app-settings). Proof
   of Work is required to run Cryptomining Jobs.
4. Ensure that your GPU is [compatible](/faq/compatibility/is-my-machine-compatible-with-salad) with Cryptomining Jobs.
5. Install the latest MSVC++ Redistributable package. This is required for some of our miner libraries to run properly.
   You can download it from the official Microsoft website
   [here](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).
6. Ensure your GPU is at stock settings. Overclocked, or underclocked, GPUs can cause instability and may prevent
   Cryptomining Jobs from running correctly. If you have overclocked your GPU, try resetting it to its default settings.
   We do not support overclocked hardware.

If you're still experiencing issues after trying these steps, please reach out to [Salad Support](/contact) for further
assistance.
