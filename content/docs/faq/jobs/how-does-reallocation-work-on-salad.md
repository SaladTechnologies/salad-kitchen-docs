---
title: How does Re-allocation Work on Salad?
---

Re-allocation happens when a SaladCloud customer decides to move their Job from one machine to another. When this
happens, your machine will stop running the Job, and someone else will start running it instead. Your machine will then
be automatically put back in the queue to receive the next available Container Job.

---

## **Why does Re-allocation Happen?**

It usually happens when a SaladCloud customer is unhappy with the performance of their Jobs on a particular machine, or
if they need to move their Jobs to a different region or hardware type. Re-allocation is not the only way that Jobs can
stop running on your machine though, it may be that the SaladCloud customer pulled the Job from the network entirely, or
that the Job itself [encountered an error](/docs/faq/jobs/why-do-jobs-keep-failing-or-restarting) and failed.

---

## **How do I Prevent Re-allocation?**

To help prevent this from happening:

- Make sure that your PC is
  [set up correctly for Container Jobs](/docs/troubleshooting/container-jobs/346-container-workloads-troubleshooting).
- That you're not running any other programs that could
  [utilize your hardware resources](/docs/faq/salad-app/380-temporary-workload-block).
- That you have a solid, stable [internet connection](/docs/guides/your-pc/619-improve-internet-speed-container-jobs).

This may not stop re-allocation entirely, as ultimately it's up to the SaladCloud customer to decide where they want to
run their Jobs, but it will give your PC the best chance of keeping the Job. If you are still re-allocated, you don't
need to do anything. You'll be automatically put back in the queue to receive the next available Container Job.
