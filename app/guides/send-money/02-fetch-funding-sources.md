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

No matter which method you used to set up your customers, the remaining steps of sending money are the same. Please note the difference in terminology between the two onboarding experiences:

| Solution | Recipient|
|----------|----------|
|White Label Solution|Customer|
|Dwolla Direct|Account|

Now that you’ve created a customer or an account and associated its funding source, you can initiate your first transfer. The transfer requires the following information:

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
{
  "_links": {
    "account": {
      "href": "https://api-uat.dwolla.com/accounts/4bb512e4-ad4d-4f7e-bfd0-a232007f21a1"
    }
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

Then, follow the `_links.account` link:

```raw
GET https://api-uat.dwolla.com/accounts/dcbb698d-bee7-4f79-8576-e4301bdc57fc
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
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

Then, follow the `_links.funding-sources` link:

```raw
GET https://api-uat.dwolla.com/accounts/4BB512E4-AD4D-4F7E-BFD0-A232007F21A1/funding-sources
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
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

<nav class="pager-nav">
    <a href="./">Back to Overview</a>
    <a href="03-create-transfer.html">Next step: Create a transfer</a>
</nav>