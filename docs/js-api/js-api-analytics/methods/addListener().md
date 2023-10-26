# addListener()

The **addListener()** method adds automatic link tracking to an HTML
element. You can use it to track links added to a document after a page
load.

## Syntax

<div class="tabs">

<div class="group-tab">

JS

``` javascript
addListener(domElement)
```

</div>

</div>

## Parameters

**domElement** (DOM element, required)  
The element that you want to track as a link.

## Examples

To add a link to this element \#dynamically-added-link:

<div class="tabs">

<div class="group-tab">

JS (queue)

``` javascript
_paq.push(["addListener", document.querySelector("#dynamically-added-link")]);
```

</div>

<div class="group-tab">

JS (direct)

``` javascript
var jstc = Piwik.getTracker(
  "https://example.com/",
  "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"
);
jstc.addListener(document.querySelector("#dynamically-added-link"));
```

</div>

</div>
