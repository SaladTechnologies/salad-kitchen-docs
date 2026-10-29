---
title: Close games and other programs
description: Which programs stop Salad from using your GPU, and what to do when you need them.
---

Salad needs your whole graphics card (GPU), plus the CPU and RAM a job asks for. When another program is using the GPU,
Salad automatically [pauses Chopping](/troubleshooting/degraded-state/gpu-temporarily-disabled) until it is closed.
Programs that count as using the GPU include:

- Video games.
- Local AI tools such as Ollama, LM Studio, and Stable Diffusion web UIs. These hold the GPU even when they look idle.
- Overlays and monitoring tools such as game overlays, FPS counters, and some hardware monitors.
- Applications with GPU acceleration (web browsers, Discord).
- Video editing and rendering software (Adobe Premiere Pro, DaVinci Resolve).
- 3D modelling software (Blender, Autodesk Maya).
- High-resolution video playback (4K or 8K).
- Streaming software (OBS Studio, Streamlabs).
- Virtual machines and emulators (VMware, VirtualBox, Android emulators).
- Benchmarking tools (3DMark, Unigine Heaven).
- Any other GPU compute software, including other mining or compute-sharing apps.

Close these before you start Chopping. If you need one of them while Salad is running, pause Salad first by choosing
**Pause Until Idle** or **Pause Indefinitely** in the app (see
[Salad's running states](/guides/using-salad/salads-different-running-states)); this stops the job cleanly and frees
your hardware. Resume when you are done, or let [auto start](/guides/using-salad/how-to-enable-auto-start) resume Salad
the next time you go idle.

If Salad keeps reporting that your GPU is in use when you have nothing open, see
[GPU temporarily disabled](/troubleshooting/degraded-state/gpu-temporarily-disabled).
