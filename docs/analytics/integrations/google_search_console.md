# Google Search Console

The `custom-reports-http-api` supports querying Google Search Console
data just like the internal analytics data.

<div class="note">

<div class="title">

Note

</div>

You must configure the Google Search Console integration before any data
from it will become available. This can be done in the **Settings /
Integrations** application's section.

</div>

## Metrics

The table below lists metrics provided by Google Search Console
integration.

| Metric Name                      | Column ID                         | Scope    | Type  |
| -------------------------------- | --------------------------------- | -------- | ----- |
| Clicks (search engine)           | search\_engine\_clicks            | external | int   |
| Impressions (search engine)      | search\_engine\_impressions       | external | int   |
| CTR (search engine)              | search\_engine\_ctr               | external | float |
| Average position (search engine) | search\_engine\_average\_position | external | float |

Google Search Console Metrics

## Dimensions

The table below lists dimensions provided by Google Search Console
integration.

:::note Note

"Database type" column presents the type of source column of the
dimension (in case of enum - type of the ID, in case of dynamic
dimensions - not applicable).

::: 

| Dimension Name        | Column ID                      | Scope    | Type         | Database Type  | Nullable | Notes                                                                                    |
| --------------------- | ------------------------------ | -------- | ------------ | -------------- | -------- | ---------------------------------------------------------------------------------------- |
| Source                | source                         | session  | str          | string         | False    |                                                                                          |
| Medium                | medium                         | session  | str          | string         | False    |                                                                                          |
| Source/Medium         | source\_medium                 | session  | str          | string         | False    |                                                                                          |
| Channel               | referrer\_type                 | session  | \[int, str\] | uint8          | False    | `referrer_type.json </_static/json/enum/referrer_type.json>`                             |
| Referrer URL          | referrer\_url                  | session  | str          | string         | False    |                                                                                          |
| Device type           | device\_type                   | session  | \[int, str\] | uint8          | True     | `device_type.json </_static/json/enum/device_type.json>`                                 |
| Continent             | location\_continent\_iso\_code | session  | \[str, str\] | string(2)      | True     | `location_continent_iso_code.json </_static/json/enum/location_continent_iso_code.json>` |
| Country               | location\_country\_name        | session  | \[str, str\] | string         | True     | ISO 3166-2 codes (e.g. "PL")                                                             |
| Session entry URL     | session\_entry\_url            | session  | str          | string         | False    |                                                                                          |
| Timestamp             | timestamp                      | session  | date         | not applicable | False    | by default in Raw data API                                                               |
| Search engine keyword | search\_engine\_keyword        | external | str          | string         | False    | not available in Raw data API                                                            |
| Website Name          | website\_name                  | session  | \[str, str\] | not applicable | False    | website UUID                                                                             |

Google Search Console Dimensions

## Mixed Queries

It is possible to request both internal analytics and Google Search
Console metrics in a single query (for example: "Sessions" and "Clicks
(search engine)"), however **only the common dimensions listed below**
may be used in such queries.

:::note Note 

"Database type" column presents the type of source column of the
dimension (in case of enum - type of the ID, in case of dynamic
dimensions - not applicable).

:::

| Dimension Name    | Column ID                      | Scope   | Type         | Database Type  | Nullable | Notes                                                                                    |
| ----------------- | ------------------------------ | ------- | ------------ | -------------- | -------- | ---------------------------------------------------------------------------------------- |
| Source            | source                         | session | str          | string         | False    |                                                                                          |
| Medium            | medium                         | session | str          | string         | False    |                                                                                          |
| Source/Medium     | source\_medium                 | session | str          | string         | False    |                                                                                          |
| Channel           | referrer\_type                 | session | \[int, str\] | uint8          | False    | `referrer_type.json </_static/json/enum/referrer_type.json>`                             |
| Referrer URL      | referrer\_url                  | session | str          | string         | False    |                                                                                          |
| Device type       | device\_type                   | session | \[int, str\] | uint8          | True     | `device_type.json </_static/json/enum/device_type.json>`                                 |
| Continent         | location\_continent\_iso\_code | session | \[str, str\] | string(2)      | True     | `location_continent_iso_code.json </_static/json/enum/location_continent_iso_code.json>` |
| Country           | location\_country\_name        | session | \[str, str\] | string         | True     | ISO 3166-2 codes (e.g. "PL")                                                             |
| Session entry URL | session\_entry\_url            | session | str          | string         | False    |                                                                                          |
| Timestamp         | timestamp                      | session | date         | not applicable | False    | by default in Raw data API                                                               |
| Website Name      | website\_name                  | session | \[str, str\] | not applicable | False    | website UUID                                                                             |

Common Dimensions

:::warning Warning

Using dimensions that are not explicitly listed in the table above in
such queries (either as query columns or as filters) will result in a
**Bad Request** response.

:::