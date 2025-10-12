---
title: How to Whitelist Salad in Norton Antivirus
---

# How to Whitelist Salad in Norton Antivirus

**1. Open up Norton Antivirus**

![mceclip0.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4b2b380503dfe08192/img-406-1637771456-267910856.png)

**2. Click Settings**

Click on the “Settings” icon at the top right of the screen

![norton1.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4b64e42a671b63a1dd/img-406-1637771457-1701264575.png)

**3. Click Antivirus**

This will pop up another window for settings, click the top left option, “Antivirus”.

![norton2.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4b9ccf62287e5f9a65/img-406-1637771458-130084784.png)

**4. Click “Scans and Risks”**

On the antivirus window, click on the “Scans and Risks” tab

![norton3.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4b2b380503dfe08193/img-406-1637771458-275811557.png)

**5. Click “Configure \[+]”**

Scroll all the way to the bottom of the window, and click on “Items to Exclude from Scans”

![norton4.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4befc78d0553e5d5ea/img-406-1637771459-176879949.png)

**6. Click Add Folders**

Click “Add Folders” at the bottom left of the window

![norton5.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4b2b380503dfe08194/img-406-1637771460-466302750.png)

**7. Whitelist the Salad miner folder**

**Salad v1.0.0 and Later:** The Salad miner folder can be found under "C:\\ProgramData\\Salad\\workloads". 

![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/6299c90692cb8c175b469813/file-TJBh7U1K3K.png)

**8. Make sure the checkbox for including all subfolders is checked!**

**9. Click OK, and it will bring you back to the exclusions management window**

**10. Click OK on the exclusions management window to finalize the addition**

![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/6299c88aa2c316231c202902/file-GlhrESaEgX.png)

**11. Click “Configure \[+]”**

This time, select "Items to Exclude from Auto-Protect, SONAR, and Download Intelligence Detection".

![norton6.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4c2b380503dfe08196/img-406-1637771464-1231676599.png)

**12. Repeat the same steps above**

Follow the same steps as the previous whitelist, to whitelist your "C:\\ProgramData\\Salad\\workloads" folder.

**13. Click the "Back" button**

Click the "Back" button at the bottom to navigate back to the main settings page for Norton.

![norton7.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4c64e42a671b63a1df/img-406-1637771465-95389032.png)

**14. Select "Firewall"**

Now select the "Firewall" option to navigate into the settings for it.

![norton8.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4cefc78d0553e5d5eb/img-406-1637771466-1426671771.png)

**15. Select "Intrusion and Browser Protection"**

Navigate to the "Intrusion and Browser Protection" panel at the top.

![norton9.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4defc78d0553e5d5ec/img-406-1637771467-1228587118.png)

**16. Click "Configure \[+]"**

Click the "Configure \[+]" button next to "Intrusion Signatures".

![norton10.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4d2b380503dfe08197/img-406-1637771468-547383710.png)

**17. Type "coinminer" into the search bar**

On the popup window, type "coinminer" into the bar at the top right, this will filter it to only miner signatures.

![norton11.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4d9ccf62287e5f9a66/img-406-1637771469-1344667042.png)

**18. Uncheck the "Active" box for all of them**

To ensure all of Salad's miners are able to run, you will need to uncheck the "Active" box for all the items in this list, making sure to scroll all the way through the list to get them all. Once done, click the "OK" button at the bottom.

![norton12.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4dd3efbe495c3b25d8/img-406-1637771470-1555933532.png)

**19. Navigate to "General Settings"**

Now head into the "General Settings" page, and scroll all the way down to the bottom.

![norton13.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4e9ccf62287e5f9a67/img-406-1637771470-1604030662.png)

**20. Click "Configure \[+]"**

Click the "Configure \[+]" button next to "Device Trust".

![norton14.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4e64e42a671b63a1e0/img-406-1637771471-2008669113.png)

**21. Whitelist each of the miner pools**

Now, you will need to add a whitelist for each of the mining pools that Salad will connect to. You can do this by clicking the "Add" button at the bottom, and filling in the information for the pools. The information for each of the pools is shown below.

1. **Name:** Prohashing **IP or Physical Address:** prohashing.com **Trust Level:** Full Trust
2. **Name:** NiceHash **IP or Physical Address:** nicehash.com **Trust Level:** Full Trust
3. **Name:** xmrig.com **IP or Physical Address:** 104.21.61.81 **Trust Level:** Full Trust
4. **Name:** Salad **IP or Physical Address:** 172.65.223.147 **Trust Level:** Full Trust
5. **Name:** xmrnicehash **IP or Physical Address:** 172.65.200.133 **Trust Level:** Full Trust
6. **Name:** eu nicehash **IP or Physical Address:** 104.17.254.46 **Trust Level:** Full Trust
7. **Name:** xmrdonation **IP or Physical Address:** 178.128.242.134 **Trust Level:** Full Trust
8. **Name:** xmrig **IP or Physical Address:** 199.247.27.41 **Trust Level:** Full Trust

For all of these, you should enable IPS Exclusion as well. The names provided are recommendations, you can name it something else if you prefer. Once complete, click the "Apply" button at the bottom. Here is a screenshot showing some of these whitelists:

![mceclip2.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4eefc78d0553e5d5ed/img-406-1637771472-837679047.png)

**22. That should be it for whitelisting Salad in Norton Antivirus!** 

If you continue to get popups from Norton in the bottom right, you may need to add additional Device Trust whitelists for the IP addresses shown. You can find the IP address by clicking "More Information" on the popup, and looking for the Destination Address IP, as shown below.

![norton15.png](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/619e6a4e2b380503dfe08198/img-406-1637771472-1602222849.png)

If that doesn't do the trick after you’ve followed all the steps, and whitelisted any popup IP addresses, please contact us [here](https://support.salad.io/hc/en-us/requests/new) via a support ticket.

Note - You may still get popups from Norton regarding a "CL.Coinminer!gen1." security risk. This is simply flagging the command we run to start the miners, and can be ignored.
