/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SqlMigrationServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataMigrationManagementClient } from "../dataMigrationManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SqlMigrationService,
  SqlMigrationServicesListByResourceGroupNextOptionalParams,
  SqlMigrationServicesListByResourceGroupOptionalParams,
  DatabaseMigration,
  SqlMigrationServicesListMigrationsNextOptionalParams,
  SqlMigrationServicesListMigrationsOptionalParams,
  SqlMigrationServicesListBySubscriptionNextOptionalParams,
  SqlMigrationServicesListBySubscriptionOptionalParams,
  SqlMigrationServicesGetOptionalParams,
  SqlMigrationServicesGetResponse,
  SqlMigrationServicesCreateOrUpdateOptionalParams,
  SqlMigrationServicesCreateOrUpdateResponse,
  SqlMigrationServicesDeleteOptionalParams,
  SqlMigrationServiceUpdate,
  SqlMigrationServicesUpdateOptionalParams,
  SqlMigrationServicesUpdateResponse,
  SqlMigrationServicesListByResourceGroupResponse,
  SqlMigrationServicesListAuthKeysOptionalParams,
  SqlMigrationServicesListAuthKeysResponse,
  RegenAuthKeys,
  SqlMigrationServicesRegenerateAuthKeysOptionalParams,
  SqlMigrationServicesRegenerateAuthKeysResponse,
  DeleteNode,
  SqlMigrationServicesDeleteNodeOptionalParams,
  SqlMigrationServicesDeleteNodeResponse,
  SqlMigrationServicesListMigrationsResponse,
  SqlMigrationServicesListMonitoringDataOptionalParams,
  SqlMigrationServicesListMonitoringDataResponse,
  SqlMigrationServicesListBySubscriptionResponse,
  SqlMigrationServicesListByResourceGroupNextResponse,
  SqlMigrationServicesListMigrationsNextResponse,
  SqlMigrationServicesListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlMigrationServices operations. */
export class SqlMigrationServicesImpl implements SqlMigrationServices {
  private readonly client: DataMigrationManagementClient;

  /**
   * Initialize a new instance of the class SqlMigrationServices class.
   * @param client Reference to the service client
   */
  constructor(client: DataMigrationManagementClient) {
    this.client = client;
  }

  /**
   * Retrieve all SQL migration services in the resource group.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: SqlMigrationServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SqlMigrationService> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: SqlMigrationServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SqlMigrationService[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: SqlMigrationServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SqlMigrationService> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve the List of database migrations attached to the service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  public listMigrations(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesListMigrationsOptionalParams
  ): PagedAsyncIterableIterator<DatabaseMigration> {
    const iter = this.listMigrationsPagingAll(
      resourceGroupName,
      sqlMigrationServiceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listMigrationsPagingPage(
          resourceGroupName,
          sqlMigrationServiceName,
          options
        );
      }
    };
  }

  private async *listMigrationsPagingPage(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesListMigrationsOptionalParams
  ): AsyncIterableIterator<DatabaseMigration[]> {
    let result = await this._listMigrations(
      resourceGroupName,
      sqlMigrationServiceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listMigrationsNext(
        resourceGroupName,
        sqlMigrationServiceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listMigrationsPagingAll(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesListMigrationsOptionalParams
  ): AsyncIterableIterator<DatabaseMigration> {
    for await (const page of this.listMigrationsPagingPage(
      resourceGroupName,
      sqlMigrationServiceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve all SQL migration services in the subscriptions.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: SqlMigrationServicesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SqlMigrationService> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: SqlMigrationServicesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SqlMigrationService[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: SqlMigrationServicesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<SqlMigrationService> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieve the Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesGetOptionalParams
  ): Promise<SqlMigrationServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlMigrationServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Create or Update SQL Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: SqlMigrationService,
    options?: SqlMigrationServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlMigrationServicesCreateOrUpdateResponse>,
      SqlMigrationServicesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlMigrationServicesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, sqlMigrationServiceName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or Update SQL Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: SqlMigrationService,
    options?: SqlMigrationServicesCreateOrUpdateOptionalParams
  ): Promise<SqlMigrationServicesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      sqlMigrationServiceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete SQL Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, sqlMigrationServiceName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete SQL Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      sqlMigrationServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update SQL Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: SqlMigrationServiceUpdate,
    options?: SqlMigrationServicesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlMigrationServicesUpdateResponse>,
      SqlMigrationServicesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlMigrationServicesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, sqlMigrationServiceName, parameters, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update SQL Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: SqlMigrationServiceUpdate,
    options?: SqlMigrationServicesUpdateOptionalParams
  ): Promise<SqlMigrationServicesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      sqlMigrationServiceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieve all SQL migration services in the resource group.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: SqlMigrationServicesListByResourceGroupOptionalParams
  ): Promise<SqlMigrationServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Retrieve the List of Authentication Keys for Self Hosted Integration Runtime.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  listAuthKeys(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesListAuthKeysOptionalParams
  ): Promise<SqlMigrationServicesListAuthKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlMigrationServiceName, options },
      listAuthKeysOperationSpec
    );
  }

  /**
   * Regenerate a new set of Authentication Keys for Self Hosted Integration Runtime.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  regenerateAuthKeys(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: RegenAuthKeys,
    options?: SqlMigrationServicesRegenerateAuthKeysOptionalParams
  ): Promise<SqlMigrationServicesRegenerateAuthKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlMigrationServiceName, parameters, options },
      regenerateAuthKeysOperationSpec
    );
  }

  /**
   * Delete the integration runtime node.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  deleteNode(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: DeleteNode,
    options?: SqlMigrationServicesDeleteNodeOptionalParams
  ): Promise<SqlMigrationServicesDeleteNodeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlMigrationServiceName, parameters, options },
      deleteNodeOperationSpec
    );
  }

  /**
   * Retrieve the List of database migrations attached to the service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  private _listMigrations(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesListMigrationsOptionalParams
  ): Promise<SqlMigrationServicesListMigrationsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlMigrationServiceName, options },
      listMigrationsOperationSpec
    );
  }

  /**
   * Retrieve the Monitoring Data.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  listMonitoringData(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesListMonitoringDataOptionalParams
  ): Promise<SqlMigrationServicesListMonitoringDataResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlMigrationServiceName, options },
      listMonitoringDataOperationSpec
    );
  }

  /**
   * Retrieve all SQL migration services in the subscriptions.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: SqlMigrationServicesListBySubscriptionOptionalParams
  ): Promise<SqlMigrationServicesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: SqlMigrationServicesListByResourceGroupNextOptionalParams
  ): Promise<SqlMigrationServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListMigrationsNext
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param nextLink The nextLink from the previous successful call to the ListMigrations method.
   * @param options The options parameters.
   */
  private _listMigrationsNext(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    nextLink: string,
    options?: SqlMigrationServicesListMigrationsNextOptionalParams
  ): Promise<SqlMigrationServicesListMigrationsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlMigrationServiceName, nextLink, options },
      listMigrationsNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: SqlMigrationServicesListBySubscriptionNextOptionalParams
  ): Promise<SqlMigrationServicesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlMigrationService
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlMigrationServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SqlMigrationService
    },
    201: {
      bodyMapper: Mappers.SqlMigrationService
    },
    202: {
      bodyMapper: Mappers.SqlMigrationService
    },
    204: {
      bodyMapper: Mappers.SqlMigrationService
    },
    default: {}
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlMigrationServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlMigrationServiceName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SqlMigrationService
    },
    201: {
      bodyMapper: Mappers.SqlMigrationService
    },
    202: {
      bodyMapper: Mappers.SqlMigrationService
    },
    204: {
      bodyMapper: Mappers.SqlMigrationService
    },
    default: {}
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlMigrationServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlMigrationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAuthKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/listAuthKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AuthenticationKeys
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlMigrationServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateAuthKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/regenerateAuthKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RegenAuthKeys
    },
    default: {}
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlMigrationServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteNodeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/deleteNode",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeleteNode
    },
    default: {}
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlMigrationServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listMigrationsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/listMigrations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseMigrationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlMigrationServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMonitoringDataOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataMigration/sqlMigrationServices/{sqlMigrationServiceName}/listMonitoringData",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeMonitoringData
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlMigrationServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/sqlMigrationServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlMigrationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlMigrationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMigrationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseMigrationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.sqlMigrationServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlMigrationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
