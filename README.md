# 🚀 Deploy Full Stack App on AWS with Load Balancing

## 🎯 Objective
Gain experience deploying a **full stack application** (React frontend + Node.js backend) to **AWS EC2** instances and configure an **Application Load Balancer (ALB)** for scalability and high availability.  
Learn about **EC2**, **VPC**, **Security Groups**, and **Elastic Load Balancing (ELB)** in AWS.

---

## 🧩 Project Overview

This project demonstrates:
- Hosting **React frontend** and **Node.js/Express backend** on **separate EC2 instances**
- Using **AWS Application Load Balancer (ALB)** to distribute traffic between backend servers
- Configuring **Security Groups** for ports 22 (SSH), 80 (HTTP), and 5000 (Backend API)
- Achieving **fault tolerance** and **scalability**

---

## 🏗️ Architecture Diagram (Conceptual)

                +------------------------+
                |   AWS Application LB   |
                |   (HTTP : 80)          |
                +----------+-------------+
                           |
          ----------------------------------------
          |                                      |
 +-------------------+                +-------------------+
 |  EC2 Backend #1   |                |  EC2 Backend #2   |
 | Node.js / Express  |                | Node.js / Express  |
 | Port : 5000        |                | Port : 5000        |
 +-------------------+                +-------------------+
               ↑                                 ↑
               |                                 |
      +-----------------------------------------------+
      |         AWS VPC (Private Network)              |
      +-----------------------------------------------+

                     ↓
         +-------------------------+
         |     EC2 Frontend        |
         |  React + NGINX (Port 80)|
         +-------------------------+
                     ↓
         Browser → http://frontend-ec2-dns/
