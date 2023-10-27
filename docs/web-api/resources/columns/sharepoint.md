SharePoint: metrics & dimensions ==========

# Metrics

Here's a list of metrics that are avaliable in Piwik PRO when you use
SharePoint integration.

| Metric name                      | Column ID                           | Scope   | Type |
| -------------------------------- | ----------------------------------- | ------- | ---- |
| SharePoint shares                | sharepoint\_shares                  | session | int  |
| SharePoint likes                 | sharepoint\_likes                   | session | int  |
| SharePoint comments              | sharepoint\_comments                | session | int  |
| SharePoint promotions            | sharepoint\_promotions              | session | int  |
| SharePoint creations             | sharepoint\_creations               | session | int  |
| SharePoint edits                 | sharepoint\_edits                   | session | int  |
| SharePoint deletions             | sharepoint\_deletions               | session | int  |
| SharePoint opens                 | sharepoint\_opens                   | session | int  |
| SharePoint uploads               | sharepoint\_uploads                 | session | int  |
| SharePoint item views            | sharepoint\_item\_views             | session | int  |
| SharePoint item attachment views | sharepoint\_item\_attachment\_views | session | int  |
| SharePoint item shares           | sharepoint\_item\_shares            | session | int  |

# Dimensions

Here's a list of dimensions that are avaliable in Piwik PRO when you use
SharePoint integration.

| Dimension name                              | Column ID                                           | Scope (1) | Type         | Database type (2) | Nullable | Notes                                                                          |
| ------------------------------------------- | --------------------------------------------------- | --------- | ------------ | ----------------- | -------- | ------------------------------------------------------------------------------ |
| SharePoint display name                     | sharepoint\_display\_name                           | session   | str          | string            | True     |                                                                                |
| SharePoint office                           | sharepoint\_office                                  | session   | str          | string            | True     |                                                                                |
| SharePoint department                       | sharepoint\_department                              | session   | str          | string            | True     |                                                                                |
| SharePoint job title                        | sharepoint\_job\_title                              | session   | str          | string            | True     |                                                                                |
| SharePoint shares in session                | session\_total\_sharepoint\_shares                  | session   | int          | uint16            | False    |                                                                                |
| SharePoint likes in session                 | session\_total\_sharepoint\_likes                   | session   | int          | uint16            | False    |                                                                                |
| SharePoint comments in session              | session\_total\_sharepoint\_comments                | session   | int          | uint16            | False    |                                                                                |
| SharePoint promotions in session            | session\_total\_sharepoint\_promotions              | session   | int          | uint16            | False    |                                                                                |
| SharePoint creations in session             | session\_total\_sharepoint\_creations               | session   | int          | uint16            | False    |                                                                                |
| SharePoint edits in session                 | session\_total\_sharepoint\_edits                   | session   | int          | uint16            | False    |                                                                                |
| SharePoint deletions in session             | session\_total\_sharepoint\_deletions               | session   | int          | uint16            | False    |                                                                                |
| SharePoint opens in session                 | session\_total\_sharepoint\_opens                   | session   | int          | uint16            | False    |                                                                                |
| SharePoint uploads in session               | session\_total\_sharepoint\_uploads                 | session   | int          | uint16            | False    |                                                                                |
| SharePoint item views in session            | session\_total\_sharepoint\_item\_views             | session   | int          | uint16            | False    |                                                                                |
| SharePoint item attachment views in session | session\_total\_sharepoint\_item\_attachment\_views | session   | int          | uint16            | False    |                                                                                |
| SharePoint item shares in session           | session\_total\_sharepoint\_item\_shares            | session   | int          | uint16            | False    |                                                                                |
| SharePoint action                           | sharepoint\_action                                  | event     | \[int, str\] | uint8             | True     | `sharepoint_action.json </pstatic/json/enum/sharepoint_action.json>`           |
| SharePoint object type                      | sharepoint\_object\_type                            | event     | \[int, str\] | uint8             | True     | `sharepoint_object_type.json </pstatic/json/enum/sharepoint_object_type.json>` |
| SharePoint content type                     | sharepoint\_content\_type                           | event     | str          | string            | True     |                                                                                |
| SharePoint author                           | sharepoint\_author                                  | event     | str          | string            | True     |                                                                                |
| SharePoint author's display name            | sharepoint\_author\_display\_name                   | event     | str          | string            | True     |                                                                                |
| SharePoint author's office                  | sharepoint\_author\_office                          | event     | str          | string            | True     |                                                                                |
| SharePoint author's department              | sharepoint\_author\_department                      | event     | str          | string            | True     |                                                                                |
| SharePoint author's job title               | sharepoint\_author\_job\_title                      | event     | str          | string            | True     |                                                                                |
| SharePoint file url                         | sharepoint\_file\_url                               | event     | str          | string            | True     |                                                                                |
| SharePoint file type                        | sharepoint\_file\_type                              | event     | str          | string            | True     |                                                                                |

1.  If you make a call that includes one or more columns with the
    `event` scope, the whole query will be calculated using events – not
    sessions. This might distort some custom metrics like average
    session time.
2.  `Database type` is the source column of a dimension. `Enum` shows
    the ID type. `Not applicable` shows a dymamic dimension.
