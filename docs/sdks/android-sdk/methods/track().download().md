# track().download()

The **track().download()** method records clicks on links to
downloadable files. You can use it to track app downloads.

## Syntax

<div class="tabs">

<div class="group-tab">

Java

``` javascript
TrackHelper.track()
  .sendDownload("downloadURL")
  .with(getTracker());
```

</div>

<div class="group-tab">

Kotlin

``` javascript
TrackHelper.track()
  .sendDownload("downloadURL")
  .with(tracker)
```

</div>

</div>

## Parameters

**downloadURL** (string, required)  
The download URL. Example: `https://example.com/paid-app.zip`

## Examples

To track a click on `https://example.com/paid-app.zip` as a download:

<div class="tabs">

<div class="group-tab">

Java

``` javascript
Tracker tracker = ((PiwikApplication) getApplication()).getTracker();
TrackHelper.track()
  .sendDownload("https://example.com/paid-app.zip")
  .with(tracker);
```

</div>

<div class="group-tab">

Kotlin

``` javascript
val tracker: Tracker = (application as PiwikApplication).tracker
TrackHelper.track()
  .sendDownload("https://example.com/paid-app.zip")
  .with(tracker)
```

</div>

</div>

## Notes

  - Downloads are visible in the [download
    report](https://help.piwik.pro/support/reports/download-report/) in
    Analytics \> Reports \> Downloads.
  - Here's the default list of file extensions tracked as downloads: 7z,
    aac, apk, arc, arj, asf, asx, avi, azw3, bin, csv, deb, dmg, doc,
    docx, epub, exe, flv, gif, gz, gzip, hqx, ibooks, jar, jpg, jpeg,
    js, mobi, mp2, mp3, mp4, mpg, mpeg, mov, movie, msi, msp, odb, odf,
    odg, ods, odt, ogg, ogv, pdf, phps, png, ppt, pptx, qt, qtm, ra,
    ram, rar, rpm, sea, sit, tar, tbz, tbz2, bz, bz2, tgz, torrent, txt,
    wav, wma, wmv, wpd, xls, xlsx, xml, z, zip.
