/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HybridContainerServiceClient } = require("@azure/arm-hybridcontainerservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates the Hybrid AKS provisioned cluster
 *
 * @summary Creates the Hybrid AKS provisioned cluster
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/PutProvisionedCluster.json
 */
async function putProvisionedCluster() {
  const subscriptionId = "a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b";
  const resourceGroupName = "test-arcappliance-resgrp";
  const provisionedClustersName = "test-hybridakscluster";
  const provisionedClusters = {
    extendedLocation: {
      name: "/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation",
      type: "CustomLocation",
    },
    location: "westus",
    properties: {
      agentPoolProfiles: [
        {
          name: "default-nodepool-1",
          count: 1,
          osType: "Linux",
          vmSize: "Standard_A4_v2",
        },
      ],
      cloudProviderProfile: {
        infraNetworkProfile: {
          vnetSubnetIds: [
            "/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourceGroups/test-arcappliance-resgrp/providers/Microsoft.HybridContainerService/virtualNetworks/test-vnet-static",
          ],
        },
        infraStorageProfile: {
          storageSpaceIds: [
            "/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourceGroups/test-arcappliance-resgrp/providers/Microsoft.HybridContainerService/storageSpaces/test-storage",
          ],
        },
      },
      controlPlane: {
        count: 1,
        linuxProfile: {
          ssh: {
            publicKeys: [{ keyData: "ssh-rsa AAAAB1NzaC1yc2EAAAADAQABAAACAQCY......" }],
          },
        },
        osType: "Linux",
        vmSize: "Standard_A4_v2",
      },
      kubernetesVersion: "v1.20.5",
      linuxProfile: {
        ssh: {
          publicKeys: [{ keyData: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCY......." }],
        },
      },
      networkProfile: {
        loadBalancerProfile: {
          count: 1,
          linuxProfile: {
            ssh: {
              publicKeys: [{ keyData: "ssh-rsa AAAAB2NzaC1yc2EAAAADAQABAAACAQCY......" }],
            },
          },
          osType: "Linux",
          vmSize: "Standard_K8S3_v1",
        },
        loadBalancerSku: "unstacked-haproxy",
        networkPolicy: "calico",
        podCidr: "10.244.0.0/16",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const result = await client.provisionedClustersOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    provisionedClustersName,
    provisionedClusters
  );
  console.log(result);
}

putProvisionedCluster().catch(console.error);
