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

Now that we’ve created a customer for Jane Merchant and associated a funding source, we’ll do the same for Joe Buyer, but this time we’ll create an unverified customer, and a verified funding source which is capable of sending money.

Provide the user’s full name, email address, and IP address to create the customer. More detail is available in [API docs](https://docsv2.dwolla.com/#customers). 

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
Location: https://api-uat.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C
```
```ruby
new_customer = DwollaSwagger::CustomersApi.create({:body => {
  :firstName => 'Joe',
  :lastName => 'Buyer',
  :email => 'jbuyer@mail.net',
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

print(new_customer) # => https://api-uat.dwolla.com/customers/247B1BD8-F5A0-4B71-A898-F62F67B8AE1C
```
```php
<?php
$customersApi = new DwollaSwagger\CustomersApi($apiClient);

$new_customer = $customersApi->create([
  'firstName' => 'Joe',
  'lastName' => 'Buyer',
  'email' => 'jbuyer@mail.net',
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
myNewCust.setAddress("99-99 33rd St");
myNewCust.setCity("Some City");
myNewCust.setState("NY");
myNewCust.setPostalCode("11101");
myNewCust.setDateOfBirth("1970-01-01");

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


<nav class="pager-nav">
    <a href="./03-attach-unverified-bank.html">Back: Attach an unverified funding source</a>
    <a href="05-attach-verified-bank.html">Next step: Attach a verified funding source</a>
</nav>