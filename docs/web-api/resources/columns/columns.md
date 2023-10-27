Piwik PRO: metrics & dimensions ===========================

# Metrics

Here's a list of core metrics that you can use in API calls. You can
create additional metrics using transformations.

| Metric name                          | Column ID                              | Scope (1) | Type  |
| ------------------------------------ | -------------------------------------- | --------- | ----- |
| Events                               | events                                 | session   | int   |
| Consent form impressions             | consent\_form\_impressions             | event     | int   |
| Consent form clicks                  | consent\_form\_clicks                  | event     | int   |
| First consents                       | consents\_first                        | event     | int   |
| Changed consents                     | consents\_changed                      | event     | int   |
| Full consents                        | consents\_full                         | event     | int   |
| Any consents                         | consents\_any                          | event     | int   |
| No consents                          | consents\_none                         | event     | int   |
| No decisions                         | consents\_no\_decision                 | event     | int   |
| Analytics consents                   | consents\_analytics                    | event     | int   |
| A/B testing personalization consents | consents\_ab\_testing\_personalization | event     | int   |
| Conversion tracking consents         | consents\_conversion\_tracking         | event     | int   |
| Marketing automation consents        | consents\_marketing\_automation        | event     | int   |
| Remarketing consents                 | consents\_remarketing                  | event     | int   |
| User feedback consents               | consents\_user\_feedback               | event     | int   |
| Custom consent 1                     | consents\_custom\_1                    | event     | int   |
| Page views                           | page\_views                            | session   | int   |
| Unique page views                    | unique\_page\_views                    | session   | int   |
| Entries                              | entries                                | session   | int   |
| Exits                                | exits                                  | session   | int   |
| Bounces                              | bounces                                | session   | int   |
| Sessions                             | sessions                               | session   | int   |
| Visitors                             | visitors                               | session   | int   |
| % of returning visitors              | returning\_visitors\_rate              | session   | float |
| Users                                | users                                  | session   | int   |
| Visitor IPs                          | visitor\_ips                           | session   | int   |
| Outlinks                             | outlinks                               | session   | int   |
| Unique outlinks                      | unique\_outlinks                       | session   | int   |
| Downloads                            | downloads                              | session   | int   |
| Unique downloads                     | unique\_downloads                      | session   | int   |
| Searches                             | searches                               | session   | int   |
| Unique searches                      | unique\_searches                       | session   | int   |
| Custom events                        | custom\_events                         | session   | int   |
| Unique custom events                 | unique\_custom\_events                 | session   | int   |
| Content impressions                  | content\_impressions                   | session   | int   |
| Unique content impressions           | unique\_content\_impressions           | session   | int   |
| Content interactions                 | content\_interactions                  | session   | int   |
| Unique content interactions          | unique\_content\_interactions          | session   | int   |
| Goal conversions                     | goal\_conversions                      | session   | int   |
| Unique goal conversions              | unique\_goal\_conversions              | session   | int   |
| Ecommerce conversions                | ecommerce\_conversions                 | session   | int   |
| Ecommerce abandoned carts            | ecommerce\_abandoned\_carts            | session   | int   |
| Unique purchases                     | unique\_purchases                      | event     | int   |
| Entry rate                           | entry\_rate                            | session   | float |
| Exit rate                            | exit\_rate                             | session   | float |
| Exit rate events                     | exit\_rate\_events                     | session   | float |
| Bounce rate                          | bounce\_rate                           | session   | float |
| Bounce rate                          | bounce\_rate\_events                   | session   | float |
| Content interaction rate             | content\_interaction\_rate             | session   | float |
| Goal conversion rate                 | goal\_conversion\_rate                 | session   | float |
| Ecommerce conversion rate            | ecommerce\_conversion\_rate            | session   | float |
| Events per session                   | events\_per\_session                   | session   | float |

1.  If you make a call that includes one or more columns with the
    `event` scope, the whole query will be calculated using events – not
    sessions. This might distort some custom metrics like average
    session time.

# Dimensions

Here's a list of core dimensions that you can use in API calls.

| Dimension name                         | Column ID                                   | Scope (1) | Type         | Database type (2) | Nullable | Notes                                                                                    |
| -------------------------------------- | ------------------------------------------- | --------- | ------------ | ----------------- | -------- | ---------------------------------------------------------------------------------------- |
| Visitor ID                             | visitor\_id                                 | session   | hex          | uint64            | False    | by default in Raw data API                                                               |
| User ID                                | user\_id                                    | session   | str          | string            | False    |                                                                                          |
| Cookie ID                              | cookie\_id                                  | session   | hex          | uint64            | False    |                                                                                          |
| Returning visitor                      | visitor\_returning                          | session   | \[int, str\] | uint8             | False    | `visitor_returning.json </static/json/enum/visitor_returning.json>`                     |
| Session number                         | visitor\_session\_number                    | session   | int          | uint16            | False    |                                                                                          |
| Days since last session                | visitor\_days\_since\_last\_session         | session   | int          | uint16            | True     |                                                                                          |
| Days since first session               | visitor\_days\_since\_first\_session        | session   | int          | uint16            | True     |                                                                                          |
| Days since order                       | visitor\_days\_since\_order                 | session   | int          | uint16            | True     |                                                                                          |
| Events in session                      | session\_total\_events                      | session   | int          | uint16            | False    |                                                                                          |
| Session time                           | session\_total\_time                        | session   | int          | uint32            | False    |                                                                                          |
| Page views in session                  | session\_total\_page\_views                 | session   | int          | uint16            | False    |                                                                                          |
| Outlinks in session                    | session\_total\_outlinks                    | session   | int          | uint16            | False    |                                                                                          |
| Downloads in session                   | session\_total\_downloads                   | session   | int          | uint16            | False    |                                                                                          |
| Site searches in session               | session\_total\_site\_searches              | session   | int          | uint16            | False    |                                                                                          |
| Custom events in session               | session\_total\_custom\_events              | session   | int          | uint16            | False    |                                                                                          |
| Content impressions in session         | session\_total\_content\_impressions        | session   | int          | uint16            | False    |                                                                                          |
| Content interactions in session        | session\_total\_content\_interactions       | session   | int          | uint16            | False    |                                                                                          |
| Goal conversions in session            | session\_total\_goal\_conversions           | session   | int          | uint16            | False    |                                                                                          |
| Ecommerce conversions in session       | session\_total\_ecommerce\_conversions      | session   | int          | uint16            | False    |                                                                                          |
| Abandoned carts in session             | session\_total\_abandoned\_carts            | session   | int          | uint16            | False    |                                                                                          |
| Unique page views in session           | session\_unique\_page\_views                | session   | int          | uint16            | False    |                                                                                          |
| Unique outlinks in session             | session\_unique\_outlinks                   | session   | int          | uint16            | False    |                                                                                          |
| Unique downloads in session            | session\_unique\_downloads                  | session   | int          | uint16            | False    |                                                                                          |
| Unique site searches in session        | session\_unique\_searches                   | session   | int          | uint16            | False    |                                                                                          |
| Unique custom events in session        | session\_unique\_custom\_events             | session   | int          | uint16            | False    |                                                                                          |
| Unique content impressions in session  | session\_unique\_content\_impressions       | session   | int          | uint16            | False    |                                                                                          |
| Unique content interactions in session | session\_unique\_content\_interactions      | session   | int          | uint16            | False    |                                                                                          |
| Goals converted in session             | session\_goals                              | session   | array        | array of int32    | False    |                                                                                          |
| Shopping stage                         | session\_ecommerce\_status                  | session   | \[int, str\] | uint8             | False    | `session_ecommerce_status.json </static/json/enum/session_ecommerce_status.json>`       |
| Source                                 | source                                      | session   | str          | string            | False    |                                                                                          |
| Medium                                 | medium                                      | session   | str          | string            | False    |                                                                                          |
| Source/Medium                          | source\_medium                              | session   | str          | string            | False    |                                                                                          |
| Keyword                                | keyword                                     | session   | str          | string            | False    |                                                                                          |
| Channel                                | referrer\_type                              | session   | \[int, str\] | uint8             | False    | `referrer_type.json </static/json/enum/referrer_type.json>`                             |
| Referrer URL                           | referrer\_url                               | session   | str          | string            | False    |                                                                                          |
| Campaign name                          | campaign\_name                              | session   | str          | string            | False    |                                                                                          |
| Campaign ID                            | campaign\_id                                | session   | str          | string            | False    |                                                                                          |
| Campaign content                       | campaign\_content                           | session   | str          | string            | False    |                                                                                          |
| Google Click ID                        | campaign\_gclid                             | session   | str          | string            | True     |                                                                                          |
| Operating system                       | operating\_system                           | session   | \[str, str\] | string(3)         | True     | `operating_system.json </static/json/enum/operating_system.json>`                       |
| Operating system version               | operating\_system\_version                  | session   | str          | string            | False    |                                                                                          |
| Browser engine                         | browser\_engine                             | session   | str          | string            | False    |                                                                                          |
| Browser name                           | browser\_name                               | session   | \[str, str\] | string(2)         | True     | `browser_name.json </static/json/enum/browser_name.json>`                               |
| Browser version                        | browser\_version                            | session   | str          | string            | False    |                                                                                          |
| Browser language                       | browser\_language\_iso639                   | session   | \[str, str\] | string(2)         | True     | `browser_language_iso639.json </static/json/enum/browser_language_iso639.json>`         |
| Browser fingerprint                    | browser\_fingerprint                        | session   | int          | uint64            | False    | not available in Queries API                                                             |
| Device type                            | device\_type                                | session   | \[int, str\] | uint8             | True     | `device_type.json </static/json/enum/device_type.json>`                                 |
| Device brand                           | device\_brand                               | session   | \[str, str\] | string(2)         | True     | `device_brand.json </static/json/enum/device_brand.json>`                               |
| Device model                           | device\_model                               | session   | str          | string            | False    |                                                                                          |
| Resolution                             | resolution                                  | session   | str          | string            | True     |                                                                                          |
| Resolution width                       | resolution\_width                           | session   | int          | uint16            | True     |                                                                                          |
| Resolution height                      | resolution\_height                          | session   | int          | uint16            | True     |                                                                                          |
| PDF plugin                             | plugin\_pdf                                 | session   | int(0,1)     | uint8             | False    |                                                                                          |
| Flash plugin                           | plugin\_flash                               | session   | int(0,1)     | uint8             | False    |                                                                                          |
| Java plugin                            | plugin\_java                                | session   | int(0,1)     | uint8             | False    |                                                                                          |
| Director plugin                        | plugin\_director                            | session   | int(0,1)     | uint8             | False    |                                                                                          |
| QuickTime plugin                       | plugin\_quicktime                           | session   | int(0,1)     | uint8             | False    |                                                                                          |
| RealPlayer plugin                      | plugin\_realplayer                          | session   | int(0,1)     | uint8             | False    |                                                                                          |
| Windows Media Player plugin            | plugin\_windowsmedia                        | session   | int(0,1)     | uint8             | False    |                                                                                          |
| Gears plugin                           | plugin\_gears                               | session   | int(0,1)     | uint8             | False    |                                                                                          |
| Silverlight plugin                     | plugin\_silverlight                         | session   | int(0,1)     | uint8             | False    |                                                                                          |
| Cookie support                         | plugin\_cookie                              | session   | int(0,1)     | uint8             | False    |                                                                                          |
| Continent                              | location\_continent\_iso\_code              | session   | \[str, str\] | string(2)         | True     | `location_continent_iso_code.json </static/json/enum/location_continent_iso_code.json>` |
| Country                                | location\_country\_name                     | session   | \[str, str\] | string            | True     | ISO 3166-2 codes (e.g. "PL")                                                             |
| Subdivision                            | location\_subdivision\_1\_name              | session   | \[str, str\] | string            | True     | ISO 3166-2 codes (e.g. "PL-DS")                                                          |
| Subdivision 2                          | location\_subdivision\_2\_name              | session   | \[str, str\] | string            | True     | ISO 3166-2 codes (e.g. "ES-M")                                                           |
| City                                   | location\_city\_name                        | session   | \[int, str\] | string            | True     | unique identifiers as specified by [GeoNames](http://www.geonames.org/)                  |
| Designated market area                 | location\_metro\_code                       | session   | \[str, str\] | string(3)         | True     | Deprecated. Available only in old reports.                                               |
| Latitude                               | location\_latitude                          | session   | float        | float64           | True     |                                                                                          |
| Longitude                              | location\_longitude                         | session   | float        | float64           | True     |                                                                                          |
| Provider                               | location\_provider                          | session   | str          | string            | False    |                                                                                          |
| Organization                           | location\_organization                      | session   | str          | string            | False    |                                                                                          |
| Session exit URL                       | session\_exit\_url                          | session   | str          | string            | False    |                                                                                          |
| Session exit title                     | session\_exit\_title                        | session   | str          | string            | False    |                                                                                          |
| Session entry URL                      | session\_entry\_url                         | session   | str          | string            | False    |                                                                                          |
| Session entry title                    | session\_entry\_title                       | session   | str          | string            | False    |                                                                                          |
| Session second URL                     | session\_second\_url                        | session   | str          | string            | False    |                                                                                          |
| Session second title                   | session\_second\_title                      | session   | str          | string            | False    |                                                                                          |
| Session bounce                         | is\_bounce                                  | session   | int(0,1)     | uint8             | False    |                                                                                          |
| Event ID                               | event\_id                                   | event     | int          | uint64            | False    | by default in Raw data API                                                               |
| Session ID                             | session\_id                                 | session   | int          | uint64            | False    | by default in Raw data API                                                               |
| Exit view                              | is\_exit                                    | event     | int(0,1)     | uint8             | False    | not available in Queries API                                                             |
| Entry view                             | is\_entry                                   | event     | int(0,1)     | uint8             | False    | not available in Queries API                                                             |
| Event type                             | event\_type                                 | event     | \[int, str\] | uint8             | False    | `event_type.json </static/json/enum/event_type.json>`                                   |
| Page URL                               | event\_url                                  | event     | str          | string            | False    |                                                                                          |
| Page title                             | event\_title                                | event     | str          | string            | False    |                                                                                          |
| Outlink URL                            | outlink\_url                                | event     | str          | string            | False    |                                                                                          |
| Download URL                           | download\_url                               | event     | str          | string            | False    |                                                                                          |
| Search keyword                         | search\_keyword                             | event     | str          | string            | False    |                                                                                          |
| Search category                        | search\_category                            | event     | str          | string            | False    |                                                                                          |
| Search results count                   | search\_results\_count                      | event     | int          | uint16            | True     |                                                                                          |
| Custom event category                  | custom\_event\_category                     | event     | str          | string            | False    |                                                                                          |
| Custom event action                    | custom\_event\_action                       | event     | str          | string            | False    |                                                                                          |
| Custom event name                      | custom\_event\_name                         | event     | str          | string            | False    |                                                                                          |
| Custom event value                     | custom\_event\_value                        | event     | float        | float64           | True     |                                                                                          |
| Content name                           | content\_name                               | event     | str          | string            | False    |                                                                                          |
| Content piece                          | content\_piece                              | event     | str          | string            | False    |                                                                                          |
| Content target                         | content\_target                             | event     | str          | string            | False    |                                                                                          |
| Previous page view URL                 | previous\_event\_url                        | event     | str          | string            | False    |                                                                                          |
| Previous page view title               | previous\_event\_title                      | event     | str          | string            | False    |                                                                                          |
| Next page view URL                     | next\_event\_url                            | event     | str          | string            | False    |                                                                                          |
| Next page view title                   | next\_event\_title                          | event     | str          | string            | False    |                                                                                          |
| Event index                            | event\_index                                | event     | int          | uint16            | False    | not available in Queries API                                                             |
| Page view index                        | page\_view\_index                           | event     | int          | uint16            | True     | not available in Queries API                                                             |
| Time on page                           | time\_on\_page                              | event     | int          | uint32            | True     |                                                                                          |
| Page generation time                   | page\_generation\_time                      | event     | float        | float64           | True     |                                                                                          |
| Goal name                              | goal\_id                                    | event     | \[int, str\] | int32             | True     | goal IDs from Analytics                                                                  |
| Goal revenue                           | goal\_revenue                               | event     | float        | float64           | True     |                                                                                          |
| Lost revenue                           | lost\_revenue                               | event     | float        | float64           | True     |                                                                                          |
| Order ID                               | order\_id                                   | event     | str          | string            | False    |                                                                                          |
| Item count                             | item\_count                                 | event     | int          | uint16            | True     |                                                                                          |
| Revenue                                | revenue                                     | event     | float        | float64           | True     |                                                                                          |
| Revenue (Subtotal)                     | revenue\_subtotal                           | event     | float        | float64           | True     |                                                                                          |
| Revenue (Tax)                          | revenue\_tax                                | event     | float        | float64           | True     |                                                                                          |
| Revenue (Shipping)                     | revenue\_shipping                           | event     | float        | float64           | True     |                                                                                          |
| Revenue (Discount)                     | revenue\_discount                           | event     | float        | float64           | True     |                                                                                          |
| Time until DOM is ready                | timing\_dom\_interactive                    | event     | int          | uint32            | True     |                                                                                          |
| Time to interact                       | timing\_event\_end                          | event     | int          | uint32            | True     |                                                                                          |
| Consent form view source               | consent\_source                             | event     | \[int, str\] | uint8             | True     | `consent_source.json </static/json/enum/consent_source.json>`                           |
| Consent form interaction type          | consent\_form\_button                       | event     | \[int, str\] | uint8             | True     | `consent_form_button.json </static/json/enum/consent_form_button.json>`                 |
| Consent scope                          | consent\_scope                              | event     | \[int, str\] | uint8             | True     | `consent_scope.json </static/json/enum/consent_scope.json>`                             |
| Consent action                         | consent\_action                             | event     | \[int, str\] | uint8             | True     | `consent_action.json </static/json/enum/consent_action.json>`                           |
| Analytics consent                      | consent\_type\_analytics                    | event     | int(0,1)     | uint8             | True     |                                                                                          |
| AB testing personalization consent     | consent\_type\_ab\_testing\_personalization | event     | int(0,1)     | uint8             | True     |                                                                                          |
| Conversion tracking consent            | consent\_type\_conversion\_tracking         | event     | int(0,1)     | uint8             | True     |                                                                                          |
| Marketing automation consent           | consent\_type\_marketing\_automation        | event     | int(0,1)     | uint8             | True     |                                                                                          |
| Remarketing consent                    | consent\_type\_remarketing                  | event     | int(0,1)     | uint8             | True     |                                                                                          |
| User feedback consent                  | consent\_type\_user\_feedback               | event     | int(0,1)     | uint8             | True     |                                                                                          |
| Custom consent 1                       | consent\_type\_custom\_1                    | event     | int(0,1)     | uint8             | True     |                                                                                          |
| Event custom dimension 1               | event\_custom\_dimension\_1                 | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom dimension 2               | event\_custom\_dimension\_2                 | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom dimension 3               | event\_custom\_dimension\_3                 | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom dimension 4               | event\_custom\_dimension\_4                 | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom dimension 5               | event\_custom\_dimension\_5                 | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable key 1            | event\_custom\_variable\_key\_1             | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable value 1          | event\_custom\_variable\_value\_1           | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable key 2            | event\_custom\_variable\_key\_2             | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable value 2          | event\_custom\_variable\_value\_2           | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable key 3            | event\_custom\_variable\_key\_3             | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable value 3          | event\_custom\_variable\_value\_3           | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable key 4            | event\_custom\_variable\_key\_4             | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable value 4          | event\_custom\_variable\_value\_4           | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable key 5            | event\_custom\_variable\_key\_5             | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Event custom variable value 5          | event\_custom\_variable\_value\_5           | event     | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom dimension 1             | session\_custom\_dimension\_1               | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom dimension 2             | session\_custom\_dimension\_2               | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom dimension 3             | session\_custom\_dimension\_3               | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom dimension 4             | session\_custom\_dimension\_4               | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom dimension 5             | session\_custom\_dimension\_5               | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable key 1          | session\_custom\_variable\_key\_1           | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable value 1        | session\_custom\_variable\_value\_1         | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable key 2          | session\_custom\_variable\_key\_2           | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable value 2        | session\_custom\_variable\_value\_2         | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable key 3          | session\_custom\_variable\_key\_3           | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable value 3        | session\_custom\_variable\_value\_3         | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable key 4          | session\_custom\_variable\_key\_4           | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable value 4        | session\_custom\_variable\_value\_4         | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable key 5          | session\_custom\_variable\_key\_5           | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Session custom variable value 5        | session\_custom\_variable\_value\_5         | session   | str          | string            | False    | The number of slots depend on your account type.                                         |
| Timestamp                              | timestamp                                   | session   | date         | not applicable    | False    | by default in Raw data API                                                               |
| Local hour                             | local\_hour                                 | session   | int          | not applicable    | False    |                                                                                          |
| Time of redirections                   | redirections\_time                          | event     | int          | not applicable    | True     |                                                                                          |
| Domain Lookup Time                     | domain\_lookup\_time                        | event     | int          | not applicable    | True     |                                                                                          |
| Server Connection Time                 | server\_connection\_time                    | event     | int          | not applicable    | True     |                                                                                          |
| Server Response Time                   | server\_response\_time                      | event     | int          | not applicable    | True     |                                                                                          |
| Page Rendering Time                    | page\_rendering\_time                       | event     | int          | not applicable    | True     |                                                                                          |
| IPv4 address                           | ipv4\_address                               | session   | ipv4         | not applicable    | True     |                                                                                          |
| IPv6 address                           | ipv6\_address                               | session   | ipv6         | not applicable    | True     |                                                                                          |
| Website name                           | website\_name                               | session   | \[str, str\] | not applicable    | False    | website UUID                                                                             |

1.  If you make a call that includes one or more columns with the
    `event` scope, the whole query will be calculated using events – not
    sessions. This might distort some custom metrics like average
    session time.
2.  `Database type` is the source column of a dimension. `Enum` shows
    the ID type. `Not applicable` shows a dymamic dimension.

# Transformation: dimension to metric

Here's a list of transformations that you can use.

| Transformation name | Transformation ID | Source types | Result type |
| ------------------- | ----------------- | ------------ | ----------- |
| Unique Count        | unique\_count     | int, str     | int         |
| Min                 | min               | int, float   | (as source) |
| Max                 | max               | int, float   | (as source) |
| Average             | average           | int, float   | float       |
| Median              | median            | int, float   | (as source) |
| Sum                 | sum               | int, float   | (as source) |

# Transformation: dimension to dimension

Here's a list of transformations that you can use.

| Transformation name      | Transformation ID      | Source types   | Result type |
| ------------------------ | ---------------------- | -------------- | ----------- |
| Date To Day              | to\_date               | datetime, date | date        |
| Date To Start Of Hour    | to\_start\_of\_hour    | datetime       | datetime    |
| Date To Start Of Week    | to\_start\_of\_week    | datetime, date | date        |
| Date To Start Of Month   | to\_start\_of\_month   | datetime, date | date        |
| Date To Start Of Quarter | to\_start\_of\_quarter | datetime, date | date        |
| Date To Start Of Year    | to\_start\_of\_year    | datetime, date | date        |
| Date To Hour Of Day      | to\_hour\_of\_day      | datetime       | int         |
| Date To Day Of Week      | to\_day\_of\_week      | datetime, date | int         |
| Date To Month Number     | to\_month\_number      | datetime, date | int         |
| URL To Path              | to\_path               | str            | str         |
| URL To Domain            | to\_domain             | str            | str         |
| URL Strip Query String   | strip\_qs              | str            | str         |
