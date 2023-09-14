/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PipelineRunOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import {
  RunFilterParameters,
  PipelineRunQueryPipelineRunsByWorkspaceOptionalParams,
  PipelineRunQueryPipelineRunsByWorkspaceResponse,
  PipelineRunGetPipelineRunOptionalParams,
  PipelineRunGetPipelineRunResponse,
  PipelineRunQueryActivityRunsOptionalParams,
  PipelineRunQueryActivityRunsResponse,
  PipelineRunCancelPipelineRunOptionalParams
} from "../models";

/** Class containing PipelineRunOperations operations. */
export class PipelineRunOperationsImpl implements PipelineRunOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class PipelineRunOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Query pipeline runs in the workspace based on input filter conditions.
   * @param filterParameters Parameters to filter the pipeline run.
   * @param options The options parameters.
   */
  async queryPipelineRunsByWorkspace(
    filterParameters: RunFilterParameters,
    options?: PipelineRunQueryPipelineRunsByWorkspaceOptionalParams
  ): Promise<PipelineRunQueryPipelineRunsByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-queryPipelineRunsByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { filterParameters, options },
        queryPipelineRunsByWorkspaceOperationSpec
      );
      return result as PipelineRunQueryPipelineRunsByWorkspaceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get a pipeline run by its run ID.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  async getPipelineRun(
    runId: string,
    options?: PipelineRunGetPipelineRunOptionalParams
  ): Promise<PipelineRunGetPipelineRunResponse> {
    const { span } = createSpan(
      "ArtifactsClient-getPipelineRun",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { runId, options },
        getPipelineRunOperationSpec
      );
      return result as PipelineRunGetPipelineRunResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Query activity runs based on input filter conditions.
   * @param pipelineName The pipeline name.
   * @param runId The pipeline run identifier.
   * @param filterParameters Parameters to filter the activity runs.
   * @param options The options parameters.
   */
  async queryActivityRuns(
    pipelineName: string,
    runId: string,
    filterParameters: RunFilterParameters,
    options?: PipelineRunQueryActivityRunsOptionalParams
  ): Promise<PipelineRunQueryActivityRunsResponse> {
    const { span } = createSpan(
      "ArtifactsClient-queryActivityRuns",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { pipelineName, runId, filterParameters, options },
        queryActivityRunsOperationSpec
      );
      return result as PipelineRunQueryActivityRunsResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Cancel a pipeline run by its run ID.
   * @param runId The pipeline run identifier.
   * @param options The options parameters.
   */
  async cancelPipelineRun(
    runId: string,
    options?: PipelineRunCancelPipelineRunOptionalParams
  ): Promise<void> {
    const { span } = createSpan(
      "ArtifactsClient-cancelPipelineRun",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { runId, options },
        cancelPipelineRunOperationSpec
      );
      return result as void;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const queryPipelineRunsByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/queryPipelineRuns",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRunsQueryResponse
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  requestBody: Parameters.filterParameters,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getPipelineRunOperationSpec: coreClient.OperationSpec = {
  path: "/pipelineruns/{runId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRun
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.endpoint, Parameters.runId],
  headerParameters: [Parameters.accept],
  serializer
};
const queryActivityRunsOperationSpec: coreClient.OperationSpec = {
  path: "/pipelines/{pipelineName}/pipelineruns/{runId}/queryActivityruns",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ActivityRunsQueryResponse
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  requestBody: Parameters.filterParameters,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.endpoint,
    Parameters.pipelineName,
    Parameters.runId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const cancelPipelineRunOperationSpec: coreClient.OperationSpec = {
  path: "/pipelineruns/{runId}/cancel",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion3, Parameters.isRecursive],
  urlParameters: [Parameters.endpoint, Parameters.runId],
  headerParameters: [Parameters.accept],
  serializer
};
