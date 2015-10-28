---
layout: twoColumn
section: guides
type: guide
guide: 
    name: sandbox-setup
    step: '4'
title:  Get started with integrating ACH transfers into your application
description: Use this guide to start sending payments from your application by utilizing our open API with no per transaction fees. 
---

# Using an SDK? Enable sandbox mode

Now that you’ve got accounts set up in the Sandbox environment, you can enable sandbox mode if you’re using one of our SDKs.

To use the sandbox environment with our white label SDKs, just provide `https://api-uat.dwolla.com/` as the hostname.

```raw
not available
```
```javascript
```
```ruby
require 'dwolla_swagger'

DwollaSwagger::Swagger.configure do |config|
    config.host = 'api-uat.dwolla.com'
end
```
```python
client = dwollaswagger.ApiClient('https://api-uat.dwolla.com')
```
```php
<?php
$apiClient = new DwollaSwagger\ApiClient("https://api-uat.dwolla.com/");
```


You’re all set! With Sandbox mode enabled, you’re ready to start sending money in the sandbox. 

<nav class="pager-nav">
    <a href="./">Back: Create an application</a>
    <a href="/guides/send-money">Next guide: send money to your users</a>
</nav>