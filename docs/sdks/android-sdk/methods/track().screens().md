# track().screens()

The **track().screens()** method automatically records screen views on
your mobile app. It automatically uses the activity stack as a path and
activity name as a title.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .screens(getApplication())
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .screens(getApplication())
  .with(tracker)
```

</div>

</div>

## Examples

To automatically record screen views:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
Tracker tracker = ((PiwikApplication) getApplication()).getTracker();
TrackHelper.track()
  .screens(getApplication())
  .with(tracker);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
val tracker: Tracker = (application as PiwikApplication).tracker
TrackHelper.track()
  .screens(getApplication())
  .with(tracker)
```

</div>

</div>

## Related methods

  - `android track().screen()`
