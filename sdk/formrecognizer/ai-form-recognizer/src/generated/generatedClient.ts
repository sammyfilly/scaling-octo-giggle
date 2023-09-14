/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  StringIndexType,
  GeneratedClientOptionalParams,
  OperationSummary,
  GetOperationsNextOptionalParams,
  GetOperationsOptionalParams,
  DocumentModelSummary,
  GetDocumentModelsNextOptionalParams,
  GetDocumentModelsOptionalParams,
  ContentType,
  AnalyzeDocument$binaryOptionalParams,
  AnalyzeDocument$textOptionalParams,
  AnalyzeDocument$jsonOptionalParams,
  AnalyzeDocumentResponse,
  GetAnalyzeDocumentResultOptionalParams,
  GetAnalyzeDocumentResultResponse,
  BuildDocumentModelRequest,
  BuildDocumentModelOptionalParams,
  BuildDocumentModelResponse,
  ComposeDocumentModelRequest,
  ComposeDocumentModelOptionalParams,
  ComposeDocumentModelResponse,
  AuthorizeCopyRequest,
  AuthorizeCopyDocumentModelOptionalParams,
  AuthorizeCopyDocumentModelResponse,
  CopyAuthorization,
  CopyDocumentModelToOptionalParams,
  CopyDocumentModelToResponse,
  GetOperationsOperationResponse,
  GetOperationOptionalParams,
  GetOperationResponse,
  GetDocumentModelsOperationResponse,
  GetDocumentModelOptionalParams,
  GetDocumentModelResponse,
  DeleteDocumentModelOptionalParams,
  GetResourceDetailsOptionalParams,
  GetResourceDetailsResponse,
  GetOperationsNextResponse,
  GetDocumentModelsNextResponse
} from "./models";

/// <reference lib="esnext.asynciterable" />
export class GeneratedClient extends coreClient.ServiceClient {
  endpoint: string;
  stringIndexType?: StringIndexType;
  apiVersion: string;

  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for
   *                 example: https://westus2.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: GeneratedClientOptionalParams) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: GeneratedClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-ai-form-recognizer/4.0.0-beta.6`;
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
      baseUri:
        options.endpoint ?? options.baseUri ?? "{endpoint}/formrecognizer"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "2022-06-30-preview";
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * Lists all operations.
   * @param options The options parameters.
   */
  public listOperations(
    options?: GetOperationsOptionalParams
  ): PagedAsyncIterableIterator<OperationSummary> {
    const iter = this.getOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getOperationsPagingPage(options);
      }
    };
  }

  private async *getOperationsPagingPage(
    options?: GetOperationsOptionalParams
  ): AsyncIterableIterator<OperationSummary[]> {
    let result = await this._getOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getOperationsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getOperationsPagingAll(
    options?: GetOperationsOptionalParams
  ): AsyncIterableIterator<OperationSummary> {
    for await (const page of this.getOperationsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List all document models
   * @param options The options parameters.
   */
  public listDocumentModels(
    options?: GetDocumentModelsOptionalParams
  ): PagedAsyncIterableIterator<DocumentModelSummary> {
    const iter = this.getDocumentModelsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getDocumentModelsPagingPage(options);
      }
    };
  }

  private async *getDocumentModelsPagingPage(
    options?: GetDocumentModelsOptionalParams
  ): AsyncIterableIterator<DocumentModelSummary[]> {
    let result = await this._getDocumentModels(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getDocumentModelsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getDocumentModelsPagingAll(
    options?: GetDocumentModelsOptionalParams
  ): AsyncIterableIterator<DocumentModelSummary> {
    for await (const page of this.getDocumentModelsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Analyzes document with document model.
   * @param modelId Unique document model name.
   * @param contentType Upload file type
   * @param options The options parameters.
   */
  analyzeDocument(
    modelId: string,
    contentType: ContentType,
    options?: AnalyzeDocument$binaryOptionalParams
  ): Promise<AnalyzeDocumentResponse>;
  /**
   * Analyzes document with document model.
   * @param modelId Unique document model name.
   * @param contentType Upload file type
   * @param options The options parameters.
   */
  analyzeDocument(
    modelId: string,
    contentType: "text/html",
    options?: AnalyzeDocument$textOptionalParams
  ): Promise<AnalyzeDocumentResponse>;
  /**
   * Analyzes document with document model.
   * @param modelId Unique document model name.
   * @param contentType Body Parameter content-type
   * @param options The options parameters.
   */
  analyzeDocument(
    modelId: string,
    contentType: "application/json",
    options?: AnalyzeDocument$jsonOptionalParams
  ): Promise<AnalyzeDocumentResponse>;
  /**
   * Analyzes document with document model.
   * @param args Includes all the parameters for this operation.
   */
  analyzeDocument(
    ...args:
      | [string, ContentType, AnalyzeDocument$binaryOptionalParams?]
      | [string, "text/html", AnalyzeDocument$textOptionalParams?]
      | [string, "application/json", AnalyzeDocument$jsonOptionalParams?]
  ): Promise<AnalyzeDocumentResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (
      args[1] === "application/octet-stream" ||
      args[1] === "application/pdf" ||
      args[1] ===
        "application/vnd.openxmlformats-officedocument.presentationml.presentation" ||
      args[1] ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      args[1] ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      args[1] === "image/bmp" ||
      args[1] === "image/heif" ||
      args[1] === "image/jpeg" ||
      args[1] === "image/png" ||
      args[1] === "image/tiff"
    ) {
      operationSpec = analyzeDocument$binaryOperationSpec;
      operationArguments = {
        modelId: args[0],
        contentType: args[1],
        options: args[2]
      };
      options = args[2];
    } else if (args[1] === "text/html") {
      operationSpec = analyzeDocument$textOperationSpec;
      operationArguments = {
        modelId: args[0],
        contentType: args[1],
        options: args[2]
      };
      options = args[2];
    } else if (args[1] === "application/json") {
      operationSpec = analyzeDocument$jsonOperationSpec;
      operationArguments = {
        modelId: args[0],
        contentType: args[1],
        options: args[2]
      };
      options = args[2];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[1]}".`
      );
    }
    operationArguments.options = options || {};
    return this.sendOperationRequest(operationArguments, operationSpec);
  }

  /**
   * Gets the result of document analysis.
   * @param modelId Unique document model name.
   * @param resultId Analyze operation result ID.
   * @param options The options parameters.
   */
  getAnalyzeDocumentResult(
    modelId: string,
    resultId: string,
    options?: GetAnalyzeDocumentResultOptionalParams
  ): Promise<GetAnalyzeDocumentResultResponse> {
    return this.sendOperationRequest(
      { modelId, resultId, options },
      getAnalyzeDocumentResultOperationSpec
    );
  }

  /**
   * Builds a custom document analysis model.
   * @param buildRequest Building request parameters.
   * @param options The options parameters.
   */
  buildDocumentModel(
    buildRequest: BuildDocumentModelRequest,
    options?: BuildDocumentModelOptionalParams
  ): Promise<BuildDocumentModelResponse> {
    return this.sendOperationRequest(
      { buildRequest, options },
      buildDocumentModelOperationSpec
    );
  }

  /**
   * Creates a new document model from document types of existing document models.
   * @param composeRequest Compose request parameters.
   * @param options The options parameters.
   */
  composeDocumentModel(
    composeRequest: ComposeDocumentModelRequest,
    options?: ComposeDocumentModelOptionalParams
  ): Promise<ComposeDocumentModelResponse> {
    return this.sendOperationRequest(
      { composeRequest, options },
      composeDocumentModelOperationSpec
    );
  }

  /**
   * Generates authorization to copy a document model to this location with specified modelId and
   * optional description.
   * @param authorizeCopyRequest Authorize copy request parameters.
   * @param options The options parameters.
   */
  authorizeCopyDocumentModel(
    authorizeCopyRequest: AuthorizeCopyRequest,
    options?: AuthorizeCopyDocumentModelOptionalParams
  ): Promise<AuthorizeCopyDocumentModelResponse> {
    return this.sendOperationRequest(
      { authorizeCopyRequest, options },
      authorizeCopyDocumentModelOperationSpec
    );
  }

  /**
   * Copies document model to the target resource, region, and modelId.
   * @param modelId Unique document model name.
   * @param copyToRequest Copy to request parameters.
   * @param options The options parameters.
   */
  copyDocumentModelTo(
    modelId: string,
    copyToRequest: CopyAuthorization,
    options?: CopyDocumentModelToOptionalParams
  ): Promise<CopyDocumentModelToResponse> {
    return this.sendOperationRequest(
      { modelId, copyToRequest, options },
      copyDocumentModelToOperationSpec
    );
  }

  /**
   * Lists all operations.
   * @param options The options parameters.
   */
  private _getOperations(
    options?: GetOperationsOptionalParams
  ): Promise<GetOperationsOperationResponse> {
    return this.sendOperationRequest({ options }, getOperationsOperationSpec);
  }

  /**
   * Gets operation info.
   * @param operationId Unique operation ID.
   * @param options The options parameters.
   */
  getOperation(
    operationId: string,
    options?: GetOperationOptionalParams
  ): Promise<GetOperationResponse> {
    return this.sendOperationRequest(
      { operationId, options },
      getOperationOperationSpec
    );
  }

  /**
   * List all document models
   * @param options The options parameters.
   */
  private _getDocumentModels(
    options?: GetDocumentModelsOptionalParams
  ): Promise<GetDocumentModelsOperationResponse> {
    return this.sendOperationRequest(
      { options },
      getDocumentModelsOperationSpec
    );
  }

  /**
   * Gets detailed document model information.
   * @param modelId Unique document model name.
   * @param options The options parameters.
   */
  getDocumentModel(
    modelId: string,
    options?: GetDocumentModelOptionalParams
  ): Promise<GetDocumentModelResponse> {
    return this.sendOperationRequest(
      { modelId, options },
      getDocumentModelOperationSpec
    );
  }

  /**
   * Deletes document model.
   * @param modelId Unique document model name.
   * @param options The options parameters.
   */
  deleteDocumentModel(
    modelId: string,
    options?: DeleteDocumentModelOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { modelId, options },
      deleteDocumentModelOperationSpec
    );
  }

  /**
   * Return information about the current resource.
   * @param options The options parameters.
   */
  getResourceDetails(
    options?: GetResourceDetailsOptionalParams
  ): Promise<GetResourceDetailsResponse> {
    return this.sendOperationRequest(
      { options },
      getResourceDetailsOperationSpec
    );
  }

  /**
   * GetOperationsNext
   * @param nextLink The nextLink from the previous successful call to the GetOperations method.
   * @param options The options parameters.
   */
  private _getOperationsNext(
    nextLink: string,
    options?: GetOperationsNextOptionalParams
  ): Promise<GetOperationsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getOperationsNextOperationSpec
    );
  }

  /**
   * GetDocumentModelsNext
   * @param nextLink The nextLink from the previous successful call to the GetDocumentModels method.
   * @param options The options parameters.
   */
  private _getDocumentModelsNext(
    nextLink: string,
    options?: GetDocumentModelsNextOptionalParams
  ): Promise<GetDocumentModelsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getDocumentModelsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const analyzeDocument$binaryOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}:analyze",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.GeneratedClientAnalyzeDocumentHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.analyzeRequest,
  queryParameters: [
    Parameters.pages,
    Parameters.locale,
    Parameters.stringIndexType,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "binary",
  serializer
};
const analyzeDocument$textOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}:analyze",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.GeneratedClientAnalyzeDocumentHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.analyzeRequest1,
  queryParameters: [
    Parameters.pages,
    Parameters.locale,
    Parameters.stringIndexType,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "text",
  serializer
};
const analyzeDocument$jsonOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}:analyze",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.GeneratedClientAnalyzeDocumentHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.analyzeRequest2,
  queryParameters: [
    Parameters.pages,
    Parameters.locale,
    Parameters.stringIndexType,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.contentType2, Parameters.accept2],
  mediaType: "json",
  serializer
};
const getAnalyzeDocumentResultOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}/analyzeResults/{resultId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AnalyzeResultOperation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.modelId, Parameters.resultId],
  headerParameters: [Parameters.accept2],
  serializer
};
const buildDocumentModelOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels:build",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.GeneratedClientBuildDocumentModelHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.buildRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2, Parameters.contentType3],
  mediaType: "json",
  serializer
};
const composeDocumentModelOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels:compose",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.GeneratedClientComposeDocumentModelHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.composeRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2, Parameters.contentType3],
  mediaType: "json",
  serializer
};
const authorizeCopyDocumentModelOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels:authorizeCopy",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CopyAuthorization
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.authorizeCopyRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2, Parameters.contentType3],
  mediaType: "json",
  serializer
};
const copyDocumentModelToOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}:copyTo",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.GeneratedClientCopyDocumentModelToHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.copyToRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.accept2, Parameters.contentType3],
  mediaType: "json",
  serializer
};
const getOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetOperationsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2],
  serializer
};
const getOperationOperationSpec: coreClient.OperationSpec = {
  path: "/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationDetails
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.operationId],
  headerParameters: [Parameters.accept2],
  serializer
};
const getDocumentModelsOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetDocumentModelsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2],
  serializer
};
const getDocumentModelOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DocumentModelDetails
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.accept2],
  serializer
};
const deleteDocumentModelOperationSpec: coreClient.OperationSpec = {
  path: "/documentModels/{modelId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.modelId],
  headerParameters: [Parameters.accept2],
  serializer
};
const getResourceDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/info",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceDetails
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept2],
  serializer
};
const getOperationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetOperationsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept2],
  serializer
};
const getDocumentModelsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetDocumentModelsResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept2],
  serializer
};
