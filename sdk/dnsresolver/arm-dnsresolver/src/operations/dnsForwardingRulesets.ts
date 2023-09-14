/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DnsForwardingRulesets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DnsResolverManagementClient } from "../dnsResolverManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DnsForwardingRuleset,
  DnsForwardingRulesetsListByResourceGroupNextOptionalParams,
  DnsForwardingRulesetsListByResourceGroupOptionalParams,
  DnsForwardingRulesetsListNextOptionalParams,
  DnsForwardingRulesetsListOptionalParams,
  VirtualNetworkDnsForwardingRuleset,
  DnsForwardingRulesetsListByVirtualNetworkNextOptionalParams,
  DnsForwardingRulesetsListByVirtualNetworkOptionalParams,
  DnsForwardingRulesetsCreateOrUpdateOptionalParams,
  DnsForwardingRulesetsCreateOrUpdateResponse,
  DnsForwardingRulesetPatch,
  DnsForwardingRulesetsUpdateOptionalParams,
  DnsForwardingRulesetsUpdateResponse,
  DnsForwardingRulesetsDeleteOptionalParams,
  DnsForwardingRulesetsGetOptionalParams,
  DnsForwardingRulesetsGetResponse,
  DnsForwardingRulesetsListByResourceGroupResponse,
  DnsForwardingRulesetsListResponse,
  DnsForwardingRulesetsListByVirtualNetworkResponse,
  DnsForwardingRulesetsListByResourceGroupNextResponse,
  DnsForwardingRulesetsListNextResponse,
  DnsForwardingRulesetsListByVirtualNetworkNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DnsForwardingRulesets operations. */
export class DnsForwardingRulesetsImpl implements DnsForwardingRulesets {
  private readonly client: DnsResolverManagementClient;

  /**
   * Initialize a new instance of the class DnsForwardingRulesets class.
   * @param client Reference to the service client
   */
  constructor(client: DnsResolverManagementClient) {
    this.client = client;
  }

  /**
   * Lists DNS forwarding rulesets within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DnsForwardingRulesetsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DnsForwardingRuleset> {
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
    options?: DnsForwardingRulesetsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DnsForwardingRuleset[]> {
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
    options?: DnsForwardingRulesetsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DnsForwardingRuleset> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists DNS forwarding rulesets in all resource groups of a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DnsForwardingRulesetsListOptionalParams
  ): PagedAsyncIterableIterator<DnsForwardingRuleset> {
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
    options?: DnsForwardingRulesetsListOptionalParams
  ): AsyncIterableIterator<DnsForwardingRuleset[]> {
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
    options?: DnsForwardingRulesetsListOptionalParams
  ): AsyncIterableIterator<DnsForwardingRuleset> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists DNS forwarding ruleset resource IDs attached to a virtual network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The options parameters.
   */
  public listByVirtualNetwork(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: DnsForwardingRulesetsListByVirtualNetworkOptionalParams
  ): PagedAsyncIterableIterator<VirtualNetworkDnsForwardingRuleset> {
    const iter = this.listByVirtualNetworkPagingAll(
      resourceGroupName,
      virtualNetworkName,
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
        return this.listByVirtualNetworkPagingPage(
          resourceGroupName,
          virtualNetworkName,
          options
        );
      }
    };
  }

  private async *listByVirtualNetworkPagingPage(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: DnsForwardingRulesetsListByVirtualNetworkOptionalParams
  ): AsyncIterableIterator<VirtualNetworkDnsForwardingRuleset[]> {
    let result = await this._listByVirtualNetwork(
      resourceGroupName,
      virtualNetworkName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByVirtualNetworkNext(
        resourceGroupName,
        virtualNetworkName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByVirtualNetworkPagingAll(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: DnsForwardingRulesetsListByVirtualNetworkOptionalParams
  ): AsyncIterableIterator<VirtualNetworkDnsForwardingRuleset> {
    for await (const page of this.listByVirtualNetworkPagingPage(
      resourceGroupName,
      virtualNetworkName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    parameters: DnsForwardingRuleset,
    options?: DnsForwardingRulesetsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DnsForwardingRulesetsCreateOrUpdateResponse>,
      DnsForwardingRulesetsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DnsForwardingRulesetsCreateOrUpdateResponse> => {
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
      { resourceGroupName, dnsForwardingRulesetName, parameters, options },
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
   * Creates or updates a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    parameters: DnsForwardingRuleset,
    options?: DnsForwardingRulesetsCreateOrUpdateOptionalParams
  ): Promise<DnsForwardingRulesetsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      dnsForwardingRulesetName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    parameters: DnsForwardingRulesetPatch,
    options?: DnsForwardingRulesetsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DnsForwardingRulesetsUpdateResponse>,
      DnsForwardingRulesetsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DnsForwardingRulesetsUpdateResponse> => {
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
      { resourceGroupName, dnsForwardingRulesetName, parameters, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a DNS forwarding ruleset.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param parameters Parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    parameters: DnsForwardingRulesetPatch,
    options?: DnsForwardingRulesetsUpdateOptionalParams
  ): Promise<DnsForwardingRulesetsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      dnsForwardingRulesetName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a DNS forwarding ruleset. WARNING: This operation cannot be undone. All forwarding rules
   * within the ruleset will be deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    options?: DnsForwardingRulesetsDeleteOptionalParams
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
      { resourceGroupName, dnsForwardingRulesetName, options },
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
   * Deletes a DNS forwarding ruleset. WARNING: This operation cannot be undone. All forwarding rules
   * within the ruleset will be deleted.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    options?: DnsForwardingRulesetsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dnsForwardingRulesetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a DNS forwarding ruleset properties.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dnsForwardingRulesetName The name of the DNS forwarding ruleset.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dnsForwardingRulesetName: string,
    options?: DnsForwardingRulesetsGetOptionalParams
  ): Promise<DnsForwardingRulesetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dnsForwardingRulesetName, options },
      getOperationSpec
    );
  }

  /**
   * Lists DNS forwarding rulesets within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DnsForwardingRulesetsListByResourceGroupOptionalParams
  ): Promise<DnsForwardingRulesetsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists DNS forwarding rulesets in all resource groups of a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DnsForwardingRulesetsListOptionalParams
  ): Promise<DnsForwardingRulesetsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Lists DNS forwarding ruleset resource IDs attached to a virtual network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param virtualNetworkName The name of the virtual network.
   * @param options The options parameters.
   */
  private _listByVirtualNetwork(
    resourceGroupName: string,
    virtualNetworkName: string,
    options?: DnsForwardingRulesetsListByVirtualNetworkOptionalParams
  ): Promise<DnsForwardingRulesetsListByVirtualNetworkResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualNetworkName, options },
      listByVirtualNetworkOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DnsForwardingRulesetsListByResourceGroupNextOptionalParams
  ): Promise<DnsForwardingRulesetsListByResourceGroupNextResponse> {
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
    options?: DnsForwardingRulesetsListNextOptionalParams
  ): Promise<DnsForwardingRulesetsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByVirtualNetworkNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param virtualNetworkName The name of the virtual network.
   * @param nextLink The nextLink from the previous successful call to the ListByVirtualNetwork method.
   * @param options The options parameters.
   */
  private _listByVirtualNetworkNext(
    resourceGroupName: string,
    virtualNetworkName: string,
    nextLink: string,
    options?: DnsForwardingRulesetsListByVirtualNetworkNextOptionalParams
  ): Promise<DnsForwardingRulesetsListByVirtualNetworkNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, virtualNetworkName, nextLink, options },
      listByVirtualNetworkNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DnsForwardingRuleset
    },
    201: {
      bodyMapper: Mappers.DnsForwardingRuleset
    },
    202: {
      bodyMapper: Mappers.DnsForwardingRuleset
    },
    204: {
      bodyMapper: Mappers.DnsForwardingRuleset
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsForwardingRulesetName
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
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DnsForwardingRuleset
    },
    201: {
      bodyMapper: Mappers.DnsForwardingRuleset
    },
    202: {
      bodyMapper: Mappers.DnsForwardingRuleset
    },
    204: {
      bodyMapper: Mappers.DnsForwardingRuleset
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dnsForwardingRulesetName
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}",
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
    Parameters.dnsForwardingRulesetName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets/{dnsForwardingRulesetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DnsForwardingRuleset
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
    Parameters.dnsForwardingRulesetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsForwardingRulesets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DnsForwardingRulesetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/dnsForwardingRulesets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DnsForwardingRulesetListResult
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
const listByVirtualNetworkOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/listDnsForwardingRulesets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkDnsForwardingRulesetListResult
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
    Parameters.virtualNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DnsForwardingRulesetListResult
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
      bodyMapper: Mappers.DnsForwardingRulesetListResult
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
const listByVirtualNetworkNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkDnsForwardingRulesetListResult
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
    Parameters.virtualNetworkName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
