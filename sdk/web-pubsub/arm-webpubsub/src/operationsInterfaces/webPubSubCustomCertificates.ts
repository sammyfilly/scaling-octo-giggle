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
  CustomCertificate,
  WebPubSubCustomCertificatesListOptionalParams,
  WebPubSubCustomCertificatesGetOptionalParams,
  WebPubSubCustomCertificatesGetResponse,
  WebPubSubCustomCertificatesCreateOrUpdateOptionalParams,
  WebPubSubCustomCertificatesCreateOrUpdateResponse,
  WebPubSubCustomCertificatesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WebPubSubCustomCertificates. */
export interface WebPubSubCustomCertificates {
  /**
   * List all custom certificates.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubCustomCertificatesListOptionalParams
  ): PagedAsyncIterableIterator<CustomCertificate>;
  /**
   * Get a custom certificate.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param certificateName Custom certificate name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?: WebPubSubCustomCertificatesGetOptionalParams
  ): Promise<WebPubSubCustomCertificatesGetResponse>;
  /**
   * Create or update a custom certificate.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param certificateName Custom certificate name
   * @param parameters A custom certificate.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    parameters: CustomCertificate,
    options?: WebPubSubCustomCertificatesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WebPubSubCustomCertificatesCreateOrUpdateResponse>,
      WebPubSubCustomCertificatesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a custom certificate.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param certificateName Custom certificate name
   * @param parameters A custom certificate.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    parameters: CustomCertificate,
    options?: WebPubSubCustomCertificatesCreateOrUpdateOptionalParams
  ): Promise<WebPubSubCustomCertificatesCreateOrUpdateResponse>;
  /**
   * Delete a custom certificate.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param certificateName Custom certificate name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    certificateName: string,
    options?: WebPubSubCustomCertificatesDeleteOptionalParams
  ): Promise<void>;
}
