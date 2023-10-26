# track().socialInteraction()

The **track().socialInteraction()** method records likes, shares and
comments on social media on your app.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .socialInteraction("interaction", "network")
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .socialInteraction("interaction", "network")
  .with(tracker)
```

</div>

</div>

## Parameters

**interaction** (string, required)  
The interaction type. Example: like, share, comment.

**network** (string, required)  
The social media for which the interaction happened. Example: Facebook,
Instagram, YouTube.

## Examples

To track a like on Facebook on your app:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .socialInteraction("like", "Facebook")
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .socialInteraction("like", "Facebook")
  .with(tracker)
```

</div>

</div>
