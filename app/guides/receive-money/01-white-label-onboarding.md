---
layout: twoColumn
section: guides
guide: 
    name: receive-money
    step: 1a
type: guide
title:  "Step 1: White Label onboarding"
---

# Step 1: Create a customer using the White Label solution

### Step 1: Create an access token.

Log into your child sandbox account and go [here](http://dwolla-token.herokuapp.com) to get a token. Use your application’s key and secret and select the scopes needed for your application. For example, select: Send, Funding, Transactions, and ManageCustomers. With these scopes, you can complete the OAuth flow, which issues you an access and refresh token pair that contains the proper scopes for creating and managing customers.

### Step 2: Create a customer

Create a customer for the user that is going to pay you. At a minimum, provide the user’s full name and email address to create the customer. 

```raw
POST https://api-uat.dwolla.com/customers
Content-Type: application/vnd.dwolla.v1.hal+json
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@email.com",
  "ipAddress": "127.0.0.1"
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

Response: 

```raw
HTTP/1.1 201 Created
Location: https://api-uat.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747
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

When the customer is created, you’ll receive the customer URL in the location header. 

**Important**: Provide the IP address of the end-user accessing your application as the ipAddress parameter. This enhances Dwolla’s  ability to detect fraud. Sending random, hardcoded, or incorrect information in the ipAddress field will cause delays or throttling of requests.

### Step 3: Attach a funding source to the customer

The next step is to attach a bank or credit union account to the customer by providing the bank account’s routing number, account number, and account type. 

```raw
POST https://api.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747/funding-sources
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

Response:

```raw
HTTP/1.1 201 Created
Location: https://api-uat.dwolla.com/funding-sources/375c6781-2a17-476c-84f7-db7d2f6ffb31
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

The bank or credit union account details are securely stored with Dwolla. You’ll use the funding source ID to reference the bank account in the coming steps when you create a bank transfer from this bank account to your account. The funding source ID is found in the location header of the response, e.g. 375c6781-2a17-476c-84f7-db7d2f6ffb31.

### Step 4: Verify funding source

We'll verify the funding source using micro-deposits. Let's initiate the verification process:

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

In the Dwolla production environment, you’d have to wait until the micro-deposits actually post to the bank account, but for this guide we can use any amount **below** $0.10, which always work in the Sandbox environment:

`amount1`: `0.03`

`amount2`: `0.09`

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

Great! The funding source should now be verified.

### Step 5: Create a transfer

Once the customer has verified their funding source, we can transfer funds from their bank account to your Dwolla account.   You’ll need to supply your access token from step 1, the customer’s ID from step 2, and the customer’s funding source ID from step 3:

```raw
POST https://api-uat.dwolla.com/transfers
Accept: application/vnd.dwolla.v1.hal+json
Content-Type: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
    "_links": {
        "destination": {
            "href": "https://api-uat.dwolla.com/accounts/297460a0-101b-498c-8184-2eb33ff22d34"
        },
        "source": {
            "href": "https://api-uat.dwolla.com/customers/C7F300C0-F1EF-4151-9BBE-005005AC3747"
        }
    },
    "amount": {
        "currency": "USD",
        "value": "25.00"
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


<nav class="pager-nav">
    <a href="./">Back: Overview</a>
    <a href="02-check-transfer.html">Next step: Check transfer status</a>
</nav>