---
title: How to improve internet speed for container jobs
description:
  Why Salad's speed test reads lower than yours, and what to change (wired connection, USB Wi-Fi, other traffic) to
  qualify for more container jobs.
---

Container jobs need a reliable connection, and faster connections qualify for more of them. Here is what matters, most
important first. The minimum requirement is on
[What is the minimum recommended internet speed for Salad?](/faq/compatibility/what-is-the-minimum-recommended-internet-speed-for-salad).

## Why Salad shows a lower speed than my speed test

When Salad starts it runs its own speed test against a server that is deliberately far away, because that is what
downloading a job image from a remote data center looks like. Speedtest.net picks the closest server to you. So Salad's
result is normally lower than yours; that is expected and is the number jobs are matched on. Only worry if it is far
below what your connection should sustain to a distant server.

## Use a wired connection

An Ethernet cable to your router is faster, lower-latency and more stable than Wi-Fi, and it avoids drop-outs that make
a running job fail. If you must use Wi-Fi, use the 5 GHz or 6 GHz band and keep the PC close to the router.

## Avoid USB Wi-Fi adapters

USB Wi-Fi adapters are a known cause of very slow downloads inside the container environment, even when Windows itself
browses fine. If your job downloads crawl, switch to Ethernet or a PCIe/built-in Wi-Fi card. See
[Downloads slow or failing](/troubleshooting/container-jobs/downloads-slow-or-failing).

## Reduce other traffic

- Stop downloads, streaming and large uploads on the PC while it Chops.
- Pause cloud backups (OneDrive, Google Drive, Dropbox) and game-launcher updates.
- Disconnect devices you are not using, and avoid heavy streaming or gaming elsewhere on the network when possible.

## Check your router and PC

- Restart the router if speeds have degraded over time.
- Make sure no VPN or proxy is active on the PC; both add latency and can route traffic through a slow exit.
- On recent Windows 11 builds, the Hyper-V firewall can block traffic from WSL (and so from the container environment)
  even though Windows itself is online. In an administrator PowerShell, run
  `Get-NetFirewallHyperVVMSetting -Name '{40E0AC32-46A5-438A-A0B2-2B479E8F2E90}'`. `DefaultOutboundAction` should be
  `Allow` or `NotConfigured`; if it is `Block`, a security product or policy on the PC has changed it. See
  [Container networking issues](/troubleshooting/degraded-state/container-networking-issues) for the rest of the
  networking checks.

## Check your plan

Run a speed test on the PC itself. If it is well below what your ISP advertises, contact your ISP; if the plan is simply
slow, upgrading it is the only fix. Salad cannot lower the bandwidth a job requires.
