// @module DSC.SetSoInfo.SetSoInfo
define('DSC.SetSoInfo.SetSoInfo.View', [
	'dsc_setsoinfo_setsoinfo.tpl'

	, 'DSC.SetSoInfo.SetSoInfo.SS2Model'

	, 'Backbone'
], function (
	dsc_setsoinfo_setsoinfo_tpl

	, SetSoInfoSS2Model

	, Backbone
) {
	'use strict';

	// @class DSC.SetSoInfo.SetSoInfo.View @extends Backbone.View
	return Backbone.View.extend({

		template: dsc_setsoinfo_setsoinfo_tpl,

		initialize: function (options) {
			/*  
				Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/
			// this.model = new SetSoInfoModel();
			// var self = this;
			// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
			// });
		},
		events: {

		},
		bindings: {

		},
		childViews: {

		},

		//@method getContext @return DSC.SetSoInfo.SetSoInfo.View.Context
		getContext: function getContext() {
			//@class DSC.SetSoInfo.SetSoInfo.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});