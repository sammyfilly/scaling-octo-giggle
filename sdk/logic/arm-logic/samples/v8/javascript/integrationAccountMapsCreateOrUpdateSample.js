/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { LogicManagementClient } = require("@azure/arm-logic");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates an integration account map. If the map is larger than 4 MB, you need to store the map in an Azure blob and use the blob's Shared Access Signature (SAS) URL as the 'contentLink' property value.
 *
 * @summary Creates or updates an integration account map. If the map is larger than 4 MB, you need to store the map in an Azure blob and use the blob's Shared Access Signature (SAS) URL as the 'contentLink' property value.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/IntegrationAccountMaps_CreateOrUpdate.json
 */
async function createOrUpdateAMap() {
  const subscriptionId =
    process.env["LOGIC_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["LOGIC_RESOURCE_GROUP"] || "testResourceGroup";
  const integrationAccountName = "testIntegrationAccount";
  const mapName = "testMap";
  const map = {
    content:
      '<?xml version="1.0" encoding="UTF-16"?>\r\n<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:var="http://schemas.microsoft.com/BizTalk/2003/var" exclude-result-prefixes="msxsl var s0 userCSharp" version="1.0" xmlns:ns0="http://BizTalk_Server_Project4.StringFunctoidsDestinationSchema" xmlns:s0="http://BizTalk_Server_Project4.StringFunctoidsSourceSchema" xmlns:userCSharp="http://schemas.microsoft.com/BizTalk/2003/userCSharp">\r\n  <xsl:import href="http://btsfunctoids.blob.core.windows.net/functoids/functoids.xslt" />\r\n  <xsl:output omit-xml-declaration="yes" method="xml" version="1.0" />\r\n  <xsl:template match="/">\r\n    <xsl:apply-templates select="/s0:Root" />\r\n  </xsl:template>\r\n  <xsl:template match="/s0:Root">\r\n    <xsl:variable name="var:v1" select="userCSharp:StringFind(string(StringFindSource/text()) , &quot;SearchString&quot;)" />\r\n    <xsl:variable name="var:v2" select="userCSharp:StringLeft(string(StringLeftSource/text()) , &quot;2&quot;)" />\r\n    <xsl:variable name="var:v3" select="userCSharp:StringRight(string(StringRightSource/text()) , &quot;2&quot;)" />\r\n    <xsl:variable name="var:v4" select="userCSharp:StringUpperCase(string(UppercaseSource/text()))" />\r\n    <xsl:variable name="var:v5" select="userCSharp:StringLowerCase(string(LowercaseSource/text()))" />\r\n    <xsl:variable name="var:v6" select="userCSharp:StringSize(string(SizeSource/text()))" />\r\n    <xsl:variable name="var:v7" select="userCSharp:StringSubstring(string(StringExtractSource/text()) , &quot;0&quot; , &quot;2&quot;)" />\r\n    <xsl:variable name="var:v8" select="userCSharp:StringConcat(string(StringConcatSource/text()))" />\r\n    <xsl:variable name="var:v9" select="userCSharp:StringTrimLeft(string(StringLeftTrimSource/text()))" />\r\n    <xsl:variable name="var:v10" select="userCSharp:StringTrimRight(string(StringRightTrimSource/text()))" />\r\n    <ns0:Root>\r\n      <StringFindDestination>\r\n        <xsl:value-of select="$var:v1" />\r\n      </StringFindDestination>\r\n      <StringLeftDestination>\r\n        <xsl:value-of select="$var:v2" />\r\n      </StringLeftDestination>\r\n      <StringRightDestination>\r\n        <xsl:value-of select="$var:v3" />\r\n      </StringRightDestination>\r\n      <UppercaseDestination>\r\n        <xsl:value-of select="$var:v4" />\r\n      </UppercaseDestination>\r\n      <LowercaseDestination>\r\n        <xsl:value-of select="$var:v5" />\r\n      </LowercaseDestination>\r\n      <SizeDestination>\r\n        <xsl:value-of select="$var:v6" />\r\n      </SizeDestination>\r\n      <StringExtractDestination>\r\n        <xsl:value-of select="$var:v7" />\r\n      </StringExtractDestination>\r\n      <StringConcatDestination>\r\n        <xsl:value-of select="$var:v8" />\r\n      </StringConcatDestination>\r\n      <StringLeftTrimDestination>\r\n        <xsl:value-of select="$var:v9" />\r\n      </StringLeftTrimDestination>\r\n      <StringRightTrimDestination>\r\n        <xsl:value-of select="$var:v10" />\r\n      </StringRightTrimDestination>\r\n    </ns0:Root>\r\n  </xsl:template>\r\n</xsl:stylesheet>',
    contentType: "application/xml",
    location: "westus",
    mapType: "Xslt",
    metadata: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const result = await client.integrationAccountMaps.createOrUpdate(
    resourceGroupName,
    integrationAccountName,
    mapName,
    map
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an integration account map. If the map is larger than 4 MB, you need to store the map in an Azure blob and use the blob's Shared Access Signature (SAS) URL as the 'contentLink' property value.
 *
 * @summary Creates or updates an integration account map. If the map is larger than 4 MB, you need to store the map in an Azure blob and use the blob's Shared Access Signature (SAS) URL as the 'contentLink' property value.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/IntegrationAccountLargeMaps_CreateOrUpdate.json
 */
async function createOrUpdateAMapLargerThan4Mb() {
  const subscriptionId = process.env["LOGIC_SUBSCRIPTION_ID"] || "<Azure-subscription-ID>";
  const resourceGroupName = process.env["LOGIC_RESOURCE_GROUP"] || "testResourceGroup";
  const integrationAccountName = "testIntegrationAccount";
  const mapName = "testMap";
  const map = {
    contentLink: { uri: "<blob-SAS-URL-for-map>" },
    contentType: "application/xml",
    location: "westus",
    mapType: "Xslt",
    metadata: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const result = await client.integrationAccountMaps.createOrUpdate(
    resourceGroupName,
    integrationAccountName,
    mapName,
    map
  );
  console.log(result);
}

async function main() {
  createOrUpdateAMap();
  createOrUpdateAMapLargerThan4Mb();
}

main().catch(console.error);
