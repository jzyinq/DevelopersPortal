# setDryRunTarget()

The **setDryRunTarget()** method sets a dry-run flag and lets you test
and debug tracking. The dry-run flag prevents sending data to Piwik PRO
and prints it in the console instead.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setDryRunTarget(dryRunTarget);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.dryRunTarget = Collections.synchronizedList(dryRunTarget)
```

</div>

</div>

## Parameters

**dryRunTarget** (Collection, required)  
The data structure where the data should be passed into. Type:
List\<Packet\>. Set it to null to disable a dry-run flag.

## Examples

To set a dry-run flag:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
getTracker().setDryRunTarget(Collections.synchronizedList(new ArrayList<Packet>()));
```

</div>

<div class="group-tab">

Kotlin

``` javascript
tracker.dryRunTarget = Collections.synchronizedList(Collections.synchronizedList(ArrayList()))
```

</div>

</div>
