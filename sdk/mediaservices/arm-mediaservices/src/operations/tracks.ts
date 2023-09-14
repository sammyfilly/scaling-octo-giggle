/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Tracks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServices } from "../azureMediaServices";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AssetTrack,
  TracksListOptionalParams,
  TracksListResponse,
  TracksGetOptionalParams,
  TracksGetResponse,
  TracksCreateOrUpdateOptionalParams,
  TracksCreateOrUpdateResponse,
  TracksDeleteOptionalParams,
  TracksDeleteResponse,
  TracksUpdateOptionalParams,
  TracksUpdateResponse,
  TracksUpdateTrackDataOptionalParams,
  TracksUpdateTrackDataResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Tracks operations. */
export class TracksImpl implements Tracks {
  private readonly client: AzureMediaServices;

  /**
   * Initialize a new instance of the class Tracks class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMediaServices) {
    this.client = client;
  }

  /**
   * Lists the Tracks in the asset
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    options?: TracksListOptionalParams
  ): PagedAsyncIterableIterator<AssetTrack> {
    const iter = this.listPagingAll(
      resourceGroupName,
      accountName,
      assetName,
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
          accountName,
          assetName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    options?: TracksListOptionalParams
  ): AsyncIterableIterator<AssetTrack[]> {
    let result = await this._list(
      resourceGroupName,
      accountName,
      assetName,
      options
    );
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    options?: TracksListOptionalParams
  ): AsyncIterableIterator<AssetTrack> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      assetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the Tracks in the asset
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    options?: TracksListOptionalParams
  ): Promise<TracksListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, assetName, options },
      listOperationSpec
    );
  }

  /**
   * Get the details of a Track in the Asset
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    options?: TracksGetOptionalParams
  ): Promise<TracksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, assetName, trackName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a Track in the asset
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    parameters: AssetTrack,
    options?: TracksCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TracksCreateOrUpdateResponse>,
      TracksCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TracksCreateOrUpdateResponse> => {
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
        assetName,
        trackName,
        parameters,
        options
      },
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
   * Create or update a Track in the asset
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    parameters: AssetTrack,
    options?: TracksCreateOrUpdateOptionalParams
  ): Promise<TracksCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      accountName,
      assetName,
      trackName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a Track in the asset
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    options?: TracksDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<TracksDeleteResponse>, TracksDeleteResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TracksDeleteResponse> => {
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
      { resourceGroupName, accountName, assetName, trackName, options },
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
   * Deletes a Track in the asset
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    options?: TracksDeleteOptionalParams
  ): Promise<TracksDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      assetName,
      trackName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing Track in the asset
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    parameters: AssetTrack,
    options?: TracksUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<TracksUpdateResponse>, TracksUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TracksUpdateResponse> => {
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
        assetName,
        trackName,
        parameters,
        options
      },
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
   * Updates an existing Track in the asset
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    parameters: AssetTrack,
    options?: TracksUpdateOptionalParams
  ): Promise<TracksUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accountName,
      assetName,
      trackName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update the track data. Call this API after any changes are made to the track data stored in the
   * asset container. For example, you have modified the WebVTT captions file in the Azure blob storage
   * container for the asset, viewers will not see the new version of the captions unless this API is
   * called. Note, the changes may not be reflected immediately. CDN cache may also need to be purged if
   * applicable.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param options The options parameters.
   */
  async beginUpdateTrackData(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    options?: TracksUpdateTrackDataOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TracksUpdateTrackDataResponse>,
      TracksUpdateTrackDataResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TracksUpdateTrackDataResponse> => {
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
      { resourceGroupName, accountName, assetName, trackName, options },
      updateTrackDataOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update the track data. Call this API after any changes are made to the track data stored in the
   * asset container. For example, you have modified the WebVTT captions file in the Azure blob storage
   * container for the asset, viewers will not see the new version of the captions unless this API is
   * called. Note, the changes may not be reflected immediately. CDN cache may also need to be purged if
   * applicable.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param assetName The Asset name.
   * @param trackName The Asset Track name.
   * @param options The options parameters.
   */
  async beginUpdateTrackDataAndWait(
    resourceGroupName: string,
    accountName: string,
    assetName: string,
    trackName: string,
    options?: TracksUpdateTrackDataOptionalParams
  ): Promise<TracksUpdateTrackDataResponse> {
    const poller = await this.beginUpdateTrackData(
      resourceGroupName,
      accountName,
      assetName,
      trackName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/tracks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssetTrackCollection
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
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/tracks/{trackName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssetTrack
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
    Parameters.assetName,
    Parameters.trackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/tracks/{trackName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AssetTrack,
      headersMapper: Mappers.TracksCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.AssetTrack,
      headersMapper: Mappers.TracksCreateOrUpdateHeaders
    },
    202: {
      bodyMapper: Mappers.AssetTrack,
      headersMapper: Mappers.TracksCreateOrUpdateHeaders
    },
    204: {
      bodyMapper: Mappers.AssetTrack,
      headersMapper: Mappers.TracksCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName,
    Parameters.trackName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/tracks/{trackName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.TracksDeleteHeaders
    },
    201: {
      headersMapper: Mappers.TracksDeleteHeaders
    },
    202: {
      headersMapper: Mappers.TracksDeleteHeaders
    },
    204: {
      headersMapper: Mappers.TracksDeleteHeaders
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
    Parameters.assetName,
    Parameters.trackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/tracks/{trackName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AssetTrack,
      headersMapper: Mappers.TracksUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.AssetTrack,
      headersMapper: Mappers.TracksUpdateHeaders
    },
    202: {
      bodyMapper: Mappers.AssetTrack,
      headersMapper: Mappers.TracksUpdateHeaders
    },
    204: {
      bodyMapper: Mappers.AssetTrack,
      headersMapper: Mappers.TracksUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.assetName,
    Parameters.trackName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTrackDataOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/assets/{assetName}/tracks/{trackName}/updateTrackData",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.TracksUpdateTrackDataHeaders
    },
    201: {
      headersMapper: Mappers.TracksUpdateTrackDataHeaders
    },
    202: {
      headersMapper: Mappers.TracksUpdateTrackDataHeaders
    },
    204: {
      headersMapper: Mappers.TracksUpdateTrackDataHeaders
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
    Parameters.assetName,
    Parameters.trackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
