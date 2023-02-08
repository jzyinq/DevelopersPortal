# Google Ads

The `custom-reports-http-api` supports querying Google Ads data just
like the internal analytics data.

:::note Note

You must configure the Google Ads integration before any data from it
will become available. This can be done in the **Settings /
Integrations** application's section.

:::

## Metrics

The table below lists metrics provided by Google Ads integration.

| Metric Name              | Column ID                 | Scope    | Type  |
| ------------------------ | ------------------------- | -------- | ----- |
| Impressions (Google Ads) | google\_ads\_impressions  | external | int   |
| Clicks (Google Ads)      | google\_ads\_clicks       | external | int   |
| Cost (Google Ads)        | google\_ads\_cost         | external | float |
| Average CPC (Google Ads) | google\_ads\_average\_cpc | external | float |
| CTR (Google Ads)         | google\_ads\_ctr          | external | float |
| ROAS (Google Ads)        | google\_ads\_roas         | session  | float |

Google Ads Metrics

## Dimensions

The table below lists dimensions provided by Google Ads integration.

:::note Note

"Database type" column presents the type of source column of the
dimension (in case of enum - type of the ID, in case of dynamic
dimensions - not applicable).

:::

| Dimension Name                           | Column ID                         | Scope    | Type         | Database Type  | Nullable | Notes                                                                                                                       |
| ---------------------------------------- | --------------------------------- | -------- | ------------ | -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| Source                                   | source                            | session  | str          | string         | False    |                                                                                                                             |
| Medium                                   | medium                            | session  | str          | string         | False    |                                                                                                                             |
| Source/Medium                            | source\_medium                    | session  | str          | string         | False    |                                                                                                                             |
| Keyword                                  | keyword                           | session  | str          | string         | False    |                                                                                                                             |
| Device type                              | device\_type                      | session  | \[int, str\] | uint8          | True     | `device_type.json </_static/json/enum/device_type.json>`                                                                    |
| Session entry URL                        | session\_entry\_url               | session  | str          | string         | False    |                                                                                                                             |
| Timestamp                                | timestamp                         | session  | date         | not applicable | False    | by default in Raw data API                                                                                                  |
| Website Name                             | website\_name                     | session  | \[str, str\] | not applicable | False    | website UUID                                                                                                                |
| Customer ID (Google Ads)                 | google\_ads\_customer\_id         | session  | str\_id      | string         | False    |                                                                                                                             |
| Customer Name (Google Ads)               | google\_ads\_customer\_name       | session  | \[str, str\] | not applicable | False    |                                                                                                                             |
| Campaign ID (Google Ads)                 | google\_ads\_campaign\_id         | session  | int\_id      | int64          | False    |                                                                                                                             |
| Campaign Name (Google Ads)               | google\_ads\_campaign\_name       | session  | \[int, str\] | not applicable | False    |                                                                                                                             |
| Ad Group ID (Google Ads)                 | google\_ads\_ad\_group\_id        | session  | int\_id      | int64          | False    |                                                                                                                             |
| Ad Group Name (Google Ads)               | google\_ads\_ad\_group\_name      | session  | \[int, str\] | not applicable | False    |                                                                                                                             |
| Ad Group Ad ID (Google Ads)              | google\_ads\_ad\_group\_ad\_id    | session  | str\_id      | string         | False    |                                                                                                                             |
| Ad Group Ad Network Type (Google Ads)    | google\_ads\_ad\_network\_type    | session  | \[str, str\] | string         | False    | `google_ads_ad_network_type.json </_static/json/enum/google_ads_ad_network_type.json>`                                      |
| Ad Group Keyword Match Type (Google Ads) | google\_ads\_keyword\_match\_type | external | \[str, str\] | string         | False    | `google_ads_keyword_match_type.json </_static/json/enum/google_ads_keyword_match_type.json>`, not available in Raw data API |

Google Ads Dimensions

## Mixed Queries

It is possible to request both internal analytics and Google Ads metrics
in a single query (for example: "Sessions" and "Clicks (Google Ads)"),
however **only the common dimensions listed below** may be used in such
queries.

:::note 

Note: "Database type" column presents the type of source column of the
dimension (in case of enum - type of the ID, in case of dynamic
dimensions - not applicable).

:::

| Dimension Name                        | Column ID                      | Scope   | Type         | Database Type  | Nullable | Notes                                                                                  |
| ------------------------------------- | ------------------------------ | ------- | ------------ | -------------- | -------- | -------------------------------------------------------------------------------------- |
| Source                                | source                         | session | str          | string         | False    |                                                                                        |
| Medium                                | medium                         | session | str          | string         | False    |                                                                                        |
| Source/Medium                         | source\_medium                 | session | str          | string         | False    |                                                                                        |
| Keyword                               | keyword                        | session | str          | string         | False    |                                                                                        |
| Device type                           | device\_type                   | session | \[int, str\] | uint8          | True     | `device_type.json </_static/json/enum/device_type.json>`                               |
| Session entry URL                     | session\_entry\_url            | session | str          | string         | False    |                                                                                        |
| Timestamp                             | timestamp                      | session | date         | not applicable | False    | by default in Raw data API                                                             |
| Website Name                          | website\_name                  | session | \[str, str\] | not applicable | False    | website UUID                                                                           |
| Customer ID (Google Ads)              | google\_ads\_customer\_id      | session | str\_id      | string         | False    |                                                                                        |
| Customer Name (Google Ads)            | google\_ads\_customer\_name    | session | \[str, str\] | not applicable | False    |                                                                                        |
| Campaign ID (Google Ads)              | google\_ads\_campaign\_id      | session | int\_id      | int64          | False    |                                                                                        |
| Campaign Name (Google Ads)            | google\_ads\_campaign\_name    | session | \[int, str\] | not applicable | False    |                                                                                        |
| Ad Group ID (Google Ads)              | google\_ads\_ad\_group\_id     | session | int\_id      | int64          | False    |                                                                                        |
| Ad Group Name (Google Ads)            | google\_ads\_ad\_group\_name   | session | \[int, str\] | not applicable | False    |                                                                                        |
| Ad Group Ad ID (Google Ads)           | google\_ads\_ad\_group\_ad\_id | session | str\_id      | string         | False    |                                                                                        |
| Ad Group Ad Network Type (Google Ads) | google\_ads\_ad\_network\_type | session | \[str, str\] | string         | False    | `google_ads_ad_network_type.json </_static/json/enum/google_ads_ad_network_type.json>` |

Common Dimensions

:::warning Warning

Using dimensions that are not explicitly listed in the table above in
such queries (either as query columns or as filters) will result in a
**Bad Request** response.

:::
