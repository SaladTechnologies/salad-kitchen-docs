---
title: Troubleshooting mining jobs
description:
  What to check when Salad's backup mining jobs won't start, show 0 H/s, or were quarantined by antivirus - and why
  mining pays so little.
---

Mining on Salad is a backup: it runs only when there's no container job for your hardware, and on modern cards it pays a
few cents a day ([details](/faq/jobs/mining-as-a-backup-workload)). If the real problem is that you aren't getting
container jobs, start with [Not getting container jobs](/troubleshooting/not-earning/not-getting-container-jobs)
instead.

## The miner won't start, or earns nothing

1. **Antivirus removed or blocked it.** The miners Salad uses (XMRig, Rigel, T-Rex and others) are well-known
   open-source programs that antivirus products flag as "Trojan" or "vulnerable driver" by mistake. Whitelist
   `C:\ProgramData\Salad` and `C:\Program Files\Salad` ([guides](/troubleshooting/antivirus)), or turn mining off under
   **Settings > Workload Types** if you'd rather not.
2. **The firewall blocks the pool.** See
   [Whitelisting Salad in your firewall](/troubleshooting/antivirus/whitelisting-salad-in-your-firewall).
3. **Drivers.** Update your [NVIDIA](/guides/your-pc/how-to-update-my-nvidia-drivers),
   [AMD](/guides/your-pc/how-to-update-my-amd-drivers) or [Intel](/guides/your-pc/how-to-update-your-intel-drivers)
   driver. Support for mining on the newest NVIDIA cards has been inconsistent; if the miner starts and shows 0 H/s on a
   very new card, turning mining off loses you nothing.
4. **Missing Visual C++ runtime.** Install the
   [latest Microsoft Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).
5. **Overclocks.** Reset the card to stock settings; unstable clocks crash miners.
6. **Mining enabled?** Check **Settings > Workload Types** ([settings guide](/guides/using-salad/salad-app-settings)).

## The miner runs but the balance barely moves

That's expected. See [Job running but no earnings](/troubleshooting/not-earning/job-running-but-no-earnings) for how to
confirm the small credits are arriving, and [Mining as a backup workload](/faq/jobs/mining-as-a-backup-workload) for why
the amounts are what they are.

Still stuck? Send [Salad Support](/contact) your machine ID and your logs folder zipped
([how to find it](/guides/using-salad/how-to-find-your-salad-log-files)); the miner's own log is included.
