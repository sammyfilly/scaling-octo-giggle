/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  TableProperties as TablePropertiesMapper,
  TableServiceProperties as TableServicePropertiesMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json;odata=minimalmetadata",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const url: OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    serializedName: "url",
    required: true,
    xmlName: "url",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const version: OperationParameter = {
  parameterPath: "version",
  mapper: {
    defaultValue: "2019-02-02",
    isConstant: true,
    serializedName: "x-ms-version",
    type: {
      name: "String"
    }
  }
};

export const requestId: OperationParameter = {
  parameterPath: ["options", "requestId"],
  mapper: {
    serializedName: "x-ms-client-request-id",
    xmlName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};

export const dataServiceVersion: OperationParameter = {
  parameterPath: "dataServiceVersion",
  mapper: {
    defaultValue: "3.0",
    isConstant: true,
    serializedName: "DataServiceVersion",
    type: {
      name: "String"
    }
  }
};

export const format: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "format"],
  mapper: {
    serializedName: "$format",
    xmlName: "$format",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "top"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "$top",
    xmlName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "select"],
  mapper: {
    serializedName: "$select",
    xmlName: "$select",
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "filter"],
  mapper: {
    serializedName: "$filter",
    xmlName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const nextTableName: OperationQueryParameter = {
  parameterPath: ["options", "nextTableName"],
  mapper: {
    serializedName: "NextTableName",
    xmlName: "NextTableName",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json;odata=nometadata",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const tableProperties: OperationParameter = {
  parameterPath: "tableProperties",
  mapper: TablePropertiesMapper
};

export const responsePreference: OperationParameter = {
  parameterPath: ["options", "responsePreference"],
  mapper: {
    serializedName: "Prefer",
    xmlName: "Prefer",
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const table: OperationURLParameter = {
  parameterPath: "table",
  mapper: {
    serializedName: "table",
    required: true,
    xmlName: "table",
    type: {
      name: "String"
    }
  }
};

export const timeout: OperationQueryParameter = {
  parameterPath: ["options", "timeout"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "timeout",
    xmlName: "timeout",
    type: {
      name: "Number"
    }
  }
};

export const nextPartitionKey: OperationQueryParameter = {
  parameterPath: ["options", "nextPartitionKey"],
  mapper: {
    serializedName: "NextPartitionKey",
    xmlName: "NextPartitionKey",
    type: {
      name: "String"
    }
  }
};

export const nextRowKey: OperationQueryParameter = {
  parameterPath: ["options", "nextRowKey"],
  mapper: {
    serializedName: "NextRowKey",
    xmlName: "NextRowKey",
    type: {
      name: "String"
    }
  }
};

export const partitionKey: OperationURLParameter = {
  parameterPath: "partitionKey",
  mapper: {
    serializedName: "partitionKey",
    required: true,
    xmlName: "partitionKey",
    type: {
      name: "String"
    }
  }
};

export const rowKey: OperationURLParameter = {
  parameterPath: "rowKey",
  mapper: {
    serializedName: "rowKey",
    required: true,
    xmlName: "rowKey",
    type: {
      name: "String"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const tableEntityProperties: OperationParameter = {
  parameterPath: ["options", "tableEntityProperties"],
  mapper: {
    serializedName: "tableEntityProperties",
    xmlName: "tableEntityProperties",
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } }
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    xmlName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifMatch1: OperationParameter = {
  parameterPath: "ifMatch",
  mapper: {
    serializedName: "If-Match",
    required: true,
    xmlName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const comp: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "acl",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const contentType2: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const tableAcl: OperationParameter = {
  parameterPath: ["options", "tableAcl"],
  mapper: {
    serializedName: "tableAcl",
    xmlName: "SignedIdentifiers",
    xmlIsWrapped: true,
    xmlElementName: "SignedIdentifier",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "SignedIdentifier"
        }
      }
    }
  }
};

export const accept3: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const tableServiceProperties: OperationParameter = {
  parameterPath: "tableServiceProperties",
  mapper: TableServicePropertiesMapper
};

export const restype: OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    defaultValue: "service",
    isConstant: true,
    serializedName: "restype",
    type: {
      name: "String"
    }
  }
};

export const comp1: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "properties",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const comp2: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "stats",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};
