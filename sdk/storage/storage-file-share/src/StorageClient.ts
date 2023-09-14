// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StorageClientContext } from "./generated/src/storageClientContext";
import { Pipeline } from "./Pipeline";
import { escapeURLPath, getAccountNameFromUrl } from "./utils/utils.common";
import { SERVICE_VERSION } from "./utils/constants";
import { OperationTracingOptions } from "@azure/core-tracing";
import { AnonymousCredential } from "./credentials/AnonymousCredential";
import { Credential } from "./credentials/Credential";
import { isNode } from "@azure/core-http";
import { StorageSharedKeyCredential } from "./credentials/StorageSharedKeyCredential";

/**
 * An interface for options common to every remote operation.
 */
export interface CommonOptions {
  tracingOptions?: OperationTracingOptions;
}

/**
 * A StorageClient represents a base client class for ServiceClient, ContainerClient and etc.
 */
export abstract class StorageClient {
  /**
   * URL string value.
   */
  public readonly url: string;
  public readonly accountName: string;

  /**
   * Request policy pipeline.
   *
   * @internal
   */
  protected readonly pipeline: Pipeline;

  /**
   * Credential in the pipleline to authenticate requests to the service, such as AnonymousCredential, StorageSharedKeyCredential.
   * Initialized to an AnonymousCredential if not able to retrieve it from the pipeline.
   *
   * @internal
   */
  protected readonly credential: Credential;

  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   */
  protected readonly storageClientContext: StorageClientContext;

  /**
   * Creates an instance of StorageClient.
   * @param url -
   * @param pipeline -
   */
  protected constructor(url: string, pipeline: Pipeline) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);
    this.accountName = getAccountNameFromUrl(url);

    this.pipeline = pipeline;
    this.storageClientContext = new StorageClientContext(this.url, {
      version: SERVICE_VERSION,
      ...pipeline.toServiceClientOptions(),
    });

    // Remove the default content-type in generated code of StorageClientContext
    const storageClientContext = this.storageClientContext as any;
    if (storageClientContext.requestContentType) {
      storageClientContext.requestContentType = undefined;
    }

    // Retrieve credential from the pipeline.
    this.credential = new AnonymousCredential();
    for (const factory of this.pipeline.factories) {
      if (
        (isNode && factory instanceof StorageSharedKeyCredential) ||
        factory instanceof AnonymousCredential
      ) {
        this.credential = factory;
        break;
      }
    }
  }
}
