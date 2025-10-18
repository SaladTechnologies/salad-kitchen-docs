---
title: How Power Limiting Impacts your Earnings
---

Power limiting, or intentionally reducing the wattage, voltage, or power draw of your GPU, will decrease your earnings
on Salad. Chefs who power limit their PC will receive a Degraded Notification, indicating they cannot run Container
Workloads.

---

# Why does Power Limiting Stop me Running Container Workloads?

When a customer runs a job, they're paying for your hardware. They expect what they pay for to perform as it should, and
so we ensure that your GPU meets expectations. Power limiting can reduce the maximum performance your GPU can achieve in
certain workloads, even if it works fine for Gaming.

---

# How Do I Fix it?

Here are some steps you can take to make sure your PC performs optimally on Salad. You may need to complete these steps
in order to resolve the error message (14) you received in the Salad app and resume Chopping as normal.

## Laptops

1. Make sure to plug your machine in while Chopping Salad. Many gaming laptops will go into a Power Saving mode while
   unplugged and this throttles performance on Salad.
2. Some gaming laptops have performance modes that affect the amount of power your machine outputs. These settings
   cannot be changed via Windows Power saving mode as they are generally found in the proprietary brand software on your
   laptop.
   1. For example, ASUS laptops use
      [Armory Crate](https://rog.asus.com/articles/Guides/armoury-crate-performance-modes-explained-silent-vs-performance-vs-turbo-vs-windows/)
      to manage performance through four levels of performance modes. Manual Mode, Silent Mode, Performance Mode, and
      Turbo mode. You may need to experiment with each mode to determine which is best for you.

## Desktop PCs

1. Determine which manufacturer made the GPU you have, and find out what proprietary performance management software is
   used.
2. Install and open the software, and ensure everything is configured to 'stock' settings. Usually this means everything
   is set back to 100%, or +/- 0.
   1. For example, MSI Afterburner is common for many desktop PCs. Chefs can manage their GPU power output in MSI by
      changing their Power Limit settings. For more information, check out this
      [blog from MSI](https://www.msi.com/blog/msi-afterburner-overclocking-undervolting-guide#undervoltingguide). Keep
      in mind this is an example of settings available to Chefs with MSI Afterburner. *Chefs should not follow these
      steps to undervolt. Doing so could make them ineligible to receive Container workload*s.

If you're having trouble getting your settings back to normal, or you're still experiencing issues despite resetting it,
please contact [Salad Support](/docs/guides/your-pc/216-how-to-create-a-support-ticket) and we can help troubleshoot.
