---
layout: twoColumn
section: resources
type: article
title:  "Account types"
description: "Build bank transfers programmatically into your site or app. Learn about the different types of Dwolla accounts, transfer limits, and eligibility."
---

# Account types

Before designing your integration, you’ll want to be aware of the different account types that exist on the Dwolla platform as well as their capabilities. A key difference between Traditional accounts and White Label Customer accounts outlined below is the onboarding user experience as well as the interaction with Dwolla. Traditional accounts access dwolla.com to manage their account, whereas White Label Customer accounts are managed entirely by the Traditional account that creates them. Regardless of whether your application interacts with Traditional accounts or White Label Customer accounts, it’s important to note that in a transfer of money between two parties at least one account must be Customer Identity Program (CIP) verified. In addition, we also require CIP verification as a part of a customer holding funds in the Dwolla network. 

## Traditional accounts

A Traditional account can be established prior to interacting with your application by signing up on dwolla.com, or can be created directly inline with the capture of the user's permission via Dwolla’s OAuth flow. In both of these cases, Dwolla facilitates the onboarding process and (if necessary) additional identity verification.

##### Traditional CIP Verified

A Traditional CIP Verified Dwolla account maintains full access to the Dwolla platform and is able to transact with any account type. Since this account type requires additional identity vetting by Dwolla, users need to provide standard Know Your Customer (KYC) information: name, date of birth, address, and last four digits of SSN. In addition to the above, a commercial account will need to provide business name, address, and EIN. For white label integrations, the Partner will need a Traditional CIP Verified account in order to create Customers.

##### Dwolla Direct

A Direct account is a lightweight account that maintains partial platform capabilities. This type of account requires only a username and password with no added CIP verification steps. Since identity vetting is not required, a Direct account may only transact with a CIP verified account: (1) Traditional CIP Verified or (2) White Label Verified Customer. 

## White Label Customer accounts

A White Label Customer account is created programmatically by a Partner’s Traditional CIP Verified account via the endpoint “Create New Customer”. All required account information will be handled via the API and the White Label Customer will interact directly with the Traditional CIP Verified account to manage their account.

##### White Label Verified Customer

This third-party-created account requires the same user profile data as a Traditional CIP Verified account. A White Label Verified Customer account is required when the Partner’s end user needs to hold a Dwolla balance or transact with an unverified account type. Types of Verified Customers include: Personal or Business. 

##### White Label Unverified Customer

A White Label Customer is a third-party-created account that requires a minimal amount of account data: first name, last name, email address, and IP address. 

## Transfer limits and eligibility

Depending on the type of account created within the Dwolla system, there are certain eligibilities in place for sending and receiving funds. 

<table>
  <thead>
    <tr>
      <th>Account type</th>
      <th>Transfer limits</th>
      <th>Supported transactions</th>
      <th>Unsupported transactions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Traditional CIP Verified (<strong>TCV</strong>)</td>
      <td>
        <strong>Personal</strong> - $5,000 per Send/Receive <br> 
        <strong>Business</strong> - $10,000 per Send/Receive <br>
        <strong>Non</strong>-Profit - $10,000 per Send/Receive <br>
        <strong>Government</strong> - Flexible
      </td>
      <td>
        <strong>Send</strong> <br>
        TCV: TCV <br>
        TCV: D <br>
        TCV: WLUC <br>
        TCV: WLVC <br>
         <br>
        <strong>Receive</strong> <br>
        TCV: TCV <br>
        D: TCV <br>
        WLUC: TCV <br>
        WLVC: TCV <br>
      </td>
      <td>no restrictions</td>
    </tr>
    <tr>
      <td>Direct (<strong>D</strong>)</td>
      <td>$5,000 per week. A week is defined as Monday to Sunday.</td>
      <td>
        <strong>Send</strong> <br>
          D: TCV<br>
          D: WLVC<br><br>
        <strong>Receive</strong> <br>
          TCV: D<br>
          WLVC: D<br>
      </td>
      <td>
        <strong>Send</strong> <br>
          D: D<br>
          D: WLUC<br><br>
        <strong>Receive</strong> <br>
          D: D<br>
          WLUC: D<br>
      </td>
    </tr>
    <tr>
      <td>White Label Verified Customer (<strong>WLVC</strong>)</td>
      <td>
        <strong>Personal</strong> - $5,000 per Send/Receive <br>
        <strong>Business</strong> - $10,000 per Send/Receive</td>
      <td>
        <strong>Send</strong> <br>
          WLVC: WLVC <br>
          WLVC: TCV <br>
          WLVC: D <br>
          WLVC: WLUC <br>

          <br>
        <strong>Receive</strong> <br>
          WLVC: WLVC <br>
          TCV: WLVC <br>
          D: WLVC <br>
          WLUC: WLVC <br>
      </td>
      <td>
        no restrictions
      </td>
    </tr>
    <tr>
      <td>White Label Unverified Customer (<strong>WLUC</strong>)</td>
      <td>$5,000 per week. A week is defined as Monday to Sunday.</td>
      <td>
        <strong>Send</strong> <br>
          WLUC:TCV <br>
          WLUC: WLVC  <br>

          <br>
        <strong>Receive</strong> <br>
          TCV:WLUC <br>
          WLVC: WLUC
      </td>
      <td>
        <strong>Send</strong> <br>
          WLUC:WLUC <br>
          WLUC: D <br>

          <br>
        <strong>Receive</strong> <br>
          WLUC:WLUC <br>
          D:WLUC <br>
      </td>
    </tr>
  </tbody>
</table>

Need a higher transfer limit?  [Contact us](https://www.dwolla.com/contact) and we’ll work with you to set a custom limit that fits your needs.