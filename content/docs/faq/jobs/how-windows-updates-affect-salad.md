---
title: How Windows updates affect Salad
description: Why Windows and Salad app updates stop your jobs, what happens afterwards, and how to schedule updates.
---

Any restart stops the job you are running. When Windows installs an update and reboots, or when the Salad app itself
updates, your current job is stopped and reallocated to another Chef. Customers expect their workloads to keep running,
so a job can't wait for your machine to come back. Once Salad is Chopping again you are back in the queue like any other
machine, and it can take a while before the next job arrives. You are not penalized for updating; you are credited for
the time the job ran before it stopped.

Windows updates can also replace or change your GPU driver, which can stop you receiving jobs until the driver is fixed.

## Scheduling Windows updates

1. Open **Settings** and select **Windows Update**.
2. Select **Advanced options** and set **Active hours** to the times you are most likely to be Chopping. Windows won't
   restart for updates during those hours.
3. If you prefer to install updates yourself, use **Pause updates**, then check back on a regular schedule (for example
   weekly) and install them at a time that suits you.

## After an update

- **Check your GPU driver.** If your machine stops receiving jobs after an update,
  [reinstalling your GPU drivers](/guides/your-pc/how-to-reinstall-gpu-drivers) usually fixes it.
- **Make sure Salad comes back on its own.** Enable [auto-launch](/guides/using-salad/how-to-enable-auto-launch) and
  [auto-start](/guides/using-salad/how-to-enable-auto-start) so Salad starts Chopping again after the restart without
  you.
- **Expect Finding Job for a while.** Being back in the queue is normal; see
  [Finding Job for hours](/troubleshooting/not-earning/finding-job-for-hours) if it drags on.
