# deleteCustomVariable() 🗑

<div class="deprecated">

0.0.0 This method is no longer recommended. Use the
setCustomDimensionValue() and deleteCustomDimension() method instead.

</div>

The **deleteCustomDimension()** method removes a custom variable.

## Syntax

<div class="tabs">

<div class="group-tab">

JS

``` javascript
deleteCustomVariable(index[, scope])
```

</div>

</div>

## Parameters

**index** (number, required)  
Index from 1 to 5 where the variable is stored.

**scope** (string, optional)  
Scope of the variable: "visit" or "page". The default value is "visit".

## Examples

To remove a custom variable:

<div class="tabs">

<div class="group-tab">

JS (queue)

``` javascript
_paq.push(["deleteCustomVariable", 1, "page"]);
```

</div>

<div class="group-tab">

JS (direct)

``` javascript
var jstc = Piwik.getTracker(
  "https://example.com/",
  "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"
);
jstc.deleteCustomVariable(1, "page");
```

</div>

</div>
