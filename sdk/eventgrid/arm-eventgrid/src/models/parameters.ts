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
  Channel as ChannelMapper,
  ChannelUpdateParameters as ChannelUpdateParametersMapper,
  Domain as DomainMapper,
  DomainUpdateParameters as DomainUpdateParametersMapper,
  DomainRegenerateKeyRequest as DomainRegenerateKeyRequestMapper,
  EventChannel as EventChannelMapper,
  EventSubscription as EventSubscriptionMapper,
  EventSubscriptionUpdateParameters as EventSubscriptionUpdateParametersMapper,
  PartnerConfiguration as PartnerConfigurationMapper,
  PartnerConfigurationUpdateParameters as PartnerConfigurationUpdateParametersMapper,
  Partner as PartnerMapper,
  PartnerDestination as PartnerDestinationMapper,
  PartnerDestinationUpdateParameters as PartnerDestinationUpdateParametersMapper,
  PartnerNamespace as PartnerNamespaceMapper,
  PartnerNamespaceUpdateParameters as PartnerNamespaceUpdateParametersMapper,
  PartnerNamespaceRegenerateKeyRequest as PartnerNamespaceRegenerateKeyRequestMapper,
  PartnerRegistration as PartnerRegistrationMapper,
  PartnerRegistrationUpdateParameters as PartnerRegistrationUpdateParametersMapper,
  PartnerTopic as PartnerTopicMapper,
  PartnerTopicUpdateParameters as PartnerTopicUpdateParametersMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  SystemTopic as SystemTopicMapper,
  SystemTopicUpdateParameters as SystemTopicUpdateParametersMapper,
  Topic as TopicMapper,
  TopicUpdateParameters as TopicUpdateParametersMapper,
  TopicRegenerateKeyRequest as TopicRegenerateKeyRequestMapper
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

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const partnerNamespaceName: OperationURLParameter = {
  parameterPath: "partnerNamespaceName",
  mapper: {
    serializedName: "partnerNamespaceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const channelName: OperationURLParameter = {
  parameterPath: "channelName",
  mapper: {
    serializedName: "channelName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-10-15-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
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

export const channelInfo: OperationParameter = {
  parameterPath: "channelInfo",
  mapper: ChannelMapper
};

export const channelUpdateParameters: OperationParameter = {
  parameterPath: "channelUpdateParameters",
  mapper: ChannelUpdateParametersMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
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

export const domainName: OperationURLParameter = {
  parameterPath: "domainName",
  mapper: {
    serializedName: "domainName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const domainInfo: OperationParameter = {
  parameterPath: "domainInfo",
  mapper: DomainMapper
};

export const domainUpdateParameters: OperationParameter = {
  parameterPath: "domainUpdateParameters",
  mapper: DomainUpdateParametersMapper
};

export const regenerateKeyRequest: OperationParameter = {
  parameterPath: "regenerateKeyRequest",
  mapper: DomainRegenerateKeyRequestMapper
};

export const domainTopicName: OperationURLParameter = {
  parameterPath: "domainTopicName",
  mapper: {
    serializedName: "domainTopicName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const eventChannelName: OperationURLParameter = {
  parameterPath: "eventChannelName",
  mapper: {
    serializedName: "eventChannelName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const eventChannelInfo: OperationParameter = {
  parameterPath: "eventChannelInfo",
  mapper: EventChannelMapper
};

export const scope: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const eventSubscriptionName: OperationURLParameter = {
  parameterPath: "eventSubscriptionName",
  mapper: {
    serializedName: "eventSubscriptionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const eventSubscriptionInfo: OperationParameter = {
  parameterPath: "eventSubscriptionInfo",
  mapper: EventSubscriptionMapper
};

export const eventSubscriptionUpdateParameters: OperationParameter = {
  parameterPath: "eventSubscriptionUpdateParameters",
  mapper: EventSubscriptionUpdateParametersMapper
};

export const topicTypeName: OperationURLParameter = {
  parameterPath: "topicTypeName",
  mapper: {
    serializedName: "topicTypeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const providerNamespace: OperationURLParameter = {
  parameterPath: "providerNamespace",
  mapper: {
    serializedName: "providerNamespace",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceTypeName: OperationURLParameter = {
  parameterPath: "resourceTypeName",
  mapper: {
    serializedName: "resourceTypeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const topicName: OperationURLParameter = {
  parameterPath: "topicName",
  mapper: {
    serializedName: "topicName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const systemTopicName: OperationURLParameter = {
  parameterPath: "systemTopicName",
  mapper: {
    serializedName: "systemTopicName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const partnerTopicName: OperationURLParameter = {
  parameterPath: "partnerTopicName",
  mapper: {
    serializedName: "partnerTopicName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const partnerConfigurationInfo: OperationParameter = {
  parameterPath: "partnerConfigurationInfo",
  mapper: PartnerConfigurationMapper
};

export const partnerConfigurationUpdateParameters: OperationParameter = {
  parameterPath: "partnerConfigurationUpdateParameters",
  mapper: PartnerConfigurationUpdateParametersMapper
};

export const partnerInfo: OperationParameter = {
  parameterPath: "partnerInfo",
  mapper: PartnerMapper
};

export const partnerDestinationName: OperationURLParameter = {
  parameterPath: "partnerDestinationName",
  mapper: {
    serializedName: "partnerDestinationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const partnerDestination: OperationParameter = {
  parameterPath: "partnerDestination",
  mapper: PartnerDestinationMapper
};

export const partnerDestinationUpdateParameters: OperationParameter = {
  parameterPath: "partnerDestinationUpdateParameters",
  mapper: PartnerDestinationUpdateParametersMapper
};

export const partnerNamespaceInfo: OperationParameter = {
  parameterPath: "partnerNamespaceInfo",
  mapper: PartnerNamespaceMapper
};

export const partnerNamespaceUpdateParameters: OperationParameter = {
  parameterPath: "partnerNamespaceUpdateParameters",
  mapper: PartnerNamespaceUpdateParametersMapper
};

export const regenerateKeyRequest1: OperationParameter = {
  parameterPath: "regenerateKeyRequest",
  mapper: PartnerNamespaceRegenerateKeyRequestMapper
};

export const partnerRegistrationName: OperationURLParameter = {
  parameterPath: "partnerRegistrationName",
  mapper: {
    serializedName: "partnerRegistrationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const partnerRegistrationInfo: OperationParameter = {
  parameterPath: "partnerRegistrationInfo",
  mapper: PartnerRegistrationMapper
};

export const partnerRegistrationUpdateParameters: OperationParameter = {
  parameterPath: "partnerRegistrationUpdateParameters",
  mapper: PartnerRegistrationUpdateParametersMapper
};

export const partnerTopicInfo: OperationParameter = {
  parameterPath: "partnerTopicInfo",
  mapper: PartnerTopicMapper
};

export const partnerTopicUpdateParameters: OperationParameter = {
  parameterPath: "partnerTopicUpdateParameters",
  mapper: PartnerTopicUpdateParametersMapper
};

export const parentType: OperationURLParameter = {
  parameterPath: "parentType",
  mapper: {
    serializedName: "parentType",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parentName: OperationURLParameter = {
  parameterPath: "parentName",
  mapper: {
    serializedName: "parentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnection: OperationParameter = {
  parameterPath: "privateEndpointConnection",
  mapper: PrivateEndpointConnectionMapper
};

export const parentType1: OperationURLParameter = {
  parameterPath: "parentType",
  mapper: {
    serializedName: "parentType",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateLinkResourceName: OperationURLParameter = {
  parameterPath: "privateLinkResourceName",
  mapper: {
    serializedName: "privateLinkResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const systemTopicInfo: OperationParameter = {
  parameterPath: "systemTopicInfo",
  mapper: SystemTopicMapper
};

export const systemTopicUpdateParameters: OperationParameter = {
  parameterPath: "systemTopicUpdateParameters",
  mapper: SystemTopicUpdateParametersMapper
};

export const topicInfo: OperationParameter = {
  parameterPath: "topicInfo",
  mapper: TopicMapper
};

export const topicUpdateParameters: OperationParameter = {
  parameterPath: "topicUpdateParameters",
  mapper: TopicUpdateParametersMapper
};

export const regenerateKeyRequest2: OperationParameter = {
  parameterPath: "regenerateKeyRequest",
  mapper: TopicRegenerateKeyRequestMapper
};

export const scope1: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const verifiedPartnerName: OperationURLParameter = {
  parameterPath: "verifiedPartnerName",
  mapper: {
    serializedName: "verifiedPartnerName",
    required: true,
    type: {
      name: "String"
    }
  }
};
