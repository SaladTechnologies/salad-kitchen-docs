---
title: Virtualization Conflicts with Android Emulators
---

Some Android emulators have been known to interfere with Salad's virtualization set-up. These programs run competing
virtualization processes next to Salad which prevents Containerization from setting up successfully. These emulators are
known to conflict with Salad

- Bluestacks
- Nox Player

![Screenshot of Salad Container Setup page showing error for Android Emulators installed](../../../../content/images/troubleshooting/container-jobs/virtualization-conflicts-with-android-emulators-1.png)

---

# How Do I Fix it?

## Bluestacks

Chefs with Bluestacks installed will simply need to uninstall Bluestacks from their PC in order for Salad to function.

1. Open Settings, and head to Apps.
2. Open Installed apps, and search for Bluestacks.
3. Select Bluestacks, and click 'More', then uninstall.

## Nox Player

Chefs with Nox Player installed will also need to remove Nox Player's registry keys after uninstalling.

1. Open Settings, and head to Apps.
2. Open Installed apps, and search for Nox Player.
3. Select Nox Player, and click 'More', then uninstall.
4. Go to the Start menu and open Regedit.
5. Select the `HKEY_CURRENT_USER` folder and navigate to the Software folder. The Nox Player registry keys are called
   DuoDianApp.
6. Right click to delete the DuoDianApp registry keys.
7. Reboot your machine.

Uninstalling the emulator should resolve the error message. If uninstalling does not help, contact
[Salad Support](/contact).
