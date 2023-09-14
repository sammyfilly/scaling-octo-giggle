/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get dismiss rule, with name: {alertsSuppressionRuleName}, for the given subscription
 *
 * @summary Get dismiss rule, with name: {alertsSuppressionRuleName}, for the given subscription
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/AlertsSuppressionRules/GetAlertsSuppressionRule_example.json
 */
async function getSuppressionAlertRuleForSubscription() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const alertsSuppressionRuleName = "dismissIpAnomalyAlerts";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.alertsSuppressionRules.get(
    alertsSuppressionRuleName
  );
  console.log(result);
}

getSuppressionAlertRuleForSubscription().catch(console.error);
