---
layout: twoColumn
section: guides
type: guide
guide:
    name: transfer-money-between-users
    step: '6'
title:  "Step 6: Create a transfer"
---

# Step 6: Create a transfer

[Create a transfer](https://docsv2.dwolla.com/#transfers) by specifying Joe Buyer’s funding source as the source and Jane Merchant’s funding source as the destination. 

```raw
POST https://api-uat.dwolla.com/transfers
Accept: application/vnd.dwolla.v1.hal+json
Content-Type: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
    "_links": {
        "source": {
            "href": "https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C"
        },
        "destination": {
            "href": "https://api-uat.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747"
        }
    },
    "amount": {
        "currency": "USD",
        "value": "225.00"
    }
}

HTTP/1.1 201 Created
Location: https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388
```
```ruby
transfer_request = {
  :_links => {
      :destination => {:href => 'https://api-uat.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747'},
      :source => {:href => 'https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C'}
  },
  :amount => {:currency => 'USD', :value => 225.00}
}

xfer = DwollaSwagger::TransfersApi.create({:body => transfer_request})
p xfer # => https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388
```
```javascript
// No example for this language yet.
```
```python
transfer_request = {
    "_links": {
        "source": {
            "href": "https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C"
        },
        "destination": {
            "href": "https://api-uat.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747"
        }
    },
    "amount": {
        "currency": "USD",
        "value": "225.00"
    }
}

transfers_api = dwollaswagger.TransfersApi(client)
xfer = transfers_api.create(body=transfer_request)

print(xfer) # => https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388
```
```php
<?php
$transfer_request = array (
  '_links' => 
  array (
    'source' => 
    array (
      'href' => 'https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C',
    ),
    'destination' => 
    array (
      'href' => 'https://api-uat.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747',
    ),
  ),
  'amount' => 
  array (
    'currency' => 'USD',
    'value' => '225.00',
  )
);

$transferApi = new DwollaSwagger\TransfersApi($apiClient);
$myAccount = $transferApi->create($transfer_request);

print($xfer); # => https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388
?>
```



<nav class="pager-nav">
    <a href="05-attach-verified-bank.html">Back: Attach a verified funding source</a>
    <a href="07-check-transfer.html">Next step: Check the status of your transfer</a>
</nav>