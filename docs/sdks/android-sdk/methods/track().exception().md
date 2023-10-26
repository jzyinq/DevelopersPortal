# track().exception()

The **track().exception()** method records caught exceptions (errors) on
your app. For each exception, you need to define handling code.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .exception(ex)
  .description("description")
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .exception(ex)
  .description("description")
  .with(tracker)
```

</div>

</div>

## Parameters

**ex** (Throwable, optional)  
The caught exception instance. The exception instance is automatically
translated to a URL, and the following information is added to it:
package name, activity path, method name and line number where the crash
occurred.

**description** (string, optional)  
Additional information about the issue.

## Examples

To send a caught exception:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .exception(new Exception("OnPurposeException"))
  .description("Download error")
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .exception(Exception("OnPurposeException"))
  .description("Download error")
  .with(tracker)
```

</div>

</div>
