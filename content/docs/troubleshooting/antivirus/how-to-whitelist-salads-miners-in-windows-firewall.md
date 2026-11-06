---
title: Whitelisting Salad in Windows Firewall
description: Allow Salad's miners through Windows Firewall when they are installed but cannot connect to their pools.
---

If a miner is listed in Windows Firewall but not allowed through, it cannot reach its pool and Salad reports no earnings
from mining. Allow it like this:

1. Open **Windows Security** from the Start menu.

   ![Screenshot of windows security app](../../../../content/images/troubleshooting/antivirus/how-to-whitelist-salad-in-windows-firewall-1.png)

2. Open **Firewall & network protection**.

   ![Screenshot of firewall settings](../../../../content/images/troubleshooting/antivirus/how-to-whitelist-salad-in-windows-firewall-2.png)

3. Click **Allow an app through firewall**.

   ![Screenshot showing how to add an app in firewall](../../../../content/images/troubleshooting/antivirus/how-to-whitelist-salad-in-windows-firewall-3.png)

4. Click **Change settings**, then scroll to the affected miner (for example XMRig, Rigel or T-Rex).

   ![screenshot of added miners](../../../../content/images/troubleshooting/antivirus/how-to-whitelist-salad-in-windows-firewall-4.png)

5. Tick the box on the left of the miner and both **Private** and **Public** boxes on the right. If the same miner
   appears more than once, allow every entry. Click **OK**.

6. Start Salad again.

For a third-party or router firewall, see
[Whitelisting Salad in your firewall](/troubleshooting/antivirus/whitelisting-salad-in-your-firewall). If Windows
Defender is also removing the miner files, see
[How to whitelist Salad in Windows Defender](/troubleshooting/antivirus/how-to-whitelist-salad-in-windows-defender).
