# setSessionTimeout()

The **setSessionTimeout()** method sets the expiration time for the
session. The default value is 30 minutes.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setSessionTimeout(milliseconds);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.setSessionTimeout(milliseconds)
```

</div>

</div>

## Parameters

**milliseconds** (number, required)  
The time (in milliseconds) after which the session expires.

## Examples

To set the expiration time to 60 minutes (60\*60\*1000 milliseconds):

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setSessionTimeout(30 * 60 * 1000));
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.setSessionTimeout(30 * 60 * 1000))
```

</div>

</div>
