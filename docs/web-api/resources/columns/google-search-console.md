Google Search Console: metrics & dimensions =====================

# Metrics

Here's a list of metrics that are avaliable in Piwik PRO when you use
Google Search Console integration.

| Metric name                      | Column ID                         | Scope    | Type  |
| -------------------------------- | --------------------------------- | -------- | ----- |
| Clicks (search engine)           | search\_engine\_clicks            | external | int   |
| Impressions (search engine)      | search\_engine\_impressions       | external | int   |
| CTR (search engine)              | search\_engine\_ctr               | external | float |
| Average position (search engine) | search\_engine\_average\_position | external | float |

# Dimensions

Here's a list of dimensions that are avaliable in Piwik PRO when you use
Google Search Console integration.

| Dimension name        | Column ID                      | Scope    | Type         | Database type (1) | Nullable | Notes                                                                                    |
| --------------------- | ------------------------------ | -------- | ------------ | ----------------- | -------- | ---------------------------------------------------------------------------------------- |
| Source                | source                         | session  | str          | string            | False    |                                                                                          |
| Medium                | medium                         | session  | str          | string            | False    |                                                                                          |
| Source/Medium         | source\_medium                 | session  | str          | string            | False    |                                                                                          |
| Channel               | referrer\_type                 | session  | \[int, str\] | uint8             | False    | `referrer_type.json </_static/json/enum/referrer_type.json>`                             |
| Referrer URL          | referrer\_url                  | session  | str          | string            | False    |                                                                                          |
| Device type           | device\_type                   | session  | \[int, str\] | uint8             | True     | `device_type.json </_static/json/enum/device_type.json>`                                 |
| Continent             | location\_continent\_iso\_code | session  | \[str, str\] | string(2)         | True     | `location_continent_iso_code.json </_static/json/enum/location_continent_iso_code.json>` |
| Country               | location\_country\_name        | session  | \[str, str\] | string            | True     | ISO 3166-2 codes (e.g. "PL")                                                             |
| Session entry URL     | session\_entry\_url            | session  | str          | string            | False    |                                                                                          |
| Timestamp             | timestamp                      | session  | date         | not applicable    | False    | by default in Raw data API                                                               |
| Search engine keyword | search\_engine\_keyword        | external | str          | string            | False    | not available in Raw data API                                                            |
| Website Name          | website\_name                  | session  | \[str, str\] | not applicable    | False    | website UUID                                                                             |

1.  `Database type` is the source column of a dimension. `Enum` shows
    the ID type. `Not applicable` shows a dymamic dimension.

# Mixed queries

It is possible to request both internal analytics and Google Search
Console metrics in a single query (for example: "Sessions" and "Clicks
(search engine)"), however **only the common dimensions listed below**
may be used in such queries.

| Dimension name    | Column ID                      | Scope   | Type         | Database type (1) | Nullable | Notes                                                                                    |
| ----------------- | ------------------------------ | ------- | ------------ | ----------------- | -------- | ---------------------------------------------------------------------------------------- |
| Source            | source                         | session | str          | string            | False    |                                                                                          |
| Medium            | medium                         | session | str          | string            | False    |                                                                                          |
| Source/Medium     | source\_medium                 | session | str          | string            | False    |                                                                                          |
| Channel           | referrer\_type                 | session | \[int, str\] | uint8             | False    | `referrer_type.json </_static/json/enum/referrer_type.json>`                             |
| Referrer URL      | referrer\_url                  | session | str          | string            | False    |                                                                                          |
| Device type       | device\_type                   | session | \[int, str\] | uint8             | True     | `device_type.json </_static/json/enum/device_type.json>`                                 |
| Continent         | location\_continent\_iso\_code | session | \[str, str\] | string(2)         | True     | `location_continent_iso_code.json </_static/json/enum/location_continent_iso_code.json>` |
| Country           | location\_country\_name        | session | \[str, str\] | string            | True     | ISO 3166-2 codes (e.g. "PL")                                                             |
| Session entry URL | session\_entry\_url            | session | str          | string            | False    |                                                                                          |
| Timestamp         | timestamp                      | session | date         | not applicable    | False    | by default in Raw data API                                                               |
| Website Name      | website\_name                  | session | \[str, str\] | not applicable    | False    | website UUID                                                                             |

1.  `Database type` is the source column of a dimension. `Enum` shows
    the ID type. `Not applicable` shows a dymamic dimension.

<div class="warning">

<div class="title">

Warning

</div>

Using dimensions that are not explicitly listed in the table above in
such queries (either as query columns or as filters) will result in a
**Bad Request** response.

</div>
