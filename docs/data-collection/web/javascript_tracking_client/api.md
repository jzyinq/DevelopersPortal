<div class="default-domain">

js

</div>

# API

The following API allows the user to:

>   - track page views
>   - track visits on multiple domains and subdomains
>   - track e-commerce events (successful orders, cart changes, product
>     and category views)
>   - track content impressions
>   - manage custom variables to use them later
>   - track clicked links to external domains and download files

<div class="contents">

Table of Contents

</div>

## Command queue

Code snippet with tracking code sets up globally accessible command
queue `_paq`. Users can issue commands by pushing them onto the command
queue with `_paq.push` function. This is the recommended method of
calling tracking functions.

<div class="function">

\_paq.push(command)

Issues a command, e.g. track page view, custom event, site search etc.

  - param Array\<string\> command  
    Array containing a tracking function's
    <span class="title-ref">name</span> followed by its arguments. The
    number of arguments and their meaning are determined by the tracking
    function.

</div>

Example of usage (tracking a custom event by pushing a command to the
command queue):

``` js
_paq.push(["trackEvent", "video", "video-paused", "intro.mp4", 15.2]);
```

Commands pushed onto the command queue will be executed once the
JavaScript Tracking Client loads. After that, `_paq.push` becomes
synchronous, meaning each command is executed at the moment of push.

## JavaScript Tracking Client object

JavaScript Tracking Client object offers an alternative method of
calling tracking functions. While it's more difficult to access than the
`command queue<jtc-api-command-queue>`, it allows to read the return
value of a tracking function and makes multi-tracker setups possible.

JavaScript Tracking Client object can be accessed using
`Piwik.getTracker<jtc-api-Piwik.getTracker>` or
`Piwik.getAsyncTracker<jtc-api-Piwik.getAsyncTracker>` function.

<div id="jtc-api-Piwik.getTracker">

<div class="function">

Piwik.getTracker(trackerUrl, siteId)

Getter for JavaScript Tracking Client object.

  - param string trackerUrl  
    **Required** URL for JavaScript Tracking Client

  - param string siteId  
    **Required** Site ID that will be linked to tracked data.

  - returns  
    JavaScript Tracking Client instance

  - rtype  
    object

Example of usage (accessing JavaScript Tracking Client object and
tracking a custom event):

``` js
var jstc = Piwik.getTracker("https://example.com/", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef");
jstc.trackEvent("video", "video-paused", "intro.mp4", 15.2);
```

</div>

</div>

<div id="jtc-api-Piwik.getAsyncTracker">

To access internal JavaScript Tracking Client object used for
asynchronous tracking you must use the `Piwik.getAsyncTracker`.

</div>

<div class="function">

Piwik.getAsyncTracker(trackerUrl, siteId)

Getter for JavaScript Tracking Client instance.

  - param string trackerUrl  
    **Required** URL for JavaScript Tracking Client

  - param string siteId  
    **Required** Site ID that will be linked to tracked data.

  - returns  
    JavaScript Tracking Client instance

  - rtype  
    object

Example of usage (accessing JavaScript Tracking Client object and
tracking a custom event):

``` js
var jstc = Piwik.getAsyncTracker("https://example.com/", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef");
jstc.trackEvent("video", "video-paused", "intro.mp4", 15.2);
```

JavaScript Tracking Client object is also accessible through `this`
keyword in a special command pushed to command queue, where the first
element of the command array is a custom function. :

``` js
_paq.push([function () {
    // *this* is a JavaScript Tracking Client object
    this.addEcommerceItem("01725334", "USB-C chord")
    console.log(this.getEcommerceItems());
}]);
```

<div class="warning">

<div class="title">

Warning

</div>

JavaScript Tracking Client object can't be accessed before JavaScript
Tracking Client file loads (usually a
<span class="title-ref">ppms.js</span> file).

</div>

</div>

## Tracking functions

Tracking functions collect and send data to `Collecting & Processing
Pipeline`. They can be called on a `JavaScript Tracking Client
object<jtc-api-jstc-object>` or pushed to the `command
queue<jtc-api-command-queue>` as commands.

### Page views

<div id="jtc-api-trackPageView">

<div class="function">

trackPageView(\[customPageTitle\])

Tracks page view of the page that the function was run on.

  - param string customPageTitle  
    **Optional** Custom page title, used only for this event

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackPageView"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackPageView();
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

To overwrite page title for **all events** that will happen on the page
(until a reload), use `setDocumentTitle<jtc-api-setDocumentTitle>`
function.

</div>

<div class="note">

<div class="title">

Note

</div>

`trackPageView` is included in the default JavaScript Tracking Client
setup snippet. It's likely you're already using it.

</div>

</div>

</div>

### Custom events

<div id="jtc-api-trackEvent">

<div class="function">

trackEvent(category, action\[, name\[, value\[, dimensions\]\]\])

Tracks custom event, e.g. when visitor interacts with the page.

  - param string category  
    **Required** Event category

  - param string action  
    **Required** Event action

  - param string name  
    **Optional** Event name

  - param number value  
    **Optional** Event value

  - param object dimensions  
    **Optional** `Custom dimensions<jtc-api-custom-dimensions-object>`
    to pass along with the custom event

Example of usage (tracking when the visitor clicks on the cancel button
with exit intent):

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackEvent", "Exit intent", "Click on button", "Cancel"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackEvent("Exit intent", "Click on button", "Cancel");
```

</div>

</div>

</div>

</div>

### Goal conversions

<div id="jtc-api-trackGoal">

<div class="function">

trackGoal(goalID\[, conversionValue\[, dimensions\]\])

Tracks manual goal conversion.

  - param number|string goalID  
    **Required** Goal ID (integer or UUID)

  - param number conversionValue  
    **Optional** Conversion value (revenue)

  - param object dimensions  
    **Optional** `Custom dimensions<jtc-api-custom-dimensions-object>`
    to pass along with the conversion

Example of usage (tracking conversion of goal *1* with value *15*):

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackGoal", 1, 15]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackGoal(1, 15);
```

</div>

</div>

</div>

</div>

### Site search

<div id="jtc-api-trackSiteSearch">

<div class="function">

trackSiteSearch(keyword\[, category\[, resultCount\[, dimensions\]\]\])

Tracks search requests on a website.

  - param string keyword  
    **Required** What keyword the visitor entered into the search box

  - param string|Array\<string\> category  
    **Optional** Category selected in the search engine

  - param number searchCount  
    **Optional** The number of search results shown

  - param object dimensions  
    **Optional** `Custom dimensions<jtc-api-custom-dimensions-object>`
    to pass along with the site search event

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackSiteSearch", "stove", undefined, 20]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackSiteSearch("stove", undefined, 20);
```

</div>

</div>

</div>

</div>

### E-commerce

<div id="jtc-api-addEcommerceItem">

<div class="function">

addEcommerceItem(productSKU\[, productName\[, productCategory\[,
productPrice\[, productQuantity\]\]\]\])

Adds a product to a virtual shopping cart. If a product with the same
SKU is in the cart, it will be removed first. Does not send any data to
the `Collecting & Processing Pipeline`.

  - param string productSKU  
    **Required** Product stock-keeping unit

  - param string productName  
    **Optional** Product name

  - param string|Array\<string\> productCategory  
    **Optional** Product category or an array of up to 5 categories

  - param number productPrice  
    **Optional** Product price

  - param number productQuantity  
    **Optional** The number of units

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["addEcommerceItem", "craft-311", "Unicorn Iron on Patch", "Crafts & Sewing", 499, 3]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.addEcommerceItem("craft-311", "Unicorn Iron on Patch", "Crafts & Sewing", 499, 3);
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

This function does not send any data to `Collecting & Processing
Pipeline`. It only prepares the virtual shopping cart to be sent with
`trackEcommerceCartUpdate<jtc-api-trackEcommerceCartUpdate>` or
`trackEcommerceOrder<jtc-api-trackEcommerceOrder>`.

</div>

<div class="warning">

<div class="title">

Warning

</div>

The state of the virtual shopping cart is not persisted in browser
storage. You must add all products again after a page reload.

</div>

<div class="warning">

<div class="title">

Warning

</div>

Adding a product with a SKU that has been previously added will first
remove the old product, e.g.:

</div>

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["addEcommerceItem", "72625151", "Yellow notebook 150 pages", "School supplies", 10.00, 1]); // 1 item with sku 72625151
_paq.push(["addEcommerceItem", "72625151", "Yellow notebook 150 pages", "School supplies", 10.00, 2]); // 2 items with sku 72625151, not 3!
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.addEcommerceItem("72625151", "Yellow notebook 150 pages", "School supplies", 10.00, 1); // 1 item with sku 72625151
jstc.addEcommerceItem("72625151", "Yellow notebook 150 pages", "School supplies", 10.00, 2); // 2 items with sku 72625151, not 3!
```

</div>

</div>

</div>

</div>

<div id="jtc-api-removeEcommerceItem">

<div class="function">

removeEcommerceItem(productSKU)

Removes a product with the provided SKU from a virtual shopping cart. If
multiple units of that product are in the virtual cart, all of them will
be removed. Does not send any data to the `Collecting & Processing
Pipeline`.

  - param string productSKU  
    **Required** stock-keeping unit of a product to remove

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["removeEcommerceItem", "craft-311"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.removeEcommerceItem("craft-311");
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

This function does not send any data to `Collecting & Processing
Pipeline`. It only prepares the virtual shopping cart to be sent with
`trackEcommerceCartUpdate<jtc-api-trackEcommerceCartUpdate>` or
`trackEcommerceOrder<jtc-api-trackEcommerceOrder>`.

</div>

<div class="warning">

<div class="title">

Warning

</div>

The state of the virtual shopping cart is not persisted in browser
storage. You must add all products again after a page reload.

</div>

</div>

</div>

<div id="jtc-api-clearEcommerceCart">

<div class="function">

clearEcommerceCart()

Removes all items from a virtual shopping cart. Does not send any data
to the `Collecting & Processing Pipeline`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["clearEcommerceCart"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.clearEcommerceCart();
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

This function does not send any data to `Collecting & Processing
Pipeline`. It only prepares the virtual shopping cart to be sent with
`trackEcommerceCartUpdate<jtc-api-trackEcommerceCartUpdate>` or
`trackEcommerceOrder<jtc-api-trackEcommerceOrder>`.

</div>

<div class="warning">

<div class="title">

Warning

</div>

The state of the virtual shopping cart is not persisted in browser
storage. You must add all products again after a page reload.

</div>

</div>

</div>

<div id="jtc-api-getEcommerceItems">

<div class="function">

getEcommerceItems()

Returns a copy of items from a virtual shopping cart. Does not send any
data to the `Collecting & Processing Pipeline`.

  - returns  
    Object containing all tracked items (format: `Object<productSKU,
    Array[productSKU, productName, productCategory, price, quantity]>`)

  - rtype  
    object

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getEcommerceItems());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getEcommerceItems());
```

</div>

</div>

Example return value:

``` js
{
    "52441051": ["52441051", "SUPER Notebook 15\" Ocean Blue", "Laptops", 2200, 1],
    "19287236": ["19287236", "Earbuds COOL PRO x300 BT", "Accessories", 85, 2],
}
```

<div class="warning">

<div class="title">

Warning

</div>

The state of the virtual shopping cart is not persisted in browser
storage. You must add all products again after a page reload.

</div>

</div>

</div>

<div id="jtc-api-setEcommerceView">

<div class="function">

setEcommerceView(\[productSKU\[, productName\[, productCategory\[,
productPrice\]\]\]\])

Tracks product or category view. Must be followed by a `page
view<jtc-api-page-views>`.

  - param string productSKU  
    **Optional** Product stock-keeping unit.

  - param string productName  
    **Optional** Product name.

  - param string|Array\<string\> productCategory  
    **Optional** Category or an array of up to 5 categories.

  - param number productPrice  
    **Optional** Product price.

When tracking **product views**, provide `productSKU` and optionally
other parameters.

When tracking **category views**, provide only `productCategory`. Skip
`productSKU`, `productName` and `productPrice` parameters supplying
`undefined` where necessary.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setEcommerceView", undefined, undefined, "Crafts & Sewing"]); // category view
_paq.push(["trackPageView"]);

_paq.push(["setEcommerceView", "craft-311", "Unicorn Iron on Patch", "Crafts & Sewing", 499]); // product view
_paq.push(["trackPageView"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setEcommerceView(undefined, undefined, "Crafts & Sewing"); // category view
jstc.trackPageView();

jstc.setEcommerceView("craft-311", "Unicorn Iron on Patch", "Crafts & Sewing", 499); // product view
jstc.trackPageView();
```

</div>

</div>

<div class="warning">

<div class="title">

Warning

</div>

`setEcommerceView` does not send data itself. It must be followed by a
call to `trackPageView<jtc-api-trackPageView>`.

</div>

</div>

</div>

<div id="jtc-api-trackEcommerceCartUpdate">

<div class="function">

trackEcommerceCartUpdate(cartAmount)

Tracks items present in a virtual shopping cart (registered with
`addEcommerceItem<jtc-api-addEcommerceItem>`);

  - param number cartAmount  
    **Required** The total value of items in the cart

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackEcommerceCartUpdate", 250]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackEcommerceCartUpdate(250);
```

</div>

</div>

<div class="todo">

Why JavaScript Tracking Client doesn't count cartAmount by itself? Why
user must do this?

</div>

<div class="warning">

<div class="title">

Warning

</div>

Make sure all products from the cart have been registered using
`addEcommerceItem` before tracking a cart update. Remember that when a
page is reloaded, the cart resets and all products must be registered
again.

</div>

</div>

</div>

<div id="jtc-api-trackEcommerceOrder">

<div class="function">

trackEcommerceOrder(orderID, orderGrandTotal\[, orderSubTotal\[,
orderTax\[, orderShipping\[, orderDiscount\]\]\]\])

Tracks a successfully placed e-commerce order with items present in a
virtual cart (registered using
`addEcommerceItem<jtc-api-addEcommerceItem>`).

  - param string orderID  
    **Required** String uniquely identifying an order

  - param number orderGrandTotal  
    **Required** Order Revenue grand total - tax, shipping and discount
    included

  - param number orderSubTotal  
    **Optional** Order subtotal - without shipping

  - param number orderTax  
    **Optional** Order tax amount

  - param number orderShipping  
    **Optional** Order shipping cost

  - param number orderDiscount  
    **Optional** Order discount amount

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackEcommerceOrder", "3352", 499, 399, 0, 100]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackEcommerceOrder("3352", 499, 399, 0, 100);
```

</div>

</div>

</div>

</div>

<div class="warning">

<div class="title">

Warning

</div>

`trackEcommerceOrder` function clears the list with registered
e-commerce items.

</div>

### Custom Variables

<div class="deprecated">

5.5 We strongly advise using custom dimensions instead.

</div>

<div id="jtc-api-setCustomVariable">

<div class="function">

setCustomVariable(index, name\[, value\[, scope\]\])

Sets a custom variable that can be used later.

  - param number index  
    **Required** Index from 1 to 5 where the variable is stored

  - param string name  
    **Required** Name of the variable

  - param string value  
    **Optional** Value of the variable, limited to 200 characters

  - param string scope  
    **Optional** Scope of the variable, `"visit"` or `"page"`. The
    default value is `"visit"`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCustomVariable", 1, "AspectRatio", "16:9", "visit"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCustomVariable(1, "AspectRatio", "16:9", "visit");
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

A custom variable with the `"visit"` scope will be saved for an entire
session, you don't need to set it on every page.

</div>

<div class="warning">

<div class="title">

Warning

</div>

Index is separate for each variable scope.

</div>

</div>

</div>

<div id="jtc-api-deleteCustomVariable">

<div class="function">

deleteCustomVariable(index\[, scope\])

Removes a previously set custom variable.

  - param number index  
    **Required** Number from 1 to 5 where variable is stored

  - param string scope  
    **Optional** Scope of the variable, `"visit"` or `"page"`. The
    default value is `"visit"`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["deleteCustomVariable", 1, "visit"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.deleteCustomVariable(1, "visit");
```

</div>

</div>

</div>

</div>

<div id="jtc-api-getCustomVariable">

<div class="function">

getCustomVariable(index\[, scope\])

Returns the value of a previously set custom variable.

  - param number index  
    **Required** Number from 1 to 5 where variable is stored

  - param string scope  
    **Optional** Scope of the variable, `"visit"` or `"page"`. The
    default value is `"visit"`.

  - returns  
    Custom variable value as an array with name and value if the custom
    variable exists (e.g. `["theme", "dark-01"]`) or `false` if it
    doesn't.

  - rtype  
    string\[\]|boolean

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function() {
    console.log(this.getCustomVariable(1, "visit"));
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getCustomVariable(1, "visit"));
```

</div>

</div>

</div>

</div>

<div id="jtc-api-storeCustomVariablesInCookie">

<div class="function">

storeCustomVariablesInCookie()

Enables storing `"visit"` type custom variables in a first party cookie.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["storeCustomVariablesInCookie"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.storeCustomVariablesInCookie();
```

</div>

</div>

</div>

</div>

### Custom Dimensions

<div id="jtc-api-setCustomDimensionValue">

<div class="function">

setCustomDimensionValue(customDimensionID, customDimensionValue)

<div class="versionadded">

15.3

</div>

Sets a custom dimension to be used later.

  - param number customDimensionID  
    **Required** ID of a custom dimension

  - param string customDimensionValue  
    **Required** Value of a custom dimension

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCustomDimensionValue", 3, "loginStatus"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCustomDimensionValue(3, "loginStatus");
```

</div>

</div>

<div class="warning">

<div class="title">

Warning

</div>

When you set a custom dimension, its value will be used in all tracking
requests within a page load.

</div>

<div class="warning">

<div class="title">

Warning

</div>

This function does not send any data to the `Collecting & Processing
Pipeline`. It prepares a custom dimension to be sent with following
events, e.g. page view, e-commerce events, outlink or download events.

</div>

</div>

</div>

<div id="jtc-api-deleteCustomDimension">

<div class="function">

deleteCustomDimension(customDimensionID)

Removes a custom dimension with the specified ID.

  - param number customDimensionID  
    **Required** ID of a custom dimension

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["deleteCustomDimension", 3]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.deleteCustomDimension(3);
```

</div>

</div>

</div>

</div>

<div id="jtc-api-getCustomDimensionValue">

<div class="function">

getCustomDimensionValue(customDimensionID)

<div class="versionadded">

15.3

</div>

Returns the value of a custom dimension with the specified ID.

  - param number customDimensionID  
    **Required** ID of a custom dimension

  - returns  
    Value set with
    `setCustomDimensionValue<jtc-api-setCustomDimensionValue>` (e.g.
    `"loginStatus"`)

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function() {
    console.log(this.getCustomDimensionValue(3));
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getCustomDimensionValue(3));
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setCustomDimension">

<div class="function">

setCustomDimension(customDimensionID, customDimensionValue)

<div class="deprecated">

15.3 Function `setCustomDimension` is deprecated due to the difficulty
of use (passed values should be URL encoded). Please use
`setCustomDimensionValue<jtc-api-setCustomDimensionValue>` instead.

</div>

Sets a custom dimension to be used later.

  - param number customDimensionID  
    **Required** ID of a custom dimension

  - param string customDimensionValue  
    **Required** Value of a custom dimension (should be URL encoded)

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCustomDimension", 3, "loginStatus"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCustomDimension(3, "loginStatus");
```

</div>

</div>

<div class="warning">

<div class="title">

Warning

</div>

When you set a Custom Dimension, that value will be used in all tracking
requests within a page load.

</div>

<div class="warning">

<div class="title">

Warning

</div>

This function does not send any data to the `Collecting & Processing
Pipeline`. It sets a Custom Dimension to be sent with following events,
e.g. page view, e-commerce events, outlink or download events.

</div>

</div>

</div>

<div id="jtc-api-getCustomDimension">

<div class="function">

getCustomDimension(customDimensionID)

<div class="deprecated">

15.3 Function `getCustomDimension` is deprecated due to the difficulty
of use (returned values are URL-encoded). Please use
`getCustomDimensionValue<jtc-api-getCustomDimensionValue>` instead.

</div>

Returns the value of a custom dimension.

  - param number customDimensionID  
    **Required** ID of a custom dimension

  - returns  
    Value set with `setCustomDimension<jtc-api-setCustomDimension>`
    (e.g. `"loginStatus"`)

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([ function() {
    console.log(this.getCustomDimension(3));
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getCustomDimension(3));
```

</div>

</div>

</div>

</div>

#### Custom dimensions object

Some tracking functions accept an optional `dimensions` parameter. You
can use it to pass additional custom dimensions along with the tracked
event. Custom dimension object might look like this:

``` js
{
    "dimension1": "hello",
    "dimension4": "nice%20to%20see%20you",
    "dimension5": "goodbye"
}
```

<div class="warning">

<div class="title">

Warning

</div>

Keys in a custom dimension object must be in `"dimensionX"` format,
where `X` is the ID of a custom dimension. Keys that don't match this
format will be ignored.

</div>

<div class="warning">

<div class="title">

Warning

</div>

Custom dimension values **must be percent-encoded**. To encode a string,
pass it through `encodeURIComponent` function, e.g.
`encodeURIComponent("Äpfel?")`.

</div>

### Content Tracking

#### Impressions

<div id="jtc-api-trackAllContentImpressions">

<div class="function">

trackAllContentImpressions()

Scans the entire DOM for content blocks and tracks impressions after all
page elements load. It does not send duplicates on repeated calls unless
`trackPageView` was called in between `trackAllContentImpressions`
invocations.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackAllContentImpressions"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackAllContentImpressions();
```

</div>

</div>

</div>

</div>

<div id="jtc-api-trackVisibleContentImpressions">

<div class="function">

trackVisibleContentImpressions(\[checkOnScroll\[, watchInterval\]\])

Scans DOM for all visible content blocks and tracks impressions.

  - param boolean checkOnScroll  
    **Optional** Whether to scan for visible content on `scroll` event.
    Default value: `true`.

  - param number watchInterval  
    **Optional** Delay, in milliseconds, between scans for new visible
    content. Periodic checks can be disabled by passing `0`. Default
    value: `750`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackVisibleContentImpressions", true, 2000]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackVisibleContentImpressions(true, 2000);
```

</div>

</div>

<div class="warning">

<div class="title">

Warning

</div>

Neither option can be changed after the initial setup.

</div>

<div class="warning">

<div class="title">

Warning

</div>

`trackVisibleContentImpressions` will not detect content blocks placed
in a scrollable element.

</div>

</div>

</div>

<div id="jtc-api-trackContentImpressionsWithinNode">

<div class="function">

trackContentImpressionsWithinNode(domNode)

Scans `domNode` (with its children) for all content blocks and tracks
impressions.

  - param Node domNode  
    **Required** DOM node with content blocks (elements with
    `data-track-content` attribute) inside

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
var element = document.querySelector("#impressionContainer");
_paq.push(["trackContentImpressionsWithinNode", element]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
var element = document.querySelector("#impressionContainer");
jstc.trackContentImpressionsWithinNode(element);
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

It can be used with `trackVisibleContentImpressions` to track only
visible content impressions.

</div>

</div>

</div>

<div id="jtc-api-trackContentImpression">

<div class="function">

trackContentImpression(contentName, contentPiece, contentTarget)

Tracks manual content impression event.

  - param string contentName  
    **Required** Name of a content block

  - param string contentPiece  
    **Required** Name of the content that was displayed (e.g. link to an
    image)

  - param string contentTarget  
    **Required** Where the content leads to (e.g. URL of some external
    website)

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackContentImpression", "promo-video", "https://example.com/public/promo-01.mp4", "https://example.com/more"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackContentImpression("promo-video", "https://example.com/public/promo-01.mp4", "https://example.com/more");
```

</div>

</div>

</div>

</div>

<div id="jtc-api-logAllContentBlocksOnPage">

<div class="function">

logAllContentBlocksOnPage()

Print all content blocks to the console for debugging purposes.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["logAllContentBlocksOnPage"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.logAllContentBlocksOnPage();
```

</div>

</div>

Example output:

``` js
[
    {
        "name": "promo-video",
        "piece": "https://example.com/public/promo-01.mp4",
        "target": "https://example.com/more"
    }
]
```

</div>

</div>

#### Interactions

<div id="jtc-api-trackContentInteractionNode">

<div class="function">

trackContentInteractionNode(domNode\[, contentInteraction\])

Tracks interaction with a block in domNode. Can be called from code
placed in `onclick` attribute.

  - param Node domNode  
    **Required** Node marked as content block or containing content
    blocks. If content block can't be found, nothing will tracked.

  - param string contentInteraction  
    **Optional** Name of interaction (e.g. `"click"`). Default value:
    `"Unknown"`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
var domNode = document.querySelector("#add-image");
_paq.push(["trackContentInteractionNode", domNode, "clicked"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
var domNode = document.querySelector("#add-image");
jstc.trackContentInteractionNode(domNode, "clicked");
```

</div>

</div>

Example of usage in `onclick` attribute:

``` html
<button onclick="function(){_paq.push(['trackContentInteractionNode', this, 'clicked']);}">Click me!</button>
```

</div>

</div>

<div id="jtc-api-trackContentInteraction">

<div class="function">

trackContentInteraction(contentInteraction, contentName, contentPiece,
contentTarget)

Tracks manual content interaction event.

  - param string contentInteraction  
    **Required** Type of interaction (e.g. `"click"`)

  - param string contentName  
    **Required** Name of a content block

  - param string contentPiece  
    **Required** Name of the content that was displayed (e.g. link to an
    image)

  - param string contentTarget  
    **Required** Where the content leads to (e.g. URL of some external
    website)

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackContentInteraction", "clicked", "trackingWhitepaper", "document", "http://cooltracker.tr/whitepaper"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackContentInteraction("clicked", "trackingWhitepaper", "document", "http://cooltracker.tr/whitepaper");
```

</div>

</div>

<div class="warning">

<div class="title">

Warning

</div>

Use this function in conjunction with `trackContentImpression`, as it
can only be mapped with an impression by `contentName`.

</div>

</div>

</div>

### Download and Outlink

<div id="jtc-api-trackLink">

<div class="function">

trackLink(linkAddress, linkType\[, dimensions\[, callback\]\])

Manually tracks outlink or download event with provided values.

  - param string linkAddress  
    **Required** URL address of the link

  - param string linkType  
    **Required** Type of the link, `"link"` for outlink, `"download"`
    for download

  - param object dimensions  
    **Optional** `Custom dimensions<jtc-api-custom-dimensions-object>`
    to pass along with the link event

  - param function callback  
    **Optional** Function that should be called after tracking the link

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackLink", "http://www.example.com/example", "link"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackLink("http://www.example.com/example", "link");
```

</div>

</div>

Example of usage in `onclick` attribute:

``` html
<button onclick="_paq.push(['trackLink', 'http://www.example.com/example', 'link'])">
    Click me!
</button>
```

</div>

</div>

<div id="jtc-api-enableLinkTracking">

<div class="function">

enableLinkTracking(\[trackMiddleAndRightClicks\])

Enables automatic link tracking. By default, left, right and middle
clicks on links will be treated as opening a link. Opening a link to an
external site (different domain) creates an outlink event. Opening a
link to a downloadable file creates a download event.

  - param boolean trackMiddleAndRightClicks  
    **Optional** Whether to treat middle and right clicks as opening a
    link. The default value is `true`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackPageView();
jstc.enableLinkTracking();
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

`enableLinkTracking` is a part of the default Tag Manager's tracking
code snippet. It's likely your setup already has it.

</div>

<div class="note">

<div class="title">

Note

</div>

Outlink events are tracked only when a link points to a different
(external) domain. If that domain belongs to you and you don't want to
track outlinks when visitors open it, use
`setDomains<jtc-api-setDomains>` function to define internal domains and
subdomains.

</div>

<div class="warning">

<div class="title">

Warning

</div>

`enableLinkTracking` should be called right after the first
`trackPageView` or `trackEvent`.

</div>

</div>

</div>

<div class="function">

disableLinkTracking()

Disables automatic link tracking (if it was enabled previously with
`enableLinkTracking`).

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["disableLinkTracking"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.disableLinkTracking();
```

</div>

</div>

</div>

<div id="jtc-api-setIgnoreClasses">

<div class="function">

setIgnoreClasses(classes)

Set a list of class names that indicate a link should not be tracked.

  - param string|Array\<string\> classes  
    **Required** CSS class name or an array of class names

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setIgnoreClasses", ["do-not-track", "ignore-link"]]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setIgnoreClasses(["do-not-track", "ignore-link"]);
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

Elements with `piwik-ignore` and `piwik_ignore` classes are always
ignored.

</div>

</div>

</div>

<div id="jtc-api-setLinkClasses">

<div class="function">

setLinkClasses(classes)

Sets a list of class names that indicate whether a link is an outlink
and not download.

  - param string|Array\<string\> classes  
    **Required** CSS class name or an array of class names

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setLinkClasses", "this-is-an-outlink"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setLinkClasses("this-is-an-outlink");
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

Elements with `piwik-link` or `piwik_link` class are always treated as
outlinks.

</div>

</div>

</div>

<div id="jtc-api-setDownloadClasses">

<div class="function">

setDownloadClasses(classes)

Sets a list of class names that indicate whether a list is a download
and not an outlink.

  - param string|Array\<string\> classes  
    **Required** CSS class name or an array of class names

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setDownloadClasses", "this-is-a-download"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setDownloadClasses("this-is-a-download");
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

Elements with `download` attribute, `piwik-download` class or
`piwik_download` class are always treated as downloads.

</div>

<div class="note">

<div class="title">

Note

</div>

Links containing a `known file extension<jtc-api-setDownloadExtensions>`
will be treated as a downloads as well.

</div>

</div>

</div>

<div id="jtc-api-setDownloadExtensions">

<div class="function">

setDownloadExtensions(extensions)

Overwrites the list of file extensions indicating that a link is a
download.

  - param string|Array\<string\> extensions  
    **Required** List of extensions to be set. Can be written as string,
    e.g. `"zip|rar"`, or an array, e.g. `["zip", "rar"]`.

Links containing a known file extension are treated as downloads and not
outlinks. We check for extensions at the end of URL path and in query
parameter values. Below are examples of URL with extensions detected.

  - http://example.com/path/file**.zip**
  - http://example.com/path/file**.zip**\#hello
  - http://example.com/path/file**.zip**?a=102
  - http://example.com/path/?a=file**.zip**
  - http://example.com/path/?a=file**.zip**\&b=29

The default download extensions list contains the following extensions:

`7z`, `aac`, `apk`, `arc`, `arj`, `asf`, `asx`, `avi`, `azw3`, `bin`,
`csv`, `deb`, `dmg`, `doc`, `docx`, `epub`, `exe`, `flv`, `gif`, `gz`,
`gzip`, `hqx`, `ibooks`, `jar`, `jpg`, `jpeg`, `js`, `mobi`, `mp2`,
`mp3`, `mp4`, `mpg`, `mpeg`, `mov`, `movie`, `msi`, `msp`, `odb`, `odf`,
`odg`, `ods`, `odt`, `ogg`, `ogv`, `pdf`, `phps`, `png`, `ppt`, `pptx`,
`qt`, `qtm`, `ra`, `ram`, `rar`, `rpm`, `sea`, `sit`, `tar`, `tbz`,
`tbz2`, `bz`, `bz2`, `tgz`, `torrent`, `txt`, `wav`, `wma`, `wmv`,
`wpd`, `xls`, `xlsx`, `xml`, `z`, `zip`

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setDownloadExtensions", "mhj|docx"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setDownloadExtensions("mhj|docx");
```

</div>

</div>

<div class="warning">

<div class="title">

Warning

</div>

The list of download extensions is not persisted in the browser. It has
to be configured on every page load.

</div>

</div>

</div>

<div id="jtc-api-addDownloadExtensions">

<div class="function">

addDownloadExtensions(extensions)

Adds new extensions to the download extensions list.

  - param string|Array\<string\> extensions  
    **Required** List of extensions to be added. Can be written as
    string, e.g. `"7z|apk|mp4"`, or an array, e.g. `["7z","apk","mp4"]`.

<div class="warning">

<div class="title">

Warning

</div>

The list of download extensions is not persisted in the browser. It has
to be configured on every page load.

</div>

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["addDownloadExtensions", "mhj|docx"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.addDownloadExtensions("mhj|docx");
```

</div>

</div>

</div>

</div>

<div id="jtc-api-removeDownloadExtensions">

<div class="function">

removeDownloadExtensions(extensions)

Removes extensions from the download extensions list.

  - param string|Array\<string\> extensions  
    **Required** List of extensions to remove. Can be written as string,
    e.g. `"zip|rar"`, or an array, e.g. `["zip", "rar"]`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["removeDownloadExtensions", "mhj|docx"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.removeDownloadExtensions("mhj|docx");
```

</div>

</div>

<div class="warning">

<div class="title">

Warning

</div>

The list of download extensions is not persisted in the browser. It has
to be configured on every page load.

</div>

</div>

</div>

<div class="function">

getConfigDownloadExtensions()

Returns current download extensions list used by the JSTC.

  - return  
    List of download extensions (e.g.`["mhj", "docx"]`).

  - rtype  
    string\[\]

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getConfigDownloadExtensions());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getConfigDownloadExtensions());
```

</div>

</div>

</div>

### User management

<div id="jtc-api-setUserId">

<div class="function">

setUserId(userID)

Sets user ID, which will help identify a user of your application across
many devices and browsers.

  - param string userID  
    **Required** Non-empty, unique ID of a user in application

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setUserId", "19283"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setUserId("19283");
```

</div>

</div>

<div class="todo">

is user id persistent?

</div>

</div>

</div>

<div class="function">

getUserId()

Returns currently used user ID value (set with `setUserId`).

  - return  
    User ID value (e.g. `"19283"`)

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getUserId());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getUserId());
```

</div>

</div>

</div>

<div id="jtc-api-resetUserId">

<div class="function">

resetUserId()

Clears previously set `userID`, e.g. when visitor logs out.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["resetUserId"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.resetUserId();
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setUserIsAnonymous">

<div class="function">

setUserIsAnonymous(isAnonymous)

Enables or disables anonymous tracking (anonymous = without consent).
Does not send any data to `Collecting & Processing Pipeline`. The next
emitted event will have anonymous mode set accordingly.

  - param boolean isAnonymous  
    **Required** Whether visitor is anonymous

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setUserIsAnonymous", true]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setUserIsAnonymous(true);
```

</div>

</div>

</div>

</div>

<div id="jtc-api-deanonymizeUser">

<div class="function">

deanonymizeUser()

Disables anonymous tracking and sends deanonymization event to the
`Collecting & Processing Pipeline`. Recommended method for disabling
anonymous tracking.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["deanonymizeUser"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.deanonymizeUser();
```

</div>

</div>

</div>

</div>

<div class="function">

setSessionIdStrictPrivacyMode(isStrict)

Enables or disables strict privacy option in the tracker. When enabled
tracker will not send information that can be used to fully or partially
identify individual client browser even when persistent cookies are
disabled. The information about browser that is blocked by this setting:
screen resolution and installed browser plugins (e.g. PDF, Flash,
Silverlight, Java, QuickTime, RealAudio, etc.).

  - param boolean isStrict  
    **Required** Defines if tracker should use strict privacy mode.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setSessionIdStrictPrivacyMode", true]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setSessionIdStrictPrivacyMode(true);
```

</div>

</div>

</div>

<div id="jtc-api-getVisitorId">

<div class="function">

getVisitorId()

Returns 16-character hex ID of the visitor.

  - return  
    Visitor ID (e.g. `"0123456789abcdef"`

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getVisitorId());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getVisitorId());
```

</div>

</div>

</div>

</div>

<div id="jtc-api-getVisitorInfo">

<div class="function">

getVisitorInfo()

Returns visitor information.

  - rtype  
    string\[\]

  - returns  
    String array with the following visitor info:

> 0.  new visitor flag indicating new (`"1"`) or returning (`"0"`)
>     visitor
> 1.  visitor ID (16-character hex number)
> 2.  first visit timestamp (UNIX epoch time)
> 3.  previous visit count (`"0"` for first visit)
> 4.  current visit timestamp (UNIX epoch time)
> 5.  last visit timestamp (UNIX epoch time or `""` if N/A)
> 6.  last e-commerce order timestamp (UNIX epoch time or `""` if N/A)

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getVisitorInfo());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getVisitorInfo());
```

</div>

</div>

Example output:

``` js
[
    "0",
    "6d85cb0b727eca52",
    "1624261490",
    "12",
    "1631115486",
    "1631115483",
    "1630590788"
]
```

</div>

</div>

### Cookie management

<div id="jtc-api-enableCookies">

<div class="function">

enableCookies()

Enables all first party cookies. Cookies will be created on the next
tracking request.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["enableCookies"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.enableCookies();
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

JavaScript Tracking Client has cookies enabled by default.

</div>

</div>

</div>

<div id="jtc-api-disableCookies">

<div class="function">

disableCookies()

Disables all first party cookies. Existing cookies will be deleted in
the next page view.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["disableCookies"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.disableCookies();
```

</div>

</div>

</div>

</div>

<div id="jtc-api-deleteCookies">

<div class="function">

deleteCookies()

Deletes existing tracking cookies on the next page view.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["deleteCookies"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.deleteCookies();
```

</div>

</div>

</div>

</div>

<div id="jtc-api-hasCookies">

<div class="function">

hasCookies()

Returns `true` if cookies are enabled in this browser.

  - return  
    Status of cookies support by the browser (e.g. `true`)

  - rtype  
    boolean

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.hasCookies());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.hasCookies());
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setCookieNamePrefix">

<div class="function">

setCookieNamePrefix(prefix)

Sets the prefix for analytics tracking cookies. Default is `"_pk_"`.

  - param string prefix  
    **Required** String that will replace default analytics tracking
    cookies prefix.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCookieNamePrefix", "_examplePrefix_"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCookieNamePrefix("_examplePrefix_");
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setCookieDomain">

<div class="function">

setCookieDomain(domain)

Sets the domain for the analytics tracking cookies.

  - param string domain  
    **Required** Domain that will be set as cookie domain. For enabling
    subdomain you can use wildcard sign or dot.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCookieDomain", ".example.com"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCookieDomain(".example.com");
```

</div>

</div>

</div>

</div>

<div class="function">

getCookieDomain()

Returns domain of the analytics tracking cookies (set with
`setCookieDomain`).

  - return  
    Domain of the analytics tracking cookies (e.g. `".example.com"`)

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getCookieDomain());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getCookieDomain());
```

</div>

</div>

</div>

<div id="jtc-api-setCookiePath">

<div class="function">

setCookiePath(path)

Sets the analytics tracking cookies path.

  - param string path  
    **Required** Path that will be set, default is `"/"`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCookiePath", "/blog/"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCookiePath("/blog/");
```

</div>

</div>

</div>

</div>

<div class="function">

getCookiePath()

Returns the analytics tracking cookies path.

  - return  
    Analytics tracking cookies path (e.g. `"/blog/"`).

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getCookiePath());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getCookiePath());
```

</div>

</div>

</div>

<div id="jtc-api-setSecureCookie">

<div class="function">

setSecureCookie(secure)

Toggles the secure cookie flag on all first party cookies (if you are
using HTTPS).

  - param boolean secure  
    **Required** Whether to add secure flag to cookies.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setSecureCookie", true]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setSecureCookie(true);
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setVisitorCookieTimeout">

<div class="function">

setVisitorCookieTimeout(seconds)

Sets the expiration time of visitor cookies.

  - param number seconds  
    **Required** Number of seconds after which the cookie will expire.
    Default is 13 months.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setVisitorCookieTimeout", 33955200]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setVisitorCookieTimeout(33955200);
```

</div>

</div>

</div>

</div>

<div class="function">

getConfigVisitorCookieTimeout()

Returns expiration time of visitor cookies (in milliseconds).

  - return  
    Expiration time of visitor cookies in milliseconds (e.g.
    `33955200000`)

  - rtype  
    number

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getConfigVisitorCookieTimeout());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getConfigVisitorCookieTimeout());
```

</div>

</div>

</div>

<div id="jtc-api-setReferralCookieTimeout">

<div class="function">

setReferralCookieTimeout(seconds)

Sets the expiration time of referral cookies.

  - param number seconds  
    **Required** Number of seconds after which the cookie will expire.
    Default is 6 months.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setReferralCookieTimeout", 15768000]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setReferralCookieTimeout(15768000);
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setSessionCookieTimeout">

<div class="function">

setSessionCookieTimeout(seconds)

Sets the expiration time of session cookies.

  - param number seconds  
    **Required** Number of seconds after which the cookie will expire.
    Default is 30 minutes.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setSessionCookieTimeout", 1800000]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setSessionCookieTimeout(1800000);
```

</div>

</div>

</div>

</div>

<div class="function">

getSessionCookieTimeout()

Returns expiration time of session cookies.

  - return  
    Expiration time of session cookies

  - rtype  
    number

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getSessionCookieTimeout());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getSessionCookieTimeout());
```

</div>

</div>

</div>

<div id="jtc-api-setVisitorIdCookie">

<div class="function">

setVisitorIdCookie()

Sets cookie containing `analytics ID` in browser.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setVisitorIdCookie"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setVisitorIdCookie();
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

It's needed only when JavaScript Tracking Client instance is created
without use of `_paq.push` and script needs to know `analytics ID`
before first tracking request is sent. Make sure that it is called after
all methods that configure cookie are called (e.g.
`setCookieNamePrefix`, `setCookieDomain`, `setCookiePath`, etc.).

</div>

</div>

</div>

### Cross domain linking

<div id="jtc-api-enableCrossDomainLinking">

<div class="function">

enableCrossDomainLinking()

Enables cross domain linking. Visitors across domains configured with
`setDomains<jtc-api-setDomains>` function will be linked by passing
visitor ID parameter in links.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["enableCrossDomainLinking"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.enableCrossDomainLinking();
```

</div>

</div>

</div>

</div>

<div id="jtc-api-disableCrossDomainLinking">

<div class="function">

disableCrossDomainLinking()

Disables cross domain linking.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["disableCrossDomainLinking"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.disableCrossDomainLinking();
```

</div>

</div>

</div>

</div>

<div id="jtc-api-isCrossDomainLinkingEnabled">

<div class="function">

isCrossDomainLinkingEnabled()

Returns boolean telling whether cross domain linking is enabled.

  - return  
    Status of cross domain linking (e.g. `true`)

  - rtype  
    boolean

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.isCrossDomainLinkingEnabled());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.isCrossDomainLinkingEnabled());
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setCrossDomainLinkingTimeout">

<div class="function">

setCrossDomainLinkingTimeout(seconds)

Changes the time in which two visits across domains will be linked. The
default timeout is 180 seconds (3 minutes).

  - param number seconds  
    **Required** Number of seconds in which two visits across domains
    will be linked

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCrossDomainLinkingTimeout", 180]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCrossDomainLinkingTimeout(180);
```

</div>

</div>

</div>

</div>

<div id="jtc-api-getCrossDomainLinkingUrlParameter">

<div class="function">

getCrossDomainLinkingUrlParameter()

Returns the name of a cross domain URL parameter (query parameter by
default) holding visitor ID. This is `"pk_vid"` by default.

  - return  
    Name of a cross domain URL parameter (e.g. `"pk_vid"`)

  - rtype  
    string

Example usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getCrossDomainLinkingUrlParameter());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getCrossDomainLinkingUrlParameter());
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

If your application creates links dynamically, you'll have to add this
parameter manually, e.g.

``` js
var url = "http://myotherdomain.com/path/?" + jstc.getCrossDomainLinkingUrlParameter();
$element.append('<a href="' + url + '">link</a>');
```

</div>

</div>

</div>

<div id="jtc-api-customCrossDomainLinkDecorator">

<div class="function">

customCrossDomainLinkDecorator(urlDecorator)

Sets custom cross domains URL decorator for injecting visitor ID into
URLs. Used when cross domain linking is enabled (see
:js`enableCrossDomainLinking`).

  - param function urlDecorator  
    **Required** Function injecting a parameter to a URL address

<div class="function">

urlDecorator(url, value, name)

Decorator function accepts link URL, parameter name, parameter value
(visitor ID) and returns a URL containing the parameter data.

  - param string url  
    **Required** Link URL

  - param string value  
    **Required** Value of visitor ID that should be passed via URL

  - param string name  
    **Required** Name of visitor ID parameter used by JavaScript
    Tracking Client (can be customized)

  - return  
    Decorated URL or `null` (no change in URL)

  - rtype  
    string|null

</div>

Example of usage (value sent via URL query parameter - equivalent of
default implementation):

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["customCrossDomainLinkDecorator", function (url, value, name) {
    var parsedUrl = new URL(url);
    parsedUrl.searchParams.append(name, value);
    return parsedUrl.href;
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.customCrossDomainLinkDecorator(function (url, value, name) {
    var parsedUrl = new URL(url);
    parsedUrl.searchParams.append(name, value);
    return parsedUrl.href;
}]);
```

</div>

</div>

<div class="todo">

Is anyone actually overwriting the default decorator?

</div>

</div>

</div>

<div id="jtc-api-customCrossDomainLinkVisitorIdGetter">

<div class="function">

customCrossDomainLinkVisitorIdGetter(urlParser)

Sets custom cross domain URL parser for extracting visitor ID from URLs.
Should extract data injected by URL decorator (set via
:js`customCrossDomainLinkDecorator`). The getter should return visitor
ID extracted from page URL (used by :js`enableCrossDomainLinking`).

  - param function urlParser  
    **Required** Function extracting a visitor ID from a URL address

<div class="function">

urlParser(url, name)

Parser function accepts page URL, parameter name and returns parameter
value (visitor ID).

  - param string url  
    **Required** Page URL

  - param string name  
    **Required** Name of parameter holding visitor ID

  - return  
    Visitor ID value (parsed from URL)

  - rtype  
    string

</div>

Example usage (value sent via URL query parameter - equivalent of
default implementation):

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["customCrossDomainLinkVisitorIdGetter", function (url, name) {
    return (new URL(url)).searchParams.get(name) || "";
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.customCrossDomainLinkVisitorIdGetter(function (url, name) {
    return (new URL(url)).searchParams.get(name) || "";
});
```

</div>

</div>

<div class="todo">

Is anyone actually overwriting the default visitor ID getter?

</div>

</div>

</div>

### JavaScript Tracking Client configuration

<div class="function">

addTracker(trackerUrl, siteId)

Creates new JavaScript Tracking Client instance.

  - param string trackerUrl  
    **Required** URL for JavaScript Tracking Client

  - param string siteId  
    **Required** Site ID that will be linked to tracked data.

  - return  
    JavaScript Tracking Client instance

  - rtype  
    object

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["addTracker", "https://example.piwik.pro/piwik.php", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.addTracker("https://example.piwik.pro/piwik.php", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef");
```

</div>

</div>

</div>

<div class="function">

setTrackerUrl(url)

Overrides Piwik tracking URL set at the JSTC initiation.

  - param string url  
    **Required** Path to Piwik tracking URL (e.g.
    `"https://example.piwik.pro/piwik.php"`)

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setTrackerUrl", "https://example.piwik.pro/piwik.php"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setTrackerUrl("https://example.piwik.pro/piwik.php");
```

</div>

</div>

</div>

<div class="function">

getTrackerUrl()

Returns the Piwik tracking URL used by tracker (either default, set
during tracker initiation or override value set with `setTrackerUrl`).

  - return  
    Piwik tracking URL (e.g. `"https://example.piwik.pro/piwik.php"`)

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getTrackerUrl());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getTrackerUrl());
```

</div>

</div>

  - return  
    Currently used Piwik tracking URL (e.g.
    `"https://example.piwik.pro/"`)

  - rtype  
    string

</div>

<div class="function">

setAPIUrl(url)

Overrides HTTP API URL for tracking endpoint that was set at the tracker
initiation. The use of this function is discouraged, as JavaScript
Tracking Client should select the correct URL.

<div class="deprecated">

16.17

This method is outdated, use `setTrackerUrl` instead.

</div>

  - param string url  
    **Required** Path to HTTP API URL (e.g.
    "<https://example.piwik.pro>")

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setAPIUrl", "https://example.piwik.pro/piwik.php"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setAPIUrl("https://example.piwik.pro/piwik.php");
```

</div>

</div>

</div>

<div class="function">

getPiwikUrl()

Returns the HTTP API URL used by tracker (either default, set during
tracker initiation or override value set with `setAPIUrl`).

  - return  
    Currently used HTTP API URL (e.g.
    `"https://example.piwik.pro/piwik.php"`)

  - rtype  
    string

<div class="deprecated">

16.17

This method is outdated, use `getTrackerUrl` instead.

</div>

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getPiwikUrl());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getPiwikUrl());
```

</div>

</div>

</div>

<div class="function">

setSiteId(siteId)

Sets site ID that wil be linked to tracked data.

  - param string siteId  
    **Required** Site ID that will be linked to tracked data.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setSiteId", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setSiteId("45e07cbf-c8b3-42f3-a6d6-a5a176f623ef");
```

</div>

</div>

</div>

<div class="function">

getSiteId()

Returns site ID linked to tracked data.

  - return  
    Site ID linked to tracked data (e.g.
    `"45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"`)

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getSiteId());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getSiteId());
```

</div>

</div>

</div>

<div id="jtc-api-setDomains">

<div class="function">

setDomains(domains)

Allows to define a list of internal domains. Used in `outlink
tracking<jtc-api-download-and-outlink>` for determining whether a link
is an outlink and in `cross domain
linking<jtc-api-cross-domain-linking>` for determining which links
should have visitor ID parameter injected.

  - param Array\<string\> domains  
    **Required** A list of internal domains. Domains can contain
    wildcard character (`"*"`) or leading dot.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setDomains", [".example.com", ".example.co.uk"]]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setDomains([".example.com", ".example.co.uk"]);
```

</div>

</div>

</div>

</div>

<div class="function">

getDomains()

Returns list of internal domains (set with `setDomains` and used in
`outlink tracking<jtc-api-download-and-outlink>`).

  - return  
    List of internal domains (e.g. `[".example.com", ".example.co.uk"]`

  - rtype  
    string\[\]

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getDomains());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getDomains());
```

</div>

</div>

</div>

<div class="function">

setCustomUrl(customUrl)

The function that will override tracked page URL. Tracker will use
current page URL if custom URL was not set.

  - param string customUrl  
    **Required** Value that will override default URL of the tracked
    page.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCustomUrl", "https://example.com/virtual-page"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCustomUrl("https://example.com/virtual-page");
```

</div>

</div>

</div>

<div class="function">

getCurrentUrl()

Returns the current URL of the page. The custom URL will be returned if
set with `setCustomUrl`.

  - return  
    Currently tracked page URL (e.g.
    `"https://example.com/virtual-page"`)

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getCurrentUrl());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getCurrentUrl());
```

</div>

</div>

</div>

<div class="function">

setReferrerUrl(url)

The function that will override the detected HTTP referrer.

  - param string url  
    **Required** Value that will override HTTP referrer.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setReferrerUrl", "https://example.com/previous-page"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setReferrerUrl("https://example.com/previous-page");
```

</div>

</div>

</div>

<div class="function">

discardHashTag(enableFilter)

When enabled, JSTC will remove [URL fragment
identifier](https://en.wikipedia.org/wiki/Fragment_identifier) from all
tracked URLs (e.g. current page URL, referer URL, etc.).

  - param boolean enableFilter  
    **Required** If set to true, URL fragment identifier will be removed
    from tracked URLs.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["discardHashTag", true]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.discardHashTag(true);
```

</div>

</div>

</div>

<div id="jtc-api-setDocumentTitle">

<div class="function">

setDocumentTitle(title)

Overwrites document title internally. All events sent afterwards will
use the provided document title. The title shown in a browser window is
not affected.

  - param string title  
    **Required** Custom title

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setDocumentTitle", document.title.toLocaleLowerCase()]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setDocumentTitle(document.title.toLocaleLowerCase());
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setTimingDataSamplingOnPageLoad">

<div class="function">

setTimingDataSamplingOnPageLoad(sampling)

Configures page performance data collection. With non-zero sampling (10
by default), some page views will issue a page performance measurement.

  - param number sampling  
    **Required** Page performance sampling, integer between 0 and 100. 0
    disables page performance data collection. 100 measures every page
    load.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setTimingDataSamplingOnPageLoad", 0]); // disables page performance data collection
_paq.push(["setTimingDataSamplingOnPageLoad", 10]); // 10% of page views will by followed by a page performance measurement, this is the default behavior
_paq.push(["setTimingDataSamplingOnPageLoad", 30]); // 30% of page views will be followed by a page performance measurement
_paq.push(["setTimingDataSamplingOnPageLoad", 100]); // 100% of page views will be followed by a page performance measurement
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setTimingDataSamplingOnPageLoad(0); // disables page performance data collection
jstc.setTimingDataSamplingOnPageLoad(10); // 10% of page views will by followed by a page performance measurement, this is the default behavior
jstc.setTimingDataSamplingOnPageLoad(30); // 30% of page views will be followed by a page performance measurement
jstc.setTimingDataSamplingOnPageLoad(100); // 100% of page views will be followed by a page performance measurement
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

The default sampling value is 10, meaning 10% of page loads will be
measured.

</div>

<div class="warning">

<div class="title">

Warning

</div>

This setting will have an effect only if it's used before the
`trackPageView`.

</div>

<div class="warning">

<div class="title">

Warning

</div>

If a page is closed before it fully loads (e.g. visitor closes the tab
immediately after opening the page), page performance data will not be
collected.

</div>

</div>

</div>

<div class="function">

disablePerformanceTracking()

Disables sending page performance metrics for page views. Page
performance metrics are enabled by default, but on SPA pages they are
correct only for the first page view. All following page views in SPA
don't reload whole page so in such cases it's better to disable page
performance tracking to avoid reporting invalid loading times for such
pages.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["disablePerformanceTracking"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.disablePerformanceTracking();
```

</div>

</div>

</div>

<div id="jtc-api-getTimingDataSamplingOnPageLoad">

<div class="function">

getTimingDataSamplingOnPageLoad()

Returns page performance sampling number.

  - return  
    Percentage of page performance sampling (e.g. `10`)

  - rtype  
    number

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getTimingDataSamplingOnPageLoad());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getTimingDataSamplingOnPageLoad());
```

</div>

</div>

</div>

</div>

<div id="jtc-api-enableHeartBeatTimer">

<div class="function">

enableHeartBeatTimer()

When a visitor is not producing any events (e.g. because they are
reading an article or watching a video), we don't know if they are still
on the page. This might skew page statistics, e.g. *time on page* value.
*Heartbeat timer* allows us to determine how much time visitors spend on
a page by sending heartbeats to the `Collecting & Processing Pipeline`
as long as the page is in focus.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["enableHeartBeatTimer"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.enableHeartBeatTimer();
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

The first heartbeat will be sent 15 seconds after the page load. The
time between heartbeats increases with the number of heartbeats sent and
stops at 5 minutes. When a page looses focus, heartbeats will be paused
until the focus is restored. The last heartbeat is sent 30 minutes after
the page view.

</div>

</div>

</div>

<div class="function">

disableHeartBeatTimer()

Disables sending heartbeats if they were previously enabled by
`enableHeartBeatTimer`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["disableHeartBeatTimer"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.disableHeartBeatTimer();
```

</div>

</div>

</div>

<div id="jtc-api-setLinkTrackingTimer">

<div class="function">

setLinkTrackingTimer(milliseconds)

When a visitor produces an events and closes the page immediately
afterwards, e.g. when opening a link, the request might get cancelled.
To avoid loosing the last event this way, JavaScript Tracking Client
will lock the page for a fraction of a second (if wait time hasn't
passed), giving the request time to reach the `Collecting & Processing
Pipeline`.

`setLinkTrackingTimer` allows to change the default lock/wait time of
500ms.

  - param number milliseconds  
    **Required** How many milliseconds a request needs to reach the
    `Collecting & Processing Pipeline`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setLinkTrackingTimer", 100]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setLinkTrackingTimer(100);
```

</div>

</div>

<div class="note">

<div class="title">

Note

</div>

Requests sent using `beacon` method do not lock the page.

</div>

<div class="note">

<div class="title">

Note

</div>

Contrary to what the function name suggests, `setLinkTrackingTimer`
affects all other types of events. In recent versions of JavaScript
Tracking Client, links are sent using `beacon` method if available.

</div>

</div>

</div>

<div id="jtc-api-getLinkTrackingTimer">

<div class="function">

getLinkTrackingTimer()

Returns page exit delay (in milliseconds). Default delay can be changed
with `setLinkTrackingTimer<jtc-api-setLinkTrackingTimer>`.

  - return  
    Page exit delay (e.g. `500`)

  - rtype  
    number

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function () {
    console.log(this.getLinkTrackingTimer());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getLinkTrackingTimer());
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setSiteInspectorSetup">

<div class="function">

setSiteInspectorSetup(enable)

[Site
Inspector](https://chrome.google.com/webstore/detail/piwik-pro-site-inspector/njcnagohlmamfijimejlnelenhahnoce)
is a Chrome browser extension that helps visualize analytics data (e.g.
click heat map, scroll map) on tracked pages. Default configuration of
JavaScript Tracking Client will add configuration for this extension (in
a page HTML), but it is possible to disable this behavior if you don't
need it.

  - param boolean enable  
    **Required** Whether to enable site inspector support.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setSiteInspectorSetup", false]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setSiteInspectorSetup(false);
```

</div>

</div>

</div>

</div>

### Miscellaneous

<div id="jtc-api-ping">

<div class="function">

ping()

Ping method sends requests that are not related to any visitor action,
but can still update the session. the most common use for this method is
updating session custom dimensions or custom variables.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["ping"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.ping();
```

</div>

</div>

</div>

</div>

<div id="jtc-api-addListener">

<div class="function">

addListener(domElement)

Adds automatic link tracking to an HTML element. Can be used to track
links added to a document after page load.

  - param DOMElement domElement  
    **Required** Element that should be tracked like a link.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["addListener", document.querySelector("#dynamically-added-link")]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.addListener(document.querySelector("#dynamically-added-link"));
```

</div>

</div>

<div class="todo">

Shouldn't this function be private? Is it of any use to developers? They
can track link manually.

</div>

</div>

</div>

<div id="jtc-api-setRequestMethod">

<div class="function">

setRequestMethod(method)

Sets the request method. `GET` and `POST` are valid methods. `GET` is
the default.

  - param string method  
    **Required** Method that will be used in requests. Either `"GET"` or
    `"POST"`.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setRequestMethod", "POST"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setRequestMethod("POST");
```

</div>

</div>

<div class="todo">

Mention same domain or CORS setup for "POST" method

</div>

</div>

</div>

<div id="jtc-api-setRequestContentType">

<div class="function">

setRequestContentType(contentType)

Sets `Content-Type` header of tracking requests. Used when tracking
using `"POST"` method (set by
`setRequestMethod<jtc-api-setRequestMethod>`).

  - param string contentType  
    **Required** Content-Type value to be set.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setRequestContentType", "text/plain"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setRequestContentType("text/plain");
```

</div>

</div>

</div>

</div>

<div id="jtc-api-setCustomRequestProcessing">

<div class="function">

setCustomRequestProcessing(function)

Allows to access and modify query string before sending a page view or
ping request.

  - param function function  
    **Required** Function accepting a query string and returning another
    query string.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCustomRequestProcessing", function (query) {
    var modifiedQuery = query.replace("rec=1", "rec=0");
    return modifiedQuery;
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCustomRequestProcessing(function (query) {
    var modifiedQuery = query.replace("rec=1", "rec=0");
    return modifiedQuery;
});
```

</div>

</div>

<div class="todo">

Consider removing/deprecating this method for two reasons: 1. It only
affects pings and page views 2. It is hard to use - doing anything
useful with it requires parsing query parameter string

</div>

</div>

</div>

<div id="jtc-api-enableJSErrorTracking">

<div class="function">

enableJSErrorTracking(unique)

Enables tracking of unhandled JavaScript errors.

  - param boolean unique  
    **Optional** When set to true, tracker will send only unique errors
    from a page (duplicated errors will be ignored). Default: `true`.

<div class="note">

<div class="title">

Note

</div>

Browsers may limit information about error details if it occurs in
script loaded from different origin (see
[details](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#notes)).

</div>

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["enableJSErrorTracking"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.enableJSErrorTracking();
```

</div>

</div>

</div>

</div>

<div class="function">

trackError(error)

Attempts to send error tracking request using same format as native
errors caught by :js`enableJSErrorTracking`. Such error request will
still follow rules set for tracker, so it will be sent only when JS
error tracking is enabled (:js`enableJSErrorTracking` function was
called before this attempt). It will also respect rules for tracking
only unique errors.

  - param Error error  
    **Required** Error object (e.g. caught with `try...catch`)

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackError", new Error("Uncaught SyntaxError")]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.trackError(new Error("Uncaught SyntaxError"));
```

</div>

</div>

</div>

<div class="function">

getTrackingSource()

Returns tracking source name and version that identifies the library
sending tracking requests. The default tracking source is `jstc` and can
be overwritten using `setTrackingSource<jtc-api-setTrackingSource>`
function.

  - returns  
    An array with tracking source name and version, e.g. `["jstc",
    "2.3.1"]`

  - rtype  
    string\[\]

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function() {
    var nameAndVersion = this.getTrackingSource();
    console.log("name: " + nameAndVersion[0]);
    console.log("version: " + nameAndVersion[1]);
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
var nameAndVersion = jstc.getTrackingSource();
console.log("name: " + nameAndVersion[0]);
console.log("version: " + nameAndVersion[1]);
```

</div>

</div>

</div>

<div id="jtc-api-setTrackingSource">

<div class="function">

setTrackingSource(name, version)

Overwrites the default tracking source.

  - param string name  
    **Required** Tracking source name, e.g. `"custom-source"`

  - param string version  
    **Optional** Tracking source version in [Semantic
    Versioning](https://semver.org/) format, e.g. `"1.0.0"`. If skipped,
    the version will not change.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setTrackingSource", "custom-source", "1.0.0"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setTrackingSource("custom-source", "1.0.0");
```

</div>

</div>

</div>

</div>

<div class="function">

setGenerationTimeMs(generationTime)

Overrides reported time needed to download current page (by default this
value is fetched from [DOM Timing
API](https://developer.mozilla.org/en-US/docs/Web/API/Performance)).

<div class="deprecated">

16.17

Server generation time is phased out in favor of page performance
metrics.

</div>

  - param number generationTime  
    **Required** Time that server took to generate current page (in
    milliseconds).

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setGenerationTimeMs", 2546]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setGenerationTimeMs(2546);
```

</div>

</div>

</div>

<div class="function">

appendToTrackingUrl(appendToUrl)

Appends provided query string to each tracking request.

  - param string appendToUrl  
    **Required** Custom query string that will be attached to each
    tracking request (e.g. `"lat=140&long=100"`). Parameter names and
    values should be already URL encoded.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["appendToTrackingUrl", "lat=140&long=100"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.appendToTrackingUrl("lat=140&long=100");
```

</div>

</div>

</div>

<div class="function">

setDoNotTrack(enable)

When enabled it will disable sending tracking requests.

<div class="deprecated">

16.17

This mechanism is phased out in favor of anonymous tracking. You can
check how to set it up
[here](https://piwik.pro/blog/how-to-do-useful-analytics-without-personal-data/).

</div>

  - param boolean enable  
    **Required** When set to true, no tracking tracking requests will be
    sent.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setDoNotTrack", true]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setDoNotTrack(true);
```

</div>

</div>

</div>

<div class="function">

killFrame()

Checks if tracked page is displayed from inside of a
[frame](https://en.wikipedia.org/wiki/Frame_\(World_Wide_Web\)) and
it'll replace browser URL with tracked page URL in such cases
(displaying page inside a frame can be a phishing scam).

<div class="deprecated">

16.17

It'll be removed in future versions since it falls outside of JSTC main
use case (page tracking).

</div>

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["killFrame"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.killFrame();
```

</div>

</div>

</div>

<div class="function">

redirectFile(url)

Checks if tracked page is displayed from a local file (URL displayed by
browser starts with `file:///`) and replaces browser URL with provided
URL in such cases.

<div class="deprecated">

16.17

It'll be removed in future versions since it falls outside of JSTC main
use case (page tracking).

</div>

  - param string url  
    **Required** URL that should be loaded.

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["redirectFile"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.redirectFile();
```

</div>

</div>

</div>

<div class="function">

getNumTrackedPageViews()

Returns a number of page views tracked so far without loading new page.
Traditional sites will always show `1` so it's mostly useful on SPA
pages that use `trackPageView` without loading a new page.

  - return  
    Number of page views tracked so far without loading new page

  - rtype  
    number

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function() {
    console.log(this.getNumTrackedPageViews());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getNumTrackedPageViews());
```

</div>

</div>

</div>

<div class="function">

getConfigIdPageView()

Returns current page view ID. This value is generated with each use of
`trackPageView`. If new value is different ten last value, then JSTC is
currently tracking a new page.

  - return  
    Page view ID (e.g. `"abCdE1"`)

  - rtype  
    string

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push([function() {
    console.log(this.getConfigIdPageView());
}]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
console.log(jstc.getConfigIdPageView());
```

</div>

</div>

</div>

<div class="function">

trackHeartBeat()

Sends heartbeat event manually. This heartbeat event will follow rules
that are used in other heartbeat events (e.g. it'll be sent only if
tracked page has focus).

<div class="deprecated">

16.17

It was used to sent event that would extend visitor session but internal
rules on when heartbeat could be sent could cause confusion when event
was or wasn't sent. Since introduction of the `ping` method, you should
use that instead.

</div>

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["trackHeartBeat"]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
this.trackHeartBeat();
```

</div>

</div>

</div>

<div class="function">

setCountPreRendered(enable)

Sets prerender event sending policy. If enabled, the
[prerender](https://developer.mozilla.org/en-US/docs/Glossary/prerender)
will send events immediately. Otherwise sending events will be delayed
until the page will be displayed to the viewer.

  - param boolean enable  
    **Required** Prerender event sending policy (e.g. `true`)

Example of usage:

<div class="tabs">

<div class="group-tab">

Command queue

``` javascript
_paq.push(["setCountPreRendered", true]);
```

</div>

<div class="group-tab">

JavaScript Tracking Client object

``` javascript
jstc.setCountPreRendered(true);
```

</div>

</div>

</div>
