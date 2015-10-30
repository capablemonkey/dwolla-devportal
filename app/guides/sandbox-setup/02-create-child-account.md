---
layout: twoColumn
section: guides
type: guide
guide: 
    name: sandbox-setup
    step: '2'
title:  Get started with integrating ACH transfers into your application
description: Use this guide to start sending payments from your application by utilizing our open API with no per transaction fees. 
---

# Create a child account to create your application

Now that you’re logged into the Sandbox Console tool, you can create a child account. This child account typically represents your main account in Dwolla’s production environment which you’ll use to send funds from, collect funds, and if applicable, create White Label Customers. You’ll also use this account to create your application.

You can create child accounts by uploading a .csv file with test data. Download the sample file to get started and make a .csv with one account and upload it.

![Screenshot of Sandbox Console](/images/sandbox-guide-admin.png "Screenshot of Sandbox Console")

Once the child account is created, you can use the email address and password you specified in the .csv to login at [uat.dwolla.com](https://uat.dwolla.com).  Any transactions associated with the child account can be manipulated in the Sandbox Console Tool.

<nav class="pager-nav">
    <a href="./01-create-master-account.html">Back: Create a master Sandbox account</a>
    <a href="03-create-application.html">Next step: Create an application</a>
</nav>