# track().screen()

The **track().screen()** method records a screen view on your mobile
app. A screen view is similar to a page view on a website.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .screen("path")
  .title("title")
  .with(tracker);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .screen("path")
  .title("title")
  .with(tracker)
```

</div>

</div>

## Parameters

**path** (string, required)  
A path set for your screen. Example: `example/welcome`. A path is
automatically translated to a URL and it gets a prefix `screen` (if
tracker.setPrefixing(true) is set).

Note: Set the current instance of Android `Activity` class instead of
the path if you want to use the activity stack. It'll then automatically
set the activity stack as a path and activity title as a title.

**title** (string, optional)  
A title set for your screen. Example: Welcome.

## Examples

To send a screen view with a path `example/welcome` and title `Welcome`:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
public class activityClass extends Activity {
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  Tracker tracker = ((PiwikApplication) getApplication()).getTracker();
  TrackHelper.track()
    .screen("example/welcome")
    .title("Welcome")
    .with(tracker);
  }
}
```

</div>

<div class="group-tab">

Kotlin

``` javascript
public class activityClass : Activity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    val tracker: Tracker = (application as PiwikApplication).tracker
    TrackHelper.track()
      .screen("example/welcome")
      .title("Welcome")
      .with(tracker)
  }
}
```

</div>

</div>

To send a screen view and automatically use the activity stack as a path
and activity name as a title if our activity class is activityClass:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
public class activityClass extends Activity {
…
Tracker tracker = ((PiwikApplication) getApplication()).getTracker();
TrackHelper.track().screen(activityClass).with(tracker);
…
}
```

</div>

<div class="group-tab">

Kotlin

``` javascript
public class activityClass  : Activity() {
…
val tracker: Tracker = (application as PiwikApplication).tracker
TrackHelper.track().screen(activityClass).with(tracker)
…
}
```

</div>

</div>

## Related methods

  - `android track().screens()`
