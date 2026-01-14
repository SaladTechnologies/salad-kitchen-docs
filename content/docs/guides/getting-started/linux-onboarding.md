---
title: Linux Onboarding
---

We currently offer limited (beta) support for Linux installations. We only support a few distributions at this time but
plan on expanding it.

## Prerequisites

- Supported OS.

- No other containerd (docker) packages installed as we need the latest containerd and use the official package from
  containerd.io. We build this package from official sources but host it locally in our repo.

---

## Account Authentication

1. Contact Salad at support@salad.com and request a Linux client JWT token.

We use a (JWT) token to authenticate a client and are provisioning these manually at this time. Please contact us and
ask for a Linux Token or JWT.

---

## Installation

### Install Script

1. Download install script and run it or do the steps manually. The script **only** checks your distribution and does
   the below steps.

- https://packages.salad.com/public/salad-install.sh

```sh
curl https://packages.salad.com/public/salad-install.sh > salad-install.sh
./salad-install.sh install
```

#### Uninstalling (w/ script)

To uninstall using the same script.

```sh
./salad-script.sh uninstall
```

### Manual Installation (Debian based)

1. Download repository setup package and install.

- https://packages.salad.com/debian/12/pool/main/s/salad-public/salad-public_0.0.1\~bookworm_all.deb
- https://packages.salad.com/debian/13/pool/main/s/salad-public/salad-public_0.0.1\~trixie_all.deb

```sh
# bookworm example
curl https://packages.salad.com/debian/12/pool/main/s/salad-public/salad-public_0.0.1\~bookworm_all.deb > salad-public-bookworm.deb
apt install ./salad-public-bookworm.deb
```

2. Install the salad-platform from our newly added repo.

```sh
apt install -y salad-platform
```

3. Get your JWT from support@salad.com (see above) and put it in the config file.

```sh
cat > /etc/salad/crisper.ini << EOF
[matrix]
jwt="YOUR JWT HERE"
EOF
```

3. (Re)start our services w/ the JWT in place.

```sh
systemctl restart crisper spinner
systemctl status crisper spinner
```

Status command should show them as `enabled` and `active (running)`.

#### Uninstalling (manually)

Uninstalling with standard packaging tools is very simple.

```sh
apt autoremove salad-platform salad-public
```

This should remove these packages and their dependencies. Note that it will keep the (possibly modified) config files.
To remove them as well use this command:

```sh
apt-get autopurge salad-platform salad-public
```

---

## Nvidia Drivers and Toolkit

We only support Nvidia hardware for GPU loads at the present time and you will need to install the drivers and toolkit
for everything to work properly. Nvidia maintains documentation on this process at..

https://docs.nvidia.com/datacenter/tesla/driver-installation-guide
https://docs.nvidia.com/cuda/cuda-installation-guide-linux/

### Nvidia Driver Installation summary for Debian 12 (bookworm)

1. Make sure you have the `contrib` section of the repo added.

```sh
echo "deb https://deb.debian.org/debian bookworm contrib" > /etc/apt/sources.list.d/debian-contrib.list
```

2. Add Nvidia's Debian repo to your apt sources list.

```sh
NVIDIA_CUDA_REPO="https://developer.download.nvidia.com/compute/cuda/repos/debian12/x86_64/cuda-keyring_1.1-1_all.deb"
curl "$NVIDIA_CUDA_REPO" > /tmp/nvidia.deb
dpkg --install /tmp/nvidia.deb
rm -v /tmp/nvidia.deb
```

3. Install the Driver

```sh
apt-get update
apt-get install --yes --no-install-recommends nvidia-kernel-open-dkms nvidia-driver-cuda
```

### Nvidia Toolkit Installation summary for Debian 13 (Trixie)

- experimental

1. Setup Nvidia repository from Driver using steps 1 and 2 in previous section, replacing `bookworm` with `trixie` and
   `debian12` with `debian13`.

```sh
echo "deb https://deb.debian.org/debian trixie contrib" > /etc/apt/sources.list.d/debian-contrib.list
NVIDIA_CUDA_REPO="https://developer.download.nvidia.com/compute/cuda/repos/debian13/x86_64/cuda-keyring_1.1-1_all.deb"
curl "$NVIDIA_CUDA_REPO" > /tmp/nvidia.deb
dpkg --install /tmp/nvidia.deb
rm -v /tmp/nvidia.deb
```

2. Install toolkit

```sh
apt-get update
apt-get install --yes --no-install-recommends nvidia-container-toolkit cuda-toolkit
```

---

## Auto-Updating Addendum

If you'd like to have our applications auto-update and don't have other automation, we suggest using your platform's
native automated update feature.

### Debian Unattended-Updates Configuration

Install unattended-upgrades package.

```sh
apt install unattended-upgrades
```

Configure unattended-upgrades to update our packages along with critical bug fixes and security updates. See the default
config or package documentation for more. We include the defaults as we are overriding the default configuration.

```sh
cat > /etc/apt/apt.conf.d/52unattended-upgrades-local << EOF
Unattended-Upgrade::Origins-Pattern {
        "origin=Debian,codename=${distro_codename},label=Debian";
        "origin=Debian,codename=${distro_codename},label=Debian-Security";
        "origin=Debian,codename=${distro_codename}-security,label=Debian-Security";
        "origin=Salad,codename=${distro_codename},label=Salad-Public";
};
EOF
```

Default config path: /etc/apt/apt.conf.d/50unattended-upgrades

Package documenation: /usr/share/doc/unattended-upgrades/README.md.gz

---

## Security Addendum

If we were setting these machines up we would lock things down a bit. Here are example firewall and sshd configurations
we've used in the past. Note that all these settings are optional and are not required to run our software.

### Firewall

We used the NFTables firewall (`nftables` package) with the following configuration.

```sh
cat > /etc/nftables.conf << EOF
#!/usr/sbin/nft -f
flush ruleset
table inet firewall {
    chain inbound_ipv4 {
        icmp type echo-request limit rate 5/second accept
    }
    chain inbound_ipv6 {
        icmpv6 type { nd-neighbor-solicit, nd-router-advert, nd-neighbor-advert } accept
        icmpv6 type echo-request limit rate 5/second accept
    }
    chain inbound {
        type filter hook input priority 0; policy drop;
        ct state vmap { established : accept, related : accept, invalid : drop }
        iifname lo accept
        meta protocol vmap { ip : jump inbound_ipv4, ip6 : jump inbound_ipv6 }
        tcp dport { 22, 80, 8080, 50000 } accept
    }
}
EOF
```

### SSHD

This configures SSH to only support newer, known secure crypto algorithms. It also restricts it to protocol version 2
(the newest) and disables client DNS lookup (for faster connections).

```sh
cat > /etc/ssh/sshd_config.d/lockdown.conf << EOF
Protocol 2
UseDNS no
# KeyAlgorithms - defaults are good
KexAlgorithms -diffie-hellman-group-exchange-sha256,diffie-hellman-group16-sha512,diffie-hellman-group18-sha512,diffie-hellman-group14-sha256
Ciphers -hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com
MACs -umac-64@openssh.com,umac-128@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1
EOF
```
