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
  DataVersionBase,
  AzureMachineLearningWorkspaces
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update version.
 *
 * @summary Create or update version.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-05-01/examples/DataVersionBase/createOrUpdate.json
 */
async function createOrUpdateDataVersionBase() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const version = "string";
  const body: DataVersionBase = {
    properties: {
      description: "string",
      dataType: "uri_file",
      dataUri: "string",
      isAnonymous: false,
      properties: { string: "string" },
      tags: { string: "string" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.dataVersions.createOrUpdate(
    resourceGroupName,
    workspaceName,
    name,
    version,
    body
  );
  console.log(result);
}

createOrUpdateDataVersionBase().catch(console.error);
