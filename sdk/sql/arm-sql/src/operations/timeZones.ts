/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TimeZones } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import {
  TimeZone,
  TimeZonesListByLocationNextOptionalParams,
  TimeZonesListByLocationOptionalParams,
  TimeZonesListByLocationResponse,
  TimeZonesGetOptionalParams,
  TimeZonesGetResponse,
  TimeZonesListByLocationNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TimeZones operations. */
export class TimeZonesImpl implements TimeZones {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class TimeZones class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of managed instance time zones by location.
   * @param locationName
   * @param options The options parameters.
   */
  public listByLocation(
    locationName: string,
    options?: TimeZonesListByLocationOptionalParams
  ): PagedAsyncIterableIterator<TimeZone> {
    const iter = this.listByLocationPagingAll(locationName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByLocationPagingPage(locationName, options);
      }
    };
  }

  private async *listByLocationPagingPage(
    locationName: string,
    options?: TimeZonesListByLocationOptionalParams
  ): AsyncIterableIterator<TimeZone[]> {
    let result = await this._listByLocation(locationName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByLocationNext(
        locationName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByLocationPagingAll(
    locationName: string,
    options?: TimeZonesListByLocationOptionalParams
  ): AsyncIterableIterator<TimeZone> {
    for await (const page of this.listByLocationPagingPage(
      locationName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of managed instance time zones by location.
   * @param locationName
   * @param options The options parameters.
   */
  private _listByLocation(
    locationName: string,
    options?: TimeZonesListByLocationOptionalParams
  ): Promise<TimeZonesListByLocationResponse> {
    return this.client.sendOperationRequest(
      { locationName, options },
      listByLocationOperationSpec
    );
  }

  /**
   * Gets a managed instance time zone.
   * @param locationName
   * @param timeZoneId
   * @param options The options parameters.
   */
  get(
    locationName: string,
    timeZoneId: string,
    options?: TimeZonesGetOptionalParams
  ): Promise<TimeZonesGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, timeZoneId, options },
      getOperationSpec
    );
  }

  /**
   * ListByLocationNext
   * @param locationName
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    locationName: string,
    nextLink: string,
    options?: TimeZonesListByLocationNextOptionalParams
  ): Promise<TimeZonesListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      { locationName, nextLink, options },
      listByLocationNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/timeZones",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TimeZoneListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/timeZones/{timeZoneId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TimeZone
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.timeZoneId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TimeZoneListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};