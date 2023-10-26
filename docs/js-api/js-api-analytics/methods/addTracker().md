# addTracker()

The **addTracker()** method creates a new tracker's instance with a new
tracking endpoint.

## Syntax

<div class="tabs">

<div class="group-tab">

JS

``` javascript
addTracker(trackerUrl, siteId)
```

</div>

</div>

## Parameters

**trackerURL** (string, required)  
A tracker URL (tracking endpoint).

**siteID** (string, required)  
A site or app ID in Piwik PRO where you want to send data. (Where to
find it?)

## Returns

A tracker's instance.  
Format: Example:  
Type: object

## Examples

To create a new tracker's instance:

<div class="tabs">

<div class="group-tab">

JS (queue)

``` javascript
_paq.push(["addTracker", "https://example.piwik.pro/ppms.php", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"]);
```

</div>

<div class="group-tab">

JS (direct)

``` javascript
var jstc = Piwik.getTracker(
  "https://example.com/",
  "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"
);
jstc.setTrackerUrl("https://example.piwik.pro/ppms.php");
```

</div>

</div>

## Related methods

  - setTrackerUrl()
  - getTrackerUrl()
