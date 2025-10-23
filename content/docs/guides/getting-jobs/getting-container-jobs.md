---
title: 'Getting Container Jobs'
---

_Last Updated: 23rd October 2025_

Salad offers a variety of job types, including
[Container Jobs](https://Community.salad.com/new-feature-container-environments-now-available/). These jobs run in
[isolated environments](/docs/faq/jobs/265-what-is-wsl) on your machine, allowing you to safely run different workloads
without interfering with your main operating system. These are usually the best paying Jobs. Container Jobs are
automatically fetched and run by the Salad App when there's one available for your hardware, and your machine is set up
correctly.

---

## **What do I Need to run Container Jobs?**

To be eligible for Container Jobs, your machine must meet the following requirements:

- Have [in-demand hardware](/docs/faq/community/613-network-monitor). Even if you have a top-end 4090 rig, if there's no
  demand for that hardware, you're unlikely to receive Container Jobs.
- Be [Container-ready](/docs/troubleshooting/container-jobs/346-container-workloads-troubleshooting). This means having
  the your machine configured to run Container Jobs on Salad.
- Have only Salad actively Chopping. Container Jobs will not run if you're not actively Chopping, or if you're running
  [other intensive applications](/docs/guides/getting-jobs/getting-cryptomining-jobs) on your machine, such as video
  games or rendering software.

Container Jobs are not guaranteed, and availability is subject to demand from the network. Make sure to monitor the
[Network Monitor](/docs/faq/community/613-network-monitor) if you're not receiving any Container Jobs. If you're seeing
lower demand for your hardware, you may need to wait longer in the queue to receive a Container Job.

---

When not running a Container Job, your machine will default to running
[Cryptomining Jobs](/docs/guides/getting-jobs/getting-cryptomining-jobs) or
[Bandwidth Sharing Jobs](/docs/guides/getting-jobs/getting-bandwidth-sharing-jobs), if you're opted in and compatible.
If you're not seeing any demand for your hardware at all, you may want to consider pausing Salad and setting up a
[Demand Alert](/docs/guides/using-salad/how-to-set-up-a-demand-alert) in the Network Monitor. This will notify you when
demand for your hardware increases, so you can start Chopping Salad Balance.
