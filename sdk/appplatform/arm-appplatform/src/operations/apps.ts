/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Apps } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AppResource,
  AppsListNextOptionalParams,
  AppsListOptionalParams,
  AppsGetOptionalParams,
  AppsGetResponse,
  AppsCreateOrUpdateOptionalParams,
  AppsCreateOrUpdateResponse,
  AppsDeleteOptionalParams,
  AppsUpdateOptionalParams,
  AppsUpdateResponse,
  AppsListResponse,
  AppsGetResourceUploadUrlOptionalParams,
  AppsGetResourceUploadUrlResponse,
  ActiveDeploymentCollection,
  AppsSetActiveDeploymentsOptionalParams,
  AppsSetActiveDeploymentsResponse,
  CustomDomainValidatePayload,
  AppsValidateDomainOptionalParams,
  AppsValidateDomainResponse,
  AppsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Apps operations. */
export class AppsImpl implements Apps {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class Apps class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Handles requests to list all resources in a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    options?: AppsListOptionalParams
  ): PagedAsyncIterableIterator<AppResource> {
    const iter = this.listPagingAll(resourceGroupName, serviceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, serviceName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: AppsListOptionalParams
  ): AsyncIterableIterator<AppResource[]> {
    let result = await this._list(resourceGroupName, serviceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: AppsListOptionalParams
  ): AsyncIterableIterator<AppResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get an App and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    options?: AppsGetOptionalParams
  ): Promise<AppsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, appName, options },
      getOperationSpec
    );
  }

  /**
   * Create a new App or update an exiting App.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param appResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    appResource: AppResource,
    options?: AppsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AppsCreateOrUpdateResponse>,
      AppsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AppsCreateOrUpdateResponse> => {
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
      { resourceGroupName, serviceName, appName, appResource, options },
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
   * Create a new App or update an exiting App.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param appResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    appResource: AppResource,
    options?: AppsCreateOrUpdateOptionalParams
  ): Promise<AppsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      appName,
      appResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to delete an App.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    options?: AppsDeleteOptionalParams
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
      { resourceGroupName, serviceName, appName, options },
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
   * Operation to delete an App.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    options?: AppsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serviceName,
      appName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Operation to update an exiting App.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param appResource Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    appResource: AppResource,
    options?: AppsUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<AppsUpdateResponse>, AppsUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AppsUpdateResponse> => {
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
      { resourceGroupName, serviceName, appName, appResource, options },
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
   * Operation to update an exiting App.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param appResource Parameters for the update operation
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    appResource: AppResource,
    options?: AppsUpdateOptionalParams
  ): Promise<AppsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      serviceName,
      appName,
      appResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Handles requests to list all resources in a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    options?: AppsListOptionalParams
  ): Promise<AppsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listOperationSpec
    );
  }

  /**
   * Get an resource upload URL for an App, which may be artifacts or source archive.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param options The options parameters.
   */
  getResourceUploadUrl(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    options?: AppsGetResourceUploadUrlOptionalParams
  ): Promise<AppsGetResourceUploadUrlResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, appName, options },
      getResourceUploadUrlOperationSpec
    );
  }

  /**
   * Set existing Deployment under the app as active
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param activeDeploymentCollection A list of Deployment name to be active.
   * @param options The options parameters.
   */
  async beginSetActiveDeployments(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    activeDeploymentCollection: ActiveDeploymentCollection,
    options?: AppsSetActiveDeploymentsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AppsSetActiveDeploymentsResponse>,
      AppsSetActiveDeploymentsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AppsSetActiveDeploymentsResponse> => {
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
        serviceName,
        appName,
        activeDeploymentCollection,
        options
      },
      setActiveDeploymentsOperationSpec
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
   * Set existing Deployment under the app as active
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param activeDeploymentCollection A list of Deployment name to be active.
   * @param options The options parameters.
   */
  async beginSetActiveDeploymentsAndWait(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    activeDeploymentCollection: ActiveDeploymentCollection,
    options?: AppsSetActiveDeploymentsOptionalParams
  ): Promise<AppsSetActiveDeploymentsResponse> {
    const poller = await this.beginSetActiveDeployments(
      resourceGroupName,
      serviceName,
      appName,
      activeDeploymentCollection,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Check the resource name is valid as well as not in use.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param appName The name of the App resource.
   * @param validatePayload Custom domain payload to be validated
   * @param options The options parameters.
   */
  validateDomain(
    resourceGroupName: string,
    serviceName: string,
    appName: string,
    validatePayload: CustomDomainValidatePayload,
    options?: AppsValidateDomainOptionalParams
  ): Promise<AppsValidateDomainResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, appName, validatePayload, options },
      validateDomainOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: AppsListNextOptionalParams
  ): Promise<AppsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.syncStatus],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AppResource
    },
    201: {
      bodyMapper: Mappers.AppResource
    },
    202: {
      bodyMapper: Mappers.AppResource
    },
    204: {
      bodyMapper: Mappers.AppResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.appResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
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
    Parameters.serviceName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AppResource
    },
    201: {
      bodyMapper: Mappers.AppResource
    },
    202: {
      bodyMapper: Mappers.AppResource
    },
    204: {
      bodyMapper: Mappers.AppResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.appResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppResourceCollection
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
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getResourceUploadUrlOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/getResourceUploadUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceUploadDefinition
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
    Parameters.serviceName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const setActiveDeploymentsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/setActiveDeployments",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AppResource
    },
    201: {
      bodyMapper: Mappers.AppResource
    },
    202: {
      bodyMapper: Mappers.AppResource
    },
    204: {
      bodyMapper: Mappers.AppResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.activeDeploymentCollection,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const validateDomainOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/validateDomain",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainValidateResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.validatePayload,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.appName
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
      bodyMapper: Mappers.AppResourceCollection
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
    Parameters.serviceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
