# track().outlink()

The **track().outlink()** method records clicks on links to external
websites or apps (different domain).

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .outlink("outlink")
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .outlink("outlink")
  .with(tracker)
```

</div>

</div>

## Parameters

**outlink** (string, required)  
The outlink. Example: `https://example.com`.

## Examples

To track an outlink to `https://example.com`:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
Tracker tracker = ((PiwikApplication) getApplication()).getTracker();
TrackHelper.track()
  .outlink("https://example.com")
  .with(tracker);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
val tracker: Tracker = (application as PiwikApplication).tracker
TrackHelper.track()
  .outlink("https://example.com")
  .with(tracker)
```

</div>

</div>
