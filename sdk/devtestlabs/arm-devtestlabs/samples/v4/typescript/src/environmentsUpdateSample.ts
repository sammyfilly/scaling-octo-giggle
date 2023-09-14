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
  DtlEnvironmentFragment,
  DevTestLabsClient
} from "@azure/arm-devtestlabs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Allows modifying tags of environments. All other properties will be ignored.
 *
 * @summary Allows modifying tags of environments. All other properties will be ignored.
 * x-ms-original-file: specification/devtestlabs/resource-manager/Microsoft.DevTestLab/stable/2018-09-15/examples/Environments_Update.json
 */
async function environmentsUpdate() {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "resourceGroupName";
  const labName = "{labName}";
  const userName = "@me";
  const name = "{environmentName}";
  const dtlEnvironment: DtlEnvironmentFragment = {
    tags: { tagName1: "tagValue1" }
  };
  const credential = new DefaultAzureCredential();
  const client = new DevTestLabsClient(credential, subscriptionId);
  const result = await client.environments.update(
    resourceGroupName,
    labName,
    userName,
    name,
    dtlEnvironment
  );
  console.log(result);
}

environmentsUpdate().catch(console.error);
