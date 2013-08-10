$(document).ready(function(){
	
	var config=$.hori.getconfig();
	var itcode=localStorage.getItem("itcode");
	if(itcode!=null){

		alert(itcode)
	itcode=decrypt(config.encryptKey,itcode);
	}
	var oaServerName=localStorage.getItem("oaServerName");
	var serverUrl=localStorage.getItem("appServerUrl");
	localStorage.setItem("appDataSource","./login.html")
	var dataSource=localStorage.getItem("appDataSource");
$.ajax({
	url:dataSource,
	dataType:"text",
	success:function(htmlStr){
		$("body").html(htmlStr);
		var jqscript=document.createElement("script");
		jqscript.src="../lib/jquery-mobile/jquery.mobile.min.js";
		$("head").after(jqscript);
	}})
})
