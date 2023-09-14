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
  ManagedIdentitySqlControlSettingsModel,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update Managed Identity Sql Control Settings
 *
 * @summary Create or update Managed Identity Sql Control Settings
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateOrUpdateManagedIdentitySqlControlSettings.json
 */
async function createOrUpdateManagedIdentitySqlControlSettings() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "resourceGroup1";
  const workspaceName = "workspace1";
  const managedIdentitySqlControlSettings: ManagedIdentitySqlControlSettingsModel = {
    grantSqlControlToManagedIdentity: { desiredState: "Enabled" }
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.workspaceManagedIdentitySqlControlSettings.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    managedIdentitySqlControlSettings
  );
  console.log(result);
}

createOrUpdateManagedIdentitySqlControlSettings().catch(console.error);
