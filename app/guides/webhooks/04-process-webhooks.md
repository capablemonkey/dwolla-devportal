---
layout: twoColumn
section: guides
type: guide
guide: 
    name: webhooks
    step: '4'
title: Webhooks
description: Webhooks for payments within your application by utilizing our open API with no per transaction fees. 
---

# Processing webhooks

### Step 1: Retrieve resource (if needed)

##### Retrieved event
```raw
{
  "_links": {
    "self": {
      "href": "https://api-uat.dwolla.com/events/2c311238-b9ef-4763-b1cb-03e1aa651227"
    },
    "resource": {
      "href": "https://api-uat.dwolla.com/transfers/0089A051-9B79-E511-80DB-0AA34A9B2388"
    },
    "account": {
      "href": "https://api-uat.dwolla.com/accounts/b4cdac07-eeca-4059-a29c-48900e453d54"
    }
  },
  "id": "2c311238-b9ef-4763-b1cb-03e1aa651227",
  "created": "2015-10-23T15:35:35.000Z",
  "topic": "transfer_completed",
  "resourceId": "0089A051-9B79-E511-80DB-0AA34A9B2388"
}

```
```ruby
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

Now that the `event` has been retrieved, we have more information. The `_links` object contains the location of the resource that fired this event, namely, the `Transfer` that has completed. Since we want to send an e-mail to those customers, we need to retrieve their IDs so that we know where to send those messages.

```ruby
require 'dwolla_swagger'

## Assuming Rails-style POST parameter
if params[:webhook] == 'transfer_completed'
  event = DwollaSwagger::EventsApi.id(params[:webhook][:eventId])
  transfer = DwollaSwagger::TransfersApi.by_id(event[:resourceId])
elsif params[:webhook] == 'another_event'
  "..."
end
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

### Step 2: Notify user (if needed)

##### Retrieved transfer
```raw
{
  "_links": {
    "self": {
      "href": "https://api-uat.dwolla.com/transfers/0089A051-9B79-E511-80DB-0AA34A9B2388"
    },
    "source": {
      "href": "https://api-uat.dwolla.com/customers/36E9DCB2-889B-4873-8E52-0C9404EA002A"
    },
    "destination": {
      "href": "https://api-uat.dwolla.com/accounts/B4CDAC07-EECA-4059-A29C-48900E453D54"
    }
  },
  "id": "0089A051-9B79-E511-80DB-0AA34A9B2388",
  "status": "processed",
  "amount": {
    "value": "55.00",
    "currency": "USD"
  },
  "created": "2015-10-23T15:32:51.040Z",
  "metadata": {
    "Notes": "This is a receipt for your payment on Oct 21"
  }
}
```
```ruby
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

Now that we have the `transfer`, we can take a look at the `_links` object and retrieve the `customers` that need to be notified. From here, you can make a call to `customers/{id}` to retrieve their e-mail addresses (or to your own database) so that you can send your notification message.

That's it! You’ve learned the basics of webhooks. 

<nav class="pager-nav">
    <a href="./03-validating-webhooks.html">Back: Validating webhooks</a>
    <a href="" style="display:none;"></a>
</nav>