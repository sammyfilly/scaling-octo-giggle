/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { DatabasePrincipalAssignments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { KustoManagementClient } from "../kustoManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DatabasePrincipalAssignment,
  DatabasePrincipalAssignmentsListOptionalParams,
  DatabasePrincipalAssignmentsListResponse,
  DatabasePrincipalAssignmentCheckNameRequest,
  DatabasePrincipalAssignmentsCheckNameAvailabilityOptionalParams,
  DatabasePrincipalAssignmentsCheckNameAvailabilityResponse,
  DatabasePrincipalAssignmentsGetOptionalParams,
  DatabasePrincipalAssignmentsGetResponse,
  DatabasePrincipalAssignmentsCreateOrUpdateOptionalParams,
  DatabasePrincipalAssignmentsCreateOrUpdateResponse,
  DatabasePrincipalAssignmentsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DatabasePrincipalAssignments operations. */
export class DatabasePrincipalAssignmentsImpl
  implements DatabasePrincipalAssignments {
  private readonly client: KustoManagementClient;

  /**
   * Initialize a new instance of the class DatabasePrincipalAssignments class.
   * @param client Reference to the service client
   */
  constructor(client: KustoManagementClient) {
    this.client = client;
  }

  /**
   * Lists all Kusto cluster database principalAssignments.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasePrincipalAssignmentsListOptionalParams
  ): PagedAsyncIterableIterator<DatabasePrincipalAssignment> {
    const iter = this.listPagingAll(
      resourceGroupName,
      clusterName,
      databaseName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          clusterName,
          databaseName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasePrincipalAssignmentsListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<DatabasePrincipalAssignment[]> {
    let result: DatabasePrincipalAssignmentsListResponse;
    result = await this._list(
      resourceGroupName,
      clusterName,
      databaseName,
      options
    );
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasePrincipalAssignmentsListOptionalParams
  ): AsyncIterableIterator<DatabasePrincipalAssignment> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      clusterName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Checks that the database principal assignment is valid and is not already in use.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param principalAssignmentName The name of the resource.
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    principalAssignmentName: DatabasePrincipalAssignmentCheckNameRequest,
    options?: DatabasePrincipalAssignmentsCheckNameAvailabilityOptionalParams
  ): Promise<DatabasePrincipalAssignmentsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        principalAssignmentName,
        options
      },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Gets a Kusto cluster database principalAssignment.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    principalAssignmentName: string,
    options?: DatabasePrincipalAssignmentsGetOptionalParams
  ): Promise<DatabasePrincipalAssignmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        databaseName,
        principalAssignmentName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates a Kusto cluster database principalAssignment.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param parameters The Kusto principalAssignments parameters supplied for the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    principalAssignmentName: string,
    parameters: DatabasePrincipalAssignment,
    options?: DatabasePrincipalAssignmentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DatabasePrincipalAssignmentsCreateOrUpdateResponse>,
      DatabasePrincipalAssignmentsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DatabasePrincipalAssignmentsCreateOrUpdateResponse> => {
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
      {
        resourceGroupName,
        clusterName,
        databaseName,
        principalAssignmentName,
        parameters,
        options
      },
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
   * Creates a Kusto cluster database principalAssignment.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param parameters The Kusto principalAssignments parameters supplied for the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    principalAssignmentName: string,
    parameters: DatabasePrincipalAssignment,
    options?: DatabasePrincipalAssignmentsCreateOrUpdateOptionalParams
  ): Promise<DatabasePrincipalAssignmentsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      clusterName,
      databaseName,
      principalAssignmentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    principalAssignmentName: string,
    options?: DatabasePrincipalAssignmentsDeleteOptionalParams
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
      {
        resourceGroupName,
        clusterName,
        databaseName,
        principalAssignmentName,
        options
      },
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
   * Deletes a Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    principalAssignmentName: string,
    options?: DatabasePrincipalAssignmentsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      databaseName,
      principalAssignmentName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all Kusto cluster database principalAssignments.
   * @param resourceGroupName The name of the resource group containing the Kusto cluster.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasePrincipalAssignmentsListOptionalParams
  ): Promise<DatabasePrincipalAssignmentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, databaseName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/checkPrincipalAssignmentNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.principalAssignmentName2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabasePrincipalAssignment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.principalAssignmentName1,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DatabasePrincipalAssignment
    },
    201: {
      bodyMapper: Mappers.DatabasePrincipalAssignment
    },
    202: {
      bodyMapper: Mappers.DatabasePrincipalAssignment
    },
    204: {
      bodyMapper: Mappers.DatabasePrincipalAssignment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.principalAssignmentName1,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments/{principalAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.principalAssignmentName1,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/principalAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabasePrincipalAssignmentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
