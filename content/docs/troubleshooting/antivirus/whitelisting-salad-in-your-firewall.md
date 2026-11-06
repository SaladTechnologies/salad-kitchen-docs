---
title: Whitelisting Salad in your firewall
description: Addresses to allow in a third-party, network or router firewall when Salad cannot reach its mining pools.
---

If a third-party firewall on your PC, your router or your network blocks outgoing connections, Salad's miners cannot
reach their pools and mining earns nothing. Windows Firewall has its own guide:
[Whitelisting Salad in Windows Firewall](/troubleshooting/antivirus/how-to-whitelist-salads-miners-in-windows-firewall).

For other firewalls, allow the Salad app and the miners under `C:\ProgramData\Salad\workloads` as applications, or allow
outgoing traffic to these destinations:

- `nicehash.com` (and its subdomains)
- 104.21.61.81
- 172.65.223.147
- 172.65.200.133
- 104.17.254.46
- 178.128.242.134
- 199.247.27.41

These are the mining pools Salad connects to. Pools can change address over time, so prefer an application rule for the
miner executables where your firewall supports it.

Container jobs also need outgoing access for the container environment (WSL). If container jobs cannot download or
connect while mining works, see
[Container networking issues](/troubleshooting/degraded-state/container-networking-issues).

Because there are so many firewall products, Salad Support cannot provide step-by-step guides for each; check your
vendor's documentation for "allow an application" or "outbound rule".
