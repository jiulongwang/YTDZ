var myMap = null;
//地图上显示地灾对象图层	
var dzMarkersLayerGroup = new L.layerGroup();
var dzQueryResults = null;
//底图上显示监测设备对象图层
var jcMarkersLayerGroup = new L.layerGroup();
var jcQueryResults = null;
var warnBounds = null;
var maxZoomShow = 15;
var footerHeight = 101;
var topNavHeight = 25; //手机顶部状态栏高度

mui.init({
	gestureConfig: {
		tap: true, //默认为true
		doubletap: true, //默认为false
		longtap: true, //默认为false
		swipe: true, //默认为true
		drag: true, //默认为true
		hold: false, //默认为false，不监听
		release: false //默认为false，不监听
	}
});

//初始化应用
var initApp = function() {
	this.initMap();
	this.initEvent();
};
mui.ready(initApp);

var initAppPlus = function() {
	//获取状态栏高度
	this.topNavHeight = plus.navigator.getStatusbarHeight();
};

mui.plusReady(initAppPlus);

var initMap = function() {
	var me = this;
	myMap = L.map('ytmap', {
		zoomControl: false,
		attributionControl: false
	}).fitWorld();

	L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
		maxZoom: 18,
		attribution: 'leaflet',
		id: 'gaodem'
	}).addTo(myMap);

	var localMarker = null;

	function onLocationFound(e) {
		if(localMarker == null) {
			var pulsingIcon = L.icon.pulse({
				iconSize: [10, 10],
				color: '#3385FF',
				fillColor: '#3385FF',
				heartbeat: 2
			});
			localMarker = L.marker(e.latlng, {
				icon: pulsingIcon
			}).addTo(myMap);
		} else {
			localMarker.setLatLng(e.latlng);
		}
	}

	function onLocationError(e) {
		mui.toast('未获取位置，请稍后再试！', {
			duration: 'short',
			type: 'div'
		})
		myMap.setView(L.latLng(36.55, 102.71), 4);
	}

	myMap.on('locationfound', onLocationFound);
	myMap.on('locationerror', onLocationError);

	myMap.locate({
		setView: true,
		timeout: 5000,
		maxZoom: 13
	});

	myMap.on('click', function(e) {
		var isMarker = false;
		var target = e.originalEvent.target;
		if(target.type != 'button') {
			me.hideFooterPanle(0);
		}
	});

	showWarnDZMarksOnMap();
	showWarnInfoOnMap();
};

//显示告警信息汇总提示栏，5秒后消失
function showWarnInfoOnMap() {
	var warnInfo = queryWarnInfo();
	if(warnInfo != '') {
		var obj = mui('#warn-info')[0];
		obj.innerHTML = warnInfo;
	}
	setTimeout(function() {
		var obj = mui('.warn-info-container')[0];
		obj.style.display = 'none';
	}, 10000);
}

//TODO 查询后台服务器，获取警告信息汇总
function queryWarnInfo() {
	var info = '今日报警：地灾点5个，监测设备26个';
	return info;
}

/*显示底部要素概要面板，fh=100*/
var showFooterPanel = function(fh) {
	var mapFooter = mui('#ytfooter')[0];
	var mapContent = mui('#ytmap')[0];
	mapFooter.style.height = fh + 'px';
	mapFooter.style.display = 'block';
	mapContent.style.height = (screen.availHeight - fh - topNavHeight) + 'px';
};

/*隐藏底部要素概要面板, fh=0*/
var hideFooterPanle = function() {
	var mapFooter = mui('#ytfooter')[0];
	var mapContent = mui('#ytmap')[0];
	mapFooter.style.height = '0px';
	mapFooter.style.display = 'none';
	mapContent.style.height = '100%';
};

//初始化事件
var initEvent = function() {
	var me = this;
	//首页底部面板拖动
	var ytFooterHeight = 0
	var zoomin = mui('#yt-map-zoomin')[0];
	var zoomout = mui('#yt-map-zoomout')[0];
	var detailInfo = mui("#detailInfo")[0];
	mui('#ytfooter')[0].addEventListener('dragstart', function(evt) {
		ytFooterHeight = screen.availHeight - topNavHeight - evt.detail.center.y;
		if(ytFooterHeight < me.footerHeight) {
			ytFooterHeight = me.footerHeight;
		}
		me.showFooterPanel(ytFooterHeight);

		detailInfo.style.display = "block";
		detailInfo.style.Position = "static";
		zoomin.classList.add("mui-hidden");
		zoomout.classList.add("mui-hidden");
	});
	mui('#ytfooter')[0].addEventListener('drag', function(evt) {
		ytFooterHeight = screen.availHeight - topNavHeight - evt.detail.center.y;
		if(ytFooterHeight < me.footerHeight) {
			ytFooterHeight = me.footerHeight;
		}
		me.showFooterPanel(ytFooterHeight);
	});
	mui('#ytfooter')[0].addEventListener('dragend', function(evt) {
		ytFooterHeight = screen.availHeight - topNavHeight - evt.detail.center.y;
		if(ytFooterHeight < me.footerHeight) {
			ytFooterHeight = me.footerHeight;
		}
		var step1 = screen.availHeight / 3;
		var step2 = screen.availHeight * 2 / 3;
		if(ytFooterHeight <= step1) {
			ytFooterHeight = me.footerHeight;

			zoomin.classList.remove("mui-hidden");
			zoomout.classList.remove("mui-hidden");

			detailInfo.style.display = "none";
			detailInfo.style.Position = "absolute";
		} else if(ytFooterHeight <= step2) {
			ytFooterHeight = parseInt(step2);
		} else {
			ytFooterHeight = screen.availHeight - topNavHeight;
		}

		me.showFooterPanel(ytFooterHeight);
	});

	//搜索框聚焦激活搜索面板
	mui('#search-input-text-id')[0].addEventListener('focus', function() {
		mui.openWindow({
			url: 'pages/common/search.html',
			id: 'search-page-1'
		});
	});

	//底部ytfooter点击事件进入详情面板
	mui(".mui-table-view").on('tap', '.mui-table-view-cell', function(evt) {

		var action = evt.target.value;
		//TODO 调用后台把该对象进行收藏
		if(action == 'ftstar') {
			var obj = mui('#ftstar')[0];
			if(obj.classList.contains('ytfooter-star')) {
				obj.classList.remove('ytfooter-star');
				obj.classList.add('ytfooter-star-color');
			} else {
				obj.classList.remove('ytfooter-star-color');
				obj.classList.add('ytfooter-star');
			}
			return
		}

		var info = mui('.mui-table-cell')[0];
		//把选中的info.id(type_id)传到详情页面
		var typeT = info.id.split('_')[0];
		var idT = info.id.split('_')[1];
		var pageUrl = '';
		var pageId = '';
		switch(typeT) {
			case 'dzd':
				{
					pageUrl = 'pages/dzd/dzdxq_1.html';
					pageId = 'dzdxq';
					break;
				}

			case 'bmwyjc':
				{
					pageUrl = 'pages/jcsb/bmwyjc.html';
					pageId = 'bmwyjc';
					break;
				}

			case 'lfjc':
				{
					pageUrl = 'pages/jcsb/lfjc.html';
					pageId = 'lfjc';
					break;
				}

			case 'yljc':
				{
					pageUrl = 'pages/jcsb/yljc.html';
					pageId = 'yljc';
					break;
				}

			default:
				break;
		}
		mui.openWindow({
			url: pageUrl,
			id: pageId,
			extras: {
				xqType: typeT,
				xqID: idT
			}
		});
	});
	//监听点击事件,获取所有按钮，绑定按钮的点击事件
	mui('.mui-content').on("tap", "button", function(evt) {
		var action = evt.target.value;
		switch(action) {
			case 'usercenter':
				{
					break;
				}
			case 'info':
				/*已发生预警地灾点列表*/
				{
					//预加载
					var flPage = mui.preload({
						url: 'pages/dzd/dzdsbyjxx.html',
						id: 'dzdsbyjxx',
						styles: {}, //窗口参数
						extras: {} //自定义扩展参数
					});
					flPage.show();
					break;
				}
			case 'locate':
				{
					me.hideFooterPanle(0); //定位功能，测试底部面板隐藏
					myMap.locate({
						setView: true,
						timeout: 5000,
						maxZoom: 15
					});
					break;
				}
			case 'zoomin':
				{
					myMap.zoomIn();
					break;
				}
			case 'zoomout':
				{
					myMap.zoomOut();
					break;
				}
			case 'warn':
				{
					var obj = evt.target;
					if(obj.classList.contains('map-tool-warn-color')) {
						obj.classList.remove('map-tool-warn-color');
						obj.classList.add('map-tool-warn');
						showAllDZMarksOnMap();
					} else {
						obj.classList.remove('map-tool-warn');
						obj.classList.add('map-tool-warn-color');
						showWarnDZMarksOnMap();
					}
					break;
				}
			case 'star': //显示收藏的地灾点 、设备
				{
					var obj = evt.target;
					if(obj.classList.contains('map-tool-star')) {
						obj.classList.remove('map-tool-star');
						obj.classList.remove('yt-star');
						obj.classList.add('map-tool-star-color');
						obj.classList.add('yt-star-color');
					} else {
						obj.classList.remove('map-tool-star-color');
						obj.classList.remove('yt-star-color');
						obj.classList.add('map-tool-star');
						obj.classList.add('yt-star');
					}
					break;
				}
			default:
				break;
		}
	});
};

//TODO 过滤显示被收藏的地灾点、设备点
function showStarMarksOnMap() {

};
//显示所有的地灾点、设备点
function closeStarMarksOnMap() {

};

function showAllDZMarksOnMap() {
	//0所有地灾点
	var results = queryMarkers(0);
	if(results != null && results.length > 0) {
		dzMarkersLayerGroup.clearLayers();
		getDZMarkersLayerGroup(results);
		myMap.addLayer(dzMarkersLayerGroup);
		myMap.flyToBounds(warnBounds, {
			maxZoom: maxZoomShow
		});
	} else {
		mui.toast('无查询结果！', {
			duration: 'short',
			type: 'div'
		})
	}
}
//显示告警对象
function showWarnDZMarksOnMap() {
	//1所有地灾点，包括报警级别信息
	var results = queryMarkers(1);
	if(results != null && results.length > 0) {
		dzMarkersLayerGroup.clearLayers();
		getDZMarkersLayerGroup(results);
		myMap.addLayer(dzMarkersLayerGroup);
		myMap.flyToBounds(warnBounds, {
			maxZoom: maxZoomShow
		});
	} else {
		mui.toast('无查询结果！', {
			duration: 'short',
			type: 'div'
		})
	}
}
//请求后台服务获取不同对象数据
function queryMarkers(markType) {
	switch(markType) {
		case 0:
			return dzMarkersData;
			break;
		case 1:
			return warnDZMarkersData;
			break;
		case 2:
			return warnjcMarkersData;
			break;
		default:
			break;
	}
}
//生成markers并添加到地灾markerlayergroup
function getDZMarkersLayerGroup(results) {
	dzQueryResults = results;
	var latLngsArr = new Array();
	var iconName = 'bullseye';
	var markColor = 'green';
	var level = '';
	for(var i = 0; i < results.length; i++) {
		level = results[i].le;
		markColor = getMarkerColorByWarnLevel(level);
		var iconObj = L.AwesomeMarkers.icon({
			icon: iconName,
			markerColor: markColor,
			prefix: 'fa',
			spin: false
		});
		var mId = results[i].id;
		var mType = results[i].type;
		var mX = results[i].x;
		var mY = results[i].y;
		var mN = results[i].name;
		var mMsg = results[i].msg;
		var markerObj = new L.marker([mX, mY], {
			icon: iconObj,
			title: mId,
			type: mType
		}).bindPopup(mN, {
			closeButton: false
		}).on('click', function(e) {
			showJCMarkerByDZid(mId);
			setFooterContentByInfo(e.target.options.type, e.target.options.title);
			showFooterPanel(footerHeight);
		});
		dzMarkersLayerGroup.addLayer(markerObj);
		latLngsArr.push(markerObj.getLatLng());

	}
	warnBounds = L.latLngBounds(latLngsArr);
}
//根据不同的告警级别获取不同的颜色值
function getMarkerColorByWarnLevel(level) {
	var markColor = '';
	switch(level) {
		case 'red':
			{
				markColor = 'red';
				break;
			}
		case 'orange':
			{
				markColor = 'orange';
				break;
			}
		case 'yellow':
			{
				markColor = 'yellow';
				break;
			}
		case 'blue':
			{
				markColor = 'blue';
				break;
			}
		case 'normal':
			{
				markColor = 'green';
				break;
			}
		default:
			{
				markColor = 'cadetblue';
				break;
			}
	}
	return markColor;
}

//地灾点的点击事件，显示该地灾点的监测设备
function showJCMarkerByDZid(dzID) {
	//2查询所有的监测设备，包括报警级别信息，以及归属的地灾点
	var results = queryMarkers(2);
	if(results != null && results.length > 0) {
		jcMarkersLayerGroup.clearLayers();
		getJCMarkersLayerGroup(results);
		myMap.addLayer(jcMarkersLayerGroup);
		myMap.flyToBounds(warnBounds, {
			maxZoom: maxZoomShow
		});
	} else {
		mui.toast('无查询结果！', {
			duration: 'short',
			type: 'div'
		})
	}
}
//生成markers并添加到监测设备markerlayergroup
function getJCMarkersLayerGroup(results) {
	jcQueryResults = results;
	var latLngsArr = new Array();
	var iconName = 'camera';
	var markColor = 'purple';
	var level = '';
	for(var i = 0; i < results.length; i++) {
		level = results[i].le;
		markColor = getMarkerColorByWarnLevel(level);
		var mId = results[i].id;
		var mType = results[i].type;
		var mX = results[i].x;
		var mY = results[i].y;
		var mN = results[i].name;
		var mMsg = results[i].msg;
		var iconObj = L.AwesomeMarkers.icon({
			icon: iconName,
			markerColor: markColor,
			prefix: 'fa',
			spin: false
		});

		var markerObj = new L.marker([mX, mY], {
			icon: iconObj,
			title: mId,
			type: mType
		}).bindPopup(mN, {
			closeButton: false
		}).on('click', function(e) {
			setFooterContentByInfo(e.target.options.type, e.target.options.title);
			myMap.flyTo(e.latlng);
			showFooterPanel(footerHeight);
		});
		jcMarkersLayerGroup.addLayer(markerObj);
		latLngsArr.push(markerObj.getLatLng());
	}
	warnBounds = L.latLngBounds(latLngsArr);
}
//设置底部栏的内容，根据点击的地灾点或者设备点
function setFooterContentByInfo(Type, infoID) {
	var tempResults = null;
	var infoT = null;
	if(Type == 'dzd') {
		tempResults = dzQueryResults;
	} else {
		tempResults = jcQueryResults;
	}
	for(var i = 0; i < tempResults.length; i++) {
		if(tempResults[i].id == infoID) {
			infoT = tempResults[i];
			break;
		}
	}
	var html = template('ul-li-template', {
		info: infoT,
		type: Type
	});
	document.getElementById("footer-table").innerHTML = html;
}