/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ProximityPlacementGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  ProximityPlacementGroup,
  ProximityPlacementGroupsListBySubscriptionNextOptionalParams,
  ProximityPlacementGroupsListBySubscriptionOptionalParams,
  ProximityPlacementGroupsListBySubscriptionResponse,
  ProximityPlacementGroupsListByResourceGroupNextOptionalParams,
  ProximityPlacementGroupsListByResourceGroupOptionalParams,
  ProximityPlacementGroupsListByResourceGroupResponse,
  ProximityPlacementGroupsCreateOrUpdateOptionalParams,
  ProximityPlacementGroupsCreateOrUpdateResponse,
  ProximityPlacementGroupUpdate,
  ProximityPlacementGroupsUpdateOptionalParams,
  ProximityPlacementGroupsUpdateResponse,
  ProximityPlacementGroupsDeleteOptionalParams,
  ProximityPlacementGroupsGetOptionalParams,
  ProximityPlacementGroupsGetResponse,
  ProximityPlacementGroupsListBySubscriptionNextResponse,
  ProximityPlacementGroupsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProximityPlacementGroups operations. */
export class ProximityPlacementGroupsImpl implements ProximityPlacementGroups {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class ProximityPlacementGroups class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all proximity placement groups in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ProximityPlacementGroupsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ProximityPlacementGroup> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ProximityPlacementGroupsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProximityPlacementGroup[]> {
    let result: ProximityPlacementGroupsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: ProximityPlacementGroupsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ProximityPlacementGroup> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all proximity placement groups in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ProximityPlacementGroupsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ProximityPlacementGroup> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ProximityPlacementGroupsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProximityPlacementGroup[]> {
    let result: ProximityPlacementGroupsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ProximityPlacementGroupsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ProximityPlacementGroup> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create or update a proximity placement group.
   * @param resourceGroupName The name of the resource group.
   * @param proximityPlacementGroupName The name of the proximity placement group.
   * @param parameters Parameters supplied to the Create Proximity Placement Group operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    proximityPlacementGroupName: string,
    parameters: ProximityPlacementGroup,
    options?: ProximityPlacementGroupsCreateOrUpdateOptionalParams
  ): Promise<ProximityPlacementGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, proximityPlacementGroupName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update a proximity placement group.
   * @param resourceGroupName The name of the resource group.
   * @param proximityPlacementGroupName The name of the proximity placement group.
   * @param parameters Parameters supplied to the Update Proximity Placement Group operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    proximityPlacementGroupName: string,
    parameters: ProximityPlacementGroupUpdate,
    options?: ProximityPlacementGroupsUpdateOptionalParams
  ): Promise<ProximityPlacementGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, proximityPlacementGroupName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Delete a proximity placement group.
   * @param resourceGroupName The name of the resource group.
   * @param proximityPlacementGroupName The name of the proximity placement group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    proximityPlacementGroupName: string,
    options?: ProximityPlacementGroupsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, proximityPlacementGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves information about a proximity placement group .
   * @param resourceGroupName The name of the resource group.
   * @param proximityPlacementGroupName The name of the proximity placement group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    proximityPlacementGroupName: string,
    options?: ProximityPlacementGroupsGetOptionalParams
  ): Promise<ProximityPlacementGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, proximityPlacementGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Lists all proximity placement groups in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ProximityPlacementGroupsListBySubscriptionOptionalParams
  ): Promise<ProximityPlacementGroupsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Lists all proximity placement groups in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ProximityPlacementGroupsListByResourceGroupOptionalParams
  ): Promise<ProximityPlacementGroupsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ProximityPlacementGroupsListBySubscriptionNextOptionalParams
  ): Promise<ProximityPlacementGroupsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ProximityPlacementGroupsListByResourceGroupNextOptionalParams
  ): Promise<ProximityPlacementGroupsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProximityPlacementGroup
    },
    201: {
      bodyMapper: Mappers.ProximityPlacementGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.proximityPlacementGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ProximityPlacementGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.proximityPlacementGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.proximityPlacementGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups/{proximityPlacementGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProximityPlacementGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.includeColocationStatus],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.proximityPlacementGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/proximityPlacementGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProximityPlacementGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/proximityPlacementGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProximityPlacementGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProximityPlacementGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProximityPlacementGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
