---
layout: twoColumn
section: guides
type: guide
guide:
    name: transfer-money-between-users
    step: '5'
title:  "Step 5: Attach a verified funding source"
---

# Step 5: Attach a verified funding source

Next we will attach a verified funding source for Joe Consumer, and we’ll need to verify the funding source using micro-deposits. This method takes at least a day to complete, as we must wait for the user to tell us the micro-deposit amounts after they appear in their bank statement.

Create a funding source, as you did before:

```raw
POST /customers/406ADDFD-1A54-4448-BA11-832DC758C341/funding-sources
Authorization: Bearer 8G6R73EiCiGDukKChgMzEgKxfA4O0EVoveLKLT1fS1HHnSl67Z
Content-Type: application/vnd.dwolla.v1.hal+json
Accept: application/vnd.dwolla.v1.hal+json

{
    "routingNumber": "222222226",
    "accountNumber": "12345678",
    "type": "checking",
    "name": "My Bank"
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
Location: https://api-uat.dwolla.com/funding-sources/e52006c3-7560-4ff1-99d5-b0f3a6f4f909
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

Then, we’ll need to trigger micro-deposits.

```raw
POST /funding-sources/e52006c3-7560-4ff1-99d5-b0f3a6f4f909/micro-deposits
Authorization: Bearer 8tJjM7iTjujLthkbVPMUcHLqMNw4uv5kG712g9j1RRBHplGpwo
Content-Type: application/vnd.dwolla.v1.hal+json
Accept: application/vnd.dwolla.v1.hal+json
Cache-Control: no-cache
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
Location: https://api-uat.dwolla.com/funding-sources/e52006c3-7560-4ff1-99d5-b0f3a6f4f909/micro-deposits
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

In production, you’d have to wait until the micro-deposits have posted to the bank account, but for this guide, we can use the following values, which always work in the sandbox environment:

amount1: .03
amount2: .09

```raw
POST /funding-sources/e52006c3-7560-4ff1-99d5-b0f3a6f4f909/micro-deposits 
Authorization: Bearer 8tJjM7iTjujLthkbVPMUcHLqMNw4uv5kG712g9j1RRBHplGpwo
Content-Type: application/vnd.dwolla.v1.hal+json
Accept: application/vnd.dwolla.v1.hal+json

{
    "amount1": {
        "value": "0.03",
        "currency": "USD"
    },
    "amount2": {
        "value": "0.09",
        "currency": "USD"
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

Great! Joe Consumer’s funding source is now verified and ready to send money from.

<nav class="pager-nav">
    <a href="./04-create-unverified-customer.html">Back: Create an unverified customer</a>
    <a href="06-create-transfer.html">Next step: Create a transfer</a>
</nav>