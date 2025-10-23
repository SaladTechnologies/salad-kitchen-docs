---
title: 'What are Batch Jobs in Salad, and How are they Different?'
---

_Last Updated: 23rd October 2025_

A Batch Job is a type of [Container Job](https://Community.salad.com/new-feature-container-environments-now-available/)
that is short-lived on the network. These are jobs that typically only run for a few hours or days, and then complete.
Once a Batch Job is complete, that Job will not be available on the network again.

---

## **How are Batch Jobs Different from Other Container Jobs?**

A common example of a Batch Job is to run a service like [HashCat](https://hardcidr.com/posts/saladcat/). This is an
encryption cracking tool that is often used to recover lost passwords and by security researchers. This type of job
needs a lot of compute power to run, but once the password is found, the Job is no longer needed, and therefore ends.
While Batch Jobs are active on the network, they usually require large quantities of machines, and so are
highly-available.

While Batch Jobs are usually short, most other
[Container Jobs](https://Community.salad.com/new-feature-container-environments-now-available/) are long-running. These
longer Container Jobs can often run for weeks or months at a time, and are usually used for workloads that require
continuous processing power, or regularly receive new data to work on. It's common to regularly receive the same Jobs.
An example of this is to serve AI Inference or Machine Learning models.
