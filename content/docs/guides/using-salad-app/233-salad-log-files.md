---
title: Where to Find your Salad Logs
---

# Where to Find your Salad Logs

Finding your Salad log files:

1. Open your Salad widget by clicking the Salad icon in your system tray
   
   ![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/6567de73d0abc552941df7d5/file-ABSX5bNYvh.png)
2. Click the menu at the top left

<!--THE END-->

![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/6568c3a189b7a86809640e49/file-mQct2ZX9We.png)

3. Click the "Show Logs" button

<!--THE END-->

![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/6568c3e42e1b18513e418d86/file-ohDpn4uw7T.png)

4. This opens up the Salad log directory, containing all of your Salad logs. Follow instructions from Salad Support if directed for which logs to upload

![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/6568c44a2e1b18513e418d87/file-0clMQmhGpt.png)

* * *

## Understanding your log files:

## \\

The logs in the root of the Logs folder are the main SaladBowl logs. We persist these logs for 7 days. We may request these logs if you are experiencing a generic issue with the widget, or issues running the right jobs on your machine.

## \\gpuz

These log files track and record sensor data we receive in order to show GPU temperatures and usage in the widget. We persist these logs for 1 day. We may request these logs if you are not seeing your GPU usage or temperature within the widget.

## \\gpuz-init

These are the initialization logs for the above service, which logs what GPUs are installed in your machine, and information about your GPUs. We persist these logs for 1 day. We may request these logs if your GPU(s) is not appearing within the widget.

## \\systeminformation

These are the initialization logs to gather other system information like CPU model, and available system RAM. We persist these logs for 1 day. We may request these logs if your CPU(s) is not appearing within the widget.

## \\\[job name]

Logs found in other folder names (such as T-rex, TeamRedMiner, XMRig) contain the miner logs. We persist these logs for 7 days. We may request these logs if you are having issues running jobs on your machine.
