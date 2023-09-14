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
  HybridIdentityMetadata,
  HybridContainerServiceClient
} from "@azure/arm-hybridcontainerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates the hybrid identity metadata proxy resource that facilitates the managed identity provisioning.
 *
 * @summary Creates the hybrid identity metadata proxy resource that facilitates the managed identity provisioning.
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/CreateHybridIdentityMetadata.json
 */
async function createHybridIdentityMetadata() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const provisionedClustersName = "ContosoTargetCluster";
  const hybridIdentityMetadataResourceName = "default";
  const body: HybridIdentityMetadata = {
    publicKey: "8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2",
    resourceUid: "f8b82dff-38ef-4220-99ef-d3a3f86ddc6c"
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const result = await client.hybridIdentityMetadataOperations.put(
    resourceGroupName,
    provisionedClustersName,
    hybridIdentityMetadataResourceName,
    body
  );
  console.log(result);
}

createHybridIdentityMetadata().catch(console.error);
