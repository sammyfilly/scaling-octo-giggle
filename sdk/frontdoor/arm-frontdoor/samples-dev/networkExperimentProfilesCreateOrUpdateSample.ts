/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Profile, FrontDoorManagementClient } from "@azure/arm-frontdoor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates an NetworkExperiment Profile
 *
 * @summary Creates an NetworkExperiment Profile
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2019-11-01/examples/NetworkExperimentCreateProfile.json
 */
async function createsAnNetworkExperimentProfileInAResourceGroup() {
  const subscriptionId = "subid";
  const profileName = "MyProfile";
  const resourceGroupName = "MyResourceGroup";
  const parameters: Profile = { enabledState: "Enabled", location: "WestUs" };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.networkExperimentProfiles.beginCreateOrUpdateAndWait(
    profileName,
    resourceGroupName,
    parameters
  );
  console.log(result);
}

createsAnNetworkExperimentProfileInAResourceGroup().catch(console.error);
