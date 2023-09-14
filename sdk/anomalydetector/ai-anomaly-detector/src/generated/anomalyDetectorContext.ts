/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { AnomalyDetectorOptionalParams } from "./models";

const packageName = "@azure/ai-form-recognizer";
const packageVersion = "3.0.0-beta.6";

export class AnomalyDetectorContext extends coreHttp.ServiceClient {
  endpoint: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AnomalyDetectorContext class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   *                 https://westus2.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: AnomalyDetectorOptionalParams) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    const defaultUserAgent = `azsdk-js-${packageName.replace(
      "@azure/",
      ""
    )}/${packageVersion} ${coreHttp.getDefaultUserAgentValue()}`;

    super(undefined, {
      ...options,
      userAgent: options.userAgent
        ? `${options.userAgent} ${defaultUserAgent}`
        : `${defaultUserAgent}`
    });

    this.requestContentType = "application/json; charset=utf-8";
    this.baseUri =
      options.endpoint || "{Endpoint}/anomalydetector/{ApiVersion}";
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "v1.1-preview.1";
  }
}
