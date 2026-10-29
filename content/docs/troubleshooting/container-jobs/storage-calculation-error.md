---
title: 'Storage calculation error'
description:
  "Why Salad shows a storage calculation error when it can't work out the free space on your C: drive, and the two
  Windows repairs that fix it."
---

Salad checks the free space on your C: drive before it downloads jobs. A **storage calculation error** means it couldn't
get an answer from Windows, which happens when one of the two Windows tools it uses is damaged:

- **PowerShell** is disabled, corrupted or blocked by a policy.
- **DISM** (Deployment Image Servicing and Management), which Salad uses to prepare the container environment, is
  corrupted.

It is not about how much space you have: a drive with 100 GB free can still show this error.

## What to do

1. **Repair PowerShell**: [Re-enable PowerShell](/troubleshooting/pc-configuration/re-enable-powershell). If the
   PowerShell window opens and runs commands normally, move on.
2. **Repair DISM and Windows system files**: [Restoring DISM](/troubleshooting/pc-configuration/restoring-dism).
3. Restart the PC and start Salad. The check runs again on start.

If the error is still there, contact [Salad Support](/contact) with your logs folder zipped
([how to find it](/guides/using-salad/how-to-find-your-salad-log-files)); the logs show which of the two tools failed
and with what error.
