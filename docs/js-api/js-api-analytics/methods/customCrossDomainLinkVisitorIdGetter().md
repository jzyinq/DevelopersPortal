# customCrossDomainLinkVisitorIdGetter()

The **customCrossDomainLinkVisitorIdGetter()** method gets a visitor ID
from a page URL if customCrossDomainLinkDecorator() was set. The visitor
ID is held in a query parameter and passed between domains when they are
linked with enableCrossDomainLinking().

## Syntax

<div class="tabs">

<div class="group-tab">

JS

``` javascript
customCrossDomainLinkVisitorIdGetter(urlParser)
```

</div>

</div>

## Parameters

**urlParser** (function, required)  
Extracts a visitor ID from a page URL.

**urlParser** (url, name)  
The urlParser() method accepts a URL and name, and returns a visitor ID.

**url** (string, required)  
A page URL.

**name** (string, required)  
A parameter name that holds a visitor ID.

## Returns

A visitor ID extracted from a page URL.  
Format: Example: c52b5d0969220761  
Type: string

## Example

To do something:

<div class="tabs">

<div class="group-tab">

JS (queue)

``` javascript
_paq.push(["customCrossDomainLinkVisitorIdGetter", function (url, name) {
    return (new URL(url)).searchParams.get(name) || "";
}]);
```

</div>

<div class="group-tab">

JS (direct)

``` javascript
var jstc = Piwik.getTracker(
  "https://example.com/",
  "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"
);
jstc.customCrossDomainLinkVisitorIdGetter(function (url, name) {
    return (new URL(url)).searchParams.get(name) || "";
});
```

</div>

</div>

## Related methods

  - enableCrossDomainLinking()
  - disableCrossDomainLinking()
  - isCrossDomainLinkingEnabled()
  - setCrossDomainLinkingTimeout()
  - getCrossDomainLinkingUrlParameter()
  - customCrossDomainLinkDecorator()
