---
layout: twoColumn
section: resources
type: tool
title:  "Sandbox"
description: "Learn more about our Sandbox environment."
---

<section class="side-by-side-compare">
    <div>
        <h1>Sandbox</h1>
        <a href="https://uat.dwolla.com">uat.dwolla.com</a>
        <p>Test moving fake money</p>
        <ul>
            <li>Use an exact replica of the production environment</li>
            <li>Test the Dwolla API without transferring real money</li>
        </ul>
    </div>
    <div>
        <h1>Sandbox Console</h1>
        <a href="https://sandbox-uat.dwolla.com">sandbox-uat.dwolla.com</a>
        <p>Manage your test data</p>
        <ul>
            <li>View all your test accounts and transfers</li>
            <li>Add more test accounts</li>
            <li>Simulate ACH transfer statuses</li>
        </ul>
    </div>
</section>

<a class="btn secondary" href="{{site.baseurl}}/guides/sandbox-setup">View setup guide</a>

# Setting transfer statuses

### Transfer behavior in the Sandbox

Unlike Balance, Credit, or FiSync sourced transfers, which are processed instantaneously, Bank-sourced transfers exist in the Pending state for a few business days until they are `processed`, `failed`, `cancelled`, or `reclaimed`.

The Sandbox environment does not replicate any ACH processes, so a `pending` transfer will not clear or fail automatically after a few business days as it would in production. It will simply remain in the `pending` state indefinitely.

### `cancelled` and `reclaimed`

As in the production environment, Sandbox transfers can be cancelled from either the sender's or the receiver's Dwolla account dashboard, or directly from the Sandbox Console interface. Only [Traditional CIP Verified Dwolla accounts](/resources/account-types.html)</a> are eligible to cancel transfers. 

For Dwolla Direct integrations only, there are two scenarios in which a transfer can become `reclaimed`:

1. A payment is sent to a non-Dwolla-user's email address and has not been claimed by the sender's Reclaim period, which is by default 30 days.
2. A processed payment is reversed by Dwolla as a result of a dispute.

### Manipulation

![Screenshot](/images/sandbox-admin-manipulation.png)

The Sandbox Console interface allows you to immediately trigger any of the four possible outcomes for a given transfer: `processed`, `failed`, `cancelled`, `reclaimed`. If subscribed to [webhooks](/guides/webhooks), when a transfer outcome is triggered, a webhook will be sent to your server which includes the corresponding created event.

For more information on transfer statuses, read the [transaction workflow](/resources/transaction-workflow.html) article.
