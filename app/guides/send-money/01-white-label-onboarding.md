---
layout: twoColumn
section: guides
guide: 
    name: send-money
    step: 1a
type: guide
title:  "Option 1: White Label onboarding"
---

# Create recipients using White Label solution

In this experience, end users create their accounts entirely within your application and you prompt for their bank or credit union account information. Dwolla will securely store this sensitive information for you. However, prior to passing data to Dwolla to create a Customer, you must obtain the user’s acceptance of Dwolla’s TOS and privacy policy.

### Step 1. Create an access token.
Log into your child sandbox account and go here: [https://developers.dwolla.com/dev/token](https://developers.dwolla.com/dev/token)

Use your application’s key and secret and select the scopes needed for your application. For example, select: Send, Funding, Transactions, and ManageCustomers. With these scopes, you can complete the OAuth flow, which issues you an access and refresh token pair that contains the proper scopes for creating and managing customers. More detail is available in [API docs](https://docsv2.dwolla.com/#oauth).

### Step 2: Create a customer

Create a customer for each user you’d like to transfer funds to. At a minimum, provide the user’s full name, email address, and IP address to create the customer. More detail is available in [API docs](https://docsv2.dwolla.com/#customers).

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

*Important*: Provide the IP address of the end-user accessing your application as the ipAddress parameter. This enhances Dwolla’s  ability to detect fraud. Sending random, hardcoded, or incorrect information in the ipAddress field will cause delays or throttling of requests.

### Step 3: Attach a funding source to the customer

The next step is to attach a bank or credit union account to the customer by providing the bank account’s routing number, account number, and account type. 

Funds transferred to this customer will be automatically swept into the funding source. The example below shows sample bank information, but you will include actual routing, account, and bank name after prompting your customer for this information within your application. Possible values for “type” can be either “checking” or “savings”. More detail is available in [API docs](https://docsv2.dwolla.com/#funding-sources). 

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
    <a href="./">Back</a>
    <a href="02-fetch-funding-sources.html">Next step: Fetch funding sources</a>
</nav>