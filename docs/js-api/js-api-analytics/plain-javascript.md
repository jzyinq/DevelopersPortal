# Plain JavaScript

Here are some guidelines on how to use our JavaScript library in Java
Script.

## Installation

Our JavaScript library can be used only after you installed our
container's code (or only a tracking code) on your site. The code
creates a `<script>` tag that asynchronously loads the JavaScript
library in the website's body section.

If you haven't installed the code yet, you can find it directly in Piwik
PRO in **Menu** \> **Administration** \> **Sites & apps** \>
**Installation**.

For more, see our installation guides:

  - [Install a container (with a tracking
    code)](https://help.piwik.pro/support/getting-started/install-a-tracking-code/)
  - [Google Tag Manager: install a container (with a tracking
    code)](https://help.piwik.pro/support/getting-started/google-tag-manager-install-a-container-with-a-tracking-code/)
  - [Google Tag Manager: install only a tracking
    code](https://help.piwik.pro/support/getting-started/google-tag-manager-install-a-tracking-code/)
  - [Instapage: install a container (with a tracking
    code)](https://help.piwik.pro/support/getting-started/instapage-install-a-container-with-a-tracking-code/)
  - [No Piwik PRO Tag Manager: install a tracking
    code](https://help.piwik.pro/support/getting-started/no-piwik-pro-tag-manager-install-a-tracking-code/)
  - [Squarespace: install a container (with a tracking
    code)](https://help.piwik.pro/support/getting-started/squarespace-install-a-container-with-a-tracking-code/)
  - [WordPress: install a container (with a tracking
    code)](https://help.piwik.pro/support/getting-started/wordpress-install-a-tracking-code/)

## Methods used for calls

In JavaScript, our methods can be called in a few ways:

  - **JS (queue):** After installing our container's code, it'll create
    the `_paq` object (a queue). You can use the `push()` method to add
    methods to the queue. Our tracker will then access and proceed these
    methods. With this method, you can also use `this` keyword to send a
    few methods within one call.
  - **JS (direct):** After installing our container's code, you can
    access our tracker directly (and don't use the queue) with the
    `getTracker()` or `getAsyncTracker()` method.

### push()

The **push()** method adds methods to the `_paq` object (a queue). The
methods are called after the container's code (or a tracking code) loads
on a page. They are called synchronously (one by one).

#### Syntax

``` javascript
_paq.push(command)
```

#### Parameters

**command** (string, required)  
An array containing our JavaScript methods.

#### Examples

To send a page view:

``` javascript
_paq.push(["trackPageView"]);
```

To send a custom event:

``` javascript
_paq.push(["trackEvent", "Button", "Sign up"]);
```

### JS this keyword

The JavaScript `this` keyword lets you add a few methods to the `_paq`
object (a queue) in a single call.

#### Examples

To send a page view and a custom event at once:

``` javascript
_paq.push([function () {
    this.trackPageView();
    this.trackEvent("Button", "Sign up");
}]);
```

### getTracker()

The **getTracker()** method gives you a direct access to an async
tracker. An async tracker is the basic one used for collecting data and
using async tags. This method lets you read the return value of the sent
method. It also lets you send methods for a few sites or apps at once.

#### Syntax

``` javascript
Piwik.getTracker(account-address, site-id)
```

#### Parameters

**account-address** (string, required)  
Account address in Piwik PRO. Example: https://example.piwik.pro/

**site-id** (string, required)  
Your site or app ID in Piwik PRO where you want to send data. [Where to
find it?](https://help.piwik.pro/support/questions/find-website-id/)

#### Return value

An object with account details in Piwik PRO.

#### Examples

To send a page view:

``` javascript
var jstc = Piwik.getTracker("https://example.com/", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef");
jstc.trackPageView();
```

To send a custom event:

``` javascript
var jstc = Piwik.getTracker("https://example.com/", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef");
jstc.trackEvent("trackEvent", "Button", "Sign up");
```

### getAsyncTracker()

The **getAsyncTracker()** method gives you a direct access to an async
tracker. An async tracker is used additionally if you've installed the
async container on your site. This method lets you read the return value
of the sent method. It also lets you send methods for a few sites or
apps at once.

#### Syntax

``` javascript
Piwik.getTracker(account-address, site-id)
```

#### Parameters

**account-address** (string, required)  
Account address in Piwik PRO. Example: https://example.piwik.pro/

**site-id** (string, required)  
Your site or app ID in Piwik PRO where you want to send data. Where to
find it?

#### Return value

An object with account details in Piwik PRO.

#### Examples

To send a page view:

``` javascript
var jstc = Piwik.getAsyncTracker("https://example.com/", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef");
jstc.trackPageView();
```

To send a custom event:

``` javascript
var jstc = Piwik.getAsyncTracker("https://example.com/", "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef");
jstc.trackEvent("trackEvent", "Button", "Sign up");
```

## Reserved variable names

When you use our JavaScript library, you can't name your variables with
names that we've set as global variables -- it can break the tracking.
Here's the list of reserved variable names:

  - Piwik
  - \_paq
  - JSON\_PIWIK
  - piwikPluginAsyncInit
  - piwikAsyncInit
  - AnalyticsTracker
  - piwik\_install\_tracker
  - piwik\_tracker\_pause
  - piwik\_download\_extensions
  - piwik\_hosts\_alias
  - piwik\_ignore\_classes
  - piwik\_log
  - piwik\_track
  - sevenTag
