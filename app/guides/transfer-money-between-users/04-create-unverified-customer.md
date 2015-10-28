---
layout: twoColumn
section: guides
type: guide
guide:
    name: transfer-money-between-users
    step: '4'
title:  "Step 4: Creating an unverified customer"
---

# Step 4: Creating an unverified Customer

Now that we’ve created a customer for Jane Merchant and associated a funding source, we’ll do the same for Joe Consumer, but this time we’ll create an unverified customer, and a verified funding source which is capable of sending money.

Provide the user’s full name, email address, and IP address to create the customer. More detail is available in [API docs](https://docsv2.dwolla.com/#customers). 

```raw
POST https://api-uat.dwolla.com/customers
Content-Type: application/vnd.dwolla.v1.hal+json
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
  "firstName": "Joe",
  "lastName": "Consumer",
  "email": "joe@email.com",
  "ipAddress": "127.0.0.1"
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
Location: https://api-uat.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747
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

When the customer is created, you’ll receive the customer URL in the location header. 

**Important**: Provide the IP address of the end-user accessing your application as the ipAddress parameter. This enhances Dwolla’s ability to detect fraud. Sending random, hardcoded, or incorrect information in the ipAddress field will cause delays or throttling of requests.


<nav class="pager-nav">
    <a href="./03-attach-unverified-bank.html">Back: Attach an unverified funding source</a>
    <a href="05-attach-verified-bank.html">Next step: Attach a verified funding source</a>
</nav>