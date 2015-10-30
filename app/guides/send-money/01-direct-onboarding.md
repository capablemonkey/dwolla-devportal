---
layout: twoColumn
section: guides
type: guide
guide:
    name: send-money
    step: 1b
title:  "Step 1: Direct onboarding"
---

# Step 1: Direct onboarding

In this experience, we’ve added the account creation and the ability to add funding source within our co-branded OAuth flow.


### Step A. Construct OAuth authorization request URL.

Create a URL to send the user to in order to create a new Dwolla Direct account.  When the user has created a Direct account, they’ll be prompted to give your application permission to access their account, and if they agree, they will be redirected back to your application.  [Read about OAuth](https://docsv2.dwolla.com/#request-user-authorization).

URL Format:
`https://www.dwolla.com/oauth/v2/authenticate?client_id={client_id}&response_type=code&redirect_uri={redirect_uri}&scope={scope}`

Example URL:

`https://uat.dwolla.com/oauth/v2/authenticate?client_id=PO%2BSzGAsZCE4BTG7Cw4OAL40Tpf1008mDjGBSVo6QLNfM4mD%2Ba&response_type=code&redirect_uri=https://example.com/return&scope=Balance%7CAccountInfoFull%7CSend%7CRequest%7CTransactions%7CContacts%7CFunding%7CManageAccount%7CScheduled`

### Step B: Redirect back to your application

The user is then redirected back to your application with an authorization code. This authorization code is then exchanged for an OAuth access token for the user’s newly created account. Your application should remember the newly created account ID for later sends to this user.

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

You won’t need to use the access token for the Dwolla Direct user, all we need from the above response is their account URL.

### Step C. Create an access token to access your own account

Next, you’ll need to generate an access token for your own account, which you’ll use to transfer funds from your account to the newly created Direct account.

Go to the <a href="http://dwolla-token.herokuapp.com" target="_blank">token generator</a>.

Be sure to use your application’s key and secret. You’ll require, at a minimum, the Send and Funding scope in order to send funds from your own account.  Important: this access token will allow you to send money from your own account, so be sure to securely store it.

Now that you’ve got a newly created Direct account for your end user and an access token which you’ll use to send money from your own account, let’s proceed to the next step.

<nav class="pager-nav">
    <a href="./">Back: Overview</a>
    <a href="02-fetch-funding-sources.html">Next step: Fetch funding sources</a>
</nav>