---
layout: twoColumn
section: guides
type: guide
guide:
    name: transfer-money-between-users
    step: '3'
title:  "Step 3: Attach an unverified funding source"
---

# Step 3: Attach an unverified funding source

Next, we’ll add Jane Merchant’s bank or credit union account as an unverified funding source.  Unverified funding sources can only receive funds, not send. 

The example below shows sample bank information, but you will include actual bank name, routing, and account numbers after prompting your customer for this information within your application. Possible values for “type” can be either “checking” or “savings”. More detail is available in API docs. 

```raw
POST https://api.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C/funding-sources
Content-Type: application/vnd.dwolla.v1.hal+json
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
    "routingNumber": "222222226",
    "accountNumber": "123456789",
    "type": "checking",
    "name": "John Doe - Checking"
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
Location: https://api-uat.dwolla.com/funding-sources/375c6781-2a17-476c-84f7-db7d2f6ffb31
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

The created funding source URL is returned in the location header.

<nav class="pager-nav">
    <a href="./02-create-verified-customer.html">Back: Create a verified customer</a>
    <a href="04-create-unverified-customer.html">Next step: Create an unverified customer</a>
</nav>