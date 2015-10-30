---
layout: twoColumn
section: guides
type: guide
guide: 
    name: webhooks
    step: '1'
title: Webhooks
description: Webhooks for payments within your application by utilizing our open API with no per transaction fees. 
---

# Subscribing to webhooks: obtain authorization

To subscribe to webhooks, you must first obtain client authorization via OAuth. You will be requesting these credentials on the behalf of your own application, so there will be no OAuth permissions dialog; you are only required to provide your `client_id` and `client_secret`. 

**NOTE**: Currently, the Dwolla/Swagger SDKs do not contain the capability to do this, so you must use an external REST client. We are working on resolving this. 

```noselect
POST /oauth/v2/token
Content-Type: application/json

{
  "client_id": "foo",
  "client_secret": "bar",
  "grant_type": "client_credentials"
}
```

Response:

```jsonnoselect
{
  "access_token": "(...)",
  "token_type": "bearer",
  "expires_in": 3600,
  "scope": "AccountInfoFull|ManageAccount|Contacts|Transactions|Balance|Send|Request|Funding"
}
```

<nav class="pager-nav">
    <a href="./">Back: Overview</a>
    <a href="02-create-subscription.html">Next step: Create a webhook subscription</a>
</nav>