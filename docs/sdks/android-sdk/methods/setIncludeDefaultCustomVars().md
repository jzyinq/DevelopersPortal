# setIncludeDefaultCustomVars()

The **setIncludeDefaultCustomVars()** method turns on or off fetching
the platform version, OS version and app version from the tracker
instance. It is turned on by default.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setIncludeDefaultCustomVars(isFetched);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.includeDefaultCustomVars = isFetched
```

</div>

</div>

## Parameters

**isFetched** (boolean, required)  
Whether the platform version, OS version and app version is fetched from
the tracker instance or not. True: is fetched. False: is not fetched.

## Examples

To turn off automatic fetching of the platform version, OS version and
app version from the tracker instance:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setIncludeDefaultCustomVars(false);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.includeDefaultCustomVars = false
```

</div>

</div>

## Notes

  - If setIncludeDefaultCustomVars(true) is set, indexes 1-3 are used to
    track the platform version, OS version and app version as custom
    variables.

## Related methods

  - `android track().dimension()`
  - `android track().variable()`
  - `android track().visitVariables()`
