/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Projects } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { VisualStudioResourceProviderClient } from "../visualStudioResourceProviderClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ProjectsListByResourceGroupOptionalParams,
  ProjectsListByResourceGroupResponse,
  ProjectResource,
  ProjectsCreateOptionalParams,
  ProjectsCreateResponse,
  ProjectsGetOptionalParams,
  ProjectsGetResponse,
  ProjectsUpdateOptionalParams,
  ProjectsUpdateResponse,
  ProjectsGetJobStatusOptionalParams,
  ProjectsGetJobStatusResponse
} from "../models";

/** Class containing Projects operations. */
export class ProjectsImpl implements Projects {
  private readonly client: VisualStudioResourceProviderClient;

  /**
   * Initialize a new instance of the class Projects class.
   * @param client Reference to the service client
   */
  constructor(client: VisualStudioResourceProviderClient) {
    this.client = client;
  }

  /**
   * Gets all Visual Studio Team Services project resources created in the specified Team Services
   * account.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    rootResourceName: string,
    options?: ProjectsListByResourceGroupOptionalParams
  ): Promise<ProjectsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, rootResourceName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Creates a Team Services project in the collection with the specified name. 'VersionControlOption'
   * and 'ProcessTemplateId' must be specified in the resource properties. Valid values for
   * VersionControlOption: Git, Tfvc. Valid values for ProcessTemplateId:
   * 6B724908-EF14-45CF-84F8-768B5384DA45, ADCC42AB-9882-485E-A3ED-7678F01F66BC,
   * 27450541-8E31-4150-9947-DC59F998FC01 (these IDs correspond to Scrum, Agile, and CMMI process
   * templates).
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param body The request data.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    body: ProjectResource,
    options?: ProjectsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ProjectsCreateResponse>,
      ProjectsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProjectsCreateResponse> => {
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
      { resourceGroupName, rootResourceName, resourceName, body, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a Team Services project in the collection with the specified name. 'VersionControlOption'
   * and 'ProcessTemplateId' must be specified in the resource properties. Valid values for
   * VersionControlOption: Git, Tfvc. Valid values for ProcessTemplateId:
   * 6B724908-EF14-45CF-84F8-768B5384DA45, ADCC42AB-9882-485E-A3ED-7678F01F66BC,
   * 27450541-8E31-4150-9947-DC59F998FC01 (these IDs correspond to Scrum, Agile, and CMMI process
   * templates).
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param body The request data.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    body: ProjectResource,
    options?: ProjectsCreateOptionalParams
  ): Promise<ProjectsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      rootResourceName,
      resourceName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the details of a Team Services project resource.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    options?: ProjectsGetOptionalParams
  ): Promise<ProjectsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, rootResourceName, resourceName, options },
      getOperationSpec
    );
  }

  /**
   * Updates the tags of the specified Team Services project.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param body The request data.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    body: ProjectResource,
    options?: ProjectsUpdateOptionalParams
  ): Promise<ProjectsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, rootResourceName, resourceName, body, options },
      updateOperationSpec
    );
  }

  /**
   * Gets the status of the project resource creation job.
   * @param resourceGroupName Name of the resource group within the Azure subscription.
   * @param rootResourceName Name of the Team Services account.
   * @param resourceName Name of the Team Services project.
   * @param subContainerName This parameter should be set to the resourceName.
   * @param operation The operation type. The only supported value is 'put'.
   * @param options The options parameters.
   */
  getJobStatus(
    resourceGroupName: string,
    rootResourceName: string,
    resourceName: string,
    subContainerName: string,
    operation: string,
    options?: ProjectsGetJobStatusOptionalParams
  ): Promise<ProjectsGetJobStatusResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        rootResourceName,
        resourceName,
        subContainerName,
        operation,
        options
      },
      getJobStatusOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.rootResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectResource
    },
    201: {
      bodyMapper: Mappers.ProjectResource
    },
    202: {
      bodyMapper: Mappers.ProjectResource
    },
    204: {
      bodyMapper: Mappers.ProjectResource
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion, Parameters.validating],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.rootResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectResource
    },
    404: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.rootResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectResource
    }
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.rootResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getJobStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName}/subContainers/{subContainerName}/status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectResource
    },
    202: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.operation,
    Parameters.jobId
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.rootResourceName,
    Parameters.subContainerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
