---
title: Can I move Salad from the C drive?
description: Salad must live on your C drive and cannot be moved; here is why, and how to free up the space it needs.
---

No. Salad has to be installed on your C: drive, and there is no supported way to move it: no setting in the app, and no
manual method Support can help with. This applies to the Salad app, the WSL environment where container jobs run, and
everything else Salad stores.

## Why it has to be on C:

Salad isn't just the app. It also manages a [WSL](/guides/your-pc/what-is-wsl) environment where container jobs run, and
it sets up, updates and repairs that environment automatically at a fixed location on C:. Because Salad owns those
files, they can't be relocated: the app expects to find them where it put them, and recreates them there whenever it
needs to. We know C: space is tight on many machines with a small boot SSD, and supporting other drives is a common
request, but for now C: is a strict requirement.

## How to free up space on C:

Container jobs need at least 70 GB free. The things most likely to make a difference:

### Clean up Windows system files

1. Open **Settings > System > Storage** to see what is using the space.
2. Under **Temporary files**, look for **Previous Windows installation(s)** and **Windows Update Cleanup**. These alone
   can be tens of GB after a major Windows update.
3. Review the list and remove what you don't need.

### Move games to another drive

Most launchers can move installed games without redownloading:

- **Steam:** right-click a game > **Properties > Installed Files > Move Install Folder**.
- **Epic, Battle.net, Xbox app:** each has a similar move or change-location option in the game's settings.

### Relocate your personal folders

Right-click your Downloads, Videos or Documents folder, select **Properties > Location**, and pick a folder on another
drive. Windows moves the contents for you.

If you've cleared space and Salad still reports a storage problem, contact [Salad Support](/contact).
