/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Registry,
  RegistriesListOptionalParams,
  RegistriesListByResourceGroupOptionalParams,
  PrivateLinkResource,
  RegistriesListPrivateLinkResourcesOptionalParams,
  ImportImageParameters,
  RegistriesImportImageOptionalParams,
  RegistryNameCheckRequest,
  RegistriesCheckNameAvailabilityOptionalParams,
  RegistriesCheckNameAvailabilityResponse,
  RegistriesGetOptionalParams,
  RegistriesGetResponse,
  RegistriesCreateOptionalParams,
  RegistriesCreateResponse,
  RegistriesDeleteOptionalParams,
  RegistryUpdateParameters,
  RegistriesUpdateOptionalParams,
  RegistriesUpdateResponse,
  RegistriesListUsagesOptionalParams,
  RegistriesListUsagesResponse,
  RegistriesGetPrivateLinkResourceOptionalParams,
  RegistriesGetPrivateLinkResourceResponse,
  RegistriesListCredentialsOptionalParams,
  RegistriesListCredentialsResponse,
  RegenerateCredentialParameters,
  RegistriesRegenerateCredentialOptionalParams,
  RegistriesRegenerateCredentialResponse,
  GenerateCredentialsParameters,
  RegistriesGenerateCredentialsOptionalParams,
  RegistriesGenerateCredentialsResponse,
  RunRequestUnion,
  RegistriesScheduleRunOptionalParams,
  RegistriesScheduleRunResponse,
  RegistriesGetBuildSourceUploadUrlOptionalParams,
  RegistriesGetBuildSourceUploadUrlResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Registries. */
export interface Registries {
  /**
   * Lists all the container registries under the specified subscription.
   * @param options The options parameters.
   */
  list(
    options?: RegistriesListOptionalParams
  ): PagedAsyncIterableIterator<Registry>;
  /**
   * Lists all the container registries under the specified resource group.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: RegistriesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Registry>;
  /**
   * Lists the private link resources for a container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  listPrivateLinkResources(
    resourceGroupName: string,
    registryName: string,
    options?: RegistriesListPrivateLinkResourcesOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource>;
  /**
   * Copies an image to this container registry from the specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param parameters The parameters specifying the image to copy and the source container registry.
   * @param options The options parameters.
   */
  beginImportImage(
    resourceGroupName: string,
    registryName: string,
    parameters: ImportImageParameters,
    options?: RegistriesImportImageOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Copies an image to this container registry from the specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param parameters The parameters specifying the image to copy and the source container registry.
   * @param options The options parameters.
   */
  beginImportImageAndWait(
    resourceGroupName: string,
    registryName: string,
    parameters: ImportImageParameters,
    options?: RegistriesImportImageOptionalParams
  ): Promise<void>;
  /**
   * Checks whether the container registry name is available for use. The name must contain only
   * alphanumeric characters, be globally unique, and between 5 and 50 characters in length.
   * @param registryNameCheckRequest The object containing information for the availability request.
   * @param options The options parameters.
   */
  checkNameAvailability(
    registryNameCheckRequest: RegistryNameCheckRequest,
    options?: RegistriesCheckNameAvailabilityOptionalParams
  ): Promise<RegistriesCheckNameAvailabilityResponse>;
  /**
   * Gets the properties of the specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    options?: RegistriesGetOptionalParams
  ): Promise<RegistriesGetResponse>;
  /**
   * Creates a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param registry The parameters for creating a container registry.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    registryName: string,
    registry: Registry,
    options?: RegistriesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RegistriesCreateResponse>,
      RegistriesCreateResponse
    >
  >;
  /**
   * Creates a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param registry The parameters for creating a container registry.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    registry: Registry,
    options?: RegistriesCreateOptionalParams
  ): Promise<RegistriesCreateResponse>;
  /**
   * Deletes a container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    registryName: string,
    options?: RegistriesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    options?: RegistriesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param registryUpdateParameters The parameters for updating a container registry.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    registryName: string,
    registryUpdateParameters: RegistryUpdateParameters,
    options?: RegistriesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RegistriesUpdateResponse>,
      RegistriesUpdateResponse
    >
  >;
  /**
   * Updates a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param registryUpdateParameters The parameters for updating a container registry.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    registryUpdateParameters: RegistryUpdateParameters,
    options?: RegistriesUpdateOptionalParams
  ): Promise<RegistriesUpdateResponse>;
  /**
   * Gets the quota usages for the specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  listUsages(
    resourceGroupName: string,
    registryName: string,
    options?: RegistriesListUsagesOptionalParams
  ): Promise<RegistriesListUsagesResponse>;
  /**
   * Gets a private link resource by a specified group name for a container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param groupName The name of the private link resource.
   * @param options The options parameters.
   */
  getPrivateLinkResource(
    resourceGroupName: string,
    registryName: string,
    groupName: string,
    options?: RegistriesGetPrivateLinkResourceOptionalParams
  ): Promise<RegistriesGetPrivateLinkResourceResponse>;
  /**
   * Lists the login credentials for the specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  listCredentials(
    resourceGroupName: string,
    registryName: string,
    options?: RegistriesListCredentialsOptionalParams
  ): Promise<RegistriesListCredentialsResponse>;
  /**
   * Regenerates one of the login credentials for the specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param regenerateCredentialParameters Specifies name of the password which should be regenerated --
   *                                       password or password2.
   * @param options The options parameters.
   */
  regenerateCredential(
    resourceGroupName: string,
    registryName: string,
    regenerateCredentialParameters: RegenerateCredentialParameters,
    options?: RegistriesRegenerateCredentialOptionalParams
  ): Promise<RegistriesRegenerateCredentialResponse>;
  /**
   * Generate keys for a token of a specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param generateCredentialsParameters The parameters for generating credentials.
   * @param options The options parameters.
   */
  beginGenerateCredentials(
    resourceGroupName: string,
    registryName: string,
    generateCredentialsParameters: GenerateCredentialsParameters,
    options?: RegistriesGenerateCredentialsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RegistriesGenerateCredentialsResponse>,
      RegistriesGenerateCredentialsResponse
    >
  >;
  /**
   * Generate keys for a token of a specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param generateCredentialsParameters The parameters for generating credentials.
   * @param options The options parameters.
   */
  beginGenerateCredentialsAndWait(
    resourceGroupName: string,
    registryName: string,
    generateCredentialsParameters: GenerateCredentialsParameters,
    options?: RegistriesGenerateCredentialsOptionalParams
  ): Promise<RegistriesGenerateCredentialsResponse>;
  /**
   * Schedules a new run based on the request parameters and add it to the run queue.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runRequest The parameters of a run that needs to scheduled.
   * @param options The options parameters.
   */
  beginScheduleRun(
    resourceGroupName: string,
    registryName: string,
    runRequest: RunRequestUnion,
    options?: RegistriesScheduleRunOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RegistriesScheduleRunResponse>,
      RegistriesScheduleRunResponse
    >
  >;
  /**
   * Schedules a new run based on the request parameters and add it to the run queue.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param runRequest The parameters of a run that needs to scheduled.
   * @param options The options parameters.
   */
  beginScheduleRunAndWait(
    resourceGroupName: string,
    registryName: string,
    runRequest: RunRequestUnion,
    options?: RegistriesScheduleRunOptionalParams
  ): Promise<RegistriesScheduleRunResponse>;
  /**
   * Get the upload location for the user to be able to upload the source.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  getBuildSourceUploadUrl(
    resourceGroupName: string,
    registryName: string,
    options?: RegistriesGetBuildSourceUploadUrlOptionalParams
  ): Promise<RegistriesGetBuildSourceUploadUrlResponse>;
}
