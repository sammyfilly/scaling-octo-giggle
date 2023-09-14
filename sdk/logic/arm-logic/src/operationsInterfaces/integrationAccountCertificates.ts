/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  IntegrationAccountCertificate,
  IntegrationAccountCertificatesListOptionalParams,
  IntegrationAccountCertificatesGetOptionalParams,
  IntegrationAccountCertificatesGetResponse,
  IntegrationAccountCertificatesCreateOrUpdateOptionalParams,
  IntegrationAccountCertificatesCreateOrUpdateResponse,
  IntegrationAccountCertificatesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IntegrationAccountCertificates. */
export interface IntegrationAccountCertificates {
  /**
   * Gets a list of integration account certificates.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountCertificatesListOptionalParams
  ): PagedAsyncIterableIterator<IntegrationAccountCertificate>;
  /**
   * Gets an integration account certificate.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param certificateName The integration account certificate name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    integrationAccountName: string,
    certificateName: string,
    options?: IntegrationAccountCertificatesGetOptionalParams
  ): Promise<IntegrationAccountCertificatesGetResponse>;
  /**
   * Creates or updates an integration account certificate.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param certificateName The integration account certificate name.
   * @param certificate The integration account certificate.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    integrationAccountName: string,
    certificateName: string,
    certificate: IntegrationAccountCertificate,
    options?: IntegrationAccountCertificatesCreateOrUpdateOptionalParams
  ): Promise<IntegrationAccountCertificatesCreateOrUpdateResponse>;
  /**
   * Deletes an integration account certificate.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param certificateName The integration account certificate name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    integrationAccountName: string,
    certificateName: string,
    options?: IntegrationAccountCertificatesDeleteOptionalParams
  ): Promise<void>;
}
