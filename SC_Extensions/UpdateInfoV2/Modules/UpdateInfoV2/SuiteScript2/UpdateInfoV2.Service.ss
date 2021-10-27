/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 */
define(['N/https', 'N/log'], function (https, log) {
    "use strict";
    return {
        service: function (ctx) {
            var title = " UpdateInfoV2.Service.ss :: service() ";
            try {
                log.debug(title + "ctx", ctx);
                var requestBody = JSON.parse(ctx.request.body);
                var hidePriceCheckBoxVal = requestBody.data.hide_price_val ? requestBody.data.hide_price_val : "";
                var customerId = requestBody.data.entity_id ? requestBody.data.entity_id : "";
                var ctxRequestData = {
                    'hide_price_val': hidePriceCheckBoxVal,
                    'entity_id': customerId
                };
                var responseObj = https.post({
                    url: 'https://tstdrv2443759.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=606&deploy=1&compid=TSTDRV2443759&h=3d425badc2f9d2b13636',
                    body: JSON.stringify(ctxRequestData)
                });
                log.debug(title + "responseObj", responseObj);
                var ctxResponseData = {};
                if (responseObj.body) {
                    ctxResponseData = responseObj.body;
                    ctx.response.write(JSON.stringify({
                        data: ctxResponseData
                    }));
                }
            } catch (e) {
                log.error("Error in:" + title, e);
            }
        }
    };
});