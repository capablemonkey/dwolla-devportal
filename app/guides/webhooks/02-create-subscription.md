---
layout: twoColumn
section: guides
type: guide
guide: 
    name: webhooks
    step: '2'
title: Webhooks
description: Webhooks for payments within your application by utilizing our open API with no per transaction fees. 
---

# Create a webhook subscription
Each application can have multiple subscriptions associated to it. While one subscription is sufficient, you can create as many as you want for redundancy. 

To make the following request, we need to use the `access_token` we just previously obtained. Security considerations:

Your webhook endpoint should only be accessible over SSL (https)
Your subscription should include a random, secret key, only known by your application. This secret key should be securely stored and used later when validating the authenticity of the webhook request from Dwolla.
 

```ruby
require 'dwolla_swagger'

subscription = DwollaSwagger::WebhooksubscriptionsApi.create({:body => {
  :url => "http://myawesomeapplication.com/destination",
  :secret => "your webhook secret"
}})

p subscription # => https://api-uat.dwolla.com/webhook-subscriptions/5af4c10a-f6de-4ac8-840d-42cb65454216
```
```raw
No example for this language yet.
```
```javascript
No example for this language yet.
```
```python
No example for this language yet.
```
```php
No example for this language yet.
```

You can retrieve your newly created subscription by its ID

```ruby
require 'dwolla_swagger'

retrieved = DwollaSwagger::WebhooksubscriptionApi.id(subscription.split('/')[-1])
retrieved = retrieved.to_hash()
```
```raw
No example for this language yet.
```
```javascript
No example for this language yet.
```
```python
No example for this language yet.
```
```php
No example for this language yet.
```

<nav class="pager-nav">
    <a href="01-obtain-authorization.html">Back: Obtain authorization</a>
    <a href="03-validating-webhooks.html">Next step: Validating webhooks</a>
</nav>