---
layout: twoColumn
section: guides
type: guide
guide:
    name: send-money
    step: '3'
title:  "Step 3: Create a transfer"
---

# Step 3: Create a transfer

Create a [transfer](https://docsv2.dwolla.com/#transfers) by specifying your funding source as the **source** and the customer as the **destination**.

```raw
POST https://api-uat.dwolla.com/transfers
Accept: application/vnd.dwolla.v1.hal+json
Content-Type: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
    "_links": {
        "source": {
            "href": "https://api-uat.dwolla.com/funding-sources/5cfcdc41-10f6-4a45-b11d-7ac89893d985"
        },
        "destination": {
            "href": "https://api-uat.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747"
        }
    },
    "amount": {
        "currency": "USD",
        "value": "225.00"
    },
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

Response:

```raw
HTTP/1.1 201 Created
Location: https://api-uat.dwolla.com/transfers/d76265cd-0951-e511-80da-0aa34a9b2388
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

<nav class="pager-nav">
    <a href="02-fetch-funding-sources.html">Back: Fetch funding sources</a>
    <a href="04-check-transfer.html">Next step: Check the transfer status</a>
</nav>