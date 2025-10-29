---
title: 'Why am I Not Receiving Any Jobs?'
---

_Last Updated: 23rd October 2025_

If you're not receiving any Jobs, there may be [low demand](/docs/faq/community/network-monitor) for your hardware on
the Salad Network, or your machine may not be set up correctly to run Jobs. If there's low demand for your hardware, you
may need to wait longer in the queue to receive a Job. Thankfully, if your machine is just incorrectly configured, you
can fix this.

---

## **Check the Network Monitor**

We have a [Network Monitor](/docs/faq/community/network-monitor) that shows the current demand for different hardware
types on the Salad Network. If you're not receiving any Jobs, check the Network Monitor to see if there's low demand for
your hardware. If there is, you may need to wait longer in the queue to receive a Job. You can also set up a
[Demand Alert](/docs/guides/using-salad/how-to-set-up-a-demand-alert) to automatically notify you when demand for your
hardware increases.

If there is no demand at all for your hardware, Salad will instead automatically run
[Bandwidth Sharing Jobs](/docs/guides/getting-jobs/getting-bandwidth-sharing-jobs) or
[Cryptomining Jobs](/docs/guides/getting-jobs/getting-cryptomining-jobs) if you're opted in and compatible. We will
automatically switch back to running Container Jobs when a Job becomes available for your hardware.

---

## **Check your Machine's Configuration**

If there's demand for your hardware, but you're still not receiving any Jobs, it's likely that your machine is not set
up correctly. Make sure to check the following:

- Your machine is [Container-ready](/docs/troubleshooting/container-jobs/container-workloads-troubleshooting).
- Salad is whitelisted in your [Firewall and Antivirus](/docs/troubleshooting/antivirus).
- You have all workload types enabled in your [Salad App Settings](/docs/guides/using-salad/salad-app-settings),
  including Proof of Work.
- That you have a solid, stable [internet connection](/docs/guides/your-pc/improve-internet-speed-container-jobs).
- No other [intensive applications](/docs/faq/salad-app/temporary-workload-block) are running on your machine, such as
  video games or rendering.
