/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DevBoxDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevCenterClient } from "../devCenterClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DevBoxDefinition,
  DevBoxDefinitionsListByDevCenterNextOptionalParams,
  DevBoxDefinitionsListByDevCenterOptionalParams,
  DevBoxDefinitionsListByDevCenterResponse,
  DevBoxDefinitionsListByProjectNextOptionalParams,
  DevBoxDefinitionsListByProjectOptionalParams,
  DevBoxDefinitionsListByProjectResponse,
  DevBoxDefinitionsGetOptionalParams,
  DevBoxDefinitionsGetResponse,
  DevBoxDefinitionsCreateOrUpdateOptionalParams,
  DevBoxDefinitionsCreateOrUpdateResponse,
  DevBoxDefinitionUpdate,
  DevBoxDefinitionsUpdateOptionalParams,
  DevBoxDefinitionsUpdateResponse,
  DevBoxDefinitionsDeleteOptionalParams,
  DevBoxDefinitionsGetByProjectOptionalParams,
  DevBoxDefinitionsGetByProjectResponse,
  DevBoxDefinitionsListByDevCenterNextResponse,
  DevBoxDefinitionsListByProjectNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DevBoxDefinitions operations. */
export class DevBoxDefinitionsImpl implements DevBoxDefinitions {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class DevBoxDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * List Dev Box definitions for a devcenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  public listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: DevBoxDefinitionsListByDevCenterOptionalParams
  ): PagedAsyncIterableIterator<DevBoxDefinition> {
    const iter = this.listByDevCenterPagingAll(
      resourceGroupName,
      devCenterName,
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
        return this.listByDevCenterPagingPage(
          resourceGroupName,
          devCenterName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDevCenterPagingPage(
    resourceGroupName: string,
    devCenterName: string,
    options?: DevBoxDefinitionsListByDevCenterOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DevBoxDefinition[]> {
    let result: DevBoxDefinitionsListByDevCenterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDevCenter(
        resourceGroupName,
        devCenterName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDevCenterNext(
        resourceGroupName,
        devCenterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDevCenterPagingAll(
    resourceGroupName: string,
    devCenterName: string,
    options?: DevBoxDefinitionsListByDevCenterOptionalParams
  ): AsyncIterableIterator<DevBoxDefinition> {
    for await (const page of this.listByDevCenterPagingPage(
      resourceGroupName,
      devCenterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List Dev Box definitions configured for a project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  public listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: DevBoxDefinitionsListByProjectOptionalParams
  ): PagedAsyncIterableIterator<DevBoxDefinition> {
    const iter = this.listByProjectPagingAll(
      resourceGroupName,
      projectName,
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
        return this.listByProjectPagingPage(
          resourceGroupName,
          projectName,
          options,
          settings
        );
      }
    };
  }

  private async *listByProjectPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: DevBoxDefinitionsListByProjectOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DevBoxDefinition[]> {
    let result: DevBoxDefinitionsListByProjectResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProject(
        resourceGroupName,
        projectName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProjectNext(
        resourceGroupName,
        projectName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProjectPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: DevBoxDefinitionsListByProjectOptionalParams
  ): AsyncIterableIterator<DevBoxDefinition> {
    for await (const page of this.listByProjectPagingPage(
      resourceGroupName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List Dev Box definitions for a devcenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  private _listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: DevBoxDefinitionsListByDevCenterOptionalParams
  ): Promise<DevBoxDefinitionsListByDevCenterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, options },
      listByDevCenterOperationSpec
    );
  }

  /**
   * Gets a Dev Box definition
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    options?: DevBoxDefinitionsGetOptionalParams
  ): Promise<DevBoxDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, devBoxDefinitionName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a Dev Box definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param body Represents a Dev Box definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    body: DevBoxDefinition,
    options?: DevBoxDefinitionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DevBoxDefinitionsCreateOrUpdateResponse>,
      DevBoxDefinitionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DevBoxDefinitionsCreateOrUpdateResponse> => {
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
      { resourceGroupName, devCenterName, devBoxDefinitionName, body, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a Dev Box definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param body Represents a Dev Box definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    body: DevBoxDefinition,
    options?: DevBoxDefinitionsCreateOrUpdateOptionalParams
  ): Promise<DevBoxDefinitionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      devCenterName,
      devBoxDefinitionName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Partially updates a Dev Box definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param body Represents a Dev Box definition.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    body: DevBoxDefinitionUpdate,
    options?: DevBoxDefinitionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DevBoxDefinitionsUpdateResponse>,
      DevBoxDefinitionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DevBoxDefinitionsUpdateResponse> => {
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
      { resourceGroupName, devCenterName, devBoxDefinitionName, body, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Partially updates a Dev Box definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param body Represents a Dev Box definition.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    body: DevBoxDefinitionUpdate,
    options?: DevBoxDefinitionsUpdateOptionalParams
  ): Promise<DevBoxDefinitionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      devCenterName,
      devBoxDefinitionName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a Dev Box definition
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    options?: DevBoxDefinitionsDeleteOptionalParams
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
      { resourceGroupName, devCenterName, devBoxDefinitionName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a Dev Box definition
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    options?: DevBoxDefinitionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      devCenterName,
      devBoxDefinitionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List Dev Box definitions configured for a project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  private _listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: DevBoxDefinitionsListByProjectOptionalParams
  ): Promise<DevBoxDefinitionsListByProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listByProjectOperationSpec
    );
  }

  /**
   * Gets a Dev Box definition configured for a project
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  getByProject(
    resourceGroupName: string,
    projectName: string,
    devBoxDefinitionName: string,
    options?: DevBoxDefinitionsGetByProjectOptionalParams
  ): Promise<DevBoxDefinitionsGetByProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, devBoxDefinitionName, options },
      getByProjectOperationSpec
    );
  }

  /**
   * ListByDevCenterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param nextLink The nextLink from the previous successful call to the ListByDevCenter method.
   * @param options The options parameters.
   */
  private _listByDevCenterNext(
    resourceGroupName: string,
    devCenterName: string,
    nextLink: string,
    options?: DevBoxDefinitionsListByDevCenterNextOptionalParams
  ): Promise<DevBoxDefinitionsListByDevCenterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, nextLink, options },
      listByDevCenterNextOperationSpec
    );
  }

  /**
   * ListByProjectNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param nextLink The nextLink from the previous successful call to the ListByProject method.
   * @param options The options parameters.
   */
  private _listByProjectNext(
    resourceGroupName: string,
    projectName: string,
    nextLink: string,
    options?: DevBoxDefinitionsListByProjectNextOptionalParams
  ): Promise<DevBoxDefinitionsListByProjectNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, nextLink, options },
      listByProjectNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDevCenterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevBoxDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.devBoxDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    201: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    202: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    204: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.devBoxDefinitionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    201: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    202: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    204: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.devBoxDefinitionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/devboxdefinitions/{devBoxDefinitionName}",
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
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.devBoxDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProjectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/devboxdefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevBoxDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByProjectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/devboxdefinitions/{devBoxDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevBoxDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.devBoxDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDevCenterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevBoxDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByProjectNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevBoxDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
