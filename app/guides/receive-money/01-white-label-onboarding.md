---
layout: twoColumn
section: guides
guide: 
    name: receive-money
    step: 1a
type: guide
title:  "Step 1: White label onboarding"
---

# Step 1: Create a customer using the white label solution

### Step A: Create an access token.

Log into your child Sandbox account and go [here](http://dwolla-token.herokuapp.com) to get a token. Use your application’s key and secret and select the scopes needed for your application. For example, select: Send, Funding, Transactions, and ManageCustomers. With these scopes, you can complete the OAuth flow, which issues you an access and refresh token pair that contains the proper scopes for creating and managing customers.

### Step B: Create a customer

Create a customer for the user that is going to pay you. At a minimum, provide the user’s full name and email address to create the customer. 

```raw
POST https://api-uat.dwolla.com/customers
Content-Type: application/vnd.dwolla.v1.hal+json
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
"firstName": "Joe", 
"lastName": "Buyer",
"email": "jbuyer@mail.net",
"type": "personal"
}

HTTP/1.1 201 Created
Location: https://api-uat.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C
```
```ruby
new_customer = DwollaSwagger::CustomersApi.create({:body => {
  :firstName => 'Joe',
  :lastName => 'Buyer',
  :email => 'jbuyer@mail.net',
  :type => 'personal'}})

p new_customer # => https://api-uat.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C
```
```javascript
// No example for this language yet.
```
```python
customers_api = dwollaswagger.CustomersApi(client)

new_customer = customers_api.create(body = {'firstName': 'Joe', 
                                            'lastName': 'Buyer',
                                            'email': 'jbuyer@mail.net',
                                            'type': 'personal'})

print(new_customer) # => https://api-uat.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C
```
```php
<?php
$customersApi = new DwollaSwagger\CustomersApi($apiClient);

$new_customer = $customersApi->create([
  'firstName' => 'Joe',
  'lastName' => 'Buyer',
  'email' => 'jbuyer@mail.net',
  'type' => 'personal'
]);

print($new_customer); # => https://api-uat.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C
?>
```
```java
CustomersApi cApi = new CustomersApi(a);

CreateCustomer newCustomerData = new CreateCustomer();

myNewCust.setFirstName("Joe");
myNewCust.setLastName("Buyer");
myNewCust.setEmail("jbuyer@mail.com");
myNewCust.setType("personal");

try {
    Unit$ r = cApi.create(myNewCust);
    System.out.println(r.getLocationHeader()); // => https://api-uat.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C
}
catch (Exception e) {
    System.out.println("Something's up!");
}
```

When the customer is created, you’ll receive the customer URL in the location header. If using an SDK, the location will be returned to you upon calling `create()`.

**Important**: Provide the IP address of the end-user accessing your application as the ipAddress parameter. This enhances Dwolla’s ability to detect fraud. Sending random, hardcoded, or incorrect information in the ipAddress field will cause delays or throttling of requests.


### Step C: Attach a funding source to the customer

The next step is to attach a bank or credit union account to the customer by providing the bank account’s routing number, account number, and account type. 

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

The bank or credit union account details are securely stored with Dwolla. You’ll use the funding source ID to reference the bank account in the coming steps when you create a bank transfer from this bank account to your account. The funding source ID is found in the location header of the response, e.g. 375c6781-2a17-476c-84f7-db7d2f6ffb31.

### Step D: Verify funding source

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

Great! The funding source should now be verified.

### Step E: Create a transfer

Once the customer has verified their funding source, we can transfer funds from their bank account to your Dwolla account.   You’ll need to supply your access token from step A, the customer’s ID from step B, and the customer’s funding source ID from step C:

```raw
POST https://api-uat.dwolla.com/transfers
Accept: application/vnd.dwolla.v1.hal+json
Content-Type: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
    "_links": {
        "source": {
            "href": "https://api-uat.dwolla.com/accounts/AB443D36-3757-44C1-A1B4-29727FB3111C"
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
      :source => {:href => 'https://api-uat.dwolla.com/accounts/AB443D36-3757-44C1-A1B4-29727FB3111C'}
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
            "href": "https://api-uat.dwolla.com/accounts/AB443D36-3757-44C1-A1B4-29727FB3111C"
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
      'href' => 'https://api-uat.dwolla.com/accounts/AB443D36-3757-44C1-A1B4-29727FB3111C',
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
    <a href="./">Back: Overview</a>
    <a href="02-check-transfer.html">Next step: Check transfer status</a>
</nav>