---
title: Why am I not receiving any jobs?
description:
  The two reasons a machine gets no jobs - low demand for its hardware, or a configuration that stops it qualifying -
  and how to check each.
---

There are only two reasons a working machine gets no jobs: there's little demand for its hardware right now, or
something about the machine stops it qualifying. The first just needs patience; the second you can fix.

## Check demand first

The [Network Monitor](/faq/jobs/network-monitor) shows current demand for each GPU model. If yours is low, waits are
long and the machine is fine. Set up a [demand alert](/guides/getting-jobs/how-to-set-up-a-demand-alert) and leave Salad
running - restarting doesn't move you up the queue.

When there's no container job for your hardware, Salad falls back to
[bandwidth sharing](/guides/getting-jobs/getting-bandwidth-sharing-jobs) or
[mining](/guides/getting-jobs/getting-cryptomining-jobs) if you have them enabled, and switches back to container jobs
automatically when one becomes available.

## Then check the machine

If your GPU is in demand and you still get nothing, go through this list:

- **No Degraded notification** in the bell icon. If there is one, that's the cause:
  [Degraded State](/troubleshooting/degraded-state).
- **Container-ready**: everything on
  [Not getting container jobs](/troubleshooting/not-earning/not-getting-container-jobs).
- **GPU and CPU enabled** in **Settings > Configure Hardware**, and the workload types you want enabled in
  [Settings](/guides/using-salad/salad-app-settings).
- **Whitelisted** in your [antivirus and firewall](/troubleshooting/antivirus).
- **Stable internet**, preferably wired: [Improve your internet connection](/guides/your-pc/improve-internet-speed).
- **Nothing else using the GPU** - games, local AI tools, mining outside Salad
  ([why that matters](/troubleshooting/degraded-state/gpu-temporarily-disabled)).
- **No power limit or overheating** on the GPU: [GPU power limit](/troubleshooting/degraded-state/gpu-power-limit).
- **The PC stays awake** and signed in: [Disable sleep mode](/guides/using-salad/how-to-disable-sleep-mode),
  [Remote desktop and Salad](/guides/your-pc/using-remote-desktop-with-salad).

Still nothing after a day with all of that in place? See
[Finding Job for hours](/troubleshooting/not-earning/finding-job-for-hours) for what to send support.
