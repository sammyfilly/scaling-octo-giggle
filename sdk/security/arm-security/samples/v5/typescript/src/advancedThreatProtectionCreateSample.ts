/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  AdvancedThreatProtectionSetting,
  SecurityCenter
} from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates the Advanced Threat Protection settings on a specified resource.
 *
 * @summary Creates or updates the Advanced Threat Protection settings on a specified resource.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2019-01-01/examples/AdvancedThreatProtection/PutAdvancedThreatProtectionSettings_example.json
 */
async function createsOrUpdatesTheAdvancedThreatProtectionSettingsOnASpecifiedResource() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceId =
    "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/SampleRG/providers/Microsoft.Storage/storageAccounts/samplestorageaccount";
  const advancedThreatProtectionSetting: AdvancedThreatProtectionSetting = {
    name: "current",
    type: "Microsoft.Security/advancedThreatProtectionSettings",
    id:
      "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/SampleRG/providers/Microsoft.Storage/storageAccounts/samplestorageaccount/providers/Microsoft.Security/advancedThreatProtectionSettings/current",
    isEnabled: true
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.advancedThreatProtection.create(
    resourceId,
    advancedThreatProtectionSetting
  );
  console.log(result);
}

createsOrUpdatesTheAdvancedThreatProtectionSettingsOnASpecifiedResource().catch(
  console.error
);
