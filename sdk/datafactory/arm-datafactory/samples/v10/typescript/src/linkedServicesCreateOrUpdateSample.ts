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
  LinkedServiceResource,
  DataFactoryManagementClient
} from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a linked service.
 *
 * @summary Creates or updates a linked service.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/LinkedServices_Create.json
 */
async function linkedServicesCreate() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const linkedServiceName = "exampleLinkedService";
  const linkedService: LinkedServiceResource = {
    properties: {
      type: "AzureStorage",
      connectionString: {
        type: "SecureString",
        value:
          "DefaultEndpointsProtocol=https;AccountName=examplestorageaccount;AccountKey=<storage key>"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.linkedServices.createOrUpdate(
    resourceGroupName,
    factoryName,
    linkedServiceName,
    linkedService
  );
  console.log(result);
}

linkedServicesCreate().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates a linked service.
 *
 * @summary Creates or updates a linked service.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/LinkedServices_Update.json
 */
async function linkedServicesUpdate() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const linkedServiceName = "exampleLinkedService";
  const linkedService: LinkedServiceResource = {
    properties: {
      type: "AzureStorage",
      description: "Example description",
      connectionString: {
        type: "SecureString",
        value:
          "DefaultEndpointsProtocol=https;AccountName=examplestorageaccount;AccountKey=<storage key>"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.linkedServices.createOrUpdate(
    resourceGroupName,
    factoryName,
    linkedServiceName,
    linkedService
  );
  console.log(result);
}

linkedServicesUpdate().catch(console.error);
