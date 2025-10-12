---
title: How Salad Chooses Miners and Coins for Backup Earnings
---

# How Salad Chooses Miners and Coins for Backup Earnings

# Our Miner Selection Logic

When choosing what combination of miner and algorithm to run on your GPU, we prioritize options with the highest $/24Hrs compatible with your GPU. We calculate this using the default, stock options for your GPU model as we do not recommend, or ourselves do, overclocking or underclocking. We do this to ensure the highest possible earnings for Chefs on the network.

Depending on how your machine and environment is set up, it is possible that the highest $/24Hrs may not be the most efficient option available to you. Due to the large number variables involved though, we’re not able to calculate this for you and you will need to decide whether it is profitable for you or not. If you’re not making enough, or if it’s not efficient for you, we recommend disabling Crypto Mining from the [app settings](https://support.salad.com/article/353-salad-app-settings) or setting up your own miners to point at Salad.

If you live in an area with very high electricity bills, or if you have lower end hardware, it’s possible you may fit that bill of it being inefficient.

If we run into issues running our top earner option, we will automatically fall back to other options, allowing you to continue earning at the next highest option.

# I Have Multiple GPUs, Does Salad Use Both?

Right now, Salad only has native support for a single GPU installed in your system for cryptomining, and we will only run a single miner. We will use whatever is the “main” GPU in your system to choose this.

If you have multiple of the same GPU installed or GPUs with similar compatible specs (such as 3x RTX 4080 or 1x RTX 4080 and 1x RTX 4070), Salad will mine the same algorithm on all of them successfully. If you have very different GPU models (like an RTX 4090 and a GTX 1050, or an RTX 3060 and an RX 6600 XT), Salad will not be able to mine on the additional GPUs and will stick to the main GPU, leaving the others free.

# What Miners Does Salad Utilize?

We use different miners for different GPU models, depending on what is compatible and supports the required algorithms. If we run into issues running a certain miner on your machine, we will automatically retry with another compatible miner we support. Because profitability for algorithms change frequently, you will likely see different miners running over time as we update our selection logic to reflect that.

We keep miners updated to the current, stable, versions available. We will also remove miners if they are no longer compatible, and introduce new ones for incompatible GPU models.

Although we try our best, as we do not have every GPU on hand to test with, it’s possible that algorithm or driver updates may render certain miners or GPUs incompatible with each other over time. If you’re experiencing this, please contact us and we can take a look.

# Why not use other pools or algorithms?

We can only run algorithms available to us on the pools we are integrated with. With how our payout system works, we have found that many pools do not support the management features needed to be compatible with Salad, and so we’re limited to the pools we do support. The algorithms also need to have available miners that we are able to use (Windows compatibility, and End User License Agreements). Because of this, we may not be able to run certain algorithms or pools that may have a higher earning rate.

We actively monitor the available algorithms, and add new ones where compatible that your machine will automatically run when introduced.
