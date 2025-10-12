---
title: My Antivirus isn't Listed Here
---

# My Antivirus isn't Listed Here

We have in-depth guides available for many common Antivirus options. If there isn't a guide for you, you can still follow the official whitelist guide from your Antivirus manufacturer. When you get to adding an exclusion, you'll need to add this path: `C:\ProgramData\Salad\workloads`.

- [Webroot](https://answers.webroot.com/Webroot/ukp.aspx?pid=17&app=vw&vw=1&solutionid=25&t=You-want-to-exclude-items-from-scans)
- [Trend Micro](https://helpcenter.trendmicro.com/en-us/article/TMKA-14498)
- [F-Secure](https://help.f-secure.com/product.html#home/total-windows/latest/en/task_13205052E3D44C44BA2491A55A7F818F-latest-en)
- [G Data](https://www.gdata.de/help-en/consumer/FAQ/BlockedApplication/)
- [Panda](https://www.pandasecurity.com/homeusers/downloads/docs/product/help/pd/en/43.htm)
- [K7](https://support.k7computing.com/index.php?%2Fselfhelp%2Fview-article%2FHow-can-I-manage-exclusion)
- [Sophos](https://docs.sophos.com/central/customer/help/en-us/ManageYourProducts/GlobalSettings/GlobalExclusions/index.html)
- [Comodo](https://help.comodo.com/topic-399-1-790-10378-.html)
- [VIPRE](https://success.vipre.com/endpoint-cloud-manage/endpoint-cloud-add-exclusion)
- [SecureAge Apex](https://secureaplus.secureage.com/Main/resource/SecureAPlus3.4User%20Guidev3.0.pdf)

If your Antivirus isn't listed above, we can still help. Whilst we can't provide an in-depth guide, you can follow these basic steps below that should still apply to your Antivirus.

* * *

## Whitelisting Salad's Miners

If Salad is being blocked by your Antivirus, you'll need to add a whitelist. The folder you need to whitelist is `C:\ProgramData\Salad\workloads` . If your Antivirus service does not support folder whitelists, you will need to add a whitelist for the individual [miner](https://support.salad.com/article/80-what-miners-does-salad-currently-use) `.exe` files. These can be found under `C:\ProgramData\Salad\workloads` . In this directory, you can find all of the folders for the miner plugins we use, you'll need to whitelist each of the files within these folders.

* * *

## Disabling Web-Shields

Your Antivirus may have a built-in web-shield or firewall service, if Salad is still being blocked after whitelisting the above path, you may need to disable this feature from your Antivirus, or add a whitelist for the miners.
