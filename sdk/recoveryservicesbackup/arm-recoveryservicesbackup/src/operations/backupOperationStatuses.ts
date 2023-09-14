/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BackupOperationStatuses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  BackupOperationStatusesGetOptionalParams,
  BackupOperationStatusesGetResponse
} from "../models";

/** Class containing BackupOperationStatuses operations. */
export class BackupOperationStatusesImpl implements BackupOperationStatuses {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class BackupOperationStatuses class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Fetches the status of an operation such as triggering a backup, restore. The status can be in
   * progress, completed
   * or failed. You can refer to the OperationStatus enum for all the possible states of an operation.
   * Some operations
   * create jobs. This method returns the list of jobs when the operation is complete.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param operationId OperationID which represents the operation.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    operationId: string,
    options?: BackupOperationStatusesGetOptionalParams
  ): Promise<BackupOperationStatusesGetResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, operationId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupOperations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
