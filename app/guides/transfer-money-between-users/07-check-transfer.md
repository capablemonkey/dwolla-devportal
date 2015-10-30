---
layout: twoColumn
section: guides
type: guide
guide:
    name: transfer-money-between-users
    step: '7'
title:  "Step 7: Check the status of your transfer"
---

# Step 7: Check the status of your transfer

You can check the status of the newly created transfer by retrieving the transfer by its URL.

```raw
GET https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
```
```ruby
transfer = DwollaSwagger::TransfersApi.by_id('https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388')
```
```javascript
// No example for this language yet.
```
```python
transfer_api = dwollaswagger.TransfersApi(client)
transfer = transfer_api.by_id('https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388')
```
```php
<?php
$transferApi = new DwollaSwagger\TransfersApi($apiClient);
$transfer = $transferApi->by_id('https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388')
?>
```

Response (view schema in 'raw'):

```raw
Schema

{
  "_links": {
    "self": {
      "href": "https://api-uat.dwolla.com/transfers/D76265CD-0951-E511-80DA-0AA34A9B2388"
    },
    "source": {
      "href": "https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C"
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
  "created": "2015-09-02T00:30:25.580Z"
}
```
```ruby
# Access desired information in response object fields
p transfer.status # => pending
```
```javascript
// No example for this language yet.
```
```python
# Access desired information in response object fields
print(transfer.status) # => pending
```
```php
<?php
# Access desired information in response object fields
print($transfer->status) # => pending
?>
```

That’s it!  You’ve successfully transferred money from Joe Buyer to Jane Merchant. Please continue to the Webhooks guide for information on implementing notifications for your customers about the transfer.

<nav class="pager-nav">
    <a href="06-create-transfer.html">Back: Overview</a>
    <a href="{{site.baseurl}}/guides/webhooks">Next guide: Webhooks</a>
</nav>