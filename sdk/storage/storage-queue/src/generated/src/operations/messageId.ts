/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";
import {
  MessageIdUpdateOptionalParams,
  MessageIdUpdateResponse,
  MessageIdDeleteOptionalParams,
  MessageIdDeleteResponse
} from "../models";

/** Class representing a MessageId. */
export class MessageId {
  private readonly client: StorageClientContext;

  /**
   * Initialize a new instance of the class MessageId class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * The Update operation was introduced with version 2011-08-18 of the Queue service API. The Update
   * Message operation updates the visibility timeout of a message. You can also use this operation to
   * update the contents of a message. A message must be in a format that can be included in an XML
   * request with UTF-8 encoding, and the encoded message can be up to 64KB in size.
   * @param popReceipt Required. Specifies the valid pop receipt value returned from an earlier call to
   *                   the Get Messages or Update Message operation.
   * @param visibilityTimeout Optional. Specifies the new visibility timeout value, in seconds, relative
   *                          to server time. The default value is 30 seconds. A specified value must be larger than or equal to 1
   *                          second, and cannot be larger than 7 days, or larger than 2 hours on REST protocol versions prior to
   *                          version 2011-08-18. The visibility timeout of a message can be set to a value later than the expiry
   *                          time.
   * @param options The options parameters.
   */
  update(
    popReceipt: string,
    visibilityTimeout: number,
    options?: MessageIdUpdateOptionalParams
  ): Promise<MessageIdUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      popReceipt,
      visibilityTimeout,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateOperationSpec
    ) as Promise<MessageIdUpdateResponse>;
  }

  /**
   * The Delete operation deletes the specified message.
   * @param popReceipt Required. Specifies the valid pop receipt value returned from an earlier call to
   *                   the Get Messages or Update Message operation.
   * @param options The options parameters.
   */
  delete(
    popReceipt: string,
    options?: MessageIdDeleteOptionalParams
  ): Promise<MessageIdDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      popReceipt,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<MessageIdDeleteResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const updateOperationSpec: coreHttp.OperationSpec = {
  path: "/{queueName}/messages/{messageid}",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.MessageIdUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.MessageIdUpdateExceptionHeaders
    }
  },
  requestBody: Parameters.queueMessage1,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.popReceipt,
    Parameters.visibilityTimeout1
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{queueName}/messages/{messageid}",
  httpMethod: "DELETE",
  responses: {
    204: {
      headersMapper: Mappers.MessageIdDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.MessageIdDeleteExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.popReceipt],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
