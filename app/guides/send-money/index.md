---
layout: twoColumn
section: guides
type: guide
guide: 
    name: send-money
    step: overview
title:  ACH transfers for your application
description: Send payments from your application by utilizing our open API with no per transaction fees. 
---

# Overview: Send money to your users

In this guide, we’ll cover the key points of transferring money:


- Create a receiving customer for the funds
- Associate a funding source (bank or credit union account) with the customer 
- Transfer fund to a customer's linked account

### Get set up with Sandbox accounts

Before you begin, be sure your [Sandbox accounts](/guides/sandbox-setup) are already set up. 

### Choose the experience you want for your customers

Dwolla offers two different paths for you to onboard your customers onto the payment platform. If you want to keep Dwolla in the background, choose our white label solution. Or if you’d like to tap into Dwolla’s lightly branded OAuth experience, select Dwolla Direct. [Contact sales](https://www.dwolla.com/contact) for information about pricing for each option. 

Regardless of which option you implement, the first step is to create recipients for your transfer, along with a funding source where the money will be sent. Dwolla’s branded experience prompts your recipients for their bank or credit union account information. Otherwise, if you choose to implement the white label solution, your application will need to capture these fields to pass through to Dwolla for secure storage.

### Next step: Choose your onboarding experience

*After this step you will be directed back to step 2 where the remaining process is the same.*
<nav class="decision-nav">
    <div>
        <a href="01-white-label-onboarding.html">
            <div class="icon-decision-nav-white-label"></div>
            White label
        </a>
        <p>You capture customer data and pass it to Dwolla.</p>
    </div>
    <div>
        <a href="01-direct-onboarding.html">
            <div class="icon-decision-nav-direct"></div>
            Dwolla Direct
        </a>
        <p>Dwolla captures your customer data.</p>
    </div>
</nav>