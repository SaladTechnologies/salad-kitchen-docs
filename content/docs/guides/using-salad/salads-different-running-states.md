---
title: Salad's running states
description: How to start and pause Salad with the Chop Now and Pause selectors, and what closing the window does.
---

The dropdown in the center of the Salad app controls whether Salad is Chopping. Use it to start Salad manually, pause it
for a while, or hand control over to a schedule.

## Starting Salad manually

1. Open the Salad app from your system tray.

   ![opening the salad app](../../../../content/images/guides/using-salad/how-to-manually-start-salad-1.png)

2. Select **Chop Now** in the dropdown.

   ![selecting chop now in the salad app](../../../../content/images/guides/using-salad/how-to-manually-start-salad-2.png)

Salad keeps Chopping until you pause it, or until it detects you using the PC and
[Auto-Stop](/guides/using-salad/salad-app-settings) pauses it for you (for example when you
[open a game](/troubleshooting/degraded-state/gpu-temporarily-disabled)).

## Pausing Salad

Open the same dropdown and pick one of the Pause options:

- **Pause Until Idle** pauses Salad until you stop using the PC. It then starts again on its own after your
  [auto start delay](/guides/using-salad/how-to-enable-auto-start).
- **Pause Until A Set Time** pauses Salad until the time you choose, then starts automatically.
- **Pause Indefinitely** pauses Salad until you select Chop Now again. Auto start will not kick in when you go idle.
- **Scheduled Chopping** lets a weekly schedule decide when Salad starts and stops. Set the schedule under Settings ->
  Advanced Options -> Scheduled Chopping; see [Schedule chopping](/guides/using-salad/schedule-chopping).

Pausing stops the current job. When you resume, Salad goes back to "Finding Job" and may be assigned a different job, so
pause only when you need the PC.

## Closing the window vs Exit

- **Closing the window with the X** only hides the app to the system tray. Salad keeps Chopping in the background and
  the job continues.
- **Exit** (right-click the tray icon) shuts Salad down completely and stops the running job. The job is lost and Salad
  has to find a new one when you reopen it.

Don't use Exit just to refresh the display or check your balance. Reopen the window from the tray icon instead, or use
the [earnings summary](/guides/using-salad/earnings-summary) on the website.
