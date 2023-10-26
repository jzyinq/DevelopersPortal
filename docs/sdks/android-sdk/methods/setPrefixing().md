# setPrefixing()

The **setPrefixing()** method turns on or off automatic prefixing. If
turned on, URLs will get prefixes automatically when some methods are
used. Example: In the track().screen() method the `screen` prefix will
be added to the URL.

By default, setPrefixing(true) is set. This means that prefixes are
added automatically.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setPrefixing(isAutomatic);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.isPrefixing = isAutomatic
```

</div>

</div>

## Parameters

**isAutomatic** (boolean, required)  
Whether URLs get prefixes automatically or not. True: prefixes are added
automatically. False: prefixes are not added automatically.

## Examples

To turn off automatic prefixing:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setPrefixing(false);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.isPrefixing = false
```

</div>

</div>
