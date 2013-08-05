var app=window.app={
}
app.render=function(args){
	var dataSource=args.dataSource;
	//调用ajax 获取远程数据
	$.ajax({
		url:dataSource,
		success:function(res){
			alert(res);
		}
	})
}
$(document).read(function(){

	var config=$.hori.getconfig();
	var itcode=localStorage.getItem("itcode");
	itcode=decrypt(config.encryptKey,itcode);
	var oaServerName=localStorage.getItem("oaServerName");
	var serverUrl=localStorage.getItem("appServerUrl");
	var dataSource=
	serverUrl+'/view/oa/todosmobile/Produce/DigiFlowMobile.nsf/agGetMsgViewData?openagent&login&server='+oaServerName+'&dbpath=DFMessage/dfmsg_'+itcode+'.nsf&view=vwTaskUnDoneForMobile&thclass=&page=1&count=20';

	app.render({
		"dataSource":dataSource
	})
})
