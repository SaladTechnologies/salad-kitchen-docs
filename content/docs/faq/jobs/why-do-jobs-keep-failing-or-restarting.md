---
title: 'Why do Jobs Keep Failing or Restarting?'
---

_Last Updated: 23rd October 2025_

If your [Container Jobs](https://Community.salad.com/new-feature-container-environments-now-available/) are regularly
'failing' or 'restarting', but you're not getting any
[error messages](/docs/guides/using-salad/how-does-the-notifications-page-work) in the Salad App, this usually means the
failure was not caused by an issue with the Salad App or your machine. Instead, it's likely that the Job itself has
encountered an error or is configured incorrectly.

---

A common cause of this is an incorrectly configured Job being run on the Salad Network. This often happens when a
SaladCloud customer is still testing their new Jobs, and they're not yet correctly set up for Salad. When this happens,
the Job may start running, but then quickly fail or restart. There isn't anything you need to do, we automatically
notify the SaladCloud customer when this happens and remove the Job from the network. You'll be put back in the queue to
receive the next available Container Job automatically.

You may also see similar behavior if the SaladCloud customer has decided to
[re-allocate](/docs/faq/jobs/how-does-reallocation-work-on-salad) their Jobs to a different machine, or remove them from
the network entirely. This happens commonly with [Batch Jobs](/docs/faq/jobs/what-are-batch-jobs). Just like before,
you'll be automatically put back in the queue to receive the next available Container Job.
