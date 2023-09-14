/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WorkspaceManagedSqlServerSecurityAlertPolicy } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ServerSecurityAlertPolicy,
  WorkspaceManagedSqlServerSecurityAlertPolicyListNextOptionalParams,
  WorkspaceManagedSqlServerSecurityAlertPolicyListOptionalParams,
  SecurityAlertPolicyNameAutoGenerated,
  WorkspaceManagedSqlServerSecurityAlertPolicyGetOptionalParams,
  WorkspaceManagedSqlServerSecurityAlertPolicyGetResponse,
  WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateOptionalParams,
  WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateResponse,
  WorkspaceManagedSqlServerSecurityAlertPolicyListResponse,
  WorkspaceManagedSqlServerSecurityAlertPolicyListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceManagedSqlServerSecurityAlertPolicy operations. */
export class WorkspaceManagedSqlServerSecurityAlertPolicyImpl
  implements WorkspaceManagedSqlServerSecurityAlertPolicy {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceManagedSqlServerSecurityAlertPolicy class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get workspace managed sql server's threat detection policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerSecurityAlertPolicyListOptionalParams
  ): PagedAsyncIterableIterator<ServerSecurityAlertPolicy> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, workspaceName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerSecurityAlertPolicyListOptionalParams
  ): AsyncIterableIterator<ServerSecurityAlertPolicy[]> {
    let result = await this._list(resourceGroupName, workspaceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerSecurityAlertPolicyListOptionalParams
  ): AsyncIterableIterator<ServerSecurityAlertPolicy> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a workspace managed sql server's security alert policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    options?: WorkspaceManagedSqlServerSecurityAlertPolicyGetOptionalParams
  ): Promise<WorkspaceManagedSqlServerSecurityAlertPolicyGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, securityAlertPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Create or Update a workspace managed sql server's threat detection policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The workspace managed sql server security alert policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ServerSecurityAlertPolicy,
    options?: WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateResponse
      >,
      WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateResponse> => {
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
        workspaceName,
        securityAlertPolicyName,
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
   * Create or Update a workspace managed sql server's threat detection policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The workspace managed sql server security alert policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ServerSecurityAlertPolicy,
    options?: WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateOptionalParams
  ): Promise<
    WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateResponse
  > {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      securityAlertPolicyName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get workspace managed sql server's threat detection policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerSecurityAlertPolicyListOptionalParams
  ): Promise<WorkspaceManagedSqlServerSecurityAlertPolicyListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: WorkspaceManagedSqlServerSecurityAlertPolicyListNextOptionalParams
  ): Promise<WorkspaceManagedSqlServerSecurityAlertPolicyListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.securityAlertPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    201: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    202: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    204: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters19,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.securityAlertPolicyName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/securityAlertPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
