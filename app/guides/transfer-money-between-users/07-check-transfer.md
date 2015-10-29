---
layout: twoColumn
section: guides
type: guide
guide:
    name: transfer-money-between-users
    step: '7'
title:  "Step 7: Check the status of your transfer"
---

# Step 7: Check the status of your transfer

You can check the status of the newly created transfer by retrieving the transfer by its URL.

```ruby
require 'dwolla_swagger'

transfer = 'https://api.dwolla.com/transfers/74c9129b-d14a-e511-80da-0aa34a9b2388'
retrieved = DwollaSwagger::TransfersApi.by_id(transfer)

p retrieved[:status] == 'processed' ? "Happy emails" : "Angry emails"
```
```raw
No example for this language yet.
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

That’s it!  You’ve successfully transferred money from Joe Buyer to Jane Merchant. Please continue to the Webhooks guide for information on implementing notifications for your customers about the transfer.

<nav class="pager-nav">
    <a href="06-create-transfer.html">Back: Overview</a>
    <a href="/guides/webhooks">Next guide: Webhooks</a>
</nav>