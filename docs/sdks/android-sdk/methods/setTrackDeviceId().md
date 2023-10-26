# setTrackDeviceId()

The **setTrackDeviceId()** method turns on or off fetching the device ID
from the tracker instance. The device ID is the [advertising ID (AAID)
assigned by
Google](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en).

By default, setTrackDeviceId(true) is set.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setTrackDeviceId(isFetched);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.isTrackDeviceId = isFetched
```

</div>

</div>

## Parameters

**isFetched** (boolean, required)  
Weather a user ID is fetched automatically from the tracker instance. A
user ID is the advertising ID (AAID) assigned by Google. True: is
fetched. False: is not fetched.

## Examples

To turn off fetching a device ID from the tracker instance:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setTrackDeviceId(false);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.isTrackDeviceId = false
```

</div>

</div>

## Notes

  - The device ID won't be sent if setAnonymizationState(true) is set.
  - If your app uses the device ID (AAID) and you plan to send your app
    to the Google Play, you need to ask each user for permission to
    share their data.

## Related methods

  - `android setDeviceId()`
  - `android getDeviceId()`
