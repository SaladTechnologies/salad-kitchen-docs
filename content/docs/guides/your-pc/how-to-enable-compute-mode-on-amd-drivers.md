---
title: How to enable Compute mode on AMD drivers
description:
  Switch AMD RX 400 and 500 series cards to Compute workload mode in AMD Software so Salad can Chop at full speed.
---

AMD RX 400 and 500 series cards (RX 470, 480, 570, 580 and 590) earn far less on Salad unless the driver's GPU workload
is set to **Compute**. Switch it back to **Graphics** when you want to game, as Compute mode can cost a few FPS in some
titles.

Before you start, [update your AMD drivers](/guides/your-pc/how-to-update-my-amd-drivers) and **stop Salad**.

## Option 1: let Salad do it

1. Stop Salad.
2. [Enable elevated permissions](/guides/using-salad/elevated-permissions) in the Salad app.
3. Start Salad again.

## Option 2: set it in AMD Software

1. Stop Salad.
2. Open AMD Software and click the **gear icon** at the top right.

   ![screenshot of amd driver app](../../../../content/images/guides/your-pc/how-to-enable-compute-mode-on-amd-drivers-1.png)

3. Click **Graphics** at the top left.

   ![screenshot of graphics tab](../../../../content/images/guides/your-pc/how-to-enable-compute-mode-on-amd-drivers-2.png)

4. Scroll down and click **Advanced**.

   ![screenshot of advanced options](../../../../content/images/guides/your-pc/how-to-enable-compute-mode-on-amd-drivers-3.png)

5. Find **GPU Workload** and set it to **Compute**.

   ![screenshot of enabling compute mode](../../../../content/images/guides/your-pc/how-to-enable-compute-mode-on-amd-drivers-4.png)

6. Click **OK** to restart the graphics driver.

   ![screenshot of clicking okay](../../../../content/images/guides/your-pc/how-to-enable-compute-mode-on-amd-drivers-5.png)

Your screen goes black for a moment while the driver restarts. Start Salad again and it should Chop at full speed.
