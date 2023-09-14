/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Assets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServices } from "../azureMediaServices";
import {
  Asset,
  AssetsListNextOptionalParams,
  AssetsListOptionalParams,
  AssetsListResponse,
  AssetsGetOptionalParams,
  AssetsGetResponse,
  AssetsCreateOrUpdateOptionalParams,
  AssetsCreateOrUpdateResponse,
  AssetsDeleteOptionalParams,
  AssetsUpdateOptionalParams,
  AssetsUpdateResponse,
  ListContainerSasInput,
  AssetsListContainerSasOptionalParams,
  AssetsListContainerSasResponse,
  AssetsGetEncryptionKeyOptionalParams,
  AssetsGetEncryptionKeyResponse,
  AssetsListStreamingLocatorsOptionalParams,
  AssetsListStreamingLocatorsResponse,
  AssetsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Assets operations. */
export class AssetsImpl implements Assets {
  private readonly client: AzureMediaServices;

  /**
   * Initialize a new instance of the class Assets class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMediaServices) {
    this.client = client;
  }

  /**
   * List Assets in the Media Services account with optional filtering and ordering
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: AssetsListOptionalParams
  ): PagedAsyncIterableIterator<Asset> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
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
          accountName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: AssetsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Asset[]> {
    let result: AssetsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, accountName, options);
      let page = result.value || [];
      continuationToken = result.odataNextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.odataNextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: AssetsListOptionalParams
  ): AsyncIterableIterator<Asset> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List Assets in the Media Services account with optional filtering and ordering
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: AssetsListOptionalParams
  ): Promise<AssetsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Get the details of an Asset in the Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    options?: AssetsGetOptionalParams
  ): Promise<AssetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, assetName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an Asset in the Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    parameters: Asset,
    options?: AssetsCreateOrUpdateOptionalParams
  ): Promise<AssetsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, assetName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes an Asset in the Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    options?: AssetsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, assetName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates an existing Asset in the Media Services account
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    parameters: Asset,
    options?: AssetsUpdateOptionalParams
  ): Promise<AssetsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, assetName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Lists storage container URLs with shared access signatures (SAS) for uploading and downloading Asset
   * content. The signatures are derived from the storage account keys.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  listContainerSas(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    parameters: ListContainerSasInput,
    options?: AssetsListContainerSasOptionalParams
  ): Promise<AssetsListContainerSasResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, assetName, parameters, options },
      listContainerSasOperationSpec
    );
  }

  /**
   * Gets the Asset storage encryption keys used to decrypt content created by version 2 of the Media
   * Services API
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param options The options parameters.
   */
  getEncryptionKey(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    options?: AssetsGetEncryptionKeyOptionalParams
  ): Promise<AssetsGetEncryptionKeyResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, assetName, options },
      getEncryptionKeyOperationSpec
    );
  }

  /**
   * Lists Streaming Locators which are associated with this asset.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param options The options parameters.
   */
  listStreamingLocators(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    options?: AssetsListStreamingLocatorsOptionalParams
  ): Promise<AssetsListStreamingLocatorsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, assetName, options },
      listStreamingLocatorsOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: AssetsListNextOptionalParams
  ): Promise<AssetsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssetCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Asset
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
    Parameters.assetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Asset
    },
    201: {
      bodyMapper: Mappers.Asset
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.assetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Asset
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listContainerSasOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/listContainerSas",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AssetContainerSas
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getEncryptionKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/getEncryptionKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.StorageEncryptedAssetDecryptionData
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
    Parameters.assetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listStreamingLocatorsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/listStreamingLocators",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ListStreamingLocatorsResponse
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
    Parameters.assetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssetCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
