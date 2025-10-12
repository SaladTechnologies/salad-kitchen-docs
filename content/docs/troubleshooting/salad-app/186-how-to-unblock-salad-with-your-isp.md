---
title: How to Unblock Salad With Your ISP
---

# How to Unblock Salad With Your ISP

We've compiled tips to remedy common issues for **Xfinity** and **BT Broadband** users below, along with useful general solutions for other ISPs. If you don't know your internet service provider is, head to [WhoIsMyISP](https://whoismyisp.org).

### **Xfinity (Comcast)**

There are a few tactics Xfinity users can try to get unstuck. For starters:

1. Type “10.0.0.1” into your browser’s search bar.
2. Hit “Enter” to head to the Xfinity login page
3. Log in using your Xfinity account credentials.

*Step #1 uses the default IP address for Xfinity routers. If you use a different static IP, swap in that address there. You'll need to be connected to your home network for this to work. To try from elsewhere, log in at the* [*MyXFi*](https://login.xfinity.com/login)*portal instead.*

Once you’re in, try disabling any [parental control](https://www.xfinity.com/support/articles/set-up-parental-controls-with-comcast-networking) settings you may have turned on. If that doesn’t help, consider temporarily deactivating your [Xfinity Gateway firewall](https://www.xfinity.com/support/articles/advanced-xfinity-wireless-gateway-features).

### **BT (British Telecom)**

BT broadband users can usually fix connection issues by deactivating the “Personal Firewall” in [BT Protect](https://www.bt.com/help/security/what-security-and-protection-do-i-get-with-bt-broadband-#bt-navbar:~:text=BT%20Virus%20Protect,-BT), an optional antivirus program that comes free with some subscriptions. Check to see if you have it installed on your computer to adjust these settings.

Alternatively, you can turn off your BT Smart Hub’s firewall like so:

1. Type “192.168.1.254” into your browser’s search bar.
2. Hit “Enter” to head to the Smart Hub dashboard.
3. Log in using your BT Broadband account credentials.
4. Navigate to “Advanced Settings” and then choose “Firewall”.
5. Disable your firewall using the toggle on this screen.

*Step #1 uses the default IP address for current-gen BT Smart Hub devices. If you use a static IP for port forwarding, head to that address instead.*

* * *

**A Note on Disabling Firewalls**

If you disable your firewall, you may be vulnerable to intrusion on the web. Good digital hygiene practices (like those [outlined here](https://salad.com/blogs/what-is-a-botnet)) will thwart most bad actors, but you should always be mindful of the risks when changing your default protection settings.

**We recommend that all users follow the “Contact Your ISP” guide below**.

* * *

## Other ISPs

For ISPs not listed, these workarounds may help—but we can't make any promises as to their efficacy.

### **Change DNS Settings**

Some users have success by explicitly changing their DNS settings to one of the third-party resolver addresses listed below. To access those settings:

* * *

**Windows**

1. Open the Start menu (or press the Windows key).
2. Type “Network Status” and click through to your settings.
3. Click on “Change Adapter Settings”.
4. Right-click on your active network connection.
5. Click on “Properties".
6. Click on the table entry labeled “Internet Protocol Version 4 (TCP/IPv4)”.
7. Click on “Properties.” (If you use IPv6, change those settings as well.)
8. Click on “Use the following DNS server addresses”.
9. Type in one of the public DNS server addresses below.

* * *

**Third-Party DNS Resolvers**

Chefs report anecdotal success with these IP addresses. Use the info links provided in the labels to read up on each and make an informed choice:

- [**Google Public DNS**](https://developers.google.com/speed/public-dns/docs/using)**:** 8.8.8.8 / 8.8.4.4
- [**Cloudflare 1.1.1.1**](https://1.1.1.1/): 1.1.1.1
- [**OpenDNS**](https://www.opendns.com/)**:** 208.67.220.220 / 208.67.222.222
- [**DNS.Watch**](https://dns.watch/)**:** 84.200.69.80 / 84.200.70.40
- [**NeuStar Public DNS**](https://www.publicdns.neustar/): 64.6.64.6 / 64.6.65.6

* * *

**Why this works:** a DNS resolver interprets text-based URLs and converts them into their corollary IP addresses. Your network is configured to route through your ISP’s resolver by default. Using a third-party resolver avoids any traffic blockers they may have set up.

### **Virtual Private Networks**

A [virtual private network](https://www.pcmag.com/picks/the-best-vpn-services) (VPN) may not be enabled while Chopping Salad. Chefs who use a VPN or Proxy will not be assigned workloads on the Salad network.

**We don’t recommend going this route before trying to contact your ISP directly.**

## **Contact Your ISP**

If none of the above solutions have worked, you may need to contact your provider directly. Here are some proactive steps to speed things along:

1. Find out who your ISP is by visiting [**WhoIsMyISP**](https://www.whoismyisp.org/).
2. Contact their customer support department.
3. Request a whitelist for ([https://salad.io](https://salad.io)) and ([https://salad.com](https://salad.com)).
4. Send them a link to our [Trustpilot reviews](https://www.trustpilot.com/review/salad.io).

* * *

*Hopefully these tips bring you that much closer to your first million. If you still need help, reach out to Salad Support at support@salad.com so we can try to get you cooking if possible.*
