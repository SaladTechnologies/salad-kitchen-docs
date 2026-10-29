---
title: Passkey troubleshooting
description:
  Fixes when setting up or using a Salad passkey fails on Windows, usually because Windows Hello isn't configured.
---

Passkey problems on Windows almost always come from the passkey manager rather than Salad. On Windows 10 and 11 the
built-in manager is **Windows Hello**, and it has to be set up before a passkey can be created or used.

## What to do

1. **Set up Windows Hello.** Settings > Accounts > Sign-in options, and configure at least a PIN (fingerprint or face
   recognition also work). Microsoft's guide:
   [Configure Windows Hello](https://support.microsoft.com/en-us/windows/configure-windows-hello-dae28983-8242-bb2a-d3d1-87c9d265a5f0).
2. **Use a supported browser** for the Salad web pages - Chrome, Edge or Firefox. Privacy-focused browsers can block the
   passkey prompt.
3. **Try a different passkey manager** if Windows Hello isn't an option: a phone (Google or iCloud passkeys) or a
   password manager that supports passkeys. The prompt lets you choose "another device".
4. **Check the date and time** on the PC; a wrong clock breaks sign-in
   ([fix](/troubleshooting/pc-configuration/correct-system-time-error)).

Lost the passkey altogether (new PC, reset, lost phone)? See
[I lost my passkey](/troubleshooting/connection-and-login/i-lost-my-passkey). Background on how passkeys work:
[Microsoft's passkey overview](https://support.microsoft.com/en-us/windows/passkeys-overview-301c8944-5ea2-452b-9886-97e4d2ef4422)
and [Salad app passkeys](/guides/using-salad/salad-app-passkeys).
