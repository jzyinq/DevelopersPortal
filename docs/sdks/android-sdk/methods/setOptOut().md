# setOptOut()

The **setOptOut()** method sets the opt-out flag for the whole app. When
the opt-out flag is set, no data is collected.

By default, setOptOut(false) is set.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setOptOut(isOptOut);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.isOptOut = isOptOut
```

</div>

</div>

## Parameters

**isOptOut** (boolean, required)  
Whether or not. True: is opted out. False: is opted in.

## Examples

To set the opt-out flag and don't collect any data:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setOptOut(true);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.isOptOut = true
```

</div>

</div>
