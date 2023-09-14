/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Table } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClient } from "../generatedClient";
import {
  TableQueryOptionalParams,
  TableQueryOperationResponse,
  TableProperties,
  TableCreateOptionalParams,
  TableCreateResponse,
  TableDeleteOptionalParams,
  TableDeleteResponse,
  TableQueryEntitiesOptionalParams,
  TableQueryEntitiesResponse,
  TableQueryEntitiesWithPartitionAndRowKeyOptionalParams,
  TableQueryEntitiesWithPartitionAndRowKeyResponse,
  TableUpdateEntityOptionalParams,
  TableUpdateEntityResponse,
  TableMergeEntityOptionalParams,
  TableMergeEntityResponse,
  TableDeleteEntityOptionalParams,
  TableDeleteEntityResponse,
  TableInsertEntityOptionalParams,
  TableInsertEntityResponse,
  TableGetAccessPolicyOptionalParams,
  TableGetAccessPolicyResponse,
  TableSetAccessPolicyOptionalParams,
  TableSetAccessPolicyResponse
} from "../models";

/** Class containing Table operations. */
export class TableImpl implements Table {
  private readonly client: GeneratedClient;

  /**
   * Initialize a new instance of the class Table class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClient) {
    this.client = client;
  }

  /**
   * Queries tables under the given account.
   * @param options The options parameters.
   */
  query(
    options?: TableQueryOptionalParams
  ): Promise<TableQueryOperationResponse> {
    return this.client.sendOperationRequest({ options }, queryOperationSpec);
  }

  /**
   * Creates a new table under the given account.
   * @param tableProperties The Table properties.
   * @param options The options parameters.
   */
  create(
    tableProperties: TableProperties,
    options?: TableCreateOptionalParams
  ): Promise<TableCreateResponse> {
    return this.client.sendOperationRequest(
      { tableProperties, options },
      createOperationSpec
    );
  }

  /**
   * Operation permanently deletes the specified table.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  delete(
    table: string,
    options?: TableDeleteOptionalParams
  ): Promise<TableDeleteResponse> {
    return this.client.sendOperationRequest(
      { table, options },
      deleteOperationSpec
    );
  }

  /**
   * Queries entities in a table.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  queryEntities(
    table: string,
    options?: TableQueryEntitiesOptionalParams
  ): Promise<TableQueryEntitiesResponse> {
    return this.client.sendOperationRequest(
      { table, options },
      queryEntitiesOperationSpec
    );
  }

  /**
   * Queries entities in a table.
   * @param table The name of the table.
   * @param partitionKey The partition key of the entity.
   * @param rowKey The row key of the entity.
   * @param options The options parameters.
   */
  queryEntitiesWithPartitionAndRowKey(
    table: string,
    partitionKey: string,
    rowKey: string,
    options?: TableQueryEntitiesWithPartitionAndRowKeyOptionalParams
  ): Promise<TableQueryEntitiesWithPartitionAndRowKeyResponse> {
    return this.client.sendOperationRequest(
      { table, partitionKey, rowKey, options },
      queryEntitiesWithPartitionAndRowKeyOperationSpec
    );
  }

  /**
   * Update entity in a table.
   * @param table The name of the table.
   * @param partitionKey The partition key of the entity.
   * @param rowKey The row key of the entity.
   * @param options The options parameters.
   */
  updateEntity(
    table: string,
    partitionKey: string,
    rowKey: string,
    options?: TableUpdateEntityOptionalParams
  ): Promise<TableUpdateEntityResponse> {
    return this.client.sendOperationRequest(
      { table, partitionKey, rowKey, options },
      updateEntityOperationSpec
    );
  }

  /**
   * Merge entity in a table.
   * @param table The name of the table.
   * @param partitionKey The partition key of the entity.
   * @param rowKey The row key of the entity.
   * @param options The options parameters.
   */
  mergeEntity(
    table: string,
    partitionKey: string,
    rowKey: string,
    options?: TableMergeEntityOptionalParams
  ): Promise<TableMergeEntityResponse> {
    return this.client.sendOperationRequest(
      { table, partitionKey, rowKey, options },
      mergeEntityOperationSpec
    );
  }

  /**
   * Deletes the specified entity in a table.
   * @param table The name of the table.
   * @param partitionKey The partition key of the entity.
   * @param rowKey The row key of the entity.
   * @param ifMatch Match condition for an entity to be deleted. If specified and a matching entity is
   *                not found, an error will be raised. To force an unconditional delete, set to the wildcard character
   *                (*).
   * @param options The options parameters.
   */
  deleteEntity(
    table: string,
    partitionKey: string,
    rowKey: string,
    ifMatch: string,
    options?: TableDeleteEntityOptionalParams
  ): Promise<TableDeleteEntityResponse> {
    return this.client.sendOperationRequest(
      { table, partitionKey, rowKey, ifMatch, options },
      deleteEntityOperationSpec
    );
  }

  /**
   * Insert entity in a table.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  insertEntity(
    table: string,
    options?: TableInsertEntityOptionalParams
  ): Promise<TableInsertEntityResponse> {
    return this.client.sendOperationRequest(
      { table, options },
      insertEntityOperationSpec
    );
  }

  /**
   * Retrieves details about any stored access policies specified on the table that may be used with
   * Shared Access Signatures.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  getAccessPolicy(
    table: string,
    options?: TableGetAccessPolicyOptionalParams
  ): Promise<TableGetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      { table, options },
      getAccessPolicyOperationSpec
    );
  }

  /**
   * Sets stored access policies for the table that may be used with Shared Access Signatures.
   * @param table The name of the table.
   * @param options The options parameters.
   */
  setAccessPolicy(
    table: string,
    options?: TableSetAccessPolicyOptionalParams
  ): Promise<TableSetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      { table, options },
      setAccessPolicyOperationSpec
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const queryOperationSpec: coreClient.OperationSpec = {
  path: "/Tables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableQueryResponse,
      headersMapper: Mappers.TableQueryHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableQueryExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.format,
    Parameters.top,
    Parameters.select,
    Parameters.filter,
    Parameters.nextTableName
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion
  ],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/Tables",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.TableResponse,
      headersMapper: Mappers.TableCreateHeaders
    },
    204: {
      headersMapper: Mappers.TableCreateHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableCreateExceptionHeaders
    }
  },
  requestBody: Parameters.tableProperties,
  queryParameters: [Parameters.format],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.contentType,
    Parameters.responsePreference
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/Tables('{table}')",
  httpMethod: "DELETE",
  responses: {
    204: {
      headersMapper: Mappers.TableDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableDeleteExceptionHeaders
    }
  },
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  serializer
};
const queryEntitiesOperationSpec: coreClient.OperationSpec = {
  path: "/{table}()",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableEntityQueryResponse,
      headersMapper: Mappers.TableQueryEntitiesHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableQueryEntitiesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.format,
    Parameters.top,
    Parameters.select,
    Parameters.filter,
    Parameters.timeout,
    Parameters.nextPartitionKey,
    Parameters.nextRowKey
  ],
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion
  ],
  serializer
};
const queryEntitiesWithPartitionAndRowKeyOperationSpec: coreClient.OperationSpec = {
  path: "/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      },
      headersMapper: Mappers.TableQueryEntitiesWithPartitionAndRowKeyHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper:
        Mappers.TableQueryEntitiesWithPartitionAndRowKeyExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.format,
    Parameters.select,
    Parameters.filter,
    Parameters.timeout
  ],
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion
  ],
  serializer
};
const updateEntityOperationSpec: coreClient.OperationSpec = {
  path: "/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.TableUpdateEntityHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableUpdateEntityExceptionHeaders
    }
  },
  requestBody: Parameters.tableEntityProperties,
  queryParameters: [Parameters.format, Parameters.timeout],
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.accept1,
    Parameters.contentType1,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const mergeEntityOperationSpec: coreClient.OperationSpec = {
  path: "/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  httpMethod: "PATCH",
  responses: {
    204: {
      headersMapper: Mappers.TableMergeEntityHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableMergeEntityExceptionHeaders
    }
  },
  requestBody: Parameters.tableEntityProperties,
  queryParameters: [Parameters.format, Parameters.timeout],
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.accept1,
    Parameters.contentType1,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteEntityOperationSpec: coreClient.OperationSpec = {
  path: "/{table}(PartitionKey='{partitionKey}',RowKey='{rowKey}')",
  httpMethod: "DELETE",
  responses: {
    204: {
      headersMapper: Mappers.TableDeleteEntityHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableDeleteEntityExceptionHeaders
    }
  },
  queryParameters: [Parameters.format, Parameters.timeout],
  urlParameters: [
    Parameters.url,
    Parameters.table,
    Parameters.partitionKey,
    Parameters.rowKey
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.ifMatch1
  ],
  serializer
};
const insertEntityOperationSpec: coreClient.OperationSpec = {
  path: "/{table}",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      },
      headersMapper: Mappers.TableInsertEntityHeaders
    },
    204: {
      headersMapper: Mappers.TableInsertEntityHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableInsertEntityExceptionHeaders
    }
  },
  requestBody: Parameters.tableEntityProperties,
  queryParameters: [Parameters.format, Parameters.timeout],
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [
    Parameters.accept,
    Parameters.version,
    Parameters.requestId,
    Parameters.dataServiceVersion,
    Parameters.contentType,
    Parameters.responsePreference
  ],
  mediaType: "json",
  serializer
};
const getAccessPolicyOperationSpec: coreClient.OperationSpec = {
  path: "/{table}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "SignedIdentifier" }
          }
        },
        serializedName: "SignedIdentifiers",
        xmlName: "SignedIdentifiers",
        xmlIsWrapped: true,
        xmlElementName: "SignedIdentifier"
      },
      headersMapper: Mappers.TableGetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableGetAccessPolicyExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.comp],
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept2
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setAccessPolicyOperationSpec: coreClient.OperationSpec = {
  path: "/{table}",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.TableSetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.TableSetAccessPolicyExceptionHeaders
    }
  },
  requestBody: Parameters.tableAcl,
  queryParameters: [Parameters.timeout, Parameters.comp],
  urlParameters: [Parameters.url, Parameters.table],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.contentType2,
    Parameters.accept3
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
