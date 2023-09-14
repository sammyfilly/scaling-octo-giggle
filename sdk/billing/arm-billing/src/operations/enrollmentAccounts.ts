/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EnrollmentAccounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import {
  EnrollmentAccountSummary,
  EnrollmentAccountsListNextOptionalParams,
  EnrollmentAccountsListOptionalParams,
  EnrollmentAccountsListResponse,
  EnrollmentAccountsGetOptionalParams,
  EnrollmentAccountsGetResponse,
  EnrollmentAccountsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EnrollmentAccounts operations. */
export class EnrollmentAccountsImpl implements EnrollmentAccounts {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class EnrollmentAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the enrollment accounts the caller has access to.
   * @param options The options parameters.
   */
  public list(
    options?: EnrollmentAccountsListOptionalParams
  ): PagedAsyncIterableIterator<EnrollmentAccountSummary> {
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
    options?: EnrollmentAccountsListOptionalParams
  ): AsyncIterableIterator<EnrollmentAccountSummary[]> {
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
    options?: EnrollmentAccountsListOptionalParams
  ): AsyncIterableIterator<EnrollmentAccountSummary> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the enrollment accounts the caller has access to.
   * @param options The options parameters.
   */
  private _list(
    options?: EnrollmentAccountsListOptionalParams
  ): Promise<EnrollmentAccountsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a enrollment account by name.
   * @param name Enrollment Account name.
   * @param options The options parameters.
   */
  get(
    name: string,
    options?: EnrollmentAccountsGetOptionalParams
  ): Promise<EnrollmentAccountsGetResponse> {
    return this.client.sendOperationRequest(
      { name, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: EnrollmentAccountsListNextOptionalParams
  ): Promise<EnrollmentAccountsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/enrollmentAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/enrollmentAccounts/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccountSummary
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
