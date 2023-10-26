# track().sendApplicationDownload()

The **track().sendApplicationDownload()** method records app installs.
The event is sent during the first app launch, once per install. If a
user installs your app but doesn't run it, the event won't be sent.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .sendApplicationDownload()
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .sendApplicationDownload()
  .with(tracker)
```

</div>

</div>

## Example

To track your app install:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
Tracker tracker = ((PiwikApplication) getApplication()).getTracker();
TrackHelper.track()
  .sendApplicationDownload()
  .with(tracker);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
val tracker: Tracker = (application as PiwikApplication).tracker
TrackHelper.track()
  .sendApplicationDownload()
  .with(tracker)
```

</div>

</div>
