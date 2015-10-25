---
layout: twoColumn
section: guides
type: guide
guide: 
    name: webhooks
    step: '3'
title: Webhooks
description: Webhooks for payments within your application by utilizing our open API with no per transaction fees. 
---

# Validating webhooks

Assume that your integration is an online marketplace, and that a customer just placed an order on your site. A few days after the customer initiated their payment, your application receives this webhook.

```raw
{
  "id": "2c311238-b9ef-4763-b1cb-03e1aa651227",
  "resourceId": "0089A051-9B79-E511-80DB-0AA34A9B2388",
  "topic": "transfer_completed",
  "timestamp": "2015-10-23T15:35:35.366Z",
  "_links": {
    "self": {
      "href": "https://api-uat.dwolla.com/events/2c311238-b9ef-4763-b1cb-03e1aa651227"
    },
    "account": {
      "href": "https://api-uat.dwolla.com/accounts/b4cdac07-eeca-4059-a29c-48900e453d54"
    },
    "resource": {
      "href": "https://api-uat.dwolla.com/transfers/0089A051-9B79-E511-80DB-0AA34A9B2388"
    }
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

#### Step 1: Authenticating the webhook request
Before we process any data from the webhook we’ll want to validate that the request really came from Dwolla and not someone pretending to be Dwolla. Dwolla signs each webhook request with the `secret` you passed in when you created the webhook subscription. The signature is contained in the `X-Request-Signature` header and is a SHA-1 HMAC hash of the request body with the key being your webhook secret.

You can validate the webhook by generating the same SHA-1 HMAC hash and comparing it to the signature sent with the payload.

```ruby
def verify_signature(payload_body, request_signature)
  signature = OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new("sha1"),
ENV["DWOLLA_WEBHOOK_SECRET"],
payload_body)
  unless Rack::Utils.secure_compare(signature, request_signature)
    halt 500, "Signatures didn't match!"
  end
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

#### Step 2: Check for duplicate events
The `topic` field of an event holds [a description](http://docsv2.dwolla.com/#events) of the event (think of it as you would the subject of an e-mail message). The `webhook` itself contains _links the the resource impacted by the event that can be used to retrieve more information about the webhook you have received. 

**NOTE**: The `event` must be retrieved with a `client_credentials` granted access_token.

```ruby
require 'dwolla_swagger'

## Assuming Rails-style POST parameter
if params[:webhook] == 'transfer_completed'
  event = DwollaSwagger::EventsApi.id(params[:webhook][:eventId])
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

Multiple webhooks are fired for `Transfer` events, that is, two `transfer_created` events with different URLs will be fired, one for each customer. To avoid doing any business logic twice, you would have to check if you have already received a webhook relating to the `Transfer` resource responsible for the event.  To do this, keep a queue of events in a database and check to see if an `Event` has the same `self` resource location in `_links` as another event. If not, process the logic for that event. An example could look like this.

```ruby
check_db = ActiveRecord::Base.connection.execute("SELECT * FROM EVENTS WHERE SELF = #{event[:_links][:self].to_s}")

# check_db will be an array of rows returned
unless check_db.length() == 0
    # do something
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

<nav class="pager-nav">
    <a href="02-create-subscription.html">Back: Create a webhook subscription</a>
    <a href="04-process-webhooks.html">Next step: Processing webhooks</a>
</nav>