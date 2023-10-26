# clearEcommerceCart()

The **clearEcommerceCart()** method removes all items added to the cart.

## Syntax

<div class="tabs">

<div class="group-tab">

JS

``` javascript
clearEcommerceCart()
```

</div>

<div class="group-tab">

Angular

``` javascript
clearEcommerceCart()
```

</div>

<div class="group-tab">

React

``` javascript
clearEcommerceCart()
```

</div>

</div>

## Examples

To remove all items from the cart:

<div class="tabs">

<div class="group-tab">

JS (queue)

``` javascript
_paq.push(["clearEcommerceCart"]);
```

</div>

<div class="group-tab">

JS (direct)

``` javascript
var jstc = Piwik.getTracker(
  "https://example.com/",
  "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"
);
jstc.clearEcommerceCart();
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

## Notes

  - The cart with cleared items is not stored in the browser storage.
    Make sure that you add or clear all items again after the page
    reloads.
  - This method doesn't send any data to Piwik PRO. It just updates the
    cart. You can use the trackEcommerceCartUpdate() or
    trackEcommerceOrder() method to send cart data to Piwik PRO.

## Related methods

  - addEcommerceItem()
  - removeEcommerceItem()
  - getEcommerceItems()
  - setEcommerceView()
  - trackEcommerceCartUpdate()
  - trackEcommerceOrder()
