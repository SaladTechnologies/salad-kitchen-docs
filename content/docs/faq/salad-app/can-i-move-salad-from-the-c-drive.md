---
title: Can I Move Salad from the C Drive?
---

No. Salad needs to be installed on your C drive, and there's no supported way to move it. There is no setting in the app
to change this, and no manual method that we can help you with. This applies to the Salad App itself, the WSL
environment where container workloads run, and everything else Salad stores on your machine.

## Why Does Salad Have to Live on the C Drive?

Salad isn't just the app you see. It also manages a WSL (Windows Subsystem for Linux) environment where container
workloads run. You can learn more about that in [What is WSL?](/faq/jobs/what-is-wsl).

Salad sets up, updates, and repairs this environment automatically, and it always does so at a fixed location on your C
drive. Because Salad manages these files itself, they can't be relocated. The app expects to find them exactly where it
put them, and will recreate them there whenever it needs to.

We know C drive space is tight for a lot of Chefs, especially on machines with a smaller SSD as the boot drive.
Supporting other drives is a common request, and one we're aware of and intend to address one day. However, for now
Salad on the C drive is a strict requirement.

---

## How Can I Free Up Space on My C Drive?

If you're concerned about having enough C drive space to spare for Salad, it helps to know your target: container
workloads need at least 70GB of free storage space. You can find the full requirements in
[Is My Machine Compatible With Salad?](/faq/compatibility/is-my-machine-compatible-with-salad)

Here are the things most likely to actually make a difference:

### Clean Up Windows System Files

Windows itself is often the biggest space hog on the C drive, and its built-in cleanup tools skip big items unless you
specify them yourself. Here's how to do so:

1. Open **Settings > System > Storage** to see what's actually using your space.
2. Under **Temporary files**, look for **Previous Windows installation(s)** and **Windows Update Cleanup**. These alone
   can be tens of GB after a major Windows update.
3. Review the list carefully and remove what you don't need.

### Move Games to Another Drive

You don't need to delete anything. If you have a second drive, most game launchers can move installed games without
redownloading them:

- **Steam**: Right-click a game > **Properties > Installed Files > Move Install Folder**.
- **Epic, Battle.net, Xbox App**: Each has a similar move or change-location option in the game's settings.

Moving a couple of large games off your C drive is a quick and easy way to reclaim significant storage space.

### Relocate Your Personal Folders

Windows lets you move your Downloads, Videos, and Documents folders to another drive: right-click the folder, select
**Properties > Location**, and choose a new home. Windows moves the contents for you and everything keeps working as
normal.

---

If you've cleared space and Salad still reports a storage issue, or you have any other questions, contact
[Salad Support](/contact).
