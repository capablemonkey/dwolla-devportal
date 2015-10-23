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

# Overview: Send Money to your users

In this guide, we’ll cover the key points of transferring money:

<ul class="bullet">
    <li>Create a receiving customer for the funds</li>
    <li>Associate a funding source (bank or credit union account) with the customer </li>
    <li>Transfer fund to a customer's linked account.</li>
</ul>

### Get set up with sandbox accounts

Before you begin, be sure your sandbox accounts are already set up. 

### Choose the experience you want for your customers

Dwolla offers two different paths for you to onboard you customers onto the payment platform. If you want to keep Dwolla completely in the background, choose our White Label Solution. Or if you’d like to tap into Dwolla’s lightly branded OAuth experience, select Dwolla Direct. [Contact sales](https://www.dwolla.com/contact) for information about pricing for each option. 

Regardless of which option you implement, the first step is to create recipients for your transfer, along with a funding source where the money will be sent. Dwolla’s branded experience prompts your recipients for their bank or credit union account information. Otherwise, if you choose to implement the White Label solution, your application will need to capture these fields to pass through to Dwolla for secure storage.

Need more info? Check out examples of each experience: 

[White Label demo]()

[Dwolla Direct demo]()

### Next step: Choose your onboarding experience

*After this step you will be directed back to step 2 where the remaining process is the same.*

<nav class="decision-nav">
<div>
    <a href="01-white-label-onboarding.html">White Label</a>
</div>
<div>
    <a href="01-direct-onboarding.html">Dwolla's ready made onboarding</a>
</div>
</nav>