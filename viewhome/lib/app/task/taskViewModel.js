(function(app){
app.viewModel=function(data){
	var jsonData=$.parseJSON(data);
	var mapping={};
	var viewModel=ko.mapping.fromJS(jsonData);
	return viewModel;


}
})(app)
