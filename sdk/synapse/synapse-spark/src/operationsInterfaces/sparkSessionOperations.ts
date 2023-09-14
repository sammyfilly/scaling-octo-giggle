/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

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

/** Interface representing a SparkSessionOperations. */
export interface SparkSessionOperations {
  /**
   * List all spark sessions which are running under a particular spark pool.
   * @param options The options parameters.
   */
  getSparkSessions(
    options?: SparkSessionGetSparkSessionsOptionalParams
  ): Promise<SparkSessionGetSparkSessionsResponse>;
  /**
   * Create new spark session.
   * @param sparkSessionOptions Livy compatible batch job request payload.
   * @param options The options parameters.
   */
  createSparkSession(
    sparkSessionOptions: SparkSessionOptions,
    options?: SparkSessionCreateSparkSessionOptionalParams
  ): Promise<SparkSessionCreateSparkSessionResponse>;
  /**
   * Gets a single spark session.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  getSparkSession(
    sessionId: number,
    options?: SparkSessionGetSparkSessionOptionalParams
  ): Promise<SparkSessionGetSparkSessionResponse>;
  /**
   * Cancels a running spark session.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  cancelSparkSession(
    sessionId: number,
    options?: SparkSessionCancelSparkSessionOptionalParams
  ): Promise<void>;
  /**
   * Sends a keep alive call to the current session to reset the session timeout.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  resetSparkSessionTimeout(
    sessionId: number,
    options?: SparkSessionResetSparkSessionTimeoutOptionalParams
  ): Promise<void>;
  /**
   * Gets a list of statements within a spark session.
   * @param sessionId Identifier for the session.
   * @param options The options parameters.
   */
  getSparkStatements(
    sessionId: number,
    options?: SparkSessionGetSparkStatementsOptionalParams
  ): Promise<SparkSessionGetSparkStatementsResponse>;
  /**
   * Create statement within a spark session.
   * @param sessionId Identifier for the session.
   * @param sparkStatementOptions Livy compatible batch job request payload.
   * @param options The options parameters.
   */
  createSparkStatement(
    sessionId: number,
    sparkStatementOptions: SparkStatementOptions,
    options?: SparkSessionCreateSparkStatementOptionalParams
  ): Promise<SparkSessionCreateSparkStatementResponse>;
  /**
   * Gets a single statement within a spark session.
   * @param sessionId Identifier for the session.
   * @param statementId Identifier for the statement.
   * @param options The options parameters.
   */
  getSparkStatement(
    sessionId: number,
    statementId: number,
    options?: SparkSessionGetSparkStatementOptionalParams
  ): Promise<SparkSessionGetSparkStatementResponse>;
  /**
   * Kill a statement within a session.
   * @param sessionId Identifier for the session.
   * @param statementId Identifier for the statement.
   * @param options The options parameters.
   */
  cancelSparkStatement(
    sessionId: number,
    statementId: number,
    options?: SparkSessionCancelSparkStatementOptionalParams
  ): Promise<SparkSessionCancelSparkStatementResponse>;
}
