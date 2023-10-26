# OnCheckAudienceMembership() 🗑

<div class="deprecated">

16.0.0 This method is no longer recommended. Audience Manager is no
longer available in the latest product version.

</div>

The **OnCheckAudienceMembership()** method checks if the user belongs to
a given audience.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().checkAudienceMembership(audienceId, new Tracker.OnCheckAudienceMembership() {
  @Override
  public void onChecked(boolean isMember) {
      // handle result
  }

  @Override
  public void onError(String errorData) {
      // handle error
  }
});
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.checkAudienceMembership(
  binding.audienceId.text.toString(),
  object : OnCheckAudienceMembership {
    override fun onChecked(isMember: Boolean) {
      // handle result
    }

    override fun onError(errorData: String) {
    var errorData: String? = errorData
    errorData = if (TextUtils.isEmpty(errorData)) "Network error" else errorData
      // handle error
    }
  })
```

</div>

</div>

## Parameters

**audienceId** (string, required)  
The audience ID that you want to check. You can find it in Audience
Manager \> Audiences.

**OnCheckAudienceMembership()** (required)  
The callback to handle a request result. The call is asynchronous. It
has two methods `void onChecked(boolean isMember)` and `void
onError(String errorData)`.

**isMember** (boolean, output)  
Whether a user belongs to the given audience or not. True: Belongs.
False: Doesn't belong.

**errorData** (output)  
The error string. If an error occurs, only this method will be called.

## Examples

To check if the user belongs to the audience:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().checkAudienceMembership(audienceId, new Tracker.OnCheckAudienceMembership() {
  @Override
  public void onChecked(boolean isMember) {
      // handle result
  }

  @Override
  public void onError(String errorData) {
      // handle error
  }
});
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.checkAudienceMembership(
  binding.audienceId.text.toString(),
  object : OnCheckAudienceMembership {
    override fun onChecked(isMember: Boolean) {
      // handle result
    }

    override fun onError(errorData: String) {
    var errorData: String? = errorData
    errorData = if (TextUtils.isEmpty(errorData)) "Network error" else errorData
      // handle error
    }
  })
```

</div>

</div>

## Related methods

  - `android audienceManagerSetProfileAttribute()`
  - `android audienceManagerGetProfileAttributes()`
