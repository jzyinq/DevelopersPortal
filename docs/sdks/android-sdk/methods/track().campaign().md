# track().campaign()

The **track().campaign()** method tracks online campaigns that bring
traffic to your mobile app. To track a campaign, you need to add
campaign parameters to each campaign link and then use this method to
pass that data. Campaign data is collected with the first tracked screen
event.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .campaign("campaignURL");
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .campaign("campaignURL")
```

</div>

</div>

## Parameters

**campaignURL** (string, required)  
The URL you used in your campaign to bring traffic to your mobile app.
Valid formats: HTTPS, HTTP and FTP. Example:
`http://example.com?pk_campaign=Summer_Promo&pk_keyword=banking_app`

Note: You can tag campaigns manually or use our [Piwik PRO URL
builder](https://help.piwik.pro/support/collecting-data/piwik-pro-url-builder/).
For now, only the pk\_campaign and pk\_keyword work on SDKs, so don't
use other parameters.

## Examples

To pass campaign data from a campaign link
`http://example.com?pk_campaign=Summer_Promo&pk_keyword=banking_app`:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
Tracker tracker = ((PiwikApplication) getApplication()).getTracker();
TrackHelper.track()
  .campaign("http://example.com?pk_campaign=Summer_Promo&pk_keyword=banking_app");

TrackHelper.track()
  .screen("example/welcome")
  .title("Welcome")
  .with(tracker);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
val tracker: Tracker = (application as PiwikApplication).tracker
TrackHelper.track()
  .campaign("http://example.com?pk_campaign=Summer_Promo&pk_keyword=banking_app")

TrackHelper.track()
  .screen("example/welcome")
  .title("Welcome")
  .with(tracker)
```

</div>

</div>

## Notes

  - For now, only pk\_campaign and pk\_keyword work on SDKs, so don't
    use other parameters.
  - Piwik PRO recognizes the pk\_campaign and pk\_keyword parameters by
    default. But if you run into any problems, check if these parameters
    are added in Administration \> Sites & apps \> Data collection \>
    Campaigns \> Campaign parameters. [Read
    more](https://help.piwik.pro/support/questions/how-can-i-customize-piwik-pro-campaign-parameters/).
