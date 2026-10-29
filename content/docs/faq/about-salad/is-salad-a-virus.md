---
title: Is Salad a virus?
description: No. Antivirus warnings about Salad are false positives triggered by the open-source miners it bundles.
---

No. If your antivirus (Windows Defender, Norton, Avast and others) has blocked or quarantined something from Salad, it
is a false positive.

Salad bundles well-known, open-source mining programs as its [backup workload](/faq/jobs/mining-as-a-backup-workload).
Because malware authors have abused those same programs to mine on other people's PCs without permission, most antivirus
products flag them on sight. The scanner cannot tell the difference between a miner you installed on purpose through
Salad and one that was planted; it just sees the miner.

To let Salad run, whitelist it in your antivirus. Our [antivirus guides](/troubleshooting/antivirus) cover the common
products step by step.

Only download Salad from [salad.com](https://salad.com). An installer from anywhere else may genuinely be modified, and
Salad cannot vouch for it.
