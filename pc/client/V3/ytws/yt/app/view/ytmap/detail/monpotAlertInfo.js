/**
 * Created by lyuwei on 2018/1/9.
 */
Ext.define('yt.view.ytmap.detail.monpotAlertInfo', {
    extend: 'Ext.panel.Panel',

    /*
    Uncomment to give this component an xtype
    xtype: 'monpotalertinfo',
    */
    xtype: 'monpot-alertinfo',

    requires: [
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.grid.Panel',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'Ext.panel.Panel',
        'yt.plugin.date.DateTimeField',
        'yt.utils.CustomPageToolBar',
        'yt.view.ytmap.detail.DetailViewModel',
        'yt.view.ytmap.detail.monpotAlertInfoController'
    ],

    controller: 'monpotalertinfo',

    viewModel: {
        type: 'detailViewModel'
    },

    config: {
        quakeId: '',
        deviceCode: ''
    },

    flex: 1,
    margin: '5 10 5 10',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            border: false,
            items: [
                {
                    xtype: 'datetimefield',
                    reference: 'startDate',
                    format: 'Y-m-d',
                    fieldLabel: '查询时间',
                    emptyText: '请选择起始时间',
                    labelAlign: 'right',
                    allowBlank: false,
                    labelWidth: 60,
                    value: Ext.Date.add(new Date(), Ext.Date.DAY, -1)
                },
                {
                    xtype: 'datetimefield',
                    reference: 'endDate',
                    format: 'Y-m-d',
                    fieldLabel: '至',
                    emptyText: '请选择结束时间',
                    labelAlign: 'right',
                    allowBlank: false,
                    labelWidth: 20,
                    value: new Date()  //默认当天
                },
                {
                    xtype: 'component',
                    width: 5
                },
                {
                    xtype: 'button',
                    handler: 'AlertInfobuttonClick',
                    text: '搜索'
                },
                {
                    xtype: 'component',
                    flex: 1
                },
                {
                    // 如果点击弹出的是监测设备详细面板则该部分不显示
                    xtype: 'panel',
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    border: false,
                    hidden: true,
                    items: [
                        {
                            xtype: 'combo',
                            fieldLabel: '设备类型',
                            labelWidth: 65,
                            labelAlign: 'right',
                            displayField: 'label',
                            editable: false,
                            typeAhead: false,
                            queryMode: 'local',
                            selectOnTab: true,
                            value: '裂缝设备',
                            store: {
                                data: [
                                    {label: '裂缝设备'},
                                    {label: '位移设备'},
                                    {label: '雨量设备'}
                                ]
                            }
                        },
                        {
                            xtype: 'component',
                            width: 5
                        },
                        {
                            xtype: 'combo',
                            displayField: 'label',
                            editable: false,
                            typeAhead: false,
                            queryMode: 'local',
                            selectOnTab: true,
                            store: {
                                data: [
                                    {label: '设备1'},
                                    {label: '设备2'},
                                    {label: '设备3'}
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'gridpanel',
            reference: 'AlertInfoGridPanel',
            flex: 1,
            margin: '5 0 0 0',
            border: true,
            // columnLines: true,
            // reserveScrollbar: true,
            // multiSelect: false,
            scrollable: 'y',
            viewConfig: {
                stripeRows: false
            },
            leadingBufferZone: 8,
            trailingBufferZone: 8,
            columnLines: true,
            columns: [
                {
                    dataIndex: 'devicename',
                    text: '设备名称',
                    flex: 1,

                    hideable: false,
                    menuDisabled: true,
                    resizable: false,
                    sortable: false,
                    align: 'center'
                }, {
                    dataIndex: 'alarmtype',
                    text: '预警类型',
                    flex: 1,

                    hideable: false,
                    menuDisabled: true,
                    resizable: false,
                    sortable: false,
                    align: 'center'
                }, {
                    dataIndex: 'settingv',
                    text: '设定值',
                    flex: 1,

                    hideable: false,
                    menuDisabled: true,
                    resizable: false,
                    sortable: false,
                    align: 'center'
                }, {
                    dataIndex: 'alarmv',
                    text: '预警值',
                    flex: 1,

                    hideable: false,
                    menuDisabled: true,
                    resizable: false,
                    sortable: false,
                    align: 'center'
                }, {
                    dataIndex: 'rank',
                    text: '预警等级',
                    flex: 1,

                    hideable: false,
                    menuDisabled: true,
                    resizable: false,
                    sortable: false,
                    align: 'center'
                }, {
                    dataIndex: 'content',
                    text: '详细信息',
                    flex: 3,

                    hideable: false,
                    menuDisabled: true,
                    resizable: false,
                    sortable: false,
                    align: 'center'
                },{
                    dataIndex: 'alarmtime',
                    text: '预警时间',
                    flex: 3,

                    hideable: false,
                    menuDisabled: true,
                    resizable: false,
                    sortable: false,
                    align: 'center'
                }],
            bbar: {
                xtype: 'Custompagetoolbar',
                displayInfo: false,
                bind: '{gridPageStore}',
                listeners: {
                    beforechange: 'pagebuttonChange'
                }
            },
            listeners: {
                boxready: 'alertInfoBoxReady',
            }
        }
    ]
});