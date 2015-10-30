---
layout: twoColumn
section: guides
guide: 
    name: send-money
    step: 1a
type: guide
title:  "Step 1: White label onboarding"
---

# Step 1: Create recipients using white label solution

In this experience, end users create their accounts entirely within your application and you prompt for their bank or credit union account information. Dwolla will securely store this sensitive information.

### Step A. Create an access token.
Log into your child Sandbox account and go here: [https://developers.dwolla.com/dev/token](http://dwolla-token.herokuapp.com)

Use your application’s key and secret and select the scopes needed for your application. For example, select: Send, Funding, Transactions, and ManageCustomers. With these scopes, you can complete the OAuth flow, which issues you an access and refresh token pair that contains the proper scopes for creating and managing customers. More detail is available in [API docs](https://docsv2.dwolla.com/#oauth).

### Step B. Create a customer

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

HTTP/1.1 201 Created
Location: https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C
```
```ruby
new_customer = DwollaSwagger::CustomersApi.create({:body => {
  :firstName => 'Bob',
  :lastName => 'Merchant',
  :email => 'bmerchant@nomail.net',
  :type => 'personal',
  :address => '99-99 33rd St',
  :city => 'Some City',
  :state => 'NY',
  :postalCode => '11101',
  :dateOfBirth => '1970-01-01',

  # For the first attempt, only 
  # the last 4 digits of SSN required

  # If the entire SSN is provided, 
  # it will still be accepted

  :ssn => '1234'}})

p new_customer # => https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C
```
```javascript
// No example for this language yet.
```
```python
customers_api = dwollaswagger.CustomersApi(client)

new_customer = customers_api.create(body = {'firstName': 'Bob', 
                                            'lastName': 'Merchant',
                                            'email': 'bmerchant@nomail.net',
                                            'type': 'personal',
                                            'address': '99-99 33rd St',
                                            'city': 'Some City', 
                                            'state': 'NY',
                                            'postalCode': '11101',
                                            'dateOfBirth': '1970-01-01', 

                                            # For the first attempt, only 
                                            # the last 4 digits of SSN required

                                            # If the entire SSN is provided, 
                                            # it will still be accepted
                                            'ssn': '1234'})

print(new_customer) # => https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C
```
```php
<?php
$customersApi = new DwollaSwagger\CustomersApi($apiClient);

$new_customer = $customersApi->create([
  'firstName' => 'Bob',
  'lastName' => 'Merchant',
  'email' => 'bmerchant@nomail.net',
  'type' => 'personal',
  'address' => '99-99 33rd St',
  'city' => 'Some City',
  'state' => 'NY',
  'postalCode' => '11101',
  'dateOfBirth' => '1970-01-01',

  # For the first attempt, only 
  # the last 4 digits of SSN required

  # If the entire SSN is provided, 
  # it will still be accepted
  'ssn' => '1234'
]);

print($new_customer); # => https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C
?>
```
```java
CustomersApi cApi = new CustomersApi(a);

CreateCustomer newCustomerData = new CreateCustomer();

myNewCust.setFirstName("Bob");
myNewCust.setLastName("Merchant");
myNewCust.setEmail("bmerchant@nomail.com");
myNewCust.setType("personal");
myNewCust.setAddress("99-99 33rd St");
myNewCust.setCity("Some City");
myNewCust.setState("NY");
myNewCust.setPostalCode("11101");
myNewCust.setDateOfBirth("1970-01-01");

try {
    Unit$ r = cApi.create(myNewCust);
    System.out.println(r.getLocationHeader()); // => https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C
}
catch (Exception e) {
    System.out.println("Something's up!");
}
```

When the customer is created, you’ll receive the customer URL in the location header. If using an SDK, the location will be returned to you upon calling `create()`.

*Important*: Provide the IP address of the end-user accessing your application as the ipAddress parameter. This enhances Dwolla’s  ability to detect fraud. Sending random, hardcoded, or incorrect information in the ipAddress field will cause delays or throttling of requests.

### Step C. Attach a funding source to the customer

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

HTTP/1.1 201 Created
Location: https://api-uat.dwolla.com/funding-sources/375c6781-2a17-476c-84f7-db7d2f6ffb31
```
```ruby
new_fs = DwollaSwagger::FundingsourcesApi.create_customer_funding_source \ 
('https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C', {:body => {
                                                    :routingNumber => '222222226',
                                                    :accountNumber => '123456789',
                                                    :type => 'checking',
                                                    :name => 'John Doe - Checking'
                                                 }})

p new_fs # => https://api-uat.dwolla.com/funding-sources/375c6781-2a17-476c-84f7-db7d2f6ffb31
```
```javascript
// No example for this language yet.
```
```python
funding_api = dwollaswagger.FundingsourcesApi(client)

new_fs = funding_api.create_customer_funding_source('https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C', body = {"routingNumber": "222222226",
        "accountNumber": "123456789",
        "type": "checking",
        "name": "John Doe - Checking"})

p new_fs # => https://api-uat.dwolla.com/funding-sources/375c6781-2a17-476c-84f7-db7d2f6ffb31
```
```php
<?php
$fundingApi = new DwollaSwagger\FundingsourcesApi($apiClient);

$new_fs = $fundingApi->createCustomerFundingSource(
       ["routingNumber": "222222226",
        "accountNumber": "123456789",
        "type": "checking",
        "name": "John Doe - Checking"], "https://api-uat.dwolla.com/customers/AB443D36-3757-44C1-A1B4-29727FB3111C");

print($new_fs); # => https://api-uat.dwolla.com/funding-sources/375c6781-2a17-476c-84f7-db7d2f6ffb31
?>
```

The created funding source URL is returned in the location header.

<nav class="pager-nav">
    <a href="./">Back: Overview</a>
    <a href="02-fetch-funding-sources.html">Next step: Fetch funding sources</a>
</nav>