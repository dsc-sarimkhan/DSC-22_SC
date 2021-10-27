// @module DSC.UpdateInfoV2.UpdateInfoV2
define('DSC.UpdateInfoV2.UpdateInfoV2.View', [
	'dsc_updateinfov2_updateinfov2.tpl',
	'DSC.UpdateInfoV2.UpdateInfoV2.SS2Model',
	'Backbone',
	'jQuery',
	'underscore'
], function (
	dsc_updateinfov2_updateinfov2_tpl,
	UpdateInfoV2SS2Model,
	Backbone,
	jQuery,
	_
) {
	'use strict';
	var user_internalid = '';
	// @class DSC.UpdateInfoV2.UpdateInfoV2.View @extends Backbone.View
	return Backbone.View.extend({

		template: dsc_updateinfov2_updateinfov2_tpl

			,
		initialize: function (options) {
				/*  Uncomment to test backend communication with an example service
					(you'll need to deploy and activate the extension first)
				*/

				// this.model = new UpdateInfoV2Model();
				// var self = this;
				// this.model.fetch().done(function(result) {
				// 	self.message = result.message;
				// 	self.render();
				// });
				var title = " initialize() ";
				this.container = options.container;
				this.userprofile = this.container.getComponent("UserProfile");
				this.userprofile.getUserProfile().then(function (profile) {
					user_internalid = profile.internalid;
					console.log(title + "profile", profile)
				});
			}

			,
		events: {
			'click [data-action="updateadditionalinfo"]': 'updateAdditionalInfo'
		}

		,
		bindings: {

		}

		,
		childViews: {

		}

		//@method getContext @return DSC.UpdateInfoV2.UpdateInfoV2.View.Context
		,
		getContext: function getContext() {
			//@class DSC.UpdateInfoV2.UpdateInfoV2.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		},
		// @method updateAdditionalInfo updates additional information in NS
		// @param {jQuery.Event} e
		// @return {Void}
		updateAdditionalInfo: function (e) {
			var title = " updateAdditionalInfo() ";
			var model = new UpdateInfoV2SS2Model();

			e.preventDefault();
			try {
				var hidePriceCheckBoxVal = document.getElementById("hideprices").checked ? 'T' : 'F';
				console.log(title + "user_internalid :: hidePriceCheckBoxVal", user_internalid + " :: " + hidePriceCheckBoxVal);
				if (user_internalid) {
					model.save({
						data: {
							'hide_price_val': hidePriceCheckBoxVal ? hidePriceCheckBoxVal : 'F',
							'entity_id': user_internalid ? user_internalid : ""
						}
					}).done(function (result) {
						if (result) {
							console.log(title + "result", JSON.parse(result));
						}
					});
				}
			} catch (e) {
				console.error("Error in " + title, e);
			}
		}
	});
});