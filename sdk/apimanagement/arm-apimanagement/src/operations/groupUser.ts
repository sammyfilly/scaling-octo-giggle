/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GroupUser } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  UserContract,
  GroupUserListNextOptionalParams,
  GroupUserListOptionalParams,
  GroupUserListResponse,
  GroupUserCheckEntityExistsOptionalParams,
  GroupUserCheckEntityExistsResponse,
  GroupUserCreateOptionalParams,
  GroupUserCreateResponse,
  GroupUserDeleteOptionalParams,
  GroupUserListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GroupUser operations. */
export class GroupUserImpl implements GroupUser {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class GroupUser class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of user entities associated with the group.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    groupId: string,
    options?: GroupUserListOptionalParams
  ): PagedAsyncIterableIterator<UserContract> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      groupId,
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
        return this.listPagingPage(
          resourceGroupName,
          serviceName,
          groupId,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    groupId: string,
    options?: GroupUserListOptionalParams
  ): AsyncIterableIterator<UserContract[]> {
    let result = await this._list(
      resourceGroupName,
      serviceName,
      groupId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        groupId,
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
    groupId: string,
    options?: GroupUserListOptionalParams
  ): AsyncIterableIterator<UserContract> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      groupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of user entities associated with the group.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    groupId: string,
    options?: GroupUserListOptionalParams
  ): Promise<GroupUserListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, groupId, options },
      listOperationSpec
    );
  }

  /**
   * Checks that user entity specified by identifier is associated with the group entity.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  checkEntityExists(
    resourceGroupName: string,
    serviceName: string,
    groupId: string,
    userId: string,
    options?: GroupUserCheckEntityExistsOptionalParams
  ): Promise<GroupUserCheckEntityExistsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, groupId, userId, options },
      checkEntityExistsOperationSpec
    );
  }

  /**
   * Add existing user to existing group
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    serviceName: string,
    groupId: string,
    userId: string,
    options?: GroupUserCreateOptionalParams
  ): Promise<GroupUserCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, groupId, userId, options },
      createOperationSpec
    );
  }

  /**
   * Remove existing user from existing group.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    groupId: string,
    userId: string,
    options?: GroupUserDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, groupId, userId, options },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    groupId: string,
    nextLink: string,
    options?: GroupUserListNextOptionalParams
  ): Promise<GroupUserListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, groupId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/groups/{groupId}/users",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkEntityExistsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/groups/{groupId}/users/{userId}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.groupId,
    Parameters.userId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/groups/{groupId}/users/{userId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.UserContract
    },
    201: {
      bodyMapper: Mappers.UserContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.groupId,
    Parameters.userId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/groups/{groupId}/users/{userId}",
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
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.groupId,
    Parameters.userId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
