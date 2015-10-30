---
layout: twoColumn
section: guides
type: guide
guide: 
    name: receive-money
    step: overview
title:  Receive ACH transfers within your application
description: Receive payments from your application by utilizing our open API with no per transaction fees. 
---

# Overview: Receive money from your users

In this guide, we’ll cover the key points of collecting money from your customers by utilizing our open API with no per transaction fees.

- Create a sending customer for the funds
- Associate a verified funding source (bank or credit union account) with the customer
- Transfer funds from the customer’s linked account 

Prerequisite: complete the [Getting started guide](/guides/sandbox-setup) and have [Traditional CIP-Verified Dwolla account](/resources/account-types.html).

### Choose the experience your want for your customers

Dwolla offers two different paths for you to onboard your customers onto the payment platform. If you want to keep Dwolla in the background, choose our white label solution. Or if you’d like to tap into Dwolla’s lightly branded OAuth experience, select Dwolla Direct. [Contact sales](https://www.dwolla.com/contact) for information about pricing for each option. 

Regardless of which option you implement, the first step is to create senders for your transfer, along with a funding source where the money will be pulled from. Dwolla’s branded experience prompts your senders for their bank or credit union account information. Otherwise, if you choose to implement the white label solution, your application will need to capture these fields to pass through to Dwolla for secure storage.

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
        <p>Dwolla captures your customers data.</p>
    </div>
</nav>