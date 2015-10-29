---
layout: twoColumn
section: guides
type: guide
guide:
    name: transfer-money-between-users
    step: '1'
title:  "Step 1: Generate an access token"
---

# Step 1: Generate an access token for your account

Log into your child Sandbox account and go here: [http://dwolla-token.herokuapp.com](http://dwolla-token.herokuapp.com)

Use your application’s key and secret and select the scopes needed for your application. For example, select: Send, Funding, Transactions, and ManageCustomers. With these scopes, you can complete the OAuth flow, which issues you an access and refresh token pair that contains the proper scopes for creating and managing customers. More detail is available in the [API docs](https://docsv2.dwolla.com/#oauth).

<nav class="pager-nav">
    <a href="./">Back: Overview</a>
    <a href="02-create-verified-customer.html">Next step: Create a verified customer</a>
</nav>