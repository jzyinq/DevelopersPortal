# isAnonymizationOn()

The **isAnonymizationOn()** method checks if a visitor is marked as
anonymous or non-anonymous.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
((PiwikApplication) getApplication()).getTracker().isAnonymizationOn();
```

</div>

<div class="group-tab">

Kotlin

``` javascript
(application as PiwikApplication).tracker.isAnonymizationOn
```

</div>

</div>

## Returns

Whether a user is marked as anonymous or non-anonymous.  
Format: True: is anonymous. False: is non-anonymous.  
Type: Boolean

## Examples

To check if data anonymization is turned on or off for a given visitor:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
((PiwikApplication) getApplication()).getTracker().isAnonymizationOn();
```

</div>

<div class="group-tab">

Kotlin

``` javascript
(application as PiwikApplication).tracker.isAnonymizationOn
```

</div>

</div>

## Related methods

  - `android setAnonymizationState()`
