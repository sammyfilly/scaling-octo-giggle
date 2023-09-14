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
  DatabasePrincipalAssignment,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a Kusto pool database principalAssignment.
 *
 * @summary Creates a Kusto pool database principalAssignment.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolDatabasePrincipalAssignmentsCreateOrUpdate.json
 */
async function kustoPoolDatabasePrincipalAssignmentsCreateOrUpdate() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const workspaceName = "synapseWorkspaceName";
  const kustoPoolName = "kustoclusterrptest4";
  const databaseName = "Kustodatabase8";
  const principalAssignmentName = "kustoprincipal1";
  const resourceGroupName = "kustorptest";
  const parameters: DatabasePrincipalAssignment = {
    principalId: "87654321-1234-1234-1234-123456789123",
    principalType: "App",
    role: "Admin",
    tenantId: "12345678-1234-1234-1234-123456789123"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPoolDatabasePrincipalAssignments.beginCreateOrUpdateAndWait(
    workspaceName,
    kustoPoolName,
    databaseName,
    principalAssignmentName,
    resourceGroupName,
    parameters
  );
  console.log(result);
}

kustoPoolDatabasePrincipalAssignmentsCreateOrUpdate().catch(console.error);
