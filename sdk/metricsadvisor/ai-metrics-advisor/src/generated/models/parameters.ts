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
  AnomalyAlertingConfigurationPatch as AnomalyAlertingConfigurationPatchMapper,
  AnomalyAlertingConfiguration as AnomalyAlertingConfigurationMapper,
  AlertingResultQuery as AlertingResultQueryMapper,
  AnomalyDetectionConfigurationPatch as AnomalyDetectionConfigurationPatchMapper,
  AnomalyDetectionConfiguration as AnomalyDetectionConfigurationMapper,
  DetectionSeriesQuery as DetectionSeriesQueryMapper,
  DetectionAnomalyResultQuery as DetectionAnomalyResultQueryMapper,
  AnomalyDimensionQuery as AnomalyDimensionQueryMapper,
  DetectionIncidentResultQuery as DetectionIncidentResultQueryMapper,
  DataSourceCredential as DataSourceCredentialMapper,
  DataSourceCredentialPatch as DataSourceCredentialPatchMapper,
  DataFeedDetail as DataFeedDetailMapper,
  DataFeedDetailPatch as DataFeedDetailPatchMapper,
  MetricFeedbackFilter as MetricFeedbackFilterMapper,
  MetricFeedback as MetricFeedbackMapper,
  HookInfo as HookInfoMapper,
  HookInfoPatch as HookInfoPatchMapper,
  IngestionStatusQueryOptions as IngestionStatusQueryOptionsMapper,
  IngestionProgressResetOptions as IngestionProgressResetOptionsMapper,
  MetricDataQueryOptions as MetricDataQueryOptionsMapper,
  MetricSeriesQueryOptions as MetricSeriesQueryOptionsMapper,
  MetricDimensionQueryOptions as MetricDimensionQueryOptionsMapper,
  EnrichmentStatusQueryOption as EnrichmentStatusQueryOptionMapper
} from "../models/mappers";

export const accept: OperationParameter = {
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

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const configurationId: OperationURLParameter = {
  parameterPath: "configurationId",
  mapper: {
    serializedName: "configurationId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/merge-patch+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: AnomalyAlertingConfigurationPatchMapper
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

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: AnomalyAlertingConfigurationMapper
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: AlertingResultQueryMapper
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    serializedName: "$skip",
    type: {
      name: "Number"
    }
  }
};

export const maxpagesize: OperationQueryParameter = {
  parameterPath: ["options", "maxpagesize"],
  mapper: {
    serializedName: "$maxpagesize",
    type: {
      name: "Number"
    }
  }
};

export const alertId: OperationURLParameter = {
  parameterPath: "alertId",
  mapper: {
    serializedName: "alertId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: AnomalyDetectionConfigurationPatchMapper
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: AnomalyDetectionConfigurationMapper
};

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: DetectionSeriesQueryMapper
};

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: DetectionAnomalyResultQueryMapper
};

export const body7: OperationParameter = {
  parameterPath: "body",
  mapper: AnomalyDimensionQueryMapper
};

export const body8: OperationParameter = {
  parameterPath: "body",
  mapper: DetectionIncidentResultQueryMapper
};

export const token: OperationQueryParameter = {
  parameterPath: ["options", "token"],
  mapper: {
    serializedName: "$token",
    type: {
      name: "String"
    }
  }
};

export const incidentId: OperationURLParameter = {
  parameterPath: "incidentId",
  mapper: {
    serializedName: "incidentId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body9: OperationParameter = {
  parameterPath: "body",
  mapper: DataSourceCredentialMapper
};

export const body10: OperationParameter = {
  parameterPath: "body",
  mapper: DataSourceCredentialPatchMapper
};

export const credentialId: OperationURLParameter = {
  parameterPath: "credentialId",
  mapper: {
    serializedName: "credentialId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const dataFeedName: OperationQueryParameter = {
  parameterPath: ["options", "dataFeedName"],
  mapper: {
    serializedName: "dataFeedName",
    type: {
      name: "String"
    }
  }
};

export const dataSourceType: OperationQueryParameter = {
  parameterPath: ["options", "dataSourceType"],
  mapper: {
    serializedName: "dataSourceType",
    type: {
      name: "Enum",
      allowedValues: [
        "AzureApplicationInsights",
        "AzureBlob",
        "AzureCosmosDB",
        "AzureDataExplorer",
        "AzureDataLakeStorageGen2",
        "AzureEventHubs",
        "AzureLogAnalytics",
        "AzureTable",
        "InfluxDB",
        "MongoDB",
        "MySql",
        "PostgreSql",
        "SqlServer"
      ]
    }
  }
};

export const granularityName: OperationQueryParameter = {
  parameterPath: ["options", "granularityName"],
  mapper: {
    serializedName: "granularityName",
    type: {
      name: "Enum",
      allowedValues: [
        "Yearly",
        "Monthly",
        "Weekly",
        "Daily",
        "Hourly",
        "Minutely",
        "Custom"
      ]
    }
  }
};

export const status: OperationQueryParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    serializedName: "status",
    type: {
      name: "Enum",
      allowedValues: ["Active", "Paused"]
    }
  }
};

export const creator: OperationQueryParameter = {
  parameterPath: ["options", "creator"],
  mapper: {
    serializedName: "creator",
    type: {
      name: "String"
    }
  }
};

export const body11: OperationParameter = {
  parameterPath: "body",
  mapper: DataFeedDetailMapper
};

export const dataFeedId: OperationURLParameter = {
  parameterPath: "dataFeedId",
  mapper: {
    serializedName: "dataFeedId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const body12: OperationParameter = {
  parameterPath: "body",
  mapper: DataFeedDetailPatchMapper
};

export const feedbackId: OperationURLParameter = {
  parameterPath: "feedbackId",
  mapper: {
    serializedName: "feedbackId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const body13: OperationParameter = {
  parameterPath: "body",
  mapper: MetricFeedbackFilterMapper
};

export const body14: OperationParameter = {
  parameterPath: "body",
  mapper: MetricFeedbackMapper
};

export const hookName: OperationQueryParameter = {
  parameterPath: ["options", "hookName"],
  mapper: {
    serializedName: "hookName",
    type: {
      name: "String"
    }
  }
};

export const body15: OperationParameter = {
  parameterPath: "body",
  mapper: HookInfoMapper
};

export const hookId: OperationURLParameter = {
  parameterPath: "hookId",
  mapper: {
    serializedName: "hookId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const body16: OperationParameter = {
  parameterPath: "body",
  mapper: HookInfoPatchMapper
};

export const body17: OperationParameter = {
  parameterPath: "body",
  mapper: IngestionStatusQueryOptionsMapper
};

export const body18: OperationParameter = {
  parameterPath: "body",
  mapper: IngestionProgressResetOptionsMapper
};

export const body19: OperationParameter = {
  parameterPath: "body",
  mapper: MetricDataQueryOptionsMapper
};

export const metricId: OperationURLParameter = {
  parameterPath: "metricId",
  mapper: {
    serializedName: "metricId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const body20: OperationParameter = {
  parameterPath: "body",
  mapper: MetricSeriesQueryOptionsMapper
};

export const body21: OperationParameter = {
  parameterPath: "body",
  mapper: MetricDimensionQueryOptionsMapper
};

export const body22: OperationParameter = {
  parameterPath: "body",
  mapper: EnrichmentStatusQueryOptionMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
