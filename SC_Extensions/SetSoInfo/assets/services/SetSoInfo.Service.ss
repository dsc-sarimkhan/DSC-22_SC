
function service(request, response)
{
	'use strict';
	try 
	{
		require('DSC.SetSoInfo.SetSoInfo.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('DSC.SetSoInfo.SetSoInfo.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}