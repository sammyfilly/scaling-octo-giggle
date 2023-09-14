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
 * This sample demonstrates how to Fetches the status of a triggered validate operation. The status can be in progress, completed
or failed. You can refer to the OperationStatus enum for all the possible states of the operation.
If operation has completed, this method returns the list of errors obtained while validating the operation.
 *
 * @summary Fetches the status of a triggered validate operation. The status can be in progress, completed
or failed. You can refer to the OperationStatus enum for all the possible states of the operation.
If operation has completed, this method returns the list of errors obtained while validating the operation.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-12-01/examples/AzureIaasVm/ValidateOperationStatus.json
 */
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

async function getOperationStatusOfValidateOperation() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName = "SwaggerTestRg";
  const operationId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.validateOperationStatuses.get(
    vaultName,
    resourceGroupName,
    operationId
  );
  console.log(result);
}

getOperationStatusOfValidateOperation().catch(console.error);
