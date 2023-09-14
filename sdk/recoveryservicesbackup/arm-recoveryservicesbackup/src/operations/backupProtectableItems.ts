/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { BackupProtectableItems } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  WorkloadProtectableItemResource,
  BackupProtectableItemsListNextOptionalParams,
  BackupProtectableItemsListOptionalParams,
  BackupProtectableItemsListResponse,
  BackupProtectableItemsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BackupProtectableItems operations. */
export class BackupProtectableItemsImpl implements BackupProtectableItems {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class BackupProtectableItems class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Provides a pageable list of protectable objects within your subscription according to the query
   * filter and the
   * pagination parameters.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  public list(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupProtectableItemsListOptionalParams
  ): PagedAsyncIterableIterator<WorkloadProtectableItemResource> {
    const iter = this.listPagingAll(vaultName, resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(vaultName, resourceGroupName, options);
      }
    };
  }

  private async *listPagingPage(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupProtectableItemsListOptionalParams
  ): AsyncIterableIterator<WorkloadProtectableItemResource[]> {
    let result = await this._list(vaultName, resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        vaultName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupProtectableItemsListOptionalParams
  ): AsyncIterableIterator<WorkloadProtectableItemResource> {
    for await (const page of this.listPagingPage(
      vaultName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Provides a pageable list of protectable objects within your subscription according to the query
   * filter and the
   * pagination parameters.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  private _list(
    vaultName: string,
    resourceGroupName: string,
    options?: BackupProtectableItemsListOptionalParams
  ): Promise<BackupProtectableItemsListResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    vaultName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: BackupProtectableItemsListNextOptionalParams
  ): Promise<BackupProtectableItemsListNextResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectableItems",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadProtectableItemResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadProtectableItemResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
