

var optionScreen={};

optionScreen.show = function()
{
	$("#ServerIPOption").val( SERVER_IP );
	$("#ServerPortOption").val(SERVER_RPC_PORT);
	
	ncc.displayScreen('OptionsScreen');
}

optionScreen.save = function()
{
	SERVER_IP=$.trim( $("#ServerIPOption").val() );
	SERVER_RPC_PORT=$.trim( $("#ServerPortOption").val() );
	
	$('#ServerDisplay').text("Connecting to: "+SERVER_IP+' '+SERVER_RPC_PORT);
	rpc.reload();
	
	startUp.start();
}

optionScreen.cancel = function()
{
	if(ncc.masterKey) ncc.displayScreen('OptionsScreen');
	else ncc.displayScreen('LoginScreen');
}