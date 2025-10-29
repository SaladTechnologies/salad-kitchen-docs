---
title: 'Why do my Earnings Look Different than the Network Monitor?'
---

_Last Updated: 23rd October 2025_

The [Salad Network Monitor](/docs/faq/community/network-monitor) provides a near-real-time overview of the demand for
different hardware types on the Salad Network, and their earnings. The earning rates shown are based on the overall
average earnings for machines with that hardware installed. This includes all earnings from
[Container Jobs](https://Community.salad.com/new-feature-container-environments-now-available/),
[Bandwidth Sharing Jobs](/docs/guides/getting-jobs/getting-bandwidth-sharing-jobs), and
[Cryptomining Jobs](/docs/guides/getting-jobs/getting-cryptomining-jobs).

It's normal for your earnings to look different from the Network Monitor if you're only running one type of Job. For
example, a machine earning only from [Cryptomining Jobs](/docs/guides/getting-jobs/getting-cryptomining-jobs) will
likely earn less than the average shown in the Network Monitor, as these are typically a lower paying Job type.
Similarly, if you've got a Container Job and Bandwidth Sharing on the go at the same time, you may see higher earnings.
The Network Monitor displays a range, your earnings should fall inside this range.

---

## **Why are my Earnings Higher?**

Earnings for Jobs can vary for the same GPU model, as SaladCloud Customers can choose from multiple
[GPU pricing tiers](https://docs.salad.com/container-engine/explanation/billing-pricing/priority-pricing) when they
create their Jobs, depending on how important their Job is to stay running. A Job running on a high-priority tier will
earn more than one running on a batch-priority tier, even if it's the same GPU model. During periods of high demand,
you're more likely to see high-priority Jobs running on your machine, which can increase your earnings.

If you're earning from Bandwidth Sharing or Cryptomining, these earnings can also vary strongly based on market
conditions, or the amount of bandwidth you're sharing and demand. It may be more profitable currently for the workloads
you're currently running. Your earnings may be in the top 25% range if this is the case.

---

## **Why are my Earnings Lower?**

Container Jobs are highly subject to demand. If there's low demand, you may not receive a Container Job and be running
other job types which may pay lower. If this happens, you may not currently match the average earnings shown in the
Network Monitor. Once you receive a Container Job, your earnings should increase. It's also possible that you're running
a Job on a lower-priority tier, which may earn less than the average shown in the Network Monitor.
