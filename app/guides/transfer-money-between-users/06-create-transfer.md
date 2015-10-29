---
layout: twoColumn
section: guides
type: guide
guide:
    name: transfer-money-between-users
    step: '6'
title:  "Step 6: Create a transfer"
---

# Step 6: Create a transfer

[Create a transfer](https://docsv2.dwolla.com/#transfers) by specifying Joe Buyer’s funding source as the source and Jane Merchant’s funding source as the destination. 

```ruby
require 'dwolla_swagger'

transfer = DwollaSwagger::TransfersApi.create({:body => {
           :_links => {
               :destination => {:href => “https://api-uat.dwolla.com/funding-sources/094db8087df29d76f91b2b9af3daacca”},
               :source => {:href => “https://api-uat.dwolla.com/funding-sources/297460a0-101b-498c-8184-2eb33ff22d34”}
           },
           :amount => {:currency => 'USD', :value => 5.00}
}})
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

Response: 

```ruby
p transfer # => 'https://api.dwolla.com/transfers/74c9129b-d14a-e511-80da-0aa34a9b2388'

# `transfer` now holds a string with the location of the resource which you have just created. If you have a webhook subscription associated with your application, you will be notified with a `transfer_created` event and later a `transfer_cancelled`, `transfer_completed`, `transfer_failed`, or `transfer_reclaimed` event.

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



<nav class="pager-nav">
    <a href="05-attach-verified-bank.html">Back: Attach a verified funding source</a>
    <a href="07-check-transfer.html">Next step: Check the status of your transfer</a>
</nav>