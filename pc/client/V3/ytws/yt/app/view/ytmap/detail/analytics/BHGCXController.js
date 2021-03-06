/**
 * Created by lyuwei on 2018/1/18.
 */
Ext.define('yt.view.ytmap.detail.analytics.BHGCXController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.analyticsbhgcx',

    requires: [
        'Ext.chart.series.Line'
    ],

    /**
     * Called when the view is created
     */
    init: function() {

    },

    bhgcxBoxReady: function ( thisExt, width, height, eOpts ) {
        var me = this;
        var meView = me.getView();

        var nowDate = new Date('2017-3-11 8:00:00');
        meView.lookupReference('bhgcx_startTime').setValue( Ext.Date.add( nowDate, Ext.Date.DAY, -1 ) );
        meView.lookupReference('bhgcx_endTime').setValue( nowDate );
        
        me.bhgcxUpdateEcharts();
    },

    bhgcxUpdateEcharts: function () {
        var me = this;
        var meView = me.getView();
        var thisEcharts = meView.down('echartsbasepanel').getEcharts();
        var param = {};

        var action = "crevices/echarts/hour";
        param.deviceid = meView.deviceCode;
        param.begin = meView.lookupReference('bhgcx_startTime').getRawValue() + ":00:00";
        param.end = meView.lookupReference('bhgcx_endTime').getRawValue() + ":59:59";

        var mask = ajax.fn.showMask( meView, '数据加载中...');
        function successCallBack(response, opts) {
            ajax.fn.hideMask(mask);
            //查询结果转json对象
            var result = Ext.JSON.decode(decodeURIComponent((response.responseText)), true);
            if (result['code'] !== 0) return;// 返回结果 code 为 0 正常，否则不正常
            var devicetypecompareOption = {
                color: [
                    '#387FFF'
                ],
                backgroundColor: "#ffffff",
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    top: 50,
                    bottom: 10,
                    left: 20,
                    right: 20,
                    containLabel: true
                },
                legend: {
                    data: ['裂缝监测']
                },
                calculable: false,
                xAxis: [{
                    type: 'category',
                    data: []
                }],
                yAxis: [{
                    type: 'value',
                    // splitArea: {
                    //     show: true
                    // },
                    name: '长度(mm)',
                }],
                series: [{
                    name: '裂缝监测',
                    type: 'line',
                    data: [],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true
                            }
                        }
                    },
                    // markLine: {
                    //     silent: true,
                    //     symbol: 'circle',
                    //     data: [{
                    //         lineStyle: {
                    //             normal: {
                    //                 color: '#FF0000'
                    //             }
                    //         },
                    //         label: {
                    //             normal: {
                    //                 position: 'middle',
                    //                 formatter: '红色警戒'
                    //             }
                    //         },
                    //         yAxis: result.data.redvalue
                    //     }, {
                    //         lineStyle: {
                    //             normal: {
                    //                 color: '#0000FF'
                    //             }
                    //         },
                    //         label: {
                    //             normal: {
                    //
                    //                 position: 'middle',
                    //                 formatter: '蓝色预警'
                    //             }
                    //         },
                    //         yAxis: result.data.bluevalue
                    //     }, {
                    //         lineStyle: {
                    //             normal: {
                    //                 color: '#FFFF00'
                    //             }
                    //         },
                    //         label: {
                    //             normal: {
                    //                 position: 'middle',
                    //                 formatter: '黄色预警'
                    //             }
                    //         },
                    //         yAxis: result.data.yellowvalue
                    //     }]
                    // }
                }]
            }

            var xAxisData = [];
            var datas = [];
            Ext.each(result.data.creviceList, function(item, index) {
                xAxisData.push(item.datekey);
                datas.push(item.v1);
            });
            devicetypecompareOption.series[0].data = datas;
            devicetypecompareOption.xAxis[0].data = xAxisData;
            thisEcharts.setOption(devicetypecompareOption);
        }
        function failureCallBack(response, opts) {
            ajax.fn.hideMask(mask);
        };
        ajax.fn.executeV2(param, 'GET', conf.serviceUrl + action, successCallBack, failureCallBack);
    }
});