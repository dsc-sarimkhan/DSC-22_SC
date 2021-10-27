define(
	'DSC.SetSoInfo.SetSoInfo', [
		'DSC.SetSoInfo.SetSoInfo.View',
		'underscore'
	],
	function (
		SetSoInfoView,
		_
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var title = " mountToApp() ";
				var Layout = container.getComponent('Layout');
				var Cart = container.getComponent("Cart");
				var Checkout = container.getComponent("Checkout");
				var shipMethodId = "313";
				var shipMethodData = {
					ship_method: {
						internalid: shipMethodId
					}
				};
				var shipCostData = {
					fieldId: "custbody_dsc_custom_shipping_cost",
					type: "number",
					value: 13.99
				}
				if (Checkout) {
					Checkout.on("beforeShowContent", function () {
						Checkout.getCurrentStep().then(function (step) {
							var title = " setShippingCost() ";
							try {
								if (step && step.url == 'review') { //confirmation
									//Set Shipping Methid of Choice
									Cart.getShipMethods().then(function (shipmethods) {
										console.log(title + "shipmethods", shipmethods);
										for (var i = 0; i < shipmethods.length; i++) {
											if (shipmethods[i].internalid == shipMethodId) {
												// window.addEventListener("click", function (target) {
												// 	console.log(title + "target.id", target.id);
												// });
												Cart.setShipMethod(shipMethodData).then(function (shipMethodObj) {
													console.log(title + "shipMethodObj", shipMethodObj);
												});
											}
										}
									});
									Cart.setTransactionBodyField(shipCostData).then(function () {
										console.log(shipCostData.fieldId + ' was set to ' + shipCostData.value);
									}).fail(function (error) {
										console.log('setTransactionBodyField failed.', error);
									});

									//Add Free Shipping Promotion
									Cart.getPromotions().then(function (promotions) {
										console.log(title + "promotions", promotions);
										// for (var j = 0; j < promotions.length; j++) {
										// 	Cart.removePromotion({
										// 		promocode_internalid: promotions[j].internalid
										// 	}).then(function () {

										// 	}).fail(function () {
										// 		console.log("Could not remove promotion.");
										// 	});
										// }
										// Cart.addPromotion({
										// 	promocode: "FREESHIPPING" //promotions[j].code // 
										// }).then(function (promotion) {
										// 	alert("Promotion added.");
										// 	console.log(promotion);
										// }, function () {
										// 	alert("Could not add promotion.");
										// 	console.log(promotion);
										// });
									});
								}
							} catch (e) {
								console.error("Error in:" + title, e);
							}
						});
					});
				}
				// Cart.getShipMethod().then(function (shipmethod) {
				// 	console.log(title + "shipmethod", shipmethod);
				// });
				// Cart.getShipMethods().then(function (shipmethods) {
				// 	console.log(title + "shipmethods", shipmethods);
				// 	for (var i = 0; i < shipmethods.length; i++) {
				// 		if (shipmethods[i].internalid == shipMethodId) {
				// 			Cart.setShipMethod(shipMethodData).then(function () {
				// 				Cart.showMessage({
				// 					message: 'Shipping method of the order was updated.',
				// 					type: 'info'
				// 				});
				// 			});
				// 		}
				// 	}
				// });
			}
		};
	});