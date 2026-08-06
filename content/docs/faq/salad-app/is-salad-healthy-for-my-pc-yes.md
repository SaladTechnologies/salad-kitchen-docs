---
title: Is Salad Safe for my PC?
---

## Is Salad Safe to Run?

Yes. Salad is safe to run on any well-maintained consumer PC. GPUs and CPUs are engineered for sustained heavy
workloads. The same chips power data centers and compute clusters that run around the clock for years. With adequate
cooling and regular cleaning, running Salad keeps your hardware well within its design limits.

## Will Salad Wear Out my GPU?

Running Salad stresses your PC about as much as playing a demanding video game, hosting your own large language model
(LLM), or running a 3D Blender render. The load itself is nothing your hardware wasn't built for.

Here is the honest picture on wear. The GPU chip itself tolerates sustained load extremely well. The best real-world
evidence comes from crypto mining, which ran millions of GPUs 24/7 for years under heavier conditions than Salad.
Independent tests of ex-mining cards found their performance indistinguishable from lightly used ones. Steady workloads
like Salad also hold your card at a stable temperature, which is gentler on the circuit board than the repeated heat-up
and cool-down cycles of start-stop gaming.

What Salad's extra hours do add up on are the parts designed to be maintained: fans, thermal paste, and dust. Fans are
rated for years of continuous use and cost $10 to $30 to replace. Thermal paste costs a few dollars. In practice, most
GPUs are retired for being outdated long before they wear out.

Chefs have earned over $10 million running Salad across more than 2 million downloads. You can read what they say on
[Trustpilot](https://www.trustpilot.com/review/salad.com) or ask our 40,000+ member
[Discord community](http://discord.gg/salad).

---

## Keep an Eye on Temperatures

- Keep your GPU core temperature under 83ºC (181ºF).
- On cards with GDDR6X memory (RTX 3080 and 3090 class), also watch the memory junction temperature and keep it under
  about 95ºC. Hot memory is the most common failure point on heavily used cards.
- Free tools like HWiNFO show both readings. If temperatures creep up over months, the cause is usually dust buildup or
  dried thermal paste. Both are cheap fixes.

---

## Overclocking, Underclocking, and Undervolting

Run your GPU and CPU at their factory settings unless you know what you are doing. Specifically:

- Overclocking is not allowed. Pushing clocks past stock increases temperatures and power draw, causes instability and
  failed jobs, and can damage hardware in rare cases.
- Underclocking and power limiting are not allowed. Capping clock speeds or power below stock slows down workloads,
  which causes job failures and lower earnings, and violates Salad's Terms of Service (ToS).
- Undervolting at stock clocks is allowed. It lowers heat and power draw without slowing your jobs. Test your undervolt
  thoroughly for stability before running Salad on it: an unstable undervolt causes crashed jobs, which cost you
  earnings and hurt your node's reliability.

---

## How to Properly Maintain Your PC

- Dust your PC every 3 to 6 months. Compressed air on the fans, filters, and heatsinks is enough. Dust buildup is one of
  the main causes of overheating.
- Keep your PC off carpets and away from pets to minimize dust and hair accumulation, and make sure vents aren't
  blocked.
- If your GPU runs hotter than it used to despite cleaning, its thermal paste and pads may need replacing. This is a
  routine service that any repair shop can do, and it restores like-new temperatures.
- A GPU fan that gets loud or stops spinning is replaceable for $10 to $30. If your card is still under warranty,
  contact the manufacturer instead of opening it up.

---

## If Salad is Safe, Why Does Antivirus Flag It Sometimes?

Some antivirus programs flag Salad because of how it uses your PC's resources:

- Advanced Windows features, including [WSL2](/faq/jobs/what-is-wsl).
- Optional verified miner software.

This is a common false positive. Antivirus tools frequently take a zero-trust approach to any software that runs heavy
workloads. Salad does not harm your PC or compromise your privacy.

---

## Still Have Concerns?

[Contact Salad Support](/contact) or join our [Discord server](http://discord.gg/salad) and we'll be happy to help.
