// Model.js
// -----------------------
// @module Case
define("DSC.UpdateInfoV2.UpdateInfoV2.Model",
    [
        "Backbone",
        "Utils"
    ],
    function (
        Backbone,
        Utils
    ) {
        "use strict";
        // @class Case.Fields.Model @extends Backbone.Model
        return Backbone.Model.extend({
            //@property {String} urlRoot
            urlRoot: Utils.getAbsoluteUrl(getExtensionAssetsPath("services/UpdateInfoV2.Service.ss"))
        });
    }
);