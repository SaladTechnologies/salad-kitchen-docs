---
title: How to Disable ECC
---

# How to Disable ECC

ECC (or Error-Correcting Code) memory helps detect and correct memory errors, which is crucial for scientific computing
and data centers but not always needed for other workloads. The problem? Enabling ECC slightly reduces available VRAM,
which can dip below the threshold required for Salad's container workloads.

Disabling ECC can ensure you get the most out of your GPU, and are eligible to all workloads in the network. Let’s dig
in and clear out that extra seasoning!

---

## Step 1: Check if ECC is Enabled on Your GPU

Before we start tossing things out, let’s make sure your GPU actually has ECC enabled. Here’s how to check:

### Windows &amp; Linux (NVIDIA GPUs):

1. Open a terminal or Command Prompt.
2. Run the following command:

```
nvidia-smi --query-gpu=ecc.mode.current --format=csv
```

1. If it says `Enabled`, ECC is active.

(Note: AMD GPUs also support ECC, but disabling it depends on specific software tools.)

---

## Step 2: Disable ECC via NVIDIA-SMI

Now, let’s get into the kitchen and start making adjustments!

1. Open a terminal or Command Prompt as an administrator.
2. Run the following command:

```
nvidia-smi -e 0
```

1. You should see a confirmation message.
2. Restart your system for the changes to take effect.

---

## Step 3: Verify ECC is Disabled

Just like tasting your dressing before pouring it over the salad, you’ll want to double-check your work:

1. Run the same command from **Step 1**:

```
nvidia-smi --query-gpu=ecc.mode.current --format=csv
```

1. If it now says `Disabled` , you're good to go!

---

## Troubleshooting:

- **Command Not Found?** Ensure you have NVIDIA drivers and CUDA installed.
- **Option Not Available?** Some workstation GPUs force ECC on and may not allow it to be disabled.
- **Still Seeing ECC?** Try restarting your system and checking again.
