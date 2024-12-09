---
title: 'Tandur IoT: Precision Drip Water Irrigation System'
description: 'Tandur is a capstone project focused on developing IoT-based agriculture, implementing LoRa (Long Range) and websocket technology to monitor plant conditions.'
keywords: ['LoRa, Websocket, ESP32, Next.js, Firebase']
date: '2023-4-16'
heroimage:
    url: /projects/tandur/tandur-heroimage.jpg
    alt: 'Photo by Benjamin le Roux on Unsplash'
platform: Web
stack: ['LoRa', 'Websocket', 'ESP32', 'Next.js']
github: https://github.com/kirontoo/astro-theme-cody
---

## Overview

**Tandur** is a final year capstone project focused on developing IoT-based agriculture, implementing LoRa (Long Range) and websocket technology to monitor plant conditions

The Tandur system allows users to select specific plants, such as tomatoes, strawberries, or chili, based on their unique water requirements. Utilizing a water dripping method instead of conventional sprinklers or irrigation techniques, Tandur ensures water efficiency. The system calculates the optimal amount of water needed for plant growth using evaporation and plant-specific formulas. This approach not only conserves water but also supports healthy and sustainable plant growth, tailored to each plant’s needs.

---

## How It Works

![Tandur scheme](/projects/tandur/how-it-works.jpg)

The Tandur IoT system operates through three key components: the **Electrical System**, the **Server**, and the **User Interface**. Each component plays a vital role in ensuring the seamless operation of the smart irrigation system.

### a. Electrical (Physical Device and Sensor)
The **Electrical System** consists of sensors and the ESP32 LoRa module. The **humidity** and **water debit sensors** measure soil moisture and water flow. When the system detects that the soil is dry or water levels are low, it sends this data to the ESP32 LoRa module. Based on these readings, the ESP32 can turn the **water pump on or off**, activating the water dripping system to irrigate the plants efficiently. The sensors constantly monitor the plant conditions to ensure that the correct amount of water is supplied when needed.

### b. Server
The data from the **ESP32 LoRa** module is sent to an **IoT server** like **Antares** (similar to ThinkSpeak), which collects and stores the data. The server uses **websocket** technology with **socket.io** to provide real-time data transmission. This allows the system to send updates instantly to the user interface. The server continuously listens for new data from the sensors, ensuring that the system responds to real-time changes in plant conditions.

### c. User Interface (Next.js App)
The **User Interface** is built with **Next.js**, where all the collected data is displayed for users to view and interact with. The system integrates with **Firebase** for user authentication, securely storing user credentials. The UI also provides real-time weather data, sourced from **SolCast** and **OpenWeather** APIs, allowing users to monitor local conditions that influence irrigation decisions. Through the interface, users can track the performance of the irrigation system, see historical data, and manage their plants more effectively.

---


## Features

### Real-Time Plant Monitoring
- Deployed ESP32 LoRa nodes to capture and transmit plant condition data wirelessly.
- Utilized websockets to integrate real-time data into a web application.

### Weather and Water Pump Integration
- Integrated SolCast and OpenWeather APIs to provide localized weather data.
- Provide essential information such as temperature, humidity, and sunlight.

### Smart Irrigation System
- Automatic water pump control: The system automatically activates the water pump when the weather and soil conditions are dry.
- Reduces water wastage and ensures plants receive adequate hydration during dry periods.

---

## Screenshots

### 1. Tandur login page
![Tandur login page](/projects/tandur/login-page.png)

The login page allows users to sign in to the Tandur IoT dashboard using credentials provided by our team. There is no option to sign up independently because the service requires on-site installation of IoT devices at the user's farm. Once the devices are installed, users can access their accounts with pre-provided credentials to manage their farm effectively.


### 2. Tandur select plant page
![Tandur select plant page](/projects/tandur/plantinformation-page.png)

The select plant page enables users to choose the type of plant they are growing, such as tomatoes, strawberries, or chili. Users can also specify the number of pots for each plant. This feature is crucial as different plants have unique water requirements. By using the water dripping method for irrigation, Tandur ensures optimal water efficiency compared to sprinklers or conventional irrigation. The system calculates the precise amount of water needed using evaporation and plant-specific formulas, promoting efficient water usage while supporting healthy plant growth.

### 3. Tandur dashboard page
![Tandur dashboard page](/projects/tandur/dashboard-page.png)

The dashboard provides users with real-time insights into farm conditions. It displays current weather metrics such as humidity, temperature, and sun radiation, along with water usage statistics and the state of the water pump (on/off). Additionally, users can review historical data generated by the system, including logs of water pump activity. This comprehensive view helps users make informed decisions about farm management and resource usage.

---

## Actual Device

![Tandur device](/projects/tandur/actual-device.jpg)

---

## Achievements
- Capstone Best Presentation: Recognized as the top-performing team among 38 participants.

---

## Acknowledgements

I would like to express our sincere gratitude to the following individuals for their invaluable contributions to the development of the Tandur IoT system:

- **Ave Syah Shina**
- **Ilham Sukarsa**
- **Muhammad Rasyid**

Without their hard work and collaboration, this project would not have been possible. Thank you for your support and commitment to the success of Tandur.





