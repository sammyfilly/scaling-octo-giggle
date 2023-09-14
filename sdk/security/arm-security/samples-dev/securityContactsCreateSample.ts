/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityContact, SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Security contact configurations for the subscription
 *
 * @summary Security contact configurations for the subscription
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/SecurityContacts/CreateSecurityContact_full_example.json
 */
async function createSecurityContactDataFull() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const securityContactName = "default1";
  const securityContact: SecurityContact = {
    name: "default1",
    type: "Microsoft.Security/securityContacts",
    alertNotifications: "On",
    alertsToAdmins: "On",
    email: "john@contoso.com",
    id:
      "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Security/securityContacts/default1",
    phone: "(214)275-4038"
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.securityContacts.create(
    securityContactName,
    securityContact
  );
  console.log(result);
}

createSecurityContactDataFull().catch(console.error);

/**
 * This sample demonstrates how to Security contact configurations for the subscription
 *
 * @summary Security contact configurations for the subscription
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/SecurityContacts/CreateSecurityContact_min_example.json
 */
async function createSecurityContactDataMinimal() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const securityContactName = "default2";
  const securityContact: SecurityContact = {
    name: "default2",
    type: "Microsoft.Security/securityContacts",
    alertNotifications: "On",
    alertsToAdmins: "On",
    email: "chen@contoso.com",
    id:
      "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Security/securityContacts/default2"
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.securityContacts.create(
    securityContactName,
    securityContact
  );
  console.log(result);
}

createSecurityContactDataMinimal().catch(console.error);
