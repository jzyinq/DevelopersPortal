# setOfflineCacheSize()

The **setOfflineCacheSize()** method sets the size limit for storing
events in the local storage. The default value is 4 Mb (4\*1024\*1024
bytes).

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
tracker.setOfflineCacheSize(bytes);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.offlineCacheSize = bytes
```

</div>

</div>

## Parameters

**bytes** (number, required)  
The size limit (in bytes) for storing events in the local storage.
Default value: 4 Mb (4\*1024\*1024 bytes). If 0 is set, the size is
unlimited.

## Examples

To set the size limit to 2 Mb (2 \* 1024 \* 1024 bytes):

<div class="tabs">

<div class="group-tab">

Java

``` javascript
tracker.setOfflineCacheSize(2 * 1024 * 1024);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.offlineCacheSize = 2 * 1024 * 1024
```

</div>

</div>

## Related methods

  - `android setOfflineCacheAge()`
