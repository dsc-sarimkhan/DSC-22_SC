define(
	'DSC.UpdateInfoV2.UpdateInfoV2', [
		'DSC.UpdateInfoV2.UpdateInfoV2.View',
		'Utils'
	],
	function (
		UpdateInfoV2View,
		Utils
	) {
		'use strict';
		var hide_product_prices = '';
		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				// /** @type {LayoutComponent} */
				// var layout = container.getComponent('Layout');

				// if(layout)
				// {
				// 	layout.addChildView('Header.Logo', function() { 
				// 		return new UpdateInfoV2View({ container: container });
				// 	});
				// }

				var title = " mountToApp() ";
				var fileName = " DSC.UpdateInfoV2.UpdateInfoV2.js :: ";
				var extensionName = " UpdateInfoV2 :: ";
				try {
					var layout = container.getComponent('Layout');
					var pdp = container.getComponent('PDP');
					var plp = container.getComponent('PLP');
					if (plp || pdp) {
						var userprofile = container.getComponent("UserProfile");
						userprofile.getUserProfile().then(function (profile) {
							console.log(extensionName + fileName + title + ":: profile", profile);
							hide_product_prices = profile.customfields[2].value;
							if (hide_product_prices) {
								plp.on("beforeShowContent", function () {
									layout.removeChildView('ProductViewsPrice.Price');
								});
								pdp.on("beforeShowContent", function () {
									layout.removeChildView('Product.Price');
								});
							}
						});
					}
					
					var pageType = container.getComponent('PageType');
					pageType.registerPageType({
						name: 'UpdateAdditionalInformation',
						routes: ['updateadditionalinformation'],
						view: UpdateInfoV2View,
						defaultTemplate: {
							name: 'dsc_updateinfov2_updateinfov2.tpl',
							displayName: 'Update Additional Information',
							// thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/default-layout-profile.png')
						}
					});

					var MyAccountMenu = container.getComponent("MyAccountMenu");
					var UpdateAdditionalInfoGroupEntry = {
						id: "updateadditionalinformation",
						groupid: "settings",
						name: Utils.translate('Update Additional Information'),
						index: 99,
						url: "updateadditionalinformation",
					};
					MyAccountMenu.addGroupEntry(UpdateAdditionalInfoGroupEntry);
				} catch (e) {
					console.error("Error In:" + title, e);
				}
			}
		};
	});