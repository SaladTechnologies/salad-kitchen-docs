---
title: How Windows Updates Affect Salad
---

Windows Updates can interrupt your earnings on Salad. When an update installs and restarts your PC, any jobs you're
running are stopped and reallocated to another Chef, and you'll need to wait in the queue for new jobs once Salad is
running again. Some updates can also replace or change your GPU drivers, which can stop your machine from receiving jobs
until they're fixed.

We recommend keeping an eye on Windows Updates, and either scheduling them or setting a regular time to review and
install them yourself, so they don't catch you by surprise.

## Scheduling Windows Updates

1. Open **Settings** and select **Windows Update**.
2. Select **Advanced options**, then set your **Active hours** to the times you're most likely to be Chopping. Windows
   won't restart your PC for updates during these hours.
3. If you'd prefer to review updates yourself, use **Pause updates** on the Windows Update page, then check back on a
   regular schedule (for example, once a week) to install them at a time that suits you.

## After an Update

- **Check your GPU drivers.** If your machine stops receiving jobs after an update, Windows may have changed your
  drivers. [Reinstalling your GPU drivers](/guides/your-pc/how-to-reinstall-gpu-drivers) will usually fix this.
- **Make sure Salad is running.** Enabling [auto-launch](/guides/using-salad/how-to-enable-auto-launch) and
  [auto-start](/guides/using-salad/how-to-enable-auto-start) will help Salad get back to Chopping on its own after a
  restart.
