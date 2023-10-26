# track().search()

The **track().search()** method tracks searches on your internal search
engine.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .search("keyword")
  .category("category")
  .count(searchCount)
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .search("keyword")
  .category("category")
  .count(searchCount)
  .with(tracker)
```

</div>

</div>

## Parameters

**keyword** (string, required)  
A keyword the user entered into the search box.

**category** (string | array\<string\>, optional)  
A category selected in the search engine.

**searchCount** (number, optional)  
The number of search results.

## Examples

To send an internal search with the keyword "ATM in London" and 20
search results, but no category:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
Tracker tracker = ((PiwikApplication) getApplication()).getTracker();
TrackHelper.track()
  .search("ATM in London")
  .category("")
  .count(20)
  .with(tracker);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
val tracker: Tracker = (application as PiwikApplication).tracker
TrackHelper.track()
  .search("ATM in London")
  .category("")
  .count(20)
  .with(tracker)
```

</div>

</div>
