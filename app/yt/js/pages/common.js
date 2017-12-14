
//后台服务查询入口
var muiQuery = function(url, params, success, error) {
	mui.ajax(url, {
		data: params,
		dataType: 'json',
		type: 'get',
		timeout: 10000,
		/*crossDomain: true,//这里如果强制跨域，可能需要在plusReady中执行，具体需要真机测试下
		headers: {
			'Content-Type': 'application/json'
		},*/
		success: success,
		error: error
	});
}

