# track().variable() 🗑

<div class="deprecated">

16.0.0 This method is no longer recommended. Audience Manager is no
longer available in the latest product version.

</div>

The **track().variable()** method sets a custom variable in the screen
scope. The value can then be sent to Piwik PRO with a screen view or any
other event.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .variable(index, "name", "value");
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .variable(index, "name", "value")
```

</div>

</div>

## Parameters

**index** (number, required)  
Index where the variable is stored.

Note: If setIncludeDefaultCustomVars(true) is set, you can only use
index greater than 2 because that method automatically tracks some items
under the index 1-2. The setIncludeDefaultCustomVars(true) method is set
by default.

**name** (string, required)  
Name of the variable. Valid format: UTF-8.

**value** (string, optional)  
Value of the variable. Valid format: UTF-8. Limited to 200 characters.

## Examples

To set a custom variable in the screen scope and send it with a screen
view:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .variable(1, "rating", "5");

TrackHelper.track()
  .screen("example/product-rating")
  .title("Product rating")
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .variable(1, "rating", "5")

TrackHelper.track()
  .screen("example/product-rating")
  .title("Product rating")
  .with(tracker)
```

</div>

</div>

Another way to set a custom variable and send it with a screen view:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .variable(1, "rating", "5")
  .screen("example/product-rating")
  .title("Product rating")
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .variable(1, "rating", "5")
  .screen("example/product-rating")
  .title("Product rating")
  .with(tracker)
```

</div>

</div>

## Notes

  - The screen scope relates to events like a screen view or downloading
    a file and holds captured variable for each event. The value is
    removed after an event is called.

## Related methods

  - `android setIncludeDefaultCustomVars()`
  - `android track().visitVariables()`
  - `android track().dimension()`
