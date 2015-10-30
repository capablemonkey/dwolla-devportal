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

Go to the <a href="http://dwolla-token.herokuapp.com" target="_blank">token generator</a>. 

Use your application’s key and secret and select the following scopes: Send, Funding, Transactions, and ManageCustomers. When you get to the OAuth login log in screen, log in with your child Sandbox account. Once you agree to the permissions, you'll receive an access and refresh token pair that contains the proper scopes for creating and managing customers. More detail is available in [API docs](https://docsv2.dwolla.com/#oauth).

<nav class="pager-nav">
    <a href="./">Back: Overview</a>
    <a href="02-create-verified-customer.html">Next step: Create a verified customer</a>
</nav>