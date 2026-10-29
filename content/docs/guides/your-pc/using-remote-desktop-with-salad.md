---
title: Using remote desktop with Salad
description:
  Why Remote Desktop (RDP) stops Salad's container environment, which remote-access tools work instead, and how to run a
  headless PC.
---

Salad's container environment needs an interactive desktop session on the PC. Windows Remote Desktop and every other
tool built on the Remote Desktop Protocol (RDP) replaces that session with a remote one, so while you are connected, and
often after you disconnect, Salad cannot start or keep its container environment running and jobs fail.

This affects:

- Windows Remote Desktop Connection (mstsc) and the Remote Desktop app
- Microsoft Remote Desktop for Mac, iOS and Android
- Any third-party tool that uses RDP under the hood

## Use a screen-mirroring tool instead

Tools that mirror the existing desktop session, rather than creating a new one, work fine with Salad:

- Parsec
- AnyDesk
- Chrome Remote Desktop
- VNC-based tools (TightVNC, RealVNC, UltraVNC)
- TeamViewer

If you have been using RDP, disconnect, then restart the PC so a normal desktop session is created, and start Salad from
that session.

## Running a PC without a monitor (headless)

After a reboot, Windows waits at the sign-in screen. There is no desktop session yet, so Salad cannot start the
container environment, and auto-start does not help. Make Windows sign in automatically:

1. Press **Windows + R**, type `netplwiz` and press **Enter**.
2. Untick **Users must enter a user name and password to use this computer**, click **OK** and enter your password. If
   the checkbox is missing on Windows 11, turn off **Settings > Accounts > Sign-in options > Require Windows Hello
   sign-in for Microsoft accounts** first, then reopen `netplwiz`.
3. Reboot to confirm the PC lands on the desktop by itself.

Pair this with [auto-start](/guides/using-salad/how-to-enable-auto-start) and
[disabling sleep](/guides/using-salad/how-to-disable-sleep-mode) so Salad resumes Chopping after Windows updates. Some
GPUs also need a monitor or an HDMI dummy plug connected to run at full performance.

## Still stuck?

If Salad still reports a problem after switching tools and rebooting, see
[Failed to start container environment](/troubleshooting/degraded-state/failed-to-start-container-environment), then
send [Salad Support](/contact) your machine ID, a screenshot of the notification and your zipped logs as described in
[How to create a support ticket](/guides/your-pc/how-to-create-a-support-ticket).
