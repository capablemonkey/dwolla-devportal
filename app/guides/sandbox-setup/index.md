---
layout: twoColumn
section: guides
type: guide
guide: 
    name: sandbox-setup
    step: overview
title:  Get started with integrating ACH transfers into your application
description: Use this guide to start sending payments from your application by utilizing our open API with no per transaction fees. 
---

# Getting Started

## Sandbox Environment

The Sandbox environment is a complete replica of the Dwolla production environment, supporting all of the same API endpoints. Applications should be built and tested against the Sandbox environment before being used in production.

#### Differences from Dwolla production

- The Sandbox contains only test data and is completely separate from your production account.
- Actual money is not sent or received as part of test transactions. Real financial data should never be used in the Sandbox.
- The Sandbox web interface is available at `https://uat.dwolla.com/`
- All API endpoints have a base URL of `https://api-uat.dwolla.com/` instead of `https://www.dwolla.com`

## Sandbox Account

To get started, the first thing you need is a Sandbox account. You’ll be able to test your code end-to-end after creating test accounts, and use test credentials to make API requests and verify the responses.

## Overview

1. Create a master Sandbox account with a valid email address belonging to you.
2. Use your master account and the Sandbox Admin interface to create a child account with funds and attached bank accounts.
3. Create API credentials using the child sandbox account.

<nav class="pager-nav">
<a href="" style="display:none;"></a>
<a href="01-create-master-account.html">Next step: Create a master Sandbox account</a>
</nav>
