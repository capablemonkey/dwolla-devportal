---
layout: twoColumn
section: guides
type: guide
guide: 
    name: webhooks
    step: '4'
title: Webhooks
description: Webhooks for payments within your application by utilizing our open API with no per transaction fees. 
---

# Processing webhooks

## Pro-tips

It is important to consider that multiple webhooks are fired for the same action on certain events. For example, multiple webhooks are fired for `Transfer` events, that is, two `transfer_created` events with different resource IDs (and, by extension, resource URLs) will be fired, one for each customer. To avoid doing any business logic twice, you would have to check if you have already received a webhook relating to the `Transfer` resource responsible for the event.

To do this, keep a queue of events in a database and check to see if an `Event` has the same `self` resource location in `_links` as another event. If not, process the logic for that event. To illustrate, this is how a developer would implement this using Ruby and the ActiveRecord ORM. 

##### Ruby/ActiveRecord
```rubynoselect
check_db = ActiveRecord::Base.connection.execute("SELECT * FROM EVENTS WHERE SELF = #{event[:_links][:self].to_s}")

# check_db will be an array of rows returned
unless check_db.length() == 0
    # do something
end
```

## Example Scenario

Let's assume that you have a webhook subscription and Dwolla has just delivered the following payload to your specified endpoint:

##### Sample Payload
```jsonnoselect
{
  "id": "80d8ff7d-7e5a-4975-ade8-9e97306d6c15",
  "resourceId": "36E9DCB2-889B-4873-8E52-0C9404EA002A",
  "topic": "transfer_created",
  "timestamp": "2015-10-22T14:44:11.407Z",
  "_links": {
    "self": {
      "href": "https://api-uat.dwolla.com/events/80d8ff7d-7e5a-4975-ade8-9e97306d6c15"
    },
    "account": {
      "href": "https://api-uat.dwolla.com/accounts/b4cdac07-eeca-4059-a29c-48900e453d54"
    },
    "resource": {
      "href": "https://api-uat.dwolla.com/transfers/36E9DCB2-889B-4873-8E52-0C9404EA002A"
    },
    "customer": {
      "href": "https://api-uat.dwolla.com/customers/36E9DCB2-889B-4873-8E52-0C9404EA002A"
    }
  }
}
```

For ilustrative purposes, let's assume you are using Ruby on Rails with a controller defined to handle the POST request from Dwolla's servers. Your application logic will look a little something like this:

##### Ruby
```rubynoselect
require 'dwolla_swagger'

if params[:topic] == 'transfer_completed'
  transfer = DwollaSwagger::TransfersApi.by_id(params[:links][:resource][:href])

  transfer._embedded.each do |k, v|
    # Retrieve customer info from your database
    # or from Dwolla here, and then send notifications
  end
elsif params[:topic] == 'another_event'
  "..."
end
```

Let's recap. From the event we can retrieve the `transfer` and then take a look at the `_links` object and retrieve the `customers` that need to be notified. From here, you can make a call to `customers/{id}` to retrieve their e-mail addresses (or to your own database) so that you can send your notification message.

That's it! You’ve learned the basics of webhooks. 

<nav class="pager-nav">
    <a href="./03-validating-webhooks.html">Back: Validating webhooks</a>
    <a href="" style="display:none;"></a>
</nav>