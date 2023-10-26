# setUserMail() 🗑

<div class="deprecated">

16.0.0 This method is no longer recommended. Audience Manager is no
longer available in the latest product version.

</div>

The **setUserMail()** method sets a user email. The email can then be
sent to Audience Manager with a screen view or any other event. The
email enriches the user profile in Audience Manager and helps to
recognize events belonging to the same user (only in the user profile in
Audience Manager, but not in Analytics).

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setUserMail("userEmail");
```

</div>

<div class="group-tab">

Kotlin

``` javascript
getTracker().setUserMail("userEmail");
```

</div>

</div>

## Parameters

**userEmail** (string, required)  
The user's email address.

## Examples

To set and user's email address and send it to Audience Manager with a
screen view:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setUserMail("john.doe@example.com");
TrackHelper.track()
  .screen("example/welcome")
  .title("Welcome")
  .with(tracker);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.userMail = "john.doe@example.com"
TrackHelper.track()
  .screen("example/welcome")
  .title("Welcome")
  .with(tracker);
```

</div>

</div>

## Notes

  - The user's email address is only used by Audience Manager. It is
    visible in Audience Manager \> Profiles.
  - The user's email address won't be sent if
    setAnonymizationState(true) is set.
