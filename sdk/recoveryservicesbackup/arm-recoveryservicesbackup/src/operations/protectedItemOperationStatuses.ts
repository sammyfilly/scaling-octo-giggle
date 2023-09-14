/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ProtectedItemOperationStatuses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  ProtectedItemOperationStatusesGetOptionalParams,
  ProtectedItemOperationStatusesGetResponse
} from "../models";

/** Class containing ProtectedItemOperationStatuses operations. */
export class ProtectedItemOperationStatusesImpl
  implements ProtectedItemOperationStatuses {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class ProtectedItemOperationStatuses class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Fetches the status of an operation such as triggering a backup, restore. The status can be in
   * progress, completed
   * or failed. You can refer to the OperationStatus enum for all the possible states of the operation.
   * Some operations
   * create jobs. This method returns the list of jobs associated with the operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the backup item.
   * @param containerName Container name associated with the backup item.
   * @param protectedItemName Backup item name whose details are to be fetched.
   * @param operationId OperationID represents the operation whose status needs to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    operationId: string,
    options?: ProtectedItemOperationStatusesGetOptionalParams
  ): Promise<ProtectedItemOperationStatusesGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        operationId,
        options
      },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/operationsStatus/{operationId}",
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
    Parameters.fabricName,
    Parameters.operationId,
    Parameters.containerName,
    Parameters.protectedItemName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
