# Google Ads: metrics & dimensions

## Metrics

Here's a list of metrics that are avaliable in Piwik PRO when you use
Google Ads integration.

| Metric name              | Column ID                 | Scope    | Type  |
| ------------------------ | ------------------------- | -------- | ----- |
| Impressions (Google Ads) | google\_ads\_impressions  | external | int   |
| Clicks (Google Ads)      | google\_ads\_clicks       | external | int   |
| Cost (Google Ads)        | google\_ads\_cost         | external | float |
| Average CPC (Google Ads) | google\_ads\_average\_cpc | external | float |
| CTR (Google Ads)         | google\_ads\_ctr          | external | float |
| ROAS (Google Ads)        | google\_ads\_roas         | session  | float |

## Dimensions

Here's a list of dimensions that are avaliable in Piwik PRO when you use
Google Ads integration.

| Dimension name                           | Column ID                         | Scope    | Type         | Database type (1) | Nullable | Notes                                                                                                                       |
| ---------------------------------------- | --------------------------------- | -------- | ------------ | ----------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| Source                                   | source                            | session  | str          | string            | False    |                                                                                                                             |
| Medium                                   | medium                            | session  | str          | string            | False    |                                                                                                                             |
| Source/Medium                            | source\_medium                    | session  | str          | string            | False    |                                                                                                                             |
| Keyword                                  | keyword                           | session  | str          | string            | False    |                                                                                                                             |
| Device type                              | device\_type                      | session  | \[int, str\] | uint8             | True     | `device_type.json </pstatic/json/enum/device_type.json>`                                                                    |
| Session entry URL                        | session\_entry\_url               | session  | str          | string            | False    |                                                                                                                             |
| Timestamp                                | timestamp                         | session  | date         | not applicable    | False    | by default in Raw data API                                                                                                  |
| Website Name                             | website\_name                     | session  | \[str, str\] | not applicable    | False    | website UUID                                                                                                                |
| Customer ID (Google Ads)                 | google\_ads\_customer\_id         | session  | str\_id      | string            | False    |                                                                                                                             |
| Customer Name (Google Ads)               | google\_ads\_customer\_name       | session  | \[str, str\] | not applicable    | False    |                                                                                                                             |
| Campaign ID (Google Ads)                 | google\_ads\_campaign\_id         | session  | int\_id      | int64             | False    |                                                                                                                             |
| Campaign Name (Google Ads)               | google\_ads\_campaign\_name       | session  | \[int, str\] | not applicable    | False    |                                                                                                                             |
| Ad Group ID (Google Ads)                 | google\_ads\_ad\_group\_id        | session  | int\_id      | int64             | False    |                                                                                                                             |
| Ad Group Name (Google Ads)               | google\_ads\_ad\_group\_name      | session  | \[int, str\] | not applicable    | False    |                                                                                                                             |
| Ad Group Ad ID (Google Ads)              | google\_ads\_ad\_group\_ad\_id    | session  | str\_id      | string            | False    |                                                                                                                             |
| Ad Group Ad Network Type (Google Ads)    | google\_ads\_ad\_network\_type    | session  | \[str, str\] | string            | False    | `google_ads_ad_network_type.json </pstatic/json/enum/google_ads_ad_network_type.json>`                                      |
| Ad Group Keyword Match Type (Google Ads) | google\_ads\_keyword\_match\_type | external | \[str, str\] | string            | False    | `google_ads_keyword_match_type.json </pstatic/json/enum/google_ads_keyword_match_type.json>`, not available in Raw data API |

1.  `Database type` is the source column of a dimension. `Enum` shows
    the ID type. `Not applicable` shows a dymamic dimension.

## Mixed queries

If you want to mix Piwik PRO metrics with Google Ads metrics in a single
call or filter, you can only use the metrics that are common in both
products. Otherwise, you'll receive a Bad Request response.

Here's a list of the metrics that you can use.

| Dimension name                        | Column ID                      | Scope   | Type         | Database type (1) | Nullable | Notes                                                                                  |
| ------------------------------------- | ------------------------------ | ------- | ------------ | ----------------- | -------- | -------------------------------------------------------------------------------------- |
| Source                                | source                         | session | str          | string            | False    |                                                                                        |
| Medium                                | medium                         | session | str          | string            | False    |                                                                                        |
| Source/Medium                         | source\_medium                 | session | str          | string            | False    |                                                                                        |
| Keyword                               | keyword                        | session | str          | string            | False    |                                                                                        |
| Device type                           | device\_type                   | session | \[int, str\] | uint8             | True     | `device_type.json </pstatic/json/enum/device_type.json>`                               |
| Session entry URL                     | session\_entry\_url            | session | str          | string            | False    |                                                                                        |
| Timestamp                             | timestamp                      | session | date         | not applicable    | False    | by default in Raw data API                                                             |
| Website Name                          | website\_name                  | session | \[str, str\] | not applicable    | False    | website UUID                                                                           |
| Customer ID (Google Ads)              | google\_ads\_customer\_id      | session | str\_id      | string            | False    |                                                                                        |
| Customer Name (Google Ads)            | google\_ads\_customer\_name    | session | \[str, str\] | not applicable    | False    |                                                                                        |
| Campaign ID (Google Ads)              | google\_ads\_campaign\_id      | session | int\_id      | int64             | False    |                                                                                        |
| Campaign Name (Google Ads)            | google\_ads\_campaign\_name    | session | \[int, str\] | not applicable    | False    |                                                                                        |
| Ad Group ID (Google Ads)              | google\_ads\_ad\_group\_id     | session | int\_id      | int64             | False    |                                                                                        |
| Ad Group Name (Google Ads)            | google\_ads\_ad\_group\_name   | session | \[int, str\] | not applicable    | False    |                                                                                        |
| Ad Group Ad ID (Google Ads)           | google\_ads\_ad\_group\_ad\_id | session | str\_id      | string            | False    |                                                                                        |
| Ad Group Ad Network Type (Google Ads) | google\_ads\_ad\_network\_type | session | \[str, str\] | string            | False    | `google_ads_ad_network_type.json </pstatic/json/enum/google_ads_ad_network_type.json>` |

1.  `Database type` is the source column of a dimension. `Enum` shows
    the ID type. `Not applicable` shows a dymamic dimension.
