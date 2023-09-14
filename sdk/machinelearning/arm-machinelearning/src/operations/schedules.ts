/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Schedules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspaces } from "../azureMachineLearningWorkspaces";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Schedule,
  SchedulesListNextOptionalParams,
  SchedulesListOptionalParams,
  SchedulesListResponse,
  SchedulesDeleteOptionalParams,
  SchedulesGetOptionalParams,
  SchedulesGetResponse,
  SchedulesCreateOrUpdateOptionalParams,
  SchedulesCreateOrUpdateResponse,
  SchedulesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Schedules operations. */
export class SchedulesImpl implements Schedules {
  private readonly client: AzureMachineLearningWorkspaces;

  /**
   * Initialize a new instance of the class Schedules class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningWorkspaces) {
    this.client = client;
  }

  /**
   * List schedules in specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: SchedulesListOptionalParams
  ): PagedAsyncIterableIterator<Schedule> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
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
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: SchedulesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Schedule[]> {
    let result: SchedulesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, workspaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: SchedulesListOptionalParams
  ): AsyncIterableIterator<Schedule> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List schedules in specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: SchedulesListOptionalParams
  ): Promise<SchedulesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * Delete schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Schedule name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: SchedulesDeleteOptionalParams
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
      { resourceGroupName, workspaceName, name, options },
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
   * Delete schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Schedule name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: SchedulesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Schedule name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: SchedulesGetOptionalParams
  ): Promise<SchedulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or update schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Schedule name.
   * @param body Schedule definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: Schedule,
    options?: SchedulesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SchedulesCreateOrUpdateResponse>,
      SchedulesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SchedulesCreateOrUpdateResponse> => {
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
      { resourceGroupName, workspaceName, name, body, options },
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
   * Create or update schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Schedule name.
   * @param body Schedule definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: Schedule,
    options?: SchedulesCreateOrUpdateOptionalParams
  ): Promise<SchedulesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      name,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: SchedulesListNextOptionalParams
  ): Promise<SchedulesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/schedules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.listViewType1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/schedules/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/schedules/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/schedules/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    201: {
      bodyMapper: Mappers.Schedule
    },
    202: {
      bodyMapper: Mappers.Schedule
    },
    204: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body21,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.listViewType1
  ],
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
