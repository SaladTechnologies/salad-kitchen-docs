---
title: Temporary Workload Block
---

Salad is meant to chop while you are AFK. Gaming and some other heavy compute processes could negatively impact jobs.
SaladCloud Customers pay for your hardware, if you're busy gaming they aren't getting what they're paying for so we
automatically pause Salad when we detect this.

## **What kind of activities can trigger the notification?**

- Running GPU intensive games.
- Crypto mining with non-Salad miners.
- Using programs like Adobe, Photoshop or 3-D rendering software like Blender.
- Streaming high resolution video on Youtube or Netflix.

## **What happens next?**

Once the notification triggers, you will have 60 seconds to stop the game or video on your PC. If you cannot stop the
activity then Salad will temporarily disable your GPU for the duration of the Chopping session. This is a temporary
condition that ends when you stop Chopping.

You will see a temporary GPU Disabled badge over your GPU resource card in the Performance Tab. To remove this badge,
stop Chopping and disable GPU intensive processes on your PC.

![](../../../../content/images/faq/salad-app/temporary-workload-block-1.png)

---

## **Why is Salad disabling my hardware?**

We don't want to interrupt gaming or productivity activities on your PC. This will allow us to give you more
flexibility, while maintaining the health of the network at the same time. If your PC is not able to run a workload due
to heavy GPU usage, then we can quickly and efficiently assign that workload to a Chef whose machine is available.

---

## **What if I get a notification while I'm AFK?**

We have done our best to accurately recognize as many GPU processes as possible but there might be programs and
applications that trigger a notification incorrectly. If this happens, reach out to
[Salad Support.](/docs/guides/your-pc/216-how-to-create-a-support-ticket) Be sure to include a screenshot of the
notification and of your Task Manager showing the list of open processes.
