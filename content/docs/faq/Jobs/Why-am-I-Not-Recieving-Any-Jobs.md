---
title: 'Why am I Not Receiving Any Jobs?'
---

If you're not receiving any Jobs, there may be [low demand](/docs/FAQ/Community/613-network-monitor) for your hardware
on the Salad Network, or your machine may not be set up correctly to run Jobs. If there's low demand for your hardware,
you may need to wait longer in the queue to receive a Job. Thankfully, if your machine is just incorrectly configured,
you can fix this.

---

## **Check the Network Monitor**

We have a [Network Monitor](/docs/FAQ/Community/613-network-monitor) that shows the current demand for different
hardware types on the Salad Network. If you're not receiving any Jobs, check the Network Monitor to see if there's low
demand for your hardware. If there is, you may need to wait longer in the queue to receive a Job. You can also set up a
[Demand Alert](/docs/Guides/Using-the-Salad-App/How-to-Set-Up-a-Demand-Alert) to automatically notify you when demand
for your hardware increases.

If there is no demand at all for your hardware, Salad will instead automatically run
[Bandwidth Sharing Jobs](/docs/Guides/Getting-Jobs/Getting-Bandwidth-Sharing-Jobs) or
[Cryptomining Jobs](/docs/Guides/Getting-Jobs/Getting-Cryptomining-Jobs) if you're opted in and compatible. We will
automatically switch back to running Container Jobs when a Job becomes available for your hardware.

---

## **Check your Machine's Configuration**

If there's demand for your hardware, but you're still not receiving any Jobs, it's likely that your machine is not set
up correctly. Make sure to check the following:

- Your machine is [Container-ready](/docs/Troubleshooting/Container-Jobs/346-container-workloads-troubleshooting).
- Salad is whitelisted in your [Firewall and Antivirus](/docs/Troubleshooting/Antivirus).
- You have all workload types enabled in your
  [Salad App Settings](/docs/Guides/Using-the-Salad-App/353-Salad-App-settings), including Proof of Work.
- That you have a solid, stable [internet connection](/docs/Guides/Your-PC/619-improve-internet-speed-Container-Jobs).
- No other [intensive applications](/docs/FAQ/Salad-App/380-temporary-workload-block) are running on your machine, such
  as video games or rendering.
