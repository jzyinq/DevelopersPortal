# setAnonymizationState()

The **setAnonymizationState()** method marks a user as anonymous or
non-anonymous. When a user is anonymous, their IP address is hidden
(Example: 0.0.0.0) and their location data is hidden (only Country data
is available). Additionally, their user ID and device ID are not
collected. Each time the application is started, a new visitor ID is
generated for the anonymous user.

The setAnonymizationState(true) is set by default. This means each user
is anonymous by default.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
((PiwikApplication) getApplication()).getTracker().setAnonymizationState(isAnonymous);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
(application as PiwikApplication).tracker.setAnonymizationState(
  isAnonymous
)
```

</div>

</div>

## Parameters

**isAnonymous** (boolean, required)  
Weather a user is anonymous or non-anonymous. True: anonymous. False:
non-anonymous.

## Examples

To mark a visitor as non-anonymous:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
((PiwikApplication) getApplication()).getTracker().setAnonymizationState(false);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
(application as PiwikApplication).tracker.setAnonymizationState(
  false
)
```

</div>

</div>

## Related methods

  - `android isAnonymizationOn()`
