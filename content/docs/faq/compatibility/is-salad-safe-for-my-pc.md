---
title: Is Salad safe for my PC?
description:
  Whether running Salad wears out your hardware, what temperatures to watch, undervolting, crashes under load, and
  antivirus warnings.
---

Yes. Salad is safe to run on any well-maintained consumer PC. GPUs and CPUs are built for sustained heavy workloads; the
same chips run in data centers around the clock for years. With adequate cooling and regular cleaning, Salad keeps your
hardware well within its design limits.

## Will Salad wear out my GPU?

Running Salad stresses your PC about as much as a demanding game, a local AI model or a long 3D render. The GPU chip
itself tolerates sustained load extremely well: crypto mining ran millions of cards 24/7 for years under harsher
conditions, and independent tests of ex-mining cards found them indistinguishable from lightly used ones. A steady
workload also holds the card at a stable temperature, which is gentler on the circuit board than the heat-up and
cool-down cycles of start-stop gaming.

What the extra hours do use up are the parts designed to be maintained: fans, thermal paste and dust filters. Fans are
rated for years of continuous use and cost little to replace; thermal paste costs a few dollars. In practice most GPUs
are retired for being outdated long before they wear out.

## Keep an eye on temperatures

- Keep the GPU core under 90 °C.
- On cards with GDDR6X memory (RTX 3080 and 3090 class), also watch the memory junction temperature and keep it under
  about 95 °C. Hot memory is the most common failure point on heavily used cards.
- Free tools like HWiNFO show both. If temperatures creep up over months, the cause is usually dust or dried thermal
  paste, both cheap fixes.

## Overclocking, underclocking and undervolting

Run your GPU and CPU at factory settings unless you know what you are doing.

- **Power limiting or underclocking** makes your machine fail the performance check, triggers a "GPU Power Limit Set"
  notification and blocks container jobs. See
  [How power limiting impacts your earnings](/troubleshooting/degraded-state/gpu-power-limit).
- **Undervolting at stock clocks** is allowed and lowers heat and power draw. Test it thoroughly first: an unstable
  undervolt crashes jobs, which costs you earnings and hurts your machine's reliability record.

## Sudden reboots or black screens under load

If your PC restarts, black-screens or freezes while Chopping, Salad didn't cause it; the sustained load exposed a fault
that games or stress tests would also find. Windows Reliability Monitor typically shows a display driver crash
(`nvlddmkm` on NVIDIA) or an unexpected shutdown. The usual causes, in order: an overheating or dusty GPU, an unstable
overclock or undervolt, a power supply that can't hold the card's peak draw, or a bad driver install. Reset clocks and
voltages to stock, check temperatures,
[reinstall your GPU drivers cleanly](/guides/your-pc/how-to-reinstall-gpu-drivers), and if it continues, test the power
supply and the card itself.

## Maintain your PC

- Dust it every 3 to 6 months with compressed air on fans, filters and heatsinks.
- Keep it off carpet, away from pets, with vents unblocked.
- If it runs hotter than it used to despite cleaning, the thermal paste and pads may need replacing, a routine job for
  any repair shop.
- A loud or stopped GPU fan is cheap to replace; if the card is under warranty, go through the manufacturer.

## If Salad is safe, why does antivirus flag it?

Some antivirus programs flag Salad because it uses advanced Windows features such as [WSL](/guides/your-pc/what-is-wsl)
and, if you have mining enabled, open-source miner software that malware also abuses. It is a false positive: Salad
doesn't harm your PC or compromise your privacy. See [Antivirus](/troubleshooting/antivirus) for how to allow it, and
[How to check if your Salad installer is safe](/guides/your-pc/how-to-check-if-your-salad-installer-is-safe).

Still have concerns? Contact [Salad Support](/contact).
