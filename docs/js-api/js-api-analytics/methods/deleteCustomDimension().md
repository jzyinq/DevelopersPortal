# deleteCustomDimension()

The **deleteCustomDimension()** method removes a custom dimension.

## Syntax

<div class="tabs">

<div class="group-tab">

JS

``` javascript
getCustomDimensionValue(customDimensionID)
```

</div>

<div class="group-tab">

Angular

``` javascript
deleteCustomDimension(customDimensionId: string)
```

</div>

<div class="group-tab">

React

``` javascript
deleteCustomDimension(customDimensionId: string)
```

</div>

</div>

## Parameters

**customDimensionID** (number, required)  
An ID of the custom dimension.

## Examples

To remove a custom dimension:

<div class="tabs">

<div class="group-tab">

JS (queue)

``` javascript
_paq.push(["deleteCustomDimension", 1]);
```

</div>

<div class="group-tab">

JS (direct)

``` javascript
var jstc = Piwik.getTracker(
  "https://example.com/",
  "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"
);
jstc.deleteCustomDimension(1);
```

</div>

<div class="group-tab">

Angular

``` javascript
```

</div>

<div class="group-tab">

React

``` javascript
```

</div>

</div>

## Related methods

  - setCustomDimensionValue()
  - getCustomDimensionValue()
