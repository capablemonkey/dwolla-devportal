---
layout: twoColumn
section: guides
type: guide
guide:
    name: receive-money
    step: '2'
title:  "Step 2: Check the transfer status"
---

# Step 2: Check the transfer status

You can check the status of the newly created transfer by retrieving the transfer by its URL.

```raw
GET https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
```
```ruby
# No example for this language yet.
```
```javascript
// No example for this language yet.
```
```python
# No example for this language yet.
```
```php
// No example for this language yet.
```

Response:

```raw
{
  "_links": {
    "self": {
      "href": "https://api-uat.dwolla.com/transfers/D76265CD-0951-E511-80DA-0AA34A9B2388"
    },
    "source": {
      "href": "https://api-uat.dwolla.com/accounts/DCBB698D-BEE7-4F79-8576-E4301BDC57FC"
    },
    "destination": {
      "href": "https://api-uat.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747"
    }
  },
  "id": "D76265CD-0951-E511-80DA-0AA34A9B2388",
  "status": "pending",
  "amount": {
    "value": "225.00",
    "currency": "USD"
  },
  "created": "2015-09-02T00:30:25.580Z",
  "metadata": {
    "customerId": "8675309",
    "notes": "For work completed on Sept. 1, 2015"
  }
}
```
```ruby
# No example for this language yet.
```
```javascript
// No example for this language yet.
```
```python
# No example for this language yet.
```
```php
// No example for this language yet.
```

That’s it! You’ve successfully received money from a user. Please continue to the Webhooks guide for information on implementing notifications for your customers about the transfer.

<nav class="pager-nav">
    <a href="./">Back: Overview</a>
    <a href="/guides/webhooks">Next guide: Webhooks</a>
</nav>