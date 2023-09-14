/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { TagsResource, ResourceManagementClient } from "@azure/arm-resources";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to This operation allows adding or replacing the entire set of tags on the specified resource or subscription. The specified entity can have a maximum of 50 tags.
 *
 * @summary This operation allows adding or replacing the entire set of tags on the specified resource or subscription. The specified entity can have a maximum of 50 tags.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2021-04-01/examples/PutTagsResource.json
 */
async function updateTagsOnAResource() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/my-resource-group/providers/myPRNameSpace/VM/myVm";
  const parameters: TagsResource = {
    properties: { tags: { tagKey1: "tag-value-1", tagKey2: "tag-value-2" } }
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.tagsOperations.createOrUpdateAtScope(
    scope,
    parameters
  );
  console.log(result);
}

updateTagsOnAResource().catch(console.error);

/**
 * This sample demonstrates how to This operation allows adding or replacing the entire set of tags on the specified resource or subscription. The specified entity can have a maximum of 50 tags.
 *
 * @summary This operation allows adding or replacing the entire set of tags on the specified resource or subscription. The specified entity can have a maximum of 50 tags.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2021-04-01/examples/PutTagsSubscription.json
 */
async function updateTagsOnASubscription() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const parameters: TagsResource = {
    properties: { tags: { tagKey1: "tag-value-1", tagKey2: "tag-value-2" } }
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.tagsOperations.createOrUpdateAtScope(
    scope,
    parameters
  );
  console.log(result);
}

updateTagsOnASubscription().catch(console.error);
