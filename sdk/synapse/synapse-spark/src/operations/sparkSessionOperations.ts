/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing";
import { SparkSessionOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SparkClient } from "../sparkClient";
import {
  SparkSessionGetSparkSessionsOptionalParams,
  SparkSessionGetSparkSessionsResponse,
  SparkSessionOptions,
  SparkSessionCreateSparkSessionOptionalParams,
  SparkSessionCreateSparkSessionResponse,
  SparkSessionGetSparkSessionOptionalParams,
  SparkSessionGetSparkSessionResponse,
  SparkSessionCancelSparkSessionOptionalParams,
  SparkSessionResetSparkSessionTimeoutOptionalParams,
  SparkSessionGetSparkStatementsOptionalParams,
  SparkSessionGetSparkStatementsResponse,
  SparkStatementOptions,
  SparkSessionCreateSparkStatementOptionalParams,
  SparkSessionCreateSparkStatementResponse,
  SparkSessionGetSparkStatementOptionalParams,
  SparkSessionGetSparkStatementResponse,
  SparkSessionCancelSparkStatementOptionalParams,
  SparkSessionCancelSparkStatementResponse
} from "../models";

/** Class containing SparkSessionOperations operations. */
export class SparkSessionOperationsImpl implements SparkSessionOperations {
  private readonly client: SparkClient;

  /**
   * Initialize a new instance of the class SparkSessionOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SparkClient) {
    this.client = client;
  }

  /**
   * List all spark sessions which are running under a particular spark pool.
   * @param options The options parameters.
   */
  async getSparkSessions(
    options?: SparkSessionGetSparkSessionsOptionalParams
  ): Promise<SparkSessionGetSparkSessionsResponse> {
    return tracingClient.withSpan(
      "SparkClient.getSparkSessions",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { options },
          getSparkSessionsOperationSpec
        ) as Promise<SparkSessionGetSparkSessionsResponse>;
      }
    );
  }

  /**
   * Create new spark session.
   * @param sparkSessionOptions Livy compatible batch job request payload.
   * @param options The options parameters.
   */
  async createSparkSession(
    sparkSessionOptions: SparkSessionOptions,
    options?: SparkSessionCreateSparkSessionOptionalParams
  ): Promise<SparkSessionCreateSparkSessionResponse> {
    return tracingClient.withSpan(
      "SparkClient.createSparkSession",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { sparkSessionOptions, options },
          createSparkSessionOperationSpec
        ) as Promise<SparkSessionCreateSparkSessionResponse>;
      }
    );
  }

  /**
   * Gets a single spark session.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  async getSparkSession(
    sessionId: number,
    options?: SparkSessionGetSparkSessionOptionalParams
  ): Promise<SparkSessionGetSparkSessionResponse> {
    return tracingClient.withSpan(
      "SparkClient.getSparkSession",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { sessionId, options },
          getSparkSessionOperationSpec
        ) as Promise<SparkSessionGetSparkSessionResponse>;
      }
    );
  }

  /**
   * Cancels a running spark session.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  async cancelSparkSession(
    sessionId: number,
    options?: SparkSessionCancelSparkSessionOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "SparkClient.cancelSparkSession",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { sessionId, options },
          cancelSparkSessionOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Sends a keep alive call to the current session to reset the session timeout.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  async resetSparkSessionTimeout(
    sessionId: number,
    options?: SparkSessionResetSparkSessionTimeoutOptionalParams
  ): Promise<void> {
    return tracingClient.withSpan(
      "SparkClient.resetSparkSessionTimeout",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { sessionId, options },
          resetSparkSessionTimeoutOperationSpec
        ) as Promise<void>;
      }
    );
  }

  /**
   * Gets a list of statements within a spark session.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  async getSparkStatements(
    sessionId: number,
    options?: SparkSessionGetSparkStatementsOptionalParams
  ): Promise<SparkSessionGetSparkStatementsResponse> {
    return tracingClient.withSpan(
      "SparkClient.getSparkStatements",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { sessionId, options },
          getSparkStatementsOperationSpec
        ) as Promise<SparkSessionGetSparkStatementsResponse>;
      }
    );
  }

  /**
   * Create statement within a spark session.
   * @param sessionId Identifier for the session.
   * @param sparkStatementOptions Livy compatible batch job request payload.
   * @param options The options parameters.
   */
  async createSparkStatement(
    sessionId: number,
    sparkStatementOptions: SparkStatementOptions,
    options?: SparkSessionCreateSparkStatementOptionalParams
  ): Promise<SparkSessionCreateSparkStatementResponse> {
    return tracingClient.withSpan(
      "SparkClient.createSparkStatement",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { sessionId, sparkStatementOptions, options },
          createSparkStatementOperationSpec
        ) as Promise<SparkSessionCreateSparkStatementResponse>;
      }
    );
  }

  /**
   * Gets a single statement within a spark session.
   * @param sessionId Identifier for the session.
   * @param statementId Identifier for the statement.
   * @param options The options parameters.
   */
  async getSparkStatement(
    sessionId: number,
    statementId: number,
    options?: SparkSessionGetSparkStatementOptionalParams
  ): Promise<SparkSessionGetSparkStatementResponse> {
    return tracingClient.withSpan(
      "SparkClient.getSparkStatement",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { sessionId, statementId, options },
          getSparkStatementOperationSpec
        ) as Promise<SparkSessionGetSparkStatementResponse>;
      }
    );
  }

  /**
   * Kill a statement within a session.
   * @param sessionId Identifier for the session.
   * @param statementId Identifier for the statement.
   * @param options The options parameters.
   */
  async cancelSparkStatement(
    sessionId: number,
    statementId: number,
    options?: SparkSessionCancelSparkStatementOptionalParams
  ): Promise<SparkSessionCancelSparkStatementResponse> {
    return tracingClient.withSpan(
      "SparkClient.cancelSparkStatement",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { sessionId, statementId, options },
          cancelSparkStatementOperationSpec
        ) as Promise<SparkSessionCancelSparkStatementResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getSparkSessionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkSessionCollection
    }
  },
  queryParameters: [Parameters.fromParam, Parameters.size, Parameters.detailed],
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createSparkSessionOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SparkSession
    }
  },
  requestBody: Parameters.sparkSessionOptions,
  queryParameters: [Parameters.detailed],
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSparkSessionOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkSession
    }
  },
  queryParameters: [Parameters.detailed],
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelSparkSessionOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  serializer
};
const resetSparkSessionTimeoutOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/reset-timeout",
  httpMethod: "PUT",
  responses: { 200: {} },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  serializer
};
const getSparkStatementsOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/statements",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkStatementCollection
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createSparkStatementOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/statements",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SparkStatement
    }
  },
  requestBody: Parameters.sparkStatementOptions,
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSparkStatementOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/statements/{statementId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SparkStatement
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId,
    Parameters.statementId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelSparkStatementOperationSpec: coreClient.OperationSpec = {
  path:
    "/livyApi/versions/{livyApiVersion}/sparkPools/{sparkPoolName}/sessions/{sessionId}/statements/{statementId}/cancel",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SparkStatementCancellationResult
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.livyApiVersion,
    Parameters.sparkPoolName,
    Parameters.sessionId,
    Parameters.statementId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
