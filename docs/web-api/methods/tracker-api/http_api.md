# Tracking HTTP API

Tracking HTTP API collects events such as page views, custom events and
content impressions. The data sent to this API will be processed and
eventually appear in Analytics reports.

<div class="warning">

<div class="title">

Warning

</div>

All query parameter values inserted into URL must be URL encoded. For
example, `action_name` parameter with value `#1 Coffee & Cookies` should
become `action_name=%231%20Coffee%20%26%20Cookies` in the URL. Requests
with unencoded parameter values can create malformed events or be
rejected completely.

</div>

<div id='redoc-container'>
</div>
<script>
    (function() {
        Redoc.init('/static/_static/api/tracker_tracking_api.json', {}, document.getElementById('redoc-container'), () => {window.prepareRedocMenu ? window.prepareRedocMenu() : setTimeout(()=>{window.prepareRedocMenu()}, 2000)});
    })();
</script>