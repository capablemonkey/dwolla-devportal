---
layout: twoColumn
section: resources
type: article
title:  OAuth Refresh Stategies
description: "Best practices for managing your access tokens."
---

# OAuth Refresh Strategies

Dwolla’s implementation of the [OAuth 2.0](https://tools.ietf.org/html/rfc6749) standard uses short-lived access tokens and long-lived refresh tokens. When a user account grants authorization to your application, Dwolla will issue an access token which expires in 1 hour and a refresh token which expires in 60 days. You’ll likely want to access a user account for longer than 1 hour, which means you’ll want to implement a way to refresh authorization. 

**Note**: A user account can represent your own account or an account that belongs to a user of your application. Follow these strategies even if you’re only using OAuth in order to access  your own account via the API.

**Important**: We recommend securely storing access/refresh tokens in a database with the associated user account. 

There are two recommended strategies for managing short-lived access tokens. If your application relies heavily on calling the Dwolla API several times in a day, we recommend setting up a cron job to refresh authorization constantly during the day. However, if for example, your application only calls Dwolla’s API once a day or once a month, we recommend refreshing your token pair prior to making any API call.

### Strategy 1: Preemptively refresh authorization

You set up a cron job that runs in the background every hour to refresh each user account’s OAuth access token. Refreshing authorization would happen behind the scenes as a backend process. You would first query your database for tokens that are about to expire, make a POST request to refresh authorization, and update your database to include the newly refreshed token pair. Note: Be prepared to handle errors gracefully while the cron job is running. 

```
var cron = require('cron');
var cronJob = cron.job("0 */55 * * * *", function() {
    User.find({
        where: {
            dwolla_id: '812-196-0757' //query user in database
        }
    }).then(function(user) {
        if (user) { //If user exists in database
            var refreshToken = user.dwolla_refresh; //grab the existing stored refresh token
            Dwolla.refreshAuth(refreshToken, function(error, auth) { //pass refresh token into refreshAuth request
                if (error) {
                    return console.log(error);
                }
                user.updateAttributes({
                    dwolla_refresh: auth.refresh_token //From response, set new refresh token in database
                }).success(function() {
                    console.log("updated");
                })
            });
        } else {
          console.log("user does not exist");
        }
    }).
    catch (function(err) {
        console.log(err);
    })
    console.info('cron job completed');
});
cronJob.start();
```

### Strategy 2: Refresh on demand or handle failure 

On demand: Before making any API call to Dwolla, query your database to get the stored refresh token, refresh authorization, update the new token pair in your database, and lastly make the call to Dwolla. This method prevents excessive calls to Dwolla and only requires you to refresh authorization when needed.
Handle failure: Make API call with access token; if access token is invalid, try to update it using the stored refresh token; if refresh request is successful, update the existing token pair in your database and re-attempt the initial API request. Optional: cache the access token for reuse on subsequent requests.

### Best practices 

You should be able to deal with scenarios where a token is invalid even if you assume it is valid—e.g., if a user account revokes access to your application on dwolla.com. Check that the error is “Invalid access token” and that you are correctly passing in your token when calling Dwolla before requesting a new access/refresh token from Dwolla. 

- Consider possible race conditions where multiple threads attempt to use the same refresh token at the same time. In this case, one thread will succeed and cause the other thread’s request to fail. 
- Make sure you know the difference between a generic error and “Expired access token”. Be prepared to catch an expired access token error and refresh if needed. 
- Handle timeouts and non-successful requests to Dwolla.
- If refreshing authorization for many accounts at the same time, it’s important that you make each request sequentially instead of all at once.  For instance, if you attempt 10,000 refresh token requests at the same time, you’ll get responses, but many will result in timeouts, which mean you won’t know what the new access token and refresh token are.
