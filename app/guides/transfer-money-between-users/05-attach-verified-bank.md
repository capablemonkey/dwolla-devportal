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

Next we will attach a verified funding source for Joe Buyer, and we’ll need to verify the funding source using micro-deposits. This method takes at least a day to complete, as we must wait for the user to tell us the micro-deposit amounts after they appear in their bank statement or online transaction history.

Create a funding source, as you did before:

```raw
POST https://api.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C/funding-sources
Content-Type: application/vnd.dwolla.v1.hal+json
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
    "routingNumber": "222222226",
    "accountNumber": "123456789",
    "type": "checking",
    "name": "Joe Buyer - Checking"
}

HTTP/1.1 201 Created
Location: https://api-uat.dwolla.com/funding-sources/13C38DF2-6D2C-46F6-BFD1-1E1CC7BF4377
```
```ruby
customer = 'https://api.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C/funding-sources'

new_fs = DwollaSwagger::FundingsourcesApi.create_customer_funding_source(customer, {
  "routingNumber" => "222222226",
  "accountNumber" => "123456789",
  "type" => "checking",
  "name" => "Joe Buyer - Checking"
})

p new_fs # => https://api-uat.dwolla.com/funding-sources/13C38DF2-6D2C-46F6-BFD1-1E1CC7BF4377
```
```javascript
// No example for this language yet.
```
```python
fs_api = dwollaswagger.FundingsourcesApi(client)

customer = 'https://api.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C/funding-sources'

new_fs = fs_api.create_customer_funding_source(customer, {
    "routingNumber": "222222226",
    "accountNumber": "123456789",
    "type": "checking",
    "name": "Joe Buyer - Checking"
})

print(new_fs) # => https://api-uat.dwolla.com/funding-sources/13C38DF2-6D2C-46F6-BFD1-1E1CC7BF4377
```
```php
<?php
$fsApi = new DwollaSwagger\FundingsourcesApi($apiClient);

$customer = 'https://api.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C/funding-sources'
$new_fs = $fsApi->create_customer_funding_source($customer, array (
  'routingNumber' => '222222226',
  'accountNumber' => '123456789',
  'type' => 'checking',
  'name' => 'Joe Buyer - Checking',
));

print($new_fs); # => https://api-uat.dwolla.com/funding-sources/13C38DF2-6D2C-46F6-BFD1-1E1CC7BF4377
?>
```

Then, we’ll need to trigger micro-deposits. We will use the `new_fs` variable which holds to location of the new Funding Source and pass it over to the `micro_deposits()` function. You will know that the request was successful if no exception is thrown, as `fundingsources/micro-deposits` returns no data other than `HTTP 200` upon successful request. 

```raw
POST /funding-sources/e52006c3-7560-4ff1-99d5-b0f3a6f4f909/micro-deposits
Authorization: Bearer 8tJjM7iTjujLthkbVPMUcHLqMNw4uv5kG712g9j1RRBHplGpwo
Content-Type: application/vnd.dwolla.v1.hal+json
Accept: application/vnd.dwolla.v1.hal+json
Cache-Control: no-cache

HTTP 200 OK
```
```ruby
DwollaSwagger::FundingsourcesApi.micro_deposits(new_fs)
```
```javascript
// No example for this language yet.
```
```python
fs_api = dwollaswagger.FundingsourcesApi(client)
fs_api.micro_deposits(new_fs)
```
```php
<?php
$fsApi = new DwollaSwagger\FundingsourcesApi($apiClient);
$fsApi->micro_deposits($new_fs);
?>
```

In the Dwolla production environment, you’d have to wait until the micro-deposits actually post to the bank account, but for this guide we can use any amount **below** $0.10, which always work in the Sandbox environment. This operation, as the last one, is successful unless an exception is thrown:

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

HTTP 200 OK
```
```ruby
DwollaSwagger::FundingsourcesApi.verify_micro_deposits_exist(new_fs, {
    "amount1" => {
           "value" => "0.03",
        "currency" => "USD"
    },
    "amount2" => {
           "value" => "0.09",
        "currency" => "USD"
    }
})
```
```javascript
// No example for this language yet.
```
```python
fs_api = dwollaswagger.FundingsourcesApi(client)

fs_api.verify_micro_deposits_exist(new_fs, {
    "amount1": {
        "value": "0.03",
        "currency": "USD"
    },
    "amount2": {
        "value": "0.09",
        "currency": "USD"
    }
})
```
```php
<?php
$fsApi = new DwollaSwagger\FundingsourcesApi($apiClient);

$fsApi->verify_micro_deposits_exist($new_fs, array (
  'amount1' => 
  array (
    'value' => '0.03',
    'currency' => 'USD',
  ),
  'amount2' => 
  array (
    'value' => '0.09',
    'currency' => 'USD',
  ),
));
?>
```

Great! Joe Buyer’s funding source is now verified and ready to send money from.

<nav class="pager-nav">
    <a href="./04-create-unverified-customer.html">Back: Create an unverified customer</a>
    <a href="06-create-transfer.html">Next step: Create a transfer</a>
</nav>