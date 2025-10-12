---
title: Can You Restart or Retry Failed Jobs on Salad?
---

# Can You Restart or Retry Failed Jobs on Salad?

Salad automatically takes care of retrying failed
[Container Jobs](https://community.salad.com/new-feature-container-environments-now-available/). However, what may
appear to be a “failed job,” could also be a successful and intended “workload exit.” Here are some examples of normal
and expected workload exits:

- When an individual Container Job is fully completed
- A SaladCloud Customer reallocates to different machines
- A SaladCloud Customer decreases their requested machines

These workload exits are normal, and Salad manages them for you automatically. We’ll immediately start working to find
you another Container Job, no interaction necessary.

However, some specific failure states are not addressable by our automatic reallocations. If this happens, we will send
a degraded state error notification in the Salad App with instructions for resolution. There’s no need to restart or
retry yourself via the Salad App. We’ll let you know when you need to take action, and what you need to do.

---

## When Will Salad Automatically Retry Failed Container Jobs?

Salad will automatically retry failed Container Jobs, provided that the customer has configured them properly for
retries. The root causes of these failures are typically temporary issues, such as network errors or a brief systems
glitch. 

---

## When Will Salad Not Automatically Retry Failed Container Jobs?

As we mentioned above, some workload exits are not able to be retried. Common examples of this include:

- Misconfigured container images and/or workloads
- Container Jobs featuring less stable testing workloads

Our customers can also set their own parameters for reallocation. Typically these parameters are based on how well your
machine(s) run their Container Job. Reallocations often stem from:

- Container Jobs that are taking too long to complete.
- Failing to produce the expected outputs
- Insufficient latency or speeds

Unfortunately you’re not able to manually force Salad to retry any job.
