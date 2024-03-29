# Accelerated Mobile Pages integration

[Accelerated Mobile Pages](https://www.ampproject.org/) (AMP) is an open
source framework designed to optimize browsing on mobile devices. This
technology can render static content pages much faster than traditional
methods. To do that AMP removed the possibility of executing JavaScript
on such pages (excluding few approved libraries), so traditional
analytic scripts won’t work on such pages. You can still measure user
engagement using an
[amp-analytics](https://amp.dev/documentation/components/amp-analytics/)
library.

## Basic setup

This setup allows you to track page views. Copy following code to your
AMP page while replacing:

  - `<INSTANCE_DOMAIN>` - PPAS instance domain (e.g.
    `analytics.example.com`)
  - `<APP_ID>` - PPAS application ID (e.g.
    `12345678-1234-1234-1234-1234567890ab`)
  - `<TRACKER_HASH>` - Cookie hash generated by JavaScript Tracking
    Client. Check `how to get cookie hash<howToGetJSTCCookieHash>`
    section for detailed information.

<!-- end list -->

``` html
<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
<amp-analytics type="ppasanalytics">
  <script type="application/json">
  {
    "vars": {
      "host": "<INSTANCE_DOMAIN>",
      "website_id": "<APP_ID>",
      "website_hash": "<TRACKER_HASH>"
    }
  }
  </script>
</amp-analytics>
```

## How to get JavaScript Tracking Client cookie hash

If there is no non-AMP page tracked by traditional JavaScript Tracking
Client, this value may be removed from configuration or left empty. It's
used to guarantee that same cookie will be used by AMP and non-AMP pages
on client domain. This value should be taken from the name of the ID
cookie generated by JavaScript Tracking Client. Each JavaScript Tracking
Client generates unique cookie name based on its configuration. Follow
these instructions to get hash from cookie generated by JavaScript
Tracking Client:

  - Setup JavaScript Tracking Client on non-AMP page (if it was not done
    already).
  - Open tracked page in the browser.
  - Open developer tools in the browser and look for cookie starting
    with `_pk_id.`. Cookie name should look similar to this:
    `_pk_id.12345678-1234-1234-1234-1234567890ab.cdef`. The part after
    first dot is the value of App ID of the cookie (if there are
    multiple cookies starting with `_pk_id.` it may be used to identify
    correct cookie). After second dot you'll find the cookie hash
    generated by JavaScript Tracking Client (in the example its value is
    `cdef`). Copy this part and replace `<TRACKER_HASH>` with it.

Here you can see how to look for JavaScript Tracking Client cookie in
Google Chrome developer tools:

![image](/pstatic/images/amp_integration/cookie-hash.png)

## Tracking custom events

To track `custom event<jtc-api-custom-events>` you should attach a
trigger on the interactive page element and define event values. To do
that add to the configuration the
[triggers](https://www.ampproject.org/docs/reference/components/amp-analytics#triggers)
section and set up event trigger.

This example will send custom event when page element using "mybutton"
ID will be clicked:

``` html
<amp-analytics type="ppasanalytics">
  <script type="application/json">
  {
    "vars": {
      "host": <instance_domain>,
      "website_id": <app_id>,
      "website_hash": <tracker_hash>
    },
    "triggers": {
      "exampleEvent": {
        "selector": "#mybutton",
        "on": "click",
        "request": "customevent",
        "vars": {
          "event_category": "buttons",
          "event_action": "click",
          "event_name": "testButton"
        }
      }
    }
  }
  </script>
</amp-analytics>
```

These are parameters used by custom event:

  - “[selector](https://www.ampproject.org/docs/reference/components/amp-analytics#element-selector)”
    - CSS selector for element that should be watched

  - “on” - HTML event type

  - “vars” - Variables that should be used by this event. Custom events
    expect:
    
    >   - “event\_category” - required
    >   - “event\_action” - required
    >   - “event\_name” - optional
    >   - “event\_value” - optional

## Tracking download events

To track `download event<jtc-api-download-and-outlink>` attach trigger
to a link in a similar way to `custom event <ampCustomEvent>`.

This example will send download event when page element using
"mydownload" ID will be clicked:

``` html
<amp-analytics type="ppasanalytics">
  <script type="application/json">
  {
    "vars": {
      "host": <instance_domain>,
      "website_id": <app_id>,
      "website_hash": <tracker_hash>
    },
    "triggers": {
      "exampleEvent": {
        "selector": "#mydownload",
        "on": "click",
        "request": "download",
        "vars": {
          "download_url": "https://example.com/whitepaper.pdf"
        }
      }
    }
  }
  </script>
</amp-analytics>
```

These are parameters used by download event:

  - “[selector](https://www.ampproject.org/docs/reference/components/amp-analytics#element-selector)”
    - CSS selector for element that should be watched

  - “on” - HTML event type

  - “vars” - Variables that should be used by this event. Custom events
    expect:
    
    >   - “download\_url” - required

## Tracking outlink events

To track `outlink event<jtc-api-download-and-outlink>` attach trigger to
a link in a similar way to `custom event <ampCustomEvent>`.

This example will send outlink event when page element using "myoutlink"
ID will be clicked:

``` html
<amp-analytics type="ppasanalytics">
  <script type="application/json">
  {
    "vars": {
      "host": <instance_domain>,
      "website_id": <app_id>,
      "website_hash": <tracker_hash>
    },
    "triggers": {
      "exampleEvent": {
        "selector": "#myoutlink",
        "on": "click",
        "request": "outlink",
        "vars": {
          "outlink_url": "https://another-site.com/"
        }
      }
    }
  }
  </script>
</amp-analytics>
```

These are parameters used by outlink event:

  - “[selector](https://www.ampproject.org/docs/reference/components/amp-analytics#element-selector)”
    - CSS selector for element that should be watched

  - “on” - HTML event type

  - “vars” - Variables that should be used by this event. Custom events
    expect:
    
    >   - “outlink\_url” - required

## Tracking goal conversions

To track `goal conversion<jtc-api-goal-conversions>` attach trigger to a
link in a similar way to `custom event <ampCustomEvent>`.

This example will send goal conversion when page element using "mygoal"
ID will be clicked:

``` html
<amp-analytics type="ppasanalytics">
  <script type="application/json">
  {
    "vars": {
      "host": <instance_domain>,
      "website_id": <app_id>,
      "website_hash": <tracker_hash>
    },
    "triggers": {
      "exampleEvent": {
        "selector": "#mygoal",
        "on": "click",
        "request": "goal",
        "vars": {
          "goal_id": "1",
          "revenue": "59.99"
        }
      }
    }
  }
  </script>
</amp-analytics>
```

These are parameters used by goal event:

  - “[selector](https://www.ampproject.org/docs/reference/components/amp-analytics#element-selector)”
    - CSS selector for element that should be watched

  - “on” - HTML event type

  - “vars” - Variables that should be used by this event. Custom events
    expect:
    
    >   - “goal\_id” - required
    >   - "revenue" - optional

## Track internal search events

To track `internal search event<jtc-api-site-search>` attach trigger to
a link in a similar way to `custom event <ampCustomEvent>`.

This example will send internal search event when page element using
"mysearch" ID will be clicked:

``` html
<amp-analytics type="ppasanalytics">
  <script type="application/json">
  {
    "vars": {
      "host": <instance_domain>,
      "website_id": <app_id>,
      "website_hash": <tracker_hash>
    },
    "triggers": {
      "exampleEvent": {
        "selector": "#mysearch",
        "on": "click",
        "request": "search",
        "vars": {
          "search_keyword": "apple",
          "search_category": "fruits",
          "search_result_count": "10",
        }
      }
    }
  }
  </script>
</amp-analytics>
```

These are parameters used by internal search event:

  - “[selector](https://www.ampproject.org/docs/reference/components/amp-analytics#element-selector)”
    - CSS selector for element that should be watched

  - “on” - HTML event type

  - “vars” - Variables that should be used by this event. Custom events
    expect:
    
    >   - “search\_keyword” - required
    >   - “search\_category” - required
    >   - “search\_result\_count” - optional

## Complete page example

This example shows complete AMP page with 2 buttons. It will send page
view, custom event and goal conversion.

``` html
<!doctype html>
<html amp lang="en">
    <head>
        <meta charset="utf-8">
        <title>AMP example page</title>
        <meta name="viewport" content="width=device-width">
        <link rel="canonical" href="example.html">

        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
    </head>
    <body>
        <amp-analytics type="ppasanalytics">
            <script type="application/json">
                {
                    "vars": {
                        "host": "example.piwik.pro",
                        "website_id": "12345678-1234-1234-1234-1234567890ab",
                        "website_hash": "cdef"
                    },
                    "triggers": {
                        "trackRecommendation": {
                            "on": "click",
                            "selector": "#recommend",
                            "request": "customevent",
                            "vars": {
                                "event_category": "social",
                                "event_action": "recommend",
                                "event_name": "News letter"
                            }
                        },
                        "trackSubscription": {
                            "on": "click",
                            "selector": "#subscribe",
                            "request": "goal",
                            "vars": {
                                "goal_id": "1"
                            }
                        }
                    }
                }
            </script>
        </amp-analytics>

        <h1>Welcome</h1>
        <div>
            <button id="recommend">Share this page with friends</button>
        </div>
        <div>
            <button id="subscribe">Subscribe to news letter</button>
        </div>
    </body>
</html>
```
