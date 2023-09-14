// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { StorageClientContext } from "./generated/src/storageClientContext";
import { PipelineLike } from "./Pipeline";
import { escapeURLPath, getURLScheme, iEqual, getAccountNameFromUrl } from "./utils/utils.common";
import { AnonymousCredential } from "./credentials/AnonymousCredential";
import { StorageSharedKeyCredential } from "./credentials/StorageSharedKeyCredential";
import { TokenCredential, isTokenCredential, isNode } from "@azure/core-http";
import { OperationTracingOptions } from "@azure/core-tracing";

/**
 * An interface for options common to every remote operation.
 */
export interface CommonOptions {
  /**
   * Options to configure spans created when tracing is enabled.
   */
  tracingOptions?: OperationTracingOptions;
}

/**
 * A StorageClient represents a based URL class for {@link BlobServiceClient}, {@link ContainerClient}
 * and etc.
 */
export abstract class StorageClient {
  /**
   * Encoded URL string value.
   */
  public readonly url: string;
  public readonly accountName: string;
  /**
   * Request policy pipeline.
   *
   * @internal
   */
  protected readonly pipeline: PipelineLike;
  /**
   * Such as AnonymousCredential, StorageSharedKeyCredential or any credential from the `@azure/identity` package to authenticate requests to the service. You can also provide an object that implements the TokenCredential interface. If not specified, AnonymousCredential is used.
   */
  public readonly credential: StorageSharedKeyCredential | AnonymousCredential | TokenCredential;
  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   */
  protected readonly storageClientContext: StorageClientContext;
  /**
   */
  protected readonly isHttps: boolean;

  /**
   * Creates an instance of StorageClient.
   * @param url - url to resource
   * @param pipeline - request policy pipeline.
   */
  protected constructor(url: string, pipeline: PipelineLike) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);
    this.accountName = getAccountNameFromUrl(url);
    this.pipeline = pipeline;
    this.storageClientContext = new StorageClientContext(
      this.url,
      pipeline.toServiceClientOptions()
    );

    this.isHttps = iEqual(getURLScheme(this.url) || "", "https");

    this.credential = new AnonymousCredential();
    for (const factory of this.pipeline.factories) {
      if (
        (isNode && factory instanceof StorageSharedKeyCredential) ||
        factory instanceof AnonymousCredential
      ) {
        this.credential = factory;
      } else if (isTokenCredential((factory as any).credential)) {
        // Only works if the factory has been attached a "credential" property.
        // We do that in newPipeline() when using TokenCredential.
        this.credential = (factory as any).credential;
      }
    }

    // Override protocol layer's default content-type
    const storageClientContext = this.storageClientContext as any;
    storageClientContext.requestContentType = undefined;
  }
}
