---
layout: twoColumn
section: resources
type: article
title:  "Transfer workflow"
description: "Build bank transfers programmatically into your site or app. Get to know the ACH transfer process, including transfer statuses and processing times."
---

# Transfer workflow

Most bank transfers initiated within the Dwolla network are processed via the Automated Clearing House (ACH). We’ve reduced the complex nature of the ACH protocol down to several distinct statuses for transfers. Once a transfer is created it is recorded as an event (`transfer_created`) and will be sent to you via a webhook (if subscribed). You will receive subsequent webhooks as the transfer follows the workflow outlined below. Webhooks will notify your application of a transfer status changes.

## Transfer statuses

A normal ACH transfer workflow includes the following statuses:

- **Pending:** A transfer is initiated and starts off as “pending.” A transfer is pending when the money has yet to leave the funding source or it is en route to its destination.
- **Processed:** Once the ACH transfer has cleared successfully, it will be marked as “processed.” A processed transfer represents money that has reached its destination account—either a balance or bank account. For a balance, funds will become available to the recipient, while for a bank account, it may take additional time to become available, depending on your bank. Note: “processed” is not necessarily a final state. (See “failed” status below for additional context.)

Between the ACH transfer statuses of “pending” and “processed” there are three other transfer statuses which can occur: “cancelled”, “failed”, and “reclaimed.” 

- **Cancelled:** If a transfer’s status changes from “pending” to “cancelled”, this means that the transfer was cancelled. A transfer can be cancelled by a Traditional CIP Verified account. See “timetables for transfers in and out of the network” below for available cancellation windows.
- **Failed:** If a transfer failed to clear successfully (usually as a result of an ACH reject), the transfer’s status will be “failed”. Transfers can fail for a number of reasons, e.g. insufficient funds, invalid account number, no account/unable to locate account, etc. Note: in rare cases, a “processed” transfer may later on get returned as “failed”.
- **Reclaimed:** If a transfer failed because the recipient did not claim the money after 30 days (or a custom reclaim period set by the sender), the transfer status will be marked as “reclaimed.” “Reclaimed” does not apply when transferring to White Label Customers.

## Processing times
The scenarios in the chart below are composed of two transfers: a bank to Dwolla network transfer and a Dwolla network to bank transfer. Transfers where the destination is a Dwolla balance are complete as soon as the funds enter the Dwolla network, and all transfers into the Dwolla network that are either sourced from Dwolla user balances, an authorized Dwolla Credit source, or from FiSync-enabled financial institutions can be settled in real-time.

#### Customer to customer transfers

| Source of transfer | Time to Dwolla network | Time from Dwolla network to recipient’s bank account | Total time to `processed` |
|:------------- |:--------------|:------|:-----|
| Real-time: Dwolla balance, FiSync, Dwolla Credit | Instant | 1-2 business days | 1-2 business days |
| Next-day ACH: linked bank account | 1-2 business days | 1-2 business days | 2-4 business days |
| Standard ACH: linked bank account | 3-4 business days | 1-2 business days | 4-6 business days |

This can be compared to typical Standard ACH transfer times of T+3 to T+4—depending on the financial institution, if you have next-day transfers enabled, and if the transfer is initiated before **1pm CT**.

The timetables for transfers in and out of the Dwolla network are:

#### Bank to Dwolla Network

| Source        | Transfer time     |
|:------------- |:----------------- |
| FiSync        | Instant           |
| Next Day ACH  | 1-2 business days |
| Standard ACH  | 3-5 business days |

* Transfers into the Dwolla network, including transfers that pass through the Dwolla network to another user’s bank account, can be cancelled by a CIP verified account at any point until 4pm CT on that same business day if initiated prior to 1PM CT. If a transfer was initiated after 1pm CT, it can be cancelled anytime before 4pm CT on the following business day.

#### Dwolla Network to Bank

| Source                     | Transfer time     |
|:-------------------------- |:----------------- |
| FiSync                     | Instant           |
| ACH (Next Day or Standard) | 1-2 business days |

* Transfers out of the Dwolla network can be cancelled at any point until 3pm CT on that same business day if the transfer was initiated prior to 1PM CT. If a transfer was initiated after 1pm CT, it can be cancelled anytime before 4pm CT on the following business day. **Note:** You must contact Dwolla support at 1-888-289-8744 to cancel transfers going out of the Dwolla Network.

## Transfer failures

There are numerous reasons transfers can fail, a few of which are outlined below. When a transfer fails it is usually as a result of an ACH failure that is assigned an ACH return code after being rejected from the financial institution. A few common failure cases can include: 

- **Insufficient Funds:** Pending transfers can fail due to insufficient funds from the source bank account. 
- **No Account/Unable to Locate Account:** The recipient of a transfer has closed their bank account or has incorrectly entered their bank account/routing number when attaching their funding source to their account.
- **Customer Advises Not Authorized:** The owner of a bank account has told their bank that this transfer was unauthorized.

When a bank transfer fails from a verified account (e.g. Traditional CIP Verified or White Label Verified Customer) to a recipient, funds will return to the sending account’s Dwolla balance. For other transfer scenarios, funds will return to the source bank account.