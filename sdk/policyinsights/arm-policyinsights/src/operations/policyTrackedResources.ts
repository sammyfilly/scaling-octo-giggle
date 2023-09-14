/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PolicyTrackedResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PolicyInsightsClient } from "../policyInsightsClient";
import {
  PolicyTrackedResource,
  PolicyTrackedResourcesResourceType,
  PolicyTrackedResourcesListQueryResultsForManagementGroupNextOptionalParams,
  PolicyTrackedResourcesListQueryResultsForManagementGroupOptionalParams,
  PolicyTrackedResourcesListQueryResultsForSubscriptionNextOptionalParams,
  PolicyTrackedResourcesListQueryResultsForSubscriptionOptionalParams,
  PolicyTrackedResourcesListQueryResultsForResourceGroupNextOptionalParams,
  PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams,
  PolicyTrackedResourcesListQueryResultsForResourceNextOptionalParams,
  PolicyTrackedResourcesListQueryResultsForResourceOptionalParams,
  PolicyTrackedResourcesListQueryResultsForManagementGroupResponse,
  PolicyTrackedResourcesListQueryResultsForSubscriptionResponse,
  PolicyTrackedResourcesListQueryResultsForResourceGroupResponse,
  PolicyTrackedResourcesListQueryResultsForResourceResponse,
  PolicyTrackedResourcesListQueryResultsForManagementGroupNextResponse,
  PolicyTrackedResourcesListQueryResultsForSubscriptionNextResponse,
  PolicyTrackedResourcesListQueryResultsForResourceGroupNextResponse,
  PolicyTrackedResourcesListQueryResultsForResourceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PolicyTrackedResources operations. */
export class PolicyTrackedResourcesImpl implements PolicyTrackedResources {
  private readonly client: PolicyInsightsClient;

  /**
   * Initialize a new instance of the class PolicyTrackedResources class.
   * @param client Reference to the service client
   */
  constructor(client: PolicyInsightsClient) {
    this.client = client;
  }

  /**
   * Queries policy tracked resources under the management group.
   * @param managementGroupName Management group name.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param options The options parameters.
   */
  public listQueryResultsForManagementGroup(
    managementGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForManagementGroupOptionalParams
  ): PagedAsyncIterableIterator<PolicyTrackedResource> {
    const iter = this.listQueryResultsForManagementGroupPagingAll(
      managementGroupName,
      policyTrackedResourcesResource,
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
        return this.listQueryResultsForManagementGroupPagingPage(
          managementGroupName,
          policyTrackedResourcesResource,
          options
        );
      }
    };
  }

  private async *listQueryResultsForManagementGroupPagingPage(
    managementGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForManagementGroupOptionalParams
  ): AsyncIterableIterator<PolicyTrackedResource[]> {
    let result = await this._listQueryResultsForManagementGroup(
      managementGroupName,
      policyTrackedResourcesResource,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listQueryResultsForManagementGroupNext(
        managementGroupName,
        policyTrackedResourcesResource,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listQueryResultsForManagementGroupPagingAll(
    managementGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForManagementGroupOptionalParams
  ): AsyncIterableIterator<PolicyTrackedResource> {
    for await (const page of this.listQueryResultsForManagementGroupPagingPage(
      managementGroupName,
      policyTrackedResourcesResource,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Queries policy tracked resources under the subscription.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param options The options parameters.
   */
  public listQueryResultsForSubscription(
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForSubscriptionOptionalParams
  ): PagedAsyncIterableIterator<PolicyTrackedResource> {
    const iter = this.listQueryResultsForSubscriptionPagingAll(
      policyTrackedResourcesResource,
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
        return this.listQueryResultsForSubscriptionPagingPage(
          policyTrackedResourcesResource,
          options
        );
      }
    };
  }

  private async *listQueryResultsForSubscriptionPagingPage(
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForSubscriptionOptionalParams
  ): AsyncIterableIterator<PolicyTrackedResource[]> {
    let result = await this._listQueryResultsForSubscription(
      policyTrackedResourcesResource,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listQueryResultsForSubscriptionNext(
        policyTrackedResourcesResource,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listQueryResultsForSubscriptionPagingAll(
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForSubscriptionOptionalParams
  ): AsyncIterableIterator<PolicyTrackedResource> {
    for await (const page of this.listQueryResultsForSubscriptionPagingPage(
      policyTrackedResourcesResource,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Queries policy tracked resources under the resource group.
   * @param resourceGroupName Resource group name.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param options The options parameters.
   */
  public listQueryResultsForResourceGroup(
    resourceGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<PolicyTrackedResource> {
    const iter = this.listQueryResultsForResourceGroupPagingAll(
      resourceGroupName,
      policyTrackedResourcesResource,
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
        return this.listQueryResultsForResourceGroupPagingPage(
          resourceGroupName,
          policyTrackedResourcesResource,
          options
        );
      }
    };
  }

  private async *listQueryResultsForResourceGroupPagingPage(
    resourceGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams
  ): AsyncIterableIterator<PolicyTrackedResource[]> {
    let result = await this._listQueryResultsForResourceGroup(
      resourceGroupName,
      policyTrackedResourcesResource,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listQueryResultsForResourceGroupNext(
        resourceGroupName,
        policyTrackedResourcesResource,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listQueryResultsForResourceGroupPagingAll(
    resourceGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams
  ): AsyncIterableIterator<PolicyTrackedResource> {
    for await (const page of this.listQueryResultsForResourceGroupPagingPage(
      resourceGroupName,
      policyTrackedResourcesResource,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Queries policy tracked resources under the resource.
   * @param resourceId Resource ID.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param options The options parameters.
   */
  public listQueryResultsForResource(
    resourceId: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForResourceOptionalParams
  ): PagedAsyncIterableIterator<PolicyTrackedResource> {
    const iter = this.listQueryResultsForResourcePagingAll(
      resourceId,
      policyTrackedResourcesResource,
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
        return this.listQueryResultsForResourcePagingPage(
          resourceId,
          policyTrackedResourcesResource,
          options
        );
      }
    };
  }

  private async *listQueryResultsForResourcePagingPage(
    resourceId: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForResourceOptionalParams
  ): AsyncIterableIterator<PolicyTrackedResource[]> {
    let result = await this._listQueryResultsForResource(
      resourceId,
      policyTrackedResourcesResource,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listQueryResultsForResourceNext(
        resourceId,
        policyTrackedResourcesResource,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listQueryResultsForResourcePagingAll(
    resourceId: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForResourceOptionalParams
  ): AsyncIterableIterator<PolicyTrackedResource> {
    for await (const page of this.listQueryResultsForResourcePagingPage(
      resourceId,
      policyTrackedResourcesResource,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Queries policy tracked resources under the management group.
   * @param managementGroupName Management group name.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param options The options parameters.
   */
  private _listQueryResultsForManagementGroup(
    managementGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForManagementGroupOptionalParams
  ): Promise<PolicyTrackedResourcesListQueryResultsForManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupName, policyTrackedResourcesResource, options },
      listQueryResultsForManagementGroupOperationSpec
    );
  }

  /**
   * Queries policy tracked resources under the subscription.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param options The options parameters.
   */
  private _listQueryResultsForSubscription(
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForSubscriptionOptionalParams
  ): Promise<PolicyTrackedResourcesListQueryResultsForSubscriptionResponse> {
    return this.client.sendOperationRequest(
      { policyTrackedResourcesResource, options },
      listQueryResultsForSubscriptionOperationSpec
    );
  }

  /**
   * Queries policy tracked resources under the resource group.
   * @param resourceGroupName Resource group name.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param options The options parameters.
   */
  private _listQueryResultsForResourceGroup(
    resourceGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams
  ): Promise<PolicyTrackedResourcesListQueryResultsForResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, policyTrackedResourcesResource, options },
      listQueryResultsForResourceGroupOperationSpec
    );
  }

  /**
   * Queries policy tracked resources under the resource.
   * @param resourceId Resource ID.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param options The options parameters.
   */
  private _listQueryResultsForResource(
    resourceId: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    options?: PolicyTrackedResourcesListQueryResultsForResourceOptionalParams
  ): Promise<PolicyTrackedResourcesListQueryResultsForResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceId, policyTrackedResourcesResource, options },
      listQueryResultsForResourceOperationSpec
    );
  }

  /**
   * ListQueryResultsForManagementGroupNext
   * @param managementGroupName Management group name.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListQueryResultsForManagementGroup method.
   * @param options The options parameters.
   */
  private _listQueryResultsForManagementGroupNext(
    managementGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    nextLink: string,
    options?: PolicyTrackedResourcesListQueryResultsForManagementGroupNextOptionalParams
  ): Promise<
    PolicyTrackedResourcesListQueryResultsForManagementGroupNextResponse
  > {
    return this.client.sendOperationRequest(
      {
        managementGroupName,
        policyTrackedResourcesResource,
        nextLink,
        options
      },
      listQueryResultsForManagementGroupNextOperationSpec
    );
  }

  /**
   * ListQueryResultsForSubscriptionNext
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListQueryResultsForSubscription method.
   * @param options The options parameters.
   */
  private _listQueryResultsForSubscriptionNext(
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    nextLink: string,
    options?: PolicyTrackedResourcesListQueryResultsForSubscriptionNextOptionalParams
  ): Promise<
    PolicyTrackedResourcesListQueryResultsForSubscriptionNextResponse
  > {
    return this.client.sendOperationRequest(
      { policyTrackedResourcesResource, nextLink, options },
      listQueryResultsForSubscriptionNextOperationSpec
    );
  }

  /**
   * ListQueryResultsForResourceGroupNext
   * @param resourceGroupName Resource group name.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListQueryResultsForResourceGroup method.
   * @param options The options parameters.
   */
  private _listQueryResultsForResourceGroupNext(
    resourceGroupName: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    nextLink: string,
    options?: PolicyTrackedResourcesListQueryResultsForResourceGroupNextOptionalParams
  ): Promise<
    PolicyTrackedResourcesListQueryResultsForResourceGroupNextResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, policyTrackedResourcesResource, nextLink, options },
      listQueryResultsForResourceGroupNextOperationSpec
    );
  }

  /**
   * ListQueryResultsForResourceNext
   * @param resourceId Resource ID.
   * @param policyTrackedResourcesResource The name of the virtual resource under PolicyTrackedResources
   *                                       resource type; only "default" is allowed.
   * @param nextLink The nextLink from the previous successful call to the ListQueryResultsForResource
   *                 method.
   * @param options The options parameters.
   */
  private _listQueryResultsForResourceNext(
    resourceId: string,
    policyTrackedResourcesResource: PolicyTrackedResourcesResourceType,
    nextLink: string,
    options?: PolicyTrackedResourcesListQueryResultsForResourceNextOptionalParams
  ): Promise<PolicyTrackedResourcesListQueryResultsForResourceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceId, policyTrackedResourcesResource, nextLink, options },
      listQueryResultsForResourceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listQueryResultsForManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/{managementGroupsNamespace}/managementGroups/{managementGroupName}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupsNamespace,
    Parameters.managementGroupName,
    Parameters.policyTrackedResourcesResource
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listQueryResultsForSubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.policyTrackedResourcesResource,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listQueryResultsForResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.policyTrackedResourcesResource,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listQueryResultsForResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceId}/providers/Microsoft.PolicyInsights/policyTrackedResources/{policyTrackedResourcesResource}/queryResults",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.policyTrackedResourcesResource,
    Parameters.resourceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listQueryResultsForManagementGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupsNamespace,
    Parameters.managementGroupName,
    Parameters.policyTrackedResourcesResource,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listQueryResultsForSubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.policyTrackedResourcesResource,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listQueryResultsForResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.policyTrackedResourcesResource,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listQueryResultsForResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyTrackedResourcesQueryResults
    },
    default: {
      bodyMapper: Mappers.QueryFailure
    }
  },
  queryParameters: [Parameters.top, Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.policyTrackedResourcesResource,
    Parameters.resourceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
