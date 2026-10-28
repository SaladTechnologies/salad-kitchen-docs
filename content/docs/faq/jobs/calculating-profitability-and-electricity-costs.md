---
title: Calculating Profitability & Electricity Costs
---

Running Salad uses electricity, so to know whether Salad is profitable for you, you'll need to compare what your machine
earns against what it costs to power it. The easiest way to do this is with the profitability calculator on our
[download page](https://salad.com/download). To use it, you'll need two numbers:

- **Your machine's power consumption**, in watts (W)
- **Your electricity rate**, in cost per kilowatt-hour (kWh)

## Step 1: Find Your Machine's Power Consumption

Your machine's power consumption is how much electricity it draws while Chopping. There are three ways to find it, from
most to least accurate.

### Option 1: Use a Plug-In Power Meter (Most Accurate)

A plug-in power meter (sometimes called a watt meter or energy monitor) sits between your PC's power cable and the wall
outlet, and shows exactly how much power your whole machine is drawing. These are inexpensive and available at most
hardware stores.

1. Plug the power meter into the wall, then plug your PC into the power meter.
2. Start Salad and wait for a workload to begin running.
3. Note the wattage shown on the meter while your machine is Chopping. If it moves around, use the average.

This measures everything, including your GPU, CPU, and the rest of your system, so it's the number you should use in the
calculator.

### Option 2: Use Monitoring Software

Free tools like [HWiNFO](https://www.hwinfo.com/) and [GPU-Z](https://www.techpowerup.com/gpuz/) can show how much power
your components are drawing in real time.

1. Start Salad and wait for a workload to begin running.
2. Open your monitoring software and find the power readings, such as **GPU Power** or **Total Board Power** for your
   GPU, and **CPU Package Power** for your CPU.
3. Add these readings together.
4. Add roughly 50–100 W for the rest of your system (motherboard, memory, storage, fans), since software can't measure
   these.

Software readings only cover individual components and don't account for power lost in your power supply, so your real
usage will be somewhat higher than this total.

### Option 3: Estimate From Manufacturer Specifications

If you can't measure your power draw, you can estimate it from your hardware's specifications.

1. [Find your GPU and CPU](/guides/your-pc/how-to-find-your-gpu-or-cpu).
2. Look up each one on the manufacturer's website. For GPUs, look for **Total Graphics Power (TGP)** or **Total Board
   Power (TBP)**. For CPUs, look for **TDP** or **Base Power**.
3. Add these together, then add roughly 50–100 W for the rest of your system.

This gives a rough, worst-case estimate. Your machine may use less than this, depending on the workload.

Most container workloads on Salad only use your GPU, but some also use your CPU. If you're unsure, include both in your
total so you don't underestimate your costs.

## Step 2: Find Your Electricity Rate

Your electricity rate is listed on your electricity bill as a cost per kilowatt-hour (kWh), such as $0.15/kWh. If your
bill lists delivery or other per-kWh charges separately, add them together for your total rate. If your rate changes
throughout the day, use the rate for the hours your machine usually Chops.

## Step 3: Calculate Your Costs

Enter your power consumption and electricity rate into the [profitability calculator](https://salad.com/download) to see
if Salad is profitable for your machine.

If you'd like to work it out yourself, use this formula:

```text
Daily Cost = (Watts ÷ 1,000) × Hours Chopping per Day × Electricity Rate
```

For example, a machine drawing 300 W that Chops for 24 hours a day, with an electricity rate of $0.15/kWh:

```text
(300 ÷ 1,000) × 24 × $0.15 = $1.08 per day
```

Subtract this from your daily earnings to find your profit. You can see what your machine actually earns in your
[earnings history](/guides/using-salad/how-to-see-your-earnings-history), and current earning rates for different
hardware on our [Network Monitor](https://salad.com/earn/demand).

## Tips

- **If your PC would be on anyway**, you only pay for the extra power Salad uses. To find this, measure your machine's
  power draw while idle, then subtract it from your power draw while Chopping.
- **Don't power limit your GPU to save electricity.** Power limiting can stop your machine from running container
  workloads. See [How Power Limiting Impacts your Earnings](/faq/jobs/pc-power-limiting-faq) for more information.
- **Earnings change with demand**, so it's worth checking your profitability again from time to time.
