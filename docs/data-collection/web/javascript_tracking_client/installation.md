<div class="default-domain">

js

</div>

# Installation

## Installing tracking code via code snippet

Installation via snippet should only be carried out if the Tag Manager
is not available or when options of "Piwik PRO Analytics template" do
not let you configure your use case.

<div class="note">

<div class="title">

Note

</div>

We highly recommend using the template from the Tag Manager to set up
tracking for the Analytics module (including customizations).

</div>

<div class="note">

<div class="title">

Note

</div>

Basic configuration will setup a single domain configuration. For other
options, see: `jtc-installation-alternative-configurations`.

</div>

<div id="jtc-installation-jsts-example">

This code should be added in the head section of the page just before
the closing `</head>` tag. Additionally, the snippet must be configured
in the following way:

</div>

>   - String `XXX-XXX-XXX-XXX-XXX` should be replaced with `app ID`
>     (e.g. `efcd98a5-335b-48b0-ab17-bf43f1c542be`).
>   - String `https://your-instance-name.piwik.pro/` should be replaced
>     with your PPAS instance address.

``` html
<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function() {
    var u="https://your-instance-name.piwik.pro/";
    _paq.push(["setTrackerUrl", u+"ppms.php"]);
    _paq.push(["setSiteId", "XXX-XXX-XXX-XXX-XXX"]);
    var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0];
    g.type="text/javascript"; g.async=true; g.defer=true; g.src=u+"ppms.js"; s.parentNode.insertBefore(g,s);
  })();
</script>
```

This code initializes the JavaScript Tracking Client in following ways:

> 1.  Initializes the global `_paq` command queue that schedules
>     commands to be run when the JavaScript Tracking Client library is
>     loaded.
> 2.  Schedules basic configuration of JavaScript Tracking Client using
>     `_paq.push`.
> 3.  Creates a `<script>` tag that asynchronously loads the JavaScript
>     Tracking Client library.

When loading, the snippet is added on the page. The JavaScript Tracking
Client will start tracking `visitor` actions starting with page view.

## Alternative configurations

### Tracking domains and all subdomains

To track all data between domain and all its subdomains, we must use
cookies configured with the following snippet:

``` js
_paq.push(["setTrackerUrl", u+"ppms.php"]);
_paq.push(["setSiteId", "XXX-XXX-XXX-XXX-XXX"]);

// Share the tracking cookie across example.com, www.example.com, subdomain.example.com, ...
_paq.push(["setCookieDomain", "*.example.com"]);

// Tell Piwik the website domain so that clicks on these domains are not tracked as "Outlinks"
_paq.push(["setDomains", "*.example.com"]);

_paq.push(["trackPageView"]);
```

### Tracking multiple domains as one site

To set up tracking between multiple domains, you must use multiple
functions: `setDomains<jtc-api-setDomains>` to set a list of domains and
`enableCrossDomainLinking<jtc-api-enableCrossDomainLinking>` to enable
cross domain linking:

``` js
// specify which domains should be linked
_paq.push(["setDomains", ["*.example.com", "otherdomain.com"]]);

// enable cross domains linking
_paq.push(["enableCrossDomainLinking"]);
```

<div class="note">

<div class="title">

Note

</div>

For cross-domain linking to work, you have to enable link tracking using
`enableLinkTracking<jtc-api-enableLinkTracking>` function. Remember that
links added dynamically to the HTML document won't be tracked unless you
call `enableLinkTracking<jtc-api-enableLinkTracking>` again. You can
learn more about tracking dynamically added links
`here<guide_tracking_link_clicks_on_pages_with_dynamically_generated_content>`.

</div>

### Tracking subdirectories of domain as separate websites

To differentiate parts of a website as another site, you must configure
JavaScript Tracking Client this way:

``` js
_paq.push(["setSiteId", "App1"]);
_paq.push(["setTrackerUrl", u+"ppms.php"]);
_paq.push(["trackPageView"]);
```

Afterwards, you can change configuration for selected paths and track
them as another site:

``` js
_paq.push(["setSiteId", "App2"]);

_paq.push(["setCookiePath", "/data/something_useful"]);

_paq.push(["setDomains", "example.com/data/something_useful"]);

_paq.push(["setTrackerUrl", u+"ppms.php"]);
_paq.push(["trackPageView"]);
```

This way, all actions tracked on `/data/something_useful` will be
tracked for `App2` instead of `App1`.

If you wish to track a group of pages as separate site, you can use the
wildcard in the `setDomains<jtc-api-setDomains>` function.

### Collecting page performance metrics

To set up page performance metrics gathering use the
`setTimingDataSamplingOnPageLoad<jtc-api-setTimingDataSamplingOnPageLoad>`
function:

``` js
// measure performance on 33% of page loads
_paq.push(["setTimingDataSamplingOnPageLoad", 33]);

// track page view and potentially measure page performance
_paq.push(["trackPageView"]);
```
