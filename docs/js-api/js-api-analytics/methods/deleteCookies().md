# deleteCookies()

The **deleteCookies()** method deletes the existing visitor cookie
(`_pk_id.*`) and session cookie (`_pk_ses.*`) that are responsible for
recognizing visitors and their sessions. The cookies will be deleted
with the next page view.

## Syntax

<div class="tabs">

<div class="group-tab">

JS

``` javascript
deleteCookies()
```

</div>

</div>

## Examples

To delete visitor cookies:

<div class="tabs">

<div class="group-tab">

JS (queue)

``` javascript
_paq.push(["deleteCookies"]);
```

</div>

<div class="group-tab">

JS (direct)

``` javascript
var jstc = Piwik.getTracker(
  "https://example.com/",
  "45e07cbf-c8b3-42f3-a6d6-a5a176f623ef"
);
console.log(jstc.hasCookies());
```

</div>

</div>

## Related methods

  - enableCookies()
  - disableCookies()
  - hasCookies()
  - setCookieNamePrefix()
  - setCookieDomain()
  - getCookieDomain()
  - setCookiePath()
  - getCookiePath()
  - setSecureCookie()
  - setVisitorCookieTimeout()
  - getConfigVisitorCookieTimeout()
  - setReferralCookieTimeout()
  - setSessionCookieTimeout()
  - getSessionCookieTimeout()
  - setVisitorIdCookie()
