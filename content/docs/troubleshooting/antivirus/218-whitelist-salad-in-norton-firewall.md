---
title: Whitelist Salad in Norton Firewall
---

**1. Open Norton and navigate to the Settings at the top right**

![](./content/images/Troubleshooting/Antivirus/How-to-Whitelist-Salad-in-Norton-Firewall-1.png)

**2. Select "Firewall"**

Select the "Firewall" option to navigate into the settings for it.

![norton8.png](./content/images/Troubleshooting/Antivirus/How-to-Whitelist-Salad-in-Norton-Firewall-2.png)

**3. Select "Intrusion and Browser Protection"**

Navigate to the "Intrusion and Browser Protection" panel at the top.

![norton9.png](./content/images/Troubleshooting/Antivirus/How-to-Whitelist-Salad-in-Norton-Firewall-3.png)

**4. Click "Configure \[+]"**

Click the "Configure \[+]" button next to "Intrusion Signatures".

![norton10.png](./content/images/Troubleshooting/Antivirus/How-to-Whitelist-Salad-in-Norton-Firewall-4.png)

**5. Type "coinminer" into the search bar**

On the popup window, type "coinminer" into the bar at the top right, this will filter it to only miner signatures.

![norton11.png](./content/images/Troubleshooting/Antivirus/How-to-Whitelist-Salad-in-Norton-Firewall-5.png)

**6. Uncheck the "Active" box for all of them**

To ensure all of Salad's miners are able to run, you will need to uncheck the "Active" box for all the items in this
list, making sure to scroll all the way through the list to get them all. Once done, click the "OK" button at the
bottom.

![norton12.png](./content/images/Troubleshooting/Antivirus/How-to-Whitelist-Salad-in-Norton-Firewall-6.png)

**7. Navigate to "General Settings"**

Now head into the "General Settings" page, and scroll all the way down to the bottom.

![norton13.png](./content/images/Troubleshooting/Antivirus/How-to-Whitelist-Salad-in-Norton-Firewall-7.png)

**8. Click "Configure \[+]"**

Click the "Configure \[+]" button next to "Device Trust".

![norton14.png](./content/images/Troubleshooting/Antivirus/How-to-Whitelist-Salad-in-Norton-Firewall-8.png)

**22. Whitelist each of the miner pools**

Now, you will need to add a whitelist for each of the mining pools that Salad will connect to. You can do this by
clicking the "Add" button at the bottom, and filling in the information for the pools. The information for each of the
pools is shown below.

1. Name: Prohashing IP or Physical Address: prohashing.com Trust Level: Full Trust
2. Name: NiceHash IP or Physical Address: nicehash.com Trust Level: Full Trust
3. Name: xmrig.com IP or Physical Address: 104.21.61.81 Trust Level: Full Trust
4. Name: Salad IP or Physical Address: 172.65.223.147 Trust Level: Full Trust
5. Name: xmrnicehash IP or Physical Address: 172.65.200.133 Trust Level: Full Trust
6. Name: eu nicehash IP or Physical Address: 104.17.254.46 Trust Level: Full Trust
7. Name: xmrdonation IP or Physical Address: 178.128.242.134 Trust Level: Full Trust
8. Name: xmrig IP or Physical Address: 199.247.27.41 Trust Level: Full Trust

For all of these, you should enable IPS Exclusion as well. The names provided are recommendations, you can name it
something else if you prefer. Once complete, click the "Apply" button at the bottom. Here is a screenshot showing some
of these whitelists:

![mceclip2.png](./content/images/Troubleshooting/Antivirus/How-to-Whitelist-Salad-in-Norton-Firewall-9.png)
