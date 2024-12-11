---
title: How To Implement Wireguard-Easy On Your VPS
description: Simplify your VPN setup with WG-Easy
keywords: ['Wireguard', 'VPN', 'Docker', 'Networking']
date: 2024-03-08
heroimage: 
  url: /heroimage/blog-placeholder-2.jpg
  alt: blog-placeholder
categories:
  - networking
  - devops
  - vps
---


Welcome to the **not** so ultimate guide on setting up wg-easy on your VPS. If you've ever wondered on how to spin up a VPN in matter of minutes, you're in the right place. This setup is suitable if you want a private gateway to access internal tools, databases or services hosted on your VPS.

## Why You Need a VPN for Private Resources?

Imagine you’ve deployed critical services on your VPS—like a private database, internal API, or admin dashboard. The last thing you want is to expose these sensitive services to the public internet. That’s where a **VPN** shines:
1. **Secure Access**: Only authenticated users can access private resources.
2. **Isolated Network**: VPNs keep your services on a private network, away from prying eyes.
3. **Convenience**: Once connected to the VPN, you can use private services just like they’re on your local network.

Try to imagine (again) for this scenario

![How it works](/blogs/how-to-implement-wg-easy/how-it-works.png)

Let's say there are two employees working at Eeveel Company. Eric works in the Sales department, and John works in the HR department. The company operates from 9 AM to 5 PM, but because both Eric and John have tasks that are not yet completed, they need to continue working from home to finish their assignments.

Instead of accessing Eeveel Company's private resources directly through the public network, the IT administrator provides them with WireGuard VPN profiles (wg-profiles) to securely access their respective department's private network. This ensures that each employee can only access resources based on their role and department.

By using this setup, the company's private resources remain secure and are not exposed to the public network. Both Eric and John can access the private network as if they were in the office, connected to the local network via LAN or Wi-Fi.

## What is WG-Easy?

**WG-Easy** is a dockerized solution that simplifies managing WireGuard. With WG-Easy, you could easily set up and manage a WireGuard VPN and they already have built in web UI to add/remove VPN clients and monitor traffic.

## How to Implement WG-Easy on Your VPS

Here's how to deploy WG-Easy on yout VPS to create secure, private network.

### Prerequisites
1. A VPS with Docker installed
2. A public IP address for your VPS

```yaml
# docker-compose.yml
services:
  wg-easy:
    environment:
      - LANG=en
      - WG_HOST=YOUR_VPS_IP_ADDRESS
      - PASSWORD_HASH=$$2axxxxxxxxxxxxxxxxxxxxxxxxxxx
      - WG_DEFAULT_ADDRESS=10.20.1.x
      - WG_ALLOWED_IPS=0.0.0.0/0, ::/0
      - UI_TRAFFIC_STATS=true
      - UI_CHART_TYPE=1
      - UI_ENABLE_SORT_CLIENTS=true

    networks:
      default:
        ipv4_address: 10.20.1.50
    image: ghcr.io/wg-easy/wg-easy
    container_name: wg-easy-container
    volumes:
      - etc_wireguard:/etc/wireguard
      
      # Optional:
      # - PORT=51821
      # - WG_PORT=51820
      # - WG_CONFIG_PORT=92820
      # - WG_DEFAULT_DNS=1.1.1.1
    ports:
      - "51820:51820/udp"
      - "51821:51821/tcp"
    restart: unless-stopped
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    sysctls:
      - net.ipv4.ip_forward=1
      - net.ipv4.conf.all.src_valid_mark=1
    
  pgadmin:
    container_name: pgadmin4-container
    image: dpage/pgadmin4
    restart: always
    networks: 
      default:
        ipv4_address: 10.20.1.60
    env_file:
      - pgadminconf.env
    ports:
      - "127.0.0.1:8888:80"

networks:
  default:
    name: wgnet
    external: true
```

This is the schema for the configuration above

![How it works](/blogs/how-to-implement-wg-easy/implement-wg-easy.png)

For the sake of simplicity, i only use one wg-profile account in this example which is my-wg-profile. The rest of schema is same except for instead of directing in specific private network like Sales Department Private Network or HR Department Private Network, my-wg-profile can access the whole private network.

The <code>docker-compose.yml</code> defines two services:
- **wg-easy**: A WireGuard VPN maangement tool with a web UI
  - `LANG=en`: Sets the language for the web UI
  - `WG_HOST=YOUR_VPS_IP_ADDRESS`: Specifies the public IP or domain of your VPS. This is required for WireGuard clients to connect to the server
- **pgadmin**: A web-based administration tool for PostgreSQL



Pay attention to this line of code
```yaml
  pgadmin:
  ...
    ports:
      - "127.0.0.1:8888:80"
```

By default, docker will overwrite your IPtables, so docker will expose the service to the public IP address. By specifying `127.0.0.1:8888:80` the pgadmin can't be accessed through public IP by `219.11.11.11:8888`. Instead, it can be accessed in two ways:

1. Direct access inside VPS. Log in to your VPS and type this command `curl http://127.0.0.1:8888`. The output will be like this
  ```html
  <!doctype html>
  <html lang=en>
  <title>Redirecting...</title>
  <h1>Redirecting...</h1>
  <p>You should be redirected automatically to the target URL: <a href="/login?next=/">/login?next=/</a>. If not, click the link.
  ```
2. Access with VPN Profile


