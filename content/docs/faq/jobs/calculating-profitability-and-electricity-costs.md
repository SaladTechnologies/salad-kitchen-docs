---
title: Calculating profitability and electricity costs
description: How to measure your machine's power draw and work out whether running Salad pays for its electricity.
---

Running Salad uses electricity, so to know whether it is profitable you need to compare what your machine earns against
what it costs to power. The easiest way is the profitability calculator on our
[download page](https://salad.com/download). You need two numbers: your machine's power consumption in watts (W) and
your electricity rate per kilowatt-hour (kWh).

## Step 1: Find your machine's power consumption

Three ways, from most to least accurate.

### Option 1: A plug-in power meter

A plug-in power meter sits between your PC's power cable and the wall and shows exactly what the whole machine draws.
They are inexpensive at any hardware store.

1. Plug the meter into the wall, then plug your PC into the meter.
2. Start Salad and wait for a job to begin running.
3. Note the wattage while Chopping. If it moves around, use the average.

This includes everything, so it is the number to put in the calculator.

### Option 2: Monitoring software

Free tools like [HWiNFO](https://www.hwinfo.com/) and [GPU-Z](https://www.techpowerup.com/gpuz/) show component power in
real time.

1. Start Salad and wait for a job to begin running.
2. Find **GPU Power** or **Total Board Power** for your GPU, and **CPU Package Power** for your CPU.
3. Add them together, then add roughly 50–100 W for the rest of the system (motherboard, memory, storage, fans).

Software can't see power lost in your power supply, so real usage is somewhat higher than this total.

### Option 3: Manufacturer specifications

1. [Find your GPU and CPU](/guides/your-pc/how-to-find-your-gpu-or-cpu).
2. Look up each on the manufacturer's site. For GPUs use **Total Graphics Power (TGP)** or **Total Board Power (TBP)**;
   for CPUs use **TDP** or **Base Power**.
3. Add them together, then add roughly 50–100 W for the rest of the system.

This is a rough, worst-case figure. Most container jobs use only your GPU, but some also use the CPU, so include both if
unsure.

## Step 2: Find your electricity rate

It is on your bill as a cost per kWh, such as $0.15/kWh. If delivery or other per-kWh charges are listed separately, add
them. If your rate changes through the day, use the rate for the hours you usually Chop.

## Step 3: Calculate your costs

Enter both numbers into the [profitability calculator](https://salad.com/download), or work it out yourself:

```text
Daily Cost = (Watts ÷ 1,000) × Hours Chopping per Day × Electricity Rate
```

For a machine drawing 300 W, Chopping 24 hours a day at $0.15/kWh:

```text
(300 ÷ 1,000) × 24 × $0.15 = $1.08 per day
```

Subtract that from your daily earnings in your [earnings history](/guides/using-salad/earnings-summary) to get your
profit. Rates for different hardware are on the [Network Monitor](/faq/jobs/network-monitor).

## Tips

- **If your PC would be on anyway**, you only pay for the extra power Salad uses: measure idle draw and subtract it from
  the Chopping draw.
- **Don't power limit your GPU to save electricity.** It blocks container jobs, which cost you far more than the power
  saved. See [How power limiting impacts your earnings](/troubleshooting/degraded-state/gpu-power-limit).
- **Earnings change with demand**, so recheck your profitability from time to time.
