/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Zones } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DnsManagementClient } from "../dnsManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Zone,
  ZonesListByResourceGroupNextOptionalParams,
  ZonesListByResourceGroupOptionalParams,
  ZonesListNextOptionalParams,
  ZonesListOptionalParams,
  ZonesCreateOrUpdateOptionalParams,
  ZonesCreateOrUpdateResponse,
  ZonesDeleteOptionalParams,
  ZonesGetOptionalParams,
  ZonesGetResponse,
  ZoneUpdate,
  ZonesUpdateOptionalParams,
  ZonesUpdateResponse,
  ZonesListByResourceGroupResponse,
  ZonesListResponse,
  ZonesListByResourceGroupNextResponse,
  ZonesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Zones operations. */
export class ZonesImpl implements Zones {
  private readonly client: DnsManagementClient;

  /**
   * Initialize a new instance of the class Zones class.
   * @param client Reference to the service client
   */
  constructor(client: DnsManagementClient) {
    this.client = client;
  }

  /**
   * Lists the DNS zones within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ZonesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Zone> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ZonesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Zone[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ZonesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Zone> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the DNS zones in all resource groups in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ZonesListOptionalParams
  ): PagedAsyncIterableIterator<Zone> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ZonesListOptionalParams
  ): AsyncIterableIterator<Zone[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ZonesListOptionalParams
  ): AsyncIterableIterator<Zone> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates or updates a DNS zone. Does not modify DNS records within the zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    zoneName: string,
    parameters: Zone,
    options?: ZonesCreateOrUpdateOptionalParams
  ): Promise<ZonesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, zoneName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot
   * be undone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    zoneName: string,
    options?: ZonesDeleteOptionalParams
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
      { resourceGroupName, zoneName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot
   * be undone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    zoneName: string,
    options?: ZonesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, zoneName, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    zoneName: string,
    options?: ZonesGetOptionalParams
  ): Promise<ZonesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, zoneName, options },
      getOperationSpec
    );
  }

  /**
   * Updates a DNS zone. Does not modify DNS records within the zone.
   * @param resourceGroupName The name of the resource group.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    zoneName: string,
    parameters: ZoneUpdate,
    options?: ZonesUpdateOptionalParams
  ): Promise<ZonesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, zoneName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Lists the DNS zones within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ZonesListByResourceGroupOptionalParams
  ): Promise<ZonesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists the DNS zones in all resource groups in a subscription.
   * @param options The options parameters.
   */
  private _list(options?: ZonesListOptionalParams): Promise<ZonesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
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
    options?: ZonesListByResourceGroupNextOptionalParams
  ): Promise<ZonesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ZonesListNextOptionalParams
  ): Promise<ZonesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Zone
    },
    201: {
      bodyMapper: Mappers.Zone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
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
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Zone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Zone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/dnszones",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
