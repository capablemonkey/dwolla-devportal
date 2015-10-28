---
layout: twoColumn
section: guides
type: guide
guide:
    name: transfer-money-between-users
    step: '2'
title:  "Step 2: Creating a verified customer"
---

# Step 2: Creating a verified Customer

First, we’ll create a verified customer for Jane Merchant.

The following information is required for a verified Customer. In this example, we use personal verified customers and we’re adding support for business customers coming soon. 

```raw
No example for this language yet.
```
```ruby
require 'dwolla_swagger'

new_customer = DwollaSwagger::CustomersApi.create({:body => {
    :firstName => 'Jane',
    :lastName => 'Merchant',
    :email => 'jmerchant@nomail.net',
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
# No example for this language yet.
```
```php
// No example for this language yet.
```

<nav class="pager-nav">
    <a href="./01-access-token.html">Back: Generate an access token</a>
    <a href="03-attach-unverified-bank.html">Next step: Attach an unverified funding source</a>
</nav>