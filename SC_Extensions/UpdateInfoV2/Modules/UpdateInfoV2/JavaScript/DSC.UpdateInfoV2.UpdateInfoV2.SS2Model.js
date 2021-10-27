// Model.js
// -----------------------
// @module Case
define("DSC.UpdateInfoV2.UpdateInfoV2.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/UpdateInfoV2/SuiteScript2/UpdateInfoV2.Service.ss"
            ),
            true
        )
});
});
