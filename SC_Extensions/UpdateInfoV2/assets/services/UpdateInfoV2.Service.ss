
function service(request, response)
{
	'use strict';
	try 
	{
		require('DSC.UpdateInfoV2.UpdateInfoV2.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('DSC.UpdateInfoV2.UpdateInfoV2.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}