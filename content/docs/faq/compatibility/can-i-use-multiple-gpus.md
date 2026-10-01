---
title: Can I use multiple GPUs?
---

By GPUs, we specifically refer here to dedicated also called _discreet_ GPUs, such as NVIDIA and AMD Radeon RX series of
GPUs. Integrated graphics (Intel UHD, AMD Radeon Graphics, etc) are not supported individually and do not interfere with
multi-GPU setups.

---

At this time, Salad does **not** support multiple GPUs within one machine. This included the following configurations:

- Two or more of the exact same GPU (including SLI, Crossfire, etc)
- Two differing GPUs of the same brand (for example, a 3060 and a 4090)
- Two differing GPUs (different brands)

While we don't actively prevent these machines from Chopping on the network, this configuration does not have active
support and may experience degraded states, lower earnings, or difficulties to run the app.

Extensive support for multiple GPUs in one system is on our roadmap, though no estimate can be provided at this time.
