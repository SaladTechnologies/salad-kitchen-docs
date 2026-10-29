---
title: My antivirus isn't listed here
description:
  Generic steps and vendor links for whitelisting Salad in antivirus products that do not have their own guide.
---

If there is no guide for your antivirus, follow your vendor's own instructions for adding an exclusion (sometimes called
an exception, allow list or trusted folder) and add these two folders:

- `C:\Program Files\Salad`
- `C:\ProgramData\Salad`

Vendor instructions for some products:

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

## If your product only accepts files

Add every `.exe` under `C:\ProgramData\Salad\workloads`. Each [miner](/faq/jobs/mining-as-a-backup-workload) has its own
subfolder there. You may need to repeat this when a miner is updated. If that is too much upkeep, turn mining off in the
Salad app's [Settings](/guides/using-salad/salad-app-settings) and run container jobs only.

## Restore anything already quarantined

After adding the exclusions, open your antivirus's quarantine or protection history, restore any Salad or miner files it
removed, then start Salad again.

## Web shields and firewalls

Many suites include a web shield or firewall that blocks the miners' connections separately from file scanning. If Salad
still cannot start a miner after whitelisting the folders, allow the miner executables in that module too, or see
[Whitelisting Salad in your firewall](/troubleshooting/antivirus/whitelisting-salad-in-your-firewall).
