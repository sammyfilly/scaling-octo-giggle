let nock = require('nock');

module.exports.hash = "cfe420a3cdd80bc0a923f9c50498dbb8";

module.exports.testInfo = {"uniqueName":{"secrettrace":"secrettrace164867710532804591"},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/secrettrace164867710532804591')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"AKV10000: Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '97',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/12345678-1234-1234-1234-123456789012", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '7de90914-cdfc-4907-a4ab-db436daea4ce',
  'x-ms-request-id',
  '2b4cc029-6cd6-40f5-affb-6a3532cd6f7a',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:52 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '066752ad-785a-43db-9fc4-ae67f86f0600',
  'x-ms-ests-server',
  '2.1.12570.16 - EUS ProdSlices',
  'Set-Cookie',
  'fpc=Amfh6qTtNEJBrLiwbXawECs; expires=Fri, 29-Apr-2022 21:51:52 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevrq1wcjpZRPIYoBymrnBMcp6UKRf0URXyHiXi2r-qd5esdzcL0DcEaNKwYpIOsL7p1WQ5C900sKE2y40lCyAyOh10Q3OyAnAX_aFBpjLwfNAoHUF8bOeS0tLePupffnLYZIxVo7o-3YIZ3Vtl1SRj_evMt0AkU3iijNJJ_ngFrZRkgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 30 Mar 2022 21:51:52 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'b1eacbe2-e561-4f39-beba-6d6321690a00',
  'x-ms-ests-server',
  '2.1.12570.16 - SCUS ProdSlices',
  'Set-Cookie',
  'fpc=AlKriHFaV1dCoPRYgD0F8g0; expires=Fri, 29-Apr-2022 21:51:52 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrwDJxclOITnSjJOtKQKVBT-7k-mm_osRHSz1MM5JuLiJZDOTdmA4XvqRaHbOjb1zdhrrPhxPjuHk-tvzkoBdA_jrneVd42s-_TaRSlvRUfpyvqUCN4-HmMuL0bzWif1zrnxH_6j7F-kHiBPaFBCSiH1YKkiCgqAKMx-TpLY2NJGQgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 30 Mar 2022 21:51:52 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.7.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=087e541f-18f4-4328-8aa5-a1961433475d&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '7ad7d185-e32c-4f31-abfd-ab61e93f1900',
  'x-ms-ests-server',
  '2.1.12570.16 - WUS2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AonnxF8-nKpIg1yrtc_F23f_ARkqAQAAAPjH1tkOAAAA; expires=Fri, 29-Apr-2022 21:51:53 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 30 Mar 2022 21:51:52 GMT',
  'Content-Length',
  '1315'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/secrettrace164867710532804591', {"value":"someValue","attributes":{}})
  .query(true)
  .reply(200, {"value":"someValue","id":"https://keyvault_name.vault.azure.net/secrets/secrettrace164867710532804591/e2944e1ac5c84d8881e67a090e3b91b7","attributes":{"enabled":true,"created":1648677113,"updated":1648677113,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '7de90914-cdfc-4907-a4ab-db436daea4ce',
  'x-ms-request-id',
  '787386ec-cc1f-4b2d-9465-30235ed7bfdf',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '2ead45cb-d512-5461-8690-cf538f8a87fa',
  'x-ms-keyvault-rbac-cache',
  'ra_age=64;da_age=64;rd_age=64;brd_age=12335;ra_notif_age=2745;dec_lev=2;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:53 GMT',
  'Content-Length',
  '278'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets/secrettrace164867710532804591/')
  .query(true)
  .reply(200, {"value":"someValue","id":"https://keyvault_name.vault.azure.net/secrets/secrettrace164867710532804591/e2944e1ac5c84d8881e67a090e3b91b7","attributes":{"enabled":true,"created":1648677113,"updated":1648677113,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '7f1bdbbc-471c-4af0-ae06-04523e3121f2',
  'x-ms-request-id',
  '0315e2cb-cd6a-47ab-9eda-fc181a2e367a',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '2ead45cb-d512-5461-8690-cf538f8a87fa',
  'x-ms-keyvault-rbac-cache',
  'ra_age=64;da_age=64;rd_age=64;brd_age=12335;ra_notif_age=2745;dec_lev=1;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:53 GMT',
  'Content-Length',
  '278'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .patch('/secrets/secrettrace164867710532804591/e2944e1ac5c84d8881e67a090e3b91b7', {"attributes":{}})
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/secrets/secrettrace164867710532804591/e2944e1ac5c84d8881e67a090e3b91b7","attributes":{"enabled":true,"created":1648677113,"updated":1648677113,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '19f4c714-5a32-47c6-8855-94aa86f1b923',
  'x-ms-request-id',
  '37e25947-7daf-4b4d-bb68-08377891c20a',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '2ead45cb-d512-5461-8690-cf538f8a87fa',
  'x-ms-keyvault-rbac-cache',
  'ra_age=64;da_age=64;rd_age=64;brd_age=12335;ra_notif_age=2745;dec_lev=0;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:53 GMT',
  'Content-Length',
  '258'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/secrets/secrettrace164867710532804591/backup')
  .query(true)
  .reply(200, {"value":"KUF6dXJlS2V5VmF1bHRTZWNyZXRCYWNrdXBWMS5taWNyb3NvZnQuY29tZXlKcmFXUWlPaUl5WVdabU5tRmhNUzAzTm1Ka0xUUTBZVGN0WVRjek5DMDJaalZoWkRCaU5XRTRPVGdpTENKaGJHY2lPaUpTVTBFdFQwRkZVQzB5TlRZaUxDSmxibU1pT2lKQk1qVTJRMEpETFVoVE5URXlJbjAuQ184Uy1YSmdoUmEyNENtNGptdDNPel82ZEVMNTNjNHQwT212Y1I1UEFabFVBaFhpd2tmZjRDWTY3em9ZTTJ5RmIwU01CUkVST1VWV3RVMUd3S05oTnZCdWFEOGdPZTJRWW1kYjdrNDJXaFVMZzNsQXJObkh4TmUxSXZqMlFyZzZfVlFBQXJndmxiMDhCb3NWSUY3V25IM2hfRVQzaUxKNUhzaHNnRVdsdEExMDNSUUNMdGE5YjdyYjlrLWViTlFYZDg3YzlKVFFaR0NIeW1EczdJQ1VxektZMHR6WUgzWnNYZ0hDNmNmbkQ0MmxzbmxIRVBrMFlxNGF6VDRtNnJXdVFjeTYxdTFFVHNIUnNLS3l3Y2RQcV9xN29nUGdVTlFyeXhqNnJjak82R2hfX1JXcTQ2YTVBUVdUdVZ1Z2FqdVdGWmxZcmg4U2hEWVZvak5IU19VSGpnLnV5QzZUX0o1WjdCUG90WDAwSTlUUUEuWXE1cXZESnhudEFwUGRsX0VNYmI2UUVLeFlVZDBHd05lTlJhQzZqOXItcG8ycksxLTkzLTRZT3RYTzlNeGdKX09pUWdiQXdCSTRtRXFWbDRpeXlGZVdyUEx1dlJMYXY3U1FKeUhpUU1hWVlqNmJlVUE1SlNUZ0NxMVZ1Y3BfV0ZCN1o3MU5LZF93SmV6ajFyY2R2aU5FY25MSExROHZlNVZVZ2ZJZEwxTW9ZdTZNNTdKM1h3NVgzTC1FeF9obzUzcVQtWmI2bFI4MnZOOTV5d0M2eXhGX21IU3FvTEZwdm11eHgyY0JkNHk3Wi1GX0Ezd0Z6UWJsSU13by1XSEY2QmlpSWRETDlXUHA0TGxuYWlnMnhleVdxOTBUNEZucl9fc3A2MHh4MXFGTUlLd1lzQUI3RWZtWGVPSWF2aE9oSGRpeXVlakYxTldsYkpnRFVXMGZhQ3ZiM05hTzlNdGx5Wkhocm5VSVE0LVRDWjNXN0JRc0VUQmlFTTJtZENFdkRoQ211V3JMN21hck1pZ2RROXl4RWV1c1d2SmRkWHJrcXBaRXVFNDdmLWVubmFhcnlWZ0VjUXB3ZF81N19WcmN4WU5zUUE3bkt4Qk1JWDZPbThFNVhqZ0gtTEwybEticURyWFk2bnNxdDExRUZxTDNaSFp1XzVaNlJMSjVkdXFMcDZCYlBQb0dZdzI3LXJHUW8zNUtxcW1DZmZhbkxic0FQcTJsTXEzc0FnWnZkOEppOENqaFM3UjFiZ1BxME1ZYkRuY1FUT3hpOU9UREUzd0xtY3VJWF93M2U5dXFJbnA0c2J3NTJ1QTFJZm9La3FrMElkaDF2OGwwWmlUcU1CSEtsZi1TQ1ZycFNORFI0Sm12bEdPbDcybGVUMkpmRld5Ukl1bzJtRWhuUTdBLUtLX1VUeDd5SmdXMFA3bXRQMmI2TG1CLWJ3LW10N0QzYXNGMThJLW5QLUY5RDBubUZNZUdQQW5HRzY0SEZiR2RKcGlRRmNpZlZKMDQ0aEN1emRRZzRRaW92T3VnaE44ZlpQY2R1WUlkVUhFLV8xNjQ1NDRfcVVjbFFSRWF4UXdIYnVMMUZXakxoMlNWYkliYkstYnBQQzduZ0oyd1hCVVFYWVVhMGNFdW5DYVI5c1pLN0Etc2NTMDVidlBhVXNGcjZnOGNBN0VnQlc4bW5mQmJ6SDl3UGs3SmRfZEdWY3Z6ZjdjTGVfQUR5TW1sOGpVclhEWDkxQlR5WkJIUkN5anlqcXc4dDZDcFZrQS0ycHV0X3VoUXlOMUM3bm5rdXU5aDR5Q3lVb2FwTC01aGN4MnB5aDhuODkyekJ3N2lMR3F6YVJIZ0NQTzJzWHlDZV96Nm9RTDVQRTlPcWIzSzdCeFluSWFBdU1pbV80TlV3SHZLMHkzZ0pmSXM0T1ZZMnFxXzVOekNVRF9CWFR0NU9kelU3TWdFMDAyLUg1R2NFcmtCemo4ZWJyYnBFaTJXaEtOWnM5eDdKdG11Skt4dkt4UFFxalZhSWhVZHVmdzM4SmpZWDBPTTNHUXhLWU9xRjBEdUI3WGNBNzNxUXZqdndGLTVpdGlMRk5fM0FsQVpYQW9QOWNuV0kwbno4UnlXUzJEYkRaaWhZMjFoeFlqQjRxb19ORXMyTlByN2w5MW9ocG9BVEZyNzJfdmE4ZnRCZllJOXRRN2IwcjBObXBsMW84QnRZZUhCYi1lLTNWZjFkanF1RkxFTG9BRHJDLW05ZWY5ZkNEZlRTWlRBZGJUY3Zncl9ZUW9aRmFEUUpoS2NHelV0NGhRRFZaeDFGQTA2MHFkZmJIMlNnX0JUT3hxUnNycmw5eTRleVF3TnNfVl91cUMzZ0V6QlljSG5zdTlaSUpGek5oYWhLVEpEdHZaMEZ6SWtjUnBiWFEzbE1YRl9vMjNwTk1kcFh0M0xoU0hsVl90bm5aOXBEZnFZc1REU0RzZklzMHRBWWE0Q1pzN0Y1b1hRVnFJWklYTXdfaHl0T296SzFPU1paM1ZpNmU3UHdRZXA4MWhlY0hDbDV5blc2ZDh0VDh2bS13WG90VTJ1SFFBSW1GUmFacFI5YW1FRDJGLXE4T0RWVHN5Uld2a2RTTEdMa0FQUW9vSmRkT2ZhYVFaUmlDTEVJa05IT0NtRzU3RGJsd3ctVmF1UzFGWnJITmh6VEk2Rk1keTNNTUVQbjdsX2JsX1VVb2JMNS1oRmNqeXNIWkpFVmtULUo4aTQtLU1Qek5jaFRXRHZsWXFMdGh6cGRpaFR5R1A2aG9WZFFvNXBZT2FzZzhiQW5pYmdESFJVc0J4ank2clU1UTV6U2dYcm84RGpDejcweTRlMnZCeFQyejgzdHlpUldXQzVPNVd3RUhwMXBNck9xcmdWM1NUVDd3cnl6Nm1URzRHdlBBeGNkM3lJVmM1RjVFeW1DVVd0WVRJWUpNblVoQ2Y2eFJpYXpTMTlLaEQ2eXFfX0hJMVVqM3A4bFpKSENXXy1JdnZTcnJuRFlnMHh1M3BkNllPQVF6NThJMVF2UGxwVWNiVnBLZUJxTGcyV21uNXpLbU50cTBIRWRlWjlMa0otLThUQnZuTndXYzJYOTJDMEVSZHZvQmczc0xxNzc5YTVFRFZaQjVzdjJFdndYemJFeFRnR2g1eF81ekRaRXNsUkVhT1VLNFBpUHhyaXFZSHZ5SjB2ZGZWZ1pwT25aOHdZaXZIMFMyYTR6WlM3Z2VySERUVHdlelo4WXA3eExMMW51cUhtSHU0VFRfNmJhQXlBRzVhT3dNLXZlRXRONVNZZV9sUmxfOUp1QW1pWEhhUmx1cmVrUGpIQUNYUzRvUFlaY09wQ2xXMXR3dlVaWHhyc3ktbjNBOEtsUEJzSktSSGlHSDhZOU12STFzUEhoMncwakVFZ3hnX1VYcU1xcW9NLTVRemFiY0tuOUtseVd1SkEuOC1CdHdzbnI1Umk2MnQ4T1pKYTVXdXFCbE83OVlNUFVMWUFGS0lEU3FqMA"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'b9a55dc1-b320-4fb3-93ab-dc13166b2971',
  'x-ms-request-id',
  '3ab7665d-ff60-4f34-8042-ae4f3e4264e0',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '2ead45cb-d512-5461-8690-cf538f8a87fa',
  'x-ms-keyvault-rbac-cache',
  'ra_age=64;da_age=64;rd_age=64;brd_age=12336;ra_notif_age=2745;dec_lev=1;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:53 GMT',
  'Content-Length',
  '3706'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/secrets/secrettrace164867710532804591')
  .query(true)
  .reply(200, {"recoveryId":"https://keyvault_name.vault.azure.net/deletedsecrets/secrettrace164867710532804591","deletedDate":1648677113,"scheduledPurgeDate":1649281913,"id":"https://keyvault_name.vault.azure.net/secrets/secrettrace164867710532804591/e2944e1ac5c84d8881e67a090e3b91b7","attributes":{"enabled":true,"created":1648677113,"updated":1648677113,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '1c9fcd59-57da-45d2-9ecc-059ca89e5db6',
  'x-ms-request-id',
  'e6094878-74eb-4b6e-8adc-d8e6b509c912',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '2ead45cb-d512-5461-8690-cf538f8a87fa',
  'x-ms-keyvault-rbac-cache',
  'ra_age=64;da_age=64;rd_age=64;brd_age=12336;ra_notif_age=2745;dec_lev=1;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:53 GMT',
  'Content-Length',
  '412'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/deletedsecrets/secrettrace164867710532804591')
  .query(true)
  .reply(404, {"error":{"code":"SecretNotFound","message":"Deleted Secret not found: secrettrace164867710532804591"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '103',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'b2f02ef0-70e2-4721-934f-73915081b984',
  'x-ms-request-id',
  '0d69f543-b9d3-451a-9df3-6aa8574fda7c',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '2ead45cb-d512-5461-8690-cf538f8a87fa',
  'x-ms-keyvault-rbac-cache',
  'ra_age=64;da_age=64;rd_age=64;brd_age=12336;ra_notif_age=2745;dec_lev=0;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:53 GMT'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/deletedsecrets/secrettrace164867710532804591')
  .query(true)
  .reply(404, {"error":{"code":"SecretNotFound","message":"Deleted Secret not found: secrettrace164867710532804591"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '103',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '578f90a7-c6c3-485d-9cf9-7349f7827430',
  'x-ms-request-id',
  'fe988a3a-0912-4e44-83d2-c8d7701bac1d',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '2ead45cb-d512-5461-8690-cf538f8a87fa',
  'x-ms-keyvault-rbac-cache',
  'ra_age=64;da_age=64;rd_age=64;brd_age=12336;ra_notif_age=2745;dec_lev=0;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:53 GMT'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/deletedsecrets/secrettrace164867710532804591')
  .query(true)
  .reply(200, {"recoveryId":"https://keyvault_name.vault.azure.net/deletedsecrets/secrettrace164867710532804591","deletedDate":1648677113,"scheduledPurgeDate":1649281913,"id":"https://keyvault_name.vault.azure.net/secrets/secrettrace164867710532804591/e2944e1ac5c84d8881e67a090e3b91b7","attributes":{"enabled":true,"created":1648677113,"updated":1648677113,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '025f11c9-cf21-4fe1-bd7d-8412e566c067',
  'x-ms-request-id',
  '2c1cf4f4-2e15-4922-8cef-929909dbb5d9',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '2ead45cb-d512-5461-8690-cf538f8a87fa',
  'x-ms-keyvault-rbac-cache',
  'ra_age=69;da_age=69;rd_age=69;brd_age=12341;ra_notif_age=2751;dec_lev=0;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:58 GMT',
  'Content-Length',
  '412'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .delete('/deletedsecrets/secrettrace164867710532804591')
  .query(true)
  .reply(204, "", [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '6da5a7da-5352-4d66-ab23-67eb80c76a87',
  'x-ms-request-id',
  '66e4da57-fb5a-4a17-ba9f-c002b9156d08',
  'x-ms-keyvault-service-version',
  '1.9.331.5',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.174.48;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '2ead45cb-d512-5461-8690-cf538f8a87fa',
  'x-ms-keyvault-rbac-cache',
  'ra_age=69;da_age=69;rd_age=69;brd_age=12341;ra_notif_age=2751;dec_lev=1;',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 30 Mar 2022 21:51:58 GMT'
]);
