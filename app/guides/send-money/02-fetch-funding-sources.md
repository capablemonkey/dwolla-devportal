---
layout: twoColumn
section: guides
type: guide
guide:
    name: send-money
    step: '2'
title:  "Step 2: Fetch funding sources"
---

# Step 2: Fetch funding sources

No matter which method you used to set up your Customers, the remaining steps of sending money are the same. Please note the difference in terminology between the two onboarding experiences:

| Solution | Recipient|
|----------|----------|
|White Label Solution|Customer|
|Dwolla Direct|Account|

Now that you’ve created a Customer or an Account and associated its funding source, you can initiate your first transfer. The transfer requires the following information:

- The funding source to pull the funds from (your linked bank account)
- The recipient to push the funds to

Dwolla uses URLs to represent relations between resources. Therefore, you’ll need to provide the full URL of the funding source and recipient.

### Fetch a list of available funding sources

Use the [List Funding Sources (Account)](https://docsv2.dwolla.com/#list-funding-sources-account) endpoint to fetch a list of your own funding sources. You first need to fetch the root resource to determine the URL from which to get the funding source list.

```raw
GET https://api-uat.dwolla.com/
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
```
```ruby
# No current SDK coverage for this method. Coming soon.
```
```javascript
// No current SDK coverage for this method. Coming soon.
```
```python
# No current SDK coverage for this method. Coming soon.
```
```php
// No current SDK coverage for this method. Coming soon.
```

Response:

```raw
{
  "_links": {
    "account": {
      "href": "https://api-uat.dwolla.com/accounts/4bb512e4-ad4d-4f7e-bfd0-a232007f21a1"
    }
  }
}
```
```ruby
# No SDK coverage
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

Then, follow the `_links.account` link:

```raw
GET https://api-uat.dwolla.com/accounts/dcbb698d-bee7-4f79-8576-e4301bdc57fc
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
```
```ruby
my_account = DwollaSwagger::AccountsApi.id('https://api-uat.dwolla.com/accounts/0270baed-dda5-46d0-b074-e7f3d478896f')
```
```javascript
// No example for this language yet.
```
```python
accounts_api = dwollaswagger.AccountsApi(client)
my_account = accounts_api.id('https://api-uat.dwolla.com/accounts/0270baed-dda5-46d0-b074-e7f3d478896f')
```
```php
<?php
$accountsApi = new DwollaSwagger\AccountsApi($apiClient);
$myAccount = $accountsApi->id('https://api-uat.dwolla.com/accounts/0270baed-dda5-46d0-b074-e7f3d478896f')
?>
```

Response (view schema in 'raw'): 

```raw
Schema

{
  "_links": {
    "self": {
      "href": "https://api-uat.dwolla.com/accounts/4BB512E4-AD4D-4F7E-BFD0-A232007F21A1"
    },
    "receive": {
      "href": "https://api-uat.dwolla.com/transfers"
    },
    "funding-sources": {
      "href": "https://api-uat.dwolla.com/accounts/4BB512E4-AD4D-4F7E-BFD0-A232007F21A1/funding-sources"
    },
    "transfers": {
      "href": "https://api-uat.dwolla.com/accounts/4BB512E4-AD4D-4F7E-BFD0-A232007F21A1/transfers"
    },
    "send": {
      "href": "https://api-uat.dwolla.com/transfers"
    }
  },
  "id": "4BB512E4-AD4D-4F7E-BFD0-A232007F21A1",
  "name": "President Appleseed"
}
```
```ruby
# Access desired information in response object fields
p my_account.name # => "President Appleseed"
```
```javascript
// No example for this language yet.
```
```python
# Access desired information in response object fields
print(my_account.name) # => "President Appleseed"
```
```php
<?php
# Access desired information in response object fields
print($myAccount->name) # => "President Appleseed"
?>
```

Then, follow the `_links.funding-sources` link, or if you're using an SDK, just re-use `_links.account` (the location of the Account resource):

```raw
GET https://api-uat.dwolla.com/accounts/4BB512E4-AD4D-4F7E-BFD0-A232007F21A1/funding-sources
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
```
```ruby
funding_sources = DwollaSwagger::FundingsourcesApi.get_account_funding_sources('https://api-uat.dwolla.com/accounts/0270baed-dda5-46d0-b074-e7f3d478896f')
```
```javascript
// No example for this language yet.
```
```python
funding_api = dwollaswagger.FundingsourcesApi(client)
funding_sources = funding_api.id('https://api-uat.dwolla.com/accounts/0270baed-dda5-46d0-b074-e7f3d478896f')
```
```php
<?php
$fundingApi = new DwollaSwagger\FundingsourcesApi($apiClient);
$fundingSources = $fundingApi->id('https://api-uat.dwolla.com/accounts/0270baed-dda5-46d0-b074-e7f3d478896f')
?>
```

Response (view schema in 'raw'): 

```raw
{
  "_links": {
    "self": {
      "href": "https://api-uat.dwolla.com/accounts/4bb512e4-ad4d-4f7e-bfd0-a232007f21a1/funding-sources"
    }
  },
  "_embedded": {
    "funding-sources": [
      {
        "_links": {
          "self": {
            "href": "https://api-uat.dwolla.com/funding-sources/0094b1b4-e171-4dc8-865b-cb121c2377bb"
          },
          "account": {
            "href": "https://api-uat.dwolla.com/accounts/4bb512e4-ad4d-4f7e-bfd0-a232007f21a1"
          },
          "with-available-balance": {
            "href": "https://api-uat.dwolla.com/funding-sources/0094b1b4-e171-4dc8-865b-cb121c2377bb"
          }
        },
        "id": "0094b1b4-e171-4dc8-865b-cb121c2377bb",
        "status": "verified",
        "type": "balance",
        "name": "Balance",
        "created": "2013-09-07T14:42:52.000Z"
      },
      {
        "_links": {
          "self": {
            "href": "https://api-uat.dwolla.com/funding-sources/5cfcdc41-10f6-4a45-b11d-7ac89893d985"
          },
          "account": {
            "href": "https://api-uat.dwolla.com/accounts/4bb512e4-ad4d-4f7e-bfd0-a232007f21a1"
          }
        },
        "id": "5cfcdc41-10f6-4a45-b11d-7ac89893d985",
        "status": "verified",
        "type": "bank",
        "name": "Checking account",
        "created": "2014-09-04T23:19:19.543Z"
      }
    ]
  }
}
```
```ruby
# Access desired information in response object fields
p funding_sources._embedded # => Ruby Hash of _embedded contents in schema
```
```javascript
// No example for this language yet.
```
```python
# Access desired information in response object fields
print(funding_sources._embedded) # => Python Dict of _embedded contents in schema
```
```php
<?php
# Access desired information in response object fields
print($fundingSources->_embedded) # => PHP associative array of _embedded contents in schema
?>
```

<nav class="pager-nav">
    <a href="./">Back to Overview</a>
    <a href="03-create-transfer.html">Next step: Create a transfer</a>
</nav>