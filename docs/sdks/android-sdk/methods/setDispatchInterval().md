# setDispatchInterval()

The **setDispatchInterval()** method sets a custom dispatch interval
time. Tracked events are stored temporarily in the queue and are
dispatched in batches. The default dispatch interval time is 30 seconds
(3000 milliseconds) – batches are sent every 30 seconds.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setDispatchInterval(milliseconds)
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.dispatchInterval = milliseconds
```

</div>

</div>

## Parameters

**milliseconds** (number, required)  
The interval time (in milliseconds) for dispatching tracked events. If 0
milliseconds, events will be sent right away. If -1 milliseconds, events
won't be sent automatically, and you'll be able to send them manually.

## Examples

To set the dispatch interval time to 60 seconds (60\*1000 milliseconds):

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setDispatchInterval(60 * 1000)
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.dispatchInterval = 60 * 1000
```

</div>

</div>

To block sending events automatically and send it manually:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
Tracker tracker = ((MyApplication) getApplication()).getTracker();
tracker.setDispatchInterval(-1);
// Catch and track exception
try {
  cartItems = getCartItems();
} catch (Exception e) {
  TrackHelper.track().exception(e).description(e.getMessage());
  tracker.dispatch();
  cartItems = null;
}
```

</div>

<div class="group-tab">

Kotlin

``` javascript
val tracker: Tracker = (application as PiwikApplication).getTracker()
tracker.dispatchInterval = -1
// Catch and track exception
try {
  cartItems = tracker.getCartItems()
} catch (e: java.lang.Exception) {
  TrackHelper.track().exception(e).description(e.message)
  tracker.dispatch()
  cartItems = null
}
```

</div>

</div>

## Notes

  - If there's more than one event in the queue, data is sent in bulk
    using the POST method with the JSON payload.
