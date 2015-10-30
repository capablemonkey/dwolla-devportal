---
layout: twoColumn
section: guides
guide: 
    name: receive-money
    step: 1b
type: guide
title:  "Step 1: Direct onboarding"
---

# Step 1: Create a Dwolla Direct account for the payer

In this experience, the end user is sent to Dwolla to create an account and then returned to your application using the OAuth flow. If you prefer that your customers not create Dwolla accounts, choose the white label solution.

### Step A. Construct OAuth authorization request URL.

Create a URL to send the user to in order to create a new Dwolla Direct account.  When the user has created a Direct account, they’ll be prompted to give your application permission to access their account, and if they agree, they will be redirected back to your application.  [Read about OAuth](https://docsv2.dwolla.com/#request-user-authorization).

Be sure to request the `Send` and `Funding` scopes.

URL Format:
`https://www.dwolla.com/oauth/v2/authenticate?client_id={client_id}&response_type=code&redirect_uri={redirect_uri}&scope={scope}`

Example URL:

`https://uat.dwolla.com/oauth/v2/authenticate?client_id=PO%2BSzGAsZCE4BTG7Cw4OAL40Tpf1008mDjGBSVo6QLNfM4mD%2Ba&response_type=code&redirect_uri=https://example.com/return&scope=Balance%7CAccountInfoFull%7CSend%7CRequest%7CTransactions%7CContacts%7CFunding%7CManageAccount%7CScheduled`

### Step B. Redirect back to your application and generate access token

The customer will complete their profile and attach a verified funding source.  After that, they will be prompted to grant your application permission to access the new account and transfer funds from it.  Once the customer agrees, they’ll be redirected back to the redirect_uri you specified in the previous step with a querystring parameter named `code` -- this is an authorization code.  The last step in the OAuth process is to exchange this authorization code for an access token.

Example redirect with authorization code:

`https://example.com/return?code=sZCE4BTG7Cw4O`

```rawnoselect
POST https://uat.dwolla.com/oauth/v2/token
Content-Type: application/json

{
  "client_id": "JCGQXLrlfuOqdUYdTcLz3rBiCZQDRvdWIUPkw++GMuGhkem9Bo",
  "client_secret": "g7QLwvO37aN2HoKx1amekWi8a2g7AIuPbD5C/JSLqXIcDOxfTr",
  "code": "sZCE4BTG7Cw4O",
  "grant_type": "authorization_code",
  "redirect_uri": "https://example.com/return"
}
```

Response:

```jsonnoselect
{
  "_links": {
    "account": {
      "href": "https://api-uat.dwolla.com/accounts/4bb512e4-ad4d-4f7e-bfd0-a232007f21a1"
    }
  },
  "access_token": "2U2HdYXyQfdZN4hQeQKstadbmqC40mrsVMmzi6Up62R36eFTHW",
  "expires_in": 3600,
  "refresh_token": "aClhbl9euHAq31ldke51DcN0ml2ZAAfBIT7PDhyYXoLCEtGQHO",
  "refresh_expires_in": 5184000,
  "token_type": "bearer",
  "scope": "balance|accountinfofull|send|request|transactions|contacts|funding|manageaccount|scheduled",
  "account_id": "4bb512e4-ad4d-4f7e-bfd0-a232007f21a1"
}
```

### Step C. Get list of customer’s funding sources

Using the access token we just generated, we’ll need to get the funding source ID of the bank account we’d like to use to fund the transfer.  

Use the [List Funding Sources (Account)](https://docsv2.dwolla.com/#list-funding-sources-account) endpoint to fetch a list of the payer’s funding sources.  You first need to fetch the root resource to determine the URL to get the account’s funding source list from. SDK support for this functionality is coming soon.

```raw
GET https://api-uat.dwolla.com/accounts/dcbb698d-bee7-4f79-8576-e4301bdc57fc/funding-sources
Accept: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
```
```ruby
account = 'https://api-uat.dwolla.com/accounts/dcbb698d-bee7-4f79-8576-e4301bdc57fc'
fs_list = DwollaSwagger::FundingsourcesApi.get_account_funding_sources(account)

p fs_list[0][:name] # => First Midwestern Bank - Checking
```
```python
account = 'https://api-uat.dwolla.com/accounts/dcbb698d-bee7-4f79-8576-e4301bdc57fc'

fs_api = dwollaswagger.FundingsourcesApi(client)
fs_list = fs_api.get_account_funding_sources(account)

print(fs_list[0]['name']) # => First Midwestern Bank - Checking
```
```php
<?php
$account = 'https://api-uat.dwolla.com/accounts/dcbb698d-bee7-4f79-8576-e4301bdc57fc';

$fsApi = DwollaSwagger\FundingsourcesApi($apiClient);
$fsList = $fsApi->get_account_funding_sources($account);

print($fsList[0]['name']); # => First Midwestern Bank - Checking
?>
```

### Step D. Create a transfer to your account

Finally, you can create a transfer from the payer’s bank account to your own account.  


```raw
POST https://api-uat.dwolla.com/transfers
Accept: application/vnd.dwolla.v1.hal+json
Content-Type: application/vnd.dwolla.v1.hal+json
Authorization: Bearer 0Sn0W6kzNicvoWhDbQcVSKLRUpGjIdlPSEYyrHqrDDoRnQwE7Q
{
    "_links": {
        "source": {
            "href": "https://api-uat.dwolla.com/accounts/297460a0-101b-498c-8184-2eb33ff22d34/funding-sources/707177c3-bf15-4e7e-b37c-55c3898d9bf4"
        },
        "destination": {
            "href": "https://api-uat.dwolla.com/accounts/297460a0-101b-498c-8184-2eb33ff22d34"
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
      :destination => {:href => 'https://api-uat.dwolla.com/accounts/297460a0-101b-498c-8184-2eb33ff22d34'},
      :source => {:href => 'https://api-uat.dwolla.com/accounts/297460a0-101b-498c-8184-2eb33ff22d34/funding-sources/707177c3-bf15-4e7e-b37c-55c3898d9bf4'}
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
            "href": "https://api-uat.dwolla.com/accounts/297460a0-101b-498c-8184-2eb33ff22d34/funding-sources/707177c3-bf15-4e7e-b37c-55c3898d9bf4"
        },
        "destination": {
            "href": "https://api-uat.dwolla.com/accounts/297460a0-101b-498c-8184-2eb33ff22d34"
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
      'href' => 'https://api-uat.dwolla.com/accounts/297460a0-101b-498c-8184-2eb33ff22d34/funding-sources/707177c3-bf15-4e7e-b37c-55c3898d9bf4',
    ),
    'destination' => 
    array (
      'href' => 'https://api-uat.dwolla.com/accounts/297460a0-101b-498c-8184-2eb33ff22d34',
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