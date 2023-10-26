# audienceManagerGetProfileAttributes() 🗑

<div class="deprecated">

16.0.0 This method is no longer recommended. Audience Manager is no
longer available in the latest product version.

</div>

The **audienceManagerGetProfileAttributes()** method returns profile
attributes. You can get only the attributes with [granted
access](https://help.piwik.pro/support/audiences/api-access-attribute/).

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().audienceManagerGetProfileAttributes(new Tracker.OnGetProfileAttributes() {
    @Override
    public void onAttributesReceived(Map<String, String> attributes) {
      // handle result
    }

    @Override
    public void onError(String errorData) {
      errorData = TextUtils.isEmpty(errorData) ? "Network error": errorData;
      // handle error
    }
});
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.audienceManagerGetProfileAttributes(object : OnGetProfileAttributes {
  override fun onAttributesReceived(attributes: Map<String, String>) {
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

**OnGetProfileAttributes ()** (required)  
The callback to handle a request result. The call is asynchronous. It
has two methods `void onAttributesReceived(Map<String, String>
attributes)` and `void onError(String errorData)`.

**attributes** (output)  
The dictionary of key-value pairs. Key: attribute name. Value: attribute
value.

**errorData** (output)  
The error string. If an error occurs, only this method will be called.

## Examples

To get profile attributes:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().audienceManagerGetProfileAttributes(new Tracker.OnGetProfileAttributes() {
    @Override
    public void onAttributesReceived(Map<String, String> attributes) {
      // handle result
    }

    @Override
    public void onError(String errorData) {
      errorData = TextUtils.isEmpty(errorData) ? "Network error": errorData;
      // handle error
    }
});
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.audienceManagerGetProfileAttributes(object : OnGetProfileAttributes {
  override fun onAttributesReceived(attributes: Map<String, String>) {
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

## Notes

  - You can get only the attributes with [granted
    access](https://help.piwik.pro/support/audiences/api-access-attribute/).

## Related methods

  - `android audienceManagerSetProfileAttribute()`
  - `android OnCheckAudienceMembership()`
