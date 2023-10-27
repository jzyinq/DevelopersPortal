<div class="default-domain">

js

</div>

# Custom data layer name

A data layer is a data structure on your site or app where you can store
data and access it with Tag Manager. The default data layer name is
`dataLayer`, but you can change it to a custom one.

## Choose a unique data layer name

Use a unique data layer name. Make sure that it's not used by other
tools installed on your site or app. If the names are the same, the
tools can interfere with each other.

To check if the data layer name is used on your site or app, follow
these steps:

1.  Pick your new data layer name. Example: `customDataLayer`.
2.  In a browser's console, run the following script with the picked
    name:

<!-- end list -->

``` JavaScript
var dataLayerName = "customDataLayer";
!window.hasOwnProperty(dataLayerName);
```

3.  If the return statement is `true`, you can use this name safely. It
    means that no other tool is using this name.

## Rename your data layer

To rename the data layer, follow these steps:

1.  Log in to [Piwik PRO](https://piwik.pro/login).
2.  Go to **Menu** \> **Administration**.
3.  Navigate to **Sites & apps**.
4.  Select the site or app for which you want to rename the data layer.
5.  Navigate to **Installation**.
6.  Copy the basic container's code. You'll modify this code in the next
    steps.

![Asynchronous container code - copy to clipboard](/pstatic/images/data_layer_name/install_manually_basic_container.png)

7.  In the copied code, change `dataLayer` to a custom name.

<!-- end list -->

``` JavaScript
(window, document, 'dataLayer', '69bc995f-c40a-42ae-b756-b8b9fbc16508');
```

![Asynchronous container code - data layer name](/pstatic/images/data_layer_name/data_layer_name.png)

8.  Paste the code right after the opening **\<body\>** tag on every
    page of your website or app.
9.  Optionally, copy the additional container's code. You'll modify this
    code in the next steps.

![Synchronous container code - copy to clipboard](/pstatic/images/data_layer_name/install_manually_additional_container.png)

10. In the copied code, change `dataLayer` to a custom name.

<!-- end list -->

``` JavaScript
(window, document, 'dataLayer', '69bc995f-c40a-42ae-b756-b8b9fbc16508');
```

![Synchronous container code - data layer name](/pstatic/images/data_layer_name/data_layer_name_additional_container.png)

<div class="note">

<div class="title">

Note

</div>

**Note:** If you're using both containers, use the same data layer name
in each container. Otherwise, things can break.

</div>

11. Paste the code inside **\<head\>\</head\>** tags on your website or
    app. Don’t add this code elsewhere because it may slow down your
    site and tracking won’t work correctly.
12. Replace all existing references to the old data layer name. For
    example, if you use

<!-- end list -->

``` JavaScript
dataLayer.push({event: "test-event"});
```

replace it with

``` JavaScript
customDataLayer.push({event: "test-event"});
```

## WordPress plugin: rename your data layer

If you installed our containers with the WordPress plugin, you can
quickly rename the data layer in the plugin settings.

To rename the data layer in our WordPress plugin, follow these steps:

1.  In your WordPress admin panel, go to **Settings** \> **Piwik PRO**.
2.  In **Data layer**, change the name to a custom one.

![Piwik PRO WordPress plugin settings - data layer name](/pstatic/images/data_layer_name/data_layer_wp_plugin.png)

3.  Click **Save changes**.
4.  Replace all existing references to the old data layer name. For
    example, if you use

<!-- end list -->

``` JavaScript
dataLayer.push({event: "test-event"});
```

replace it with

``` JavaScript
customDataLayer.push({event: "test-event"});
```
