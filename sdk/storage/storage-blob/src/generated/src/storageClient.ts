/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttpCompat from "@azure/core-http-compat";
import {
  ServiceImpl,
  ContainerImpl,
  BlobImpl,
  PageBlobImpl,
  AppendBlobImpl,
  BlockBlobImpl
} from "./operations";
import {
  Service,
  Container,
  Blob,
  PageBlob,
  AppendBlob,
  BlockBlob
} from "./operationsInterfaces";
import { StorageClientOptionalParams } from "./models";

export class StorageClient extends coreHttpCompat.ExtendedServiceClient {
  url: string;
  version: string;

  /**
   * Initializes a new instance of the StorageClient class.
   * @param url The URL of the service account, container, or blob that is the target of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageClientOptionalParams) {
    if (url === undefined) {
      throw new Error("'url' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: StorageClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-azure-storage-blob/12.12.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{url}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.url = url;

    // Assigning values to Constant parameters
    this.version = options.version || "2021-12-02";
    this.service = new ServiceImpl(this);
    this.container = new ContainerImpl(this);
    this.blob = new BlobImpl(this);
    this.pageBlob = new PageBlobImpl(this);
    this.appendBlob = new AppendBlobImpl(this);
    this.blockBlob = new BlockBlobImpl(this);
  }

  service: Service;
  container: Container;
  blob: Blob;
  pageBlob: PageBlob;
  appendBlob: AppendBlob;
  blockBlob: BlockBlob;
}
