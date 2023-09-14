/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { PrivateEndpointConnectionProxies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeviceUpdate } from "../deviceUpdate";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PrivateEndpointConnectionProxy,
  PrivateEndpointConnectionProxiesListByAccountOptionalParams,
  PrivateEndpointConnectionProxiesListByAccountResponse,
  PrivateEndpointConnectionProxiesValidateOptionalParams,
  PrivateEndpointUpdate,
  PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesOptionalParams,
  PrivateEndpointConnectionProxiesGetOptionalParams,
  PrivateEndpointConnectionProxiesGetResponse,
  PrivateEndpointConnectionProxiesCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionProxiesCreateOrUpdateResponse,
  PrivateEndpointConnectionProxiesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpointConnectionProxies operations. */
export class PrivateEndpointConnectionProxiesImpl
  implements PrivateEndpointConnectionProxies {
  private readonly client: DeviceUpdate;

  /**
   * Initialize a new instance of the class PrivateEndpointConnectionProxies class.
   * @param client Reference to the service client
   */
  constructor(client: DeviceUpdate) {
    this.client = client;
  }

  /**
   * (INTERNAL - DO NOT USE) List all private endpoint connection proxies in a device update account.
   * @param resourceGroupName The resource group name.
   * @param accountName Account name.
   * @param options The options parameters.
   */
  public listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateEndpointConnectionProxiesListByAccountOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnectionProxy> {
    const iter = this.listByAccountPagingAll(
      resourceGroupName,
      accountName,
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
        return this.listByAccountPagingPage(
          resourceGroupName,
          accountName,
          options,
          settings
        );
      }
    };
  }

  private async *listByAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateEndpointConnectionProxiesListByAccountOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<PrivateEndpointConnectionProxy[]> {
    let result: PrivateEndpointConnectionProxiesListByAccountResponse;
    result = await this._listByAccount(resourceGroupName, accountName, options);
    yield result.value || [];
  }

  private async *listByAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateEndpointConnectionProxiesListByAccountOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnectionProxy> {
    for await (const page of this.listByAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * (INTERNAL - DO NOT USE) List all private endpoint connection proxies in a device update account.
   * @param resourceGroupName The resource group name.
   * @param accountName Account name.
   * @param options The options parameters.
   */
  private _listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateEndpointConnectionProxiesListByAccountOptionalParams
  ): Promise<PrivateEndpointConnectionProxiesListByAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByAccountOperationSpec
    );
  }

  /**
   * (INTERNAL - DO NOT USE) Validates a private endpoint connection proxy object.
   * @param resourceGroupName The resource group name.
   * @param accountName Account name.
   * @param privateEndpointConnectionProxyId The ID of the private endpoint connection proxy object.
   * @param privateEndpointConnectionProxy The parameters for creating a private endpoint connection
   *                                       proxy.
   * @param options The options parameters.
   */
  validate(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionProxyId: string,
    privateEndpointConnectionProxy: PrivateEndpointConnectionProxy,
    options?: PrivateEndpointConnectionProxiesValidateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        privateEndpointConnectionProxyId,
        privateEndpointConnectionProxy,
        options
      },
      validateOperationSpec
    );
  }

  /**
   * (INTERNAL - DO NOT USE) Updates a private endpoint inside the private endpoint connection proxy
   * object.
   * @param resourceGroupName The resource group name.
   * @param accountName Account name.
   * @param privateEndpointConnectionProxyId The ID of the private endpoint connection proxy object.
   * @param privateEndpointUpdate The parameters for updating a private endpoint connection proxy.
   * @param options The options parameters.
   */
  updatePrivateEndpointProperties(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionProxyId: string,
    privateEndpointUpdate: PrivateEndpointUpdate,
    options?: PrivateEndpointConnectionProxiesUpdatePrivateEndpointPropertiesOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        privateEndpointConnectionProxyId,
        privateEndpointUpdate,
        options
      },
      updatePrivateEndpointPropertiesOperationSpec
    );
  }

  /**
   * (INTERNAL - DO NOT USE) Get the specified private endpoint connection proxy associated with the
   * device update account.
   * @param resourceGroupName The resource group name.
   * @param accountName Account name.
   * @param privateEndpointConnectionProxyId The ID of the private endpoint connection proxy object.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionProxyId: string,
    options?: PrivateEndpointConnectionProxiesGetOptionalParams
  ): Promise<PrivateEndpointConnectionProxiesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        privateEndpointConnectionProxyId,
        options
      },
      getOperationSpec
    );
  }

  /**
   * (INTERNAL - DO NOT USE) Creates or updates the specified private endpoint connection proxy resource
   * associated with the device update account.
   * @param resourceGroupName The resource group name.
   * @param accountName Account name.
   * @param privateEndpointConnectionProxyId The ID of the private endpoint connection proxy object.
   * @param privateEndpointConnectionProxy The parameters for creating a private endpoint connection
   *                                       proxy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionProxyId: string,
    privateEndpointConnectionProxy: PrivateEndpointConnectionProxy,
    options?: PrivateEndpointConnectionProxiesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        PrivateEndpointConnectionProxiesCreateOrUpdateResponse
      >,
      PrivateEndpointConnectionProxiesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateEndpointConnectionProxiesCreateOrUpdateResponse> => {
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
        accountName,
        privateEndpointConnectionProxyId,
        privateEndpointConnectionProxy,
        options
      },
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
   * (INTERNAL - DO NOT USE) Creates or updates the specified private endpoint connection proxy resource
   * associated with the device update account.
   * @param resourceGroupName The resource group name.
   * @param accountName Account name.
   * @param privateEndpointConnectionProxyId The ID of the private endpoint connection proxy object.
   * @param privateEndpointConnectionProxy The parameters for creating a private endpoint connection
   *                                       proxy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionProxyId: string,
    privateEndpointConnectionProxy: PrivateEndpointConnectionProxy,
    options?: PrivateEndpointConnectionProxiesCreateOrUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionProxiesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      accountName,
      privateEndpointConnectionProxyId,
      privateEndpointConnectionProxy,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * (INTERNAL - DO NOT USE) Deletes the specified private endpoint connection proxy associated with the
   * device update account.
   * @param resourceGroupName The resource group name.
   * @param accountName Account name.
   * @param privateEndpointConnectionProxyId The ID of the private endpoint connection proxy object.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionProxyId: string,
    options?: PrivateEndpointConnectionProxiesDeleteOptionalParams
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
        accountName,
        privateEndpointConnectionProxyId,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * (INTERNAL - DO NOT USE) Deletes the specified private endpoint connection proxy associated with the
   * device update account.
   * @param resourceGroupName The resource group name.
   * @param accountName Account name.
   * @param privateEndpointConnectionProxyId The ID of the private endpoint connection proxy object.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionProxyId: string,
    options?: PrivateEndpointConnectionProxiesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      privateEndpointConnectionProxyId,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionProxyListResult
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
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}/validate",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.privateEndpointConnectionProxy,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.privateEndpointConnectionProxyId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updatePrivateEndpointPropertiesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}/updatePrivateEndpointProperties",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.privateEndpointUpdate,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.privateEndpointConnectionProxyId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionProxy
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
    Parameters.accountName,
    Parameters.privateEndpointConnectionProxyId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionProxy
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnectionProxy
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnectionProxy
    },
    204: {
      bodyMapper: Mappers.PrivateEndpointConnectionProxy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.privateEndpointConnectionProxy,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.privateEndpointConnectionProxyId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DeviceUpdate/accounts/{accountName}/privateEndpointConnectionProxies/{privateEndpointConnectionProxyId}",
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
    Parameters.accountName,
    Parameters.privateEndpointConnectionProxyId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
