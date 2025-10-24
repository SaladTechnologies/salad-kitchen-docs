---
title: General Troubleshooting Tips
---

_Last Updated: 23rd October 2025_

If Salad still isn't working quite right after
[whitelisting in your Antivirus software](/docs/troubleshooting/antivirus/), there are a few extra steps to try:

1. Reboot Your Machine.
   1. Reboot your PC by clicking on your Start Menu, selecting the Power icon, and clicking 'Restart'

2. Double Check that your PC is Compatible.
   1. There is a chance that your PC is simply incompatible with Salad, you can check the system requirements
      [on this article here](/docs/faq/compatibility/78-is-my-machine-compatible-with-salad).

3. Try Updating WSL.
   1. Follow [this guide](/docs/guides/your-pc/352-how-to-update-the-wsl-kernel-on-your-machine) to update WSL on your
      machine.

4. Manually Install WSL.
   1. Download the latest version of WSL from the
      [Microsoft Store](https://apps.microsoft.com/detail/9p9tqf7mrm4r?hl=en-us&gl=US). WSL may also be installed via
      Powershell. Open Powershell as an administrator, and run `wsl --install --no-distribution.`

5. Try Closing other open Applications.
   1. Salad uses your system resources in order to earn you balance, if you have other applications open draining these
      resources, it's possible that there isn't enough left over for Salad to start. Salad is best run whilst AFK with
      everything closed.

6. Perform a clean install of Salad.
   1. Sometimes Salad needs a fresh install. To begin, uninstall Salad from your machine completely. That can be done
      via Start Menu &gt; Settings &gt; Apps &gt; Installed Apps &gt; Salad&gt; Uninstall. Once Salad is uninstalled,
      install the latest version, [here](https://salad.com/download).

7. Update your GPU Drivers.
   1. If you haven't updated your GPU drivers in a while, it's possible that Salad and its containers might not be
      compatible with the installed version. If Salad has recently stopped working after a recent driver update, you may
      need to try reverting to an older driver version. This can sometimes happen if there was a bug or problem with the
      latest release. You can find guides here on how to update your GPU drivers:
      1. [AMD drivers](/docs/guides/your-pc/175-how-to-update-my-amd-drivers) if you own an AMD dedicated GPU
      2. [NVIDIA drivers](/docs/guides/your-pc/174-how-to-update-my-nvidia-drivers) if you own an NVIDIA GPU
      3. Intel drivers if you own an Intel dedicated ARC GPU

8. Try Updating Windows.
   1. If you are running on an older build of Windows, or haven't updated in a while, it's possible Salad and its
      containers might be trying to use a system service that isn't available in your version. You can follow
      [Microsoft's guide](https://support.microsoft.com/en-us/windows/update-windows-3c5ae7fc-9fb6-9af1-1984-b5e0412c556a)
      to update your Windows install.

9. Try installing additional Microsoft Redistributable packages.
   1. Normally these will have been installed already by previous applications or games on your PC, but it's possible
      you may be missing some. You can install the required Official Microsoft Redistributable packages from the
      [Microsoft Website](https://aka.ms/vs/17/release/vc_redist.x64.exe).
