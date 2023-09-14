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
  PartialMinimalTrackedResourceWithSku,
  AzureMachineLearningWorkspaces
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update Online Deployment (asynchronous).
 *
 * @summary Update Online Deployment (asynchronous).
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-10-01/examples/OnlineDeployment/KubernetesOnlineDeployment/update.json
 */
async function updateKubernetesOnlineDeployment() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "test-rg";
  const workspaceName = "my-aml-workspace";
  const endpointName = "testEndpointName";
  const deploymentName = "testDeploymentName";
  const body: PartialMinimalTrackedResourceWithSku = {
    sku: {
      name: "string",
      capacity: 1,
      family: "string",
      size: "string",
      tier: "Free"
    },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.onlineDeployments.beginUpdateAndWait(
    resourceGroupName,
    workspaceName,
    endpointName,
    deploymentName,
    body
  );
  console.log(result);
}

updateKubernetesOnlineDeployment().catch(console.error);

/**
 * This sample demonstrates how to Update Online Deployment (asynchronous).
 *
 * @summary Update Online Deployment (asynchronous).
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-10-01/examples/OnlineDeployment/ManagedOnlineDeployment/update.json
 */
async function updateManagedOnlineDeployment() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "test-rg";
  const workspaceName = "my-aml-workspace";
  const endpointName = "testEndpointName";
  const deploymentName = "testDeploymentName";
  const body: PartialMinimalTrackedResourceWithSku = {
    sku: {
      name: "string",
      capacity: 1,
      family: "string",
      size: "string",
      tier: "Free"
    },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.onlineDeployments.beginUpdateAndWait(
    resourceGroupName,
    workspaceName,
    endpointName,
    deploymentName,
    body
  );
  console.log(result);
}

updateManagedOnlineDeployment().catch(console.error);
