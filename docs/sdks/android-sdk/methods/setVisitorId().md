# setVisitorId()

The **setVisitorId()** method sets a custom visitor ID. By default, the
visitor ID is automatically set when the tracker instance is created and
stored between app launches. The visitor ID helps to recognize sessions
belonging to the same user.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setVisitorId("visitorID");
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.visitorId = "visitorID"
```

</div>

</div>

## Parameters

**visitorID** (string, required)  
A visitor ID set for a given user. Format: 16-character hexadecimal
string. Example: 0123456789abcdef.

## Examples

To set a visitor ID to `0123456789abcdef`:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setVisitorId("0123456789abcdef");
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.visitorId = "0123456789abcdef"
```

</div>

</div>

## Notes

  - If setAnonymizationState(true) is set, a new visitor ID is created
    each time an app starts.
  - Each user should have a unique visitor ID assigned. The visitor ID
    shouldn't change between app launches.
  - We recommend using the user ID instead of the visitor ID.
