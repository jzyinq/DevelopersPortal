# setDeviceId()

The **setDeviceId()** method sets a custom device ID.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setDeviceId(deviceID)
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.deviceId = deviceID
```

</div>

</div>

## Parameters

**deviceID** (string, optional)  
A custom device ID. If the value is not set, the automatic value is
generated.

## Examples

To set a device ID to `ABC123`:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setDeviceId(ABC123)
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.deviceId = ABC123
```

</div>

</div>

## Notes

  - The device ID won't be sent if setAnonymizationState(true) is set.

## Related methods

  - `android setTrackDeviceId()`
  - `android getDeviceId()`
