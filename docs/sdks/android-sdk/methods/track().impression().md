# track().impression()

The **track().impression()** method tracks impressions of a content
block and passes data about the content name, piece and target.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .impression("contentName")
  .piece("contentPiece")
  .target("contentTarget")
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .impression("contentName")
  .piece("contentPiece")
  .target("contentTarget")
  .with(tracker)
```

</div>

</div>

## Parameters

**contentName** (string, required)  
The name of a content block.

**contentPiece** (string, required)  
The piece of the tracked content block, for example, a creative, banner,
or video.

**contentTarget** (string, required)  
he target of the tracked content block, for example, a link in the
content block.

## Examples

To track an impression of a content block on your mobile app:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
Tracker tracker = ((PiwikApplication) getApplication()).getTracker();
TrackHelper.track()
  .impression("gravel bikes collection")
  .piece("banner")
  .target("https://example.com/bikes/")
  .with(tracker);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
val tracker: Tracker = (application as PiwikApplication).tracker
TrackHelper.track()
  .impression("gravel bikes collection")
  .piece("banner")
  .target("https://example.com/bikes/")
  .with(tracker)
```

</div>

</div>

## Notes

  - To track content impressions, this option needs to be turned on:
    Menu \> Tag Manager \> Tags \> Piwik PRO (tracking code) \> Data
    collection \> Interactions with popups and content (on). Read more
  - Tracked impressions will be visible in Analytics \> Reports \>
    Content performance.

## Related methods

  - `android track().interaction()`
