---
title: How to enable Virtualization Support on your machine
---

# How to enable Virtualization Support on your machine

To configure [Job Environments](https://salad.com/blog/container-workloads/) on your PC and chop Salad’s highest paying
jobs, you'll need to enable virtualization support in the BIOS of your CPU. The details vary between hardware
configurations and the manufacturer of your CPU or motherboard.

Follow these steps if you are stuck on Virtualization setup or have a degraded state prompting you to reboot your
computer in order to enable Virtualization.

**Before following these steps, please note that some virtualization software may interfere with Salad.** If you are
running programs like Docker or VirtualBox you may need to uninstall those programs before proceeding with Salad Job
setup.

---

These are general steps for enabling virtualization in your machine's BIOS. For more specific guides find your hardware
brand at the bottom of this page.

1. Make sure your machine
   [supports virtualization](https://support.salad.com/article/282-does-my-pc-support-virtualization). You will need
   Windows 10 or 11 and have a CPU that is capable of running virtualization.
2. Restart your PC and press your BIOS Setup key. Each hardware brand will have a slightly different setup key.  
   1. Find your hardware at the bottom of this guide for your Setup Key.
   2. Some common Setup Keys are : F10, F2, or Del

3. Look for a tab called **Advanced, Chipset** or **Virtualization**. This will vary by machine, see the list of brand
   specific instructions at the bottom of the page for details about your own hardware.
4. Once you find the Advanced, Chipset or Virtualization pages, look for menus called **CPU Configuration, Advanced CPU
   Configuration**, or **Virtualization Settings**. Your machine might differ slightly, a good rule of thumb is to look
   for words like configuration or virtualization.
5. Enable virtualization features, save and exit out of BIOS.
   1. In BIOS, virtualization features are called different names, depending on the manufacturer of your CPU. Here are
      some examples to look out for:
   2. Intel CPU: Look for **Intel Virtualization Technology (VT)**, **Intel (R) Virtualization Technology**, **VT-X**,
      **VTx**, or **VT-d**.
   3. AMD CPU: Look for **AMD Virtualization, AMD-V**, or **IOMMU.**
   4. Virtualization features may also be identified with generic terms such as **Virtual**, **Virtualization**,
      **Secure Virtual Machine**, or simply **SVM**.

6. Confirm virtualization is enabled by clicking on the Start button, and search for **Turn Windows Features on or off**
   window. Verify that **Virtual Machine Platform** and **Windows Subsystem for Linux** is enabled.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/615b47bfca9e0011a4434693/images/649f3e04cfd7fe604a7fe58b/file-HM08t5snqy.png)

If you are still experiencing problems with enabling Virtualization, create
[Salad Support](https://support.salad.com/article/216-how-to-create-a-support-ticket).

---

### Virtualization Guides by Hardware

The guides below outline detailed setup processes for popular prebuilt PCs and motherboards. 

- [Enable Virtualization on HP PCs](https://support.salad.com/article/273-enable-virtualization-on-hp-pcs)
- [Enable Virtualization on Lenovo PCs](https://support.salad.com/article/275-enable-virtualization-on-lenovo-pcs)
- [Enable Virtualization on Acer PCs](https://support.salad.com/article/276-enable-virtualization-on-acer-pcs)
- [Enable Virtualization on Asus PCs](https://support.salad.com/article/277-enable-virtualization-on-asus-pcs)
- [Enable Virtualization on Dell PCs](https://support.salad.com/article/278-enable-virtualization-on-dell-pcs)
- [Enable Virtualization by Motherboard: MSI (American Megatrends)](https://support.salad.com/article/279-enable-virtualization-by-motherboard-msi-american-megatrends)
- [Enable Virtualization by Motherboard: Gigabyte](https://support.salad.com/article/281-enable-virtualization-by-motherboard-gigabyte)

If you still need help and your manufacturer is not listed here, you may wish to consult online documentation to enable
virtualization support on your machine. Here are some handy resources to aid you in that process:

- [Does My PC Support Virtualization?](https://support.salad.com/article/282-does-my-pc-support-virtualization)
- [Identifying Your CPU](https://support.salad.com/article/274-identifying-your-cpu)
- [Identifying Your Motherboard](https://support.salad.com/article/280-identifying-your-motherboard)
