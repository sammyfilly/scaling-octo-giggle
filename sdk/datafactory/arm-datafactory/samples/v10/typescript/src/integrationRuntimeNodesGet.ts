/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets a self-hosted integration runtime node.
 *
 * @summary Gets a self-hosted integration runtime node.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/IntegrationRuntimeNodes_Get.json
 */
import { DataFactoryManagementClient } from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";

async function integrationRuntimeNodesGet() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const integrationRuntimeName = "exampleIntegrationRuntime";
  const nodeName = "Node_1";
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.integrationRuntimeNodes.get(
    resourceGroupName,
    factoryName,
    integrationRuntimeName,
    nodeName
  );
  console.log(result);
}

integrationRuntimeNodesGet().catch(console.error);
