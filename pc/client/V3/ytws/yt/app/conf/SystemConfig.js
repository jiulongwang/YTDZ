/**
 * Created by LBM on 2017/7/27.
 * 关于selected、init属性说明，所有模块都可以设置init=true，只能配置最后一个init=true的项目的selected=true（重点）
 */
Ext.define('yt.conf.SystemConfig', {
    //singleton: true,
    serviceUrl: 'http://182.92.2.91:8080/oracle/',
    title: "鹰潭市智能监测预警系统",
    refreshTime: 5, // 单位：分钟
    //主容器ID
    bodyContainerID: 'bodyContainerID',
    //浮动容器ID
    floatContainerID: 'floatContainerID',
    //当前选择的菜单项目
    currentMenuItem: null,
    systemMenu: [
        {
            name: "地图展示",
            selected: true,
            init: true,
            type: "widget",
            key: "yt-menu-map",
            widgetId: 'yt-widget-map',
            url: "yt-map",
            parent: 'bodyContainerID',
            ui: "top-menu-ui",
            icon: "fa fa-map-marker",
            mode: "cover",
            fill: false,//若左侧树显示则为false，隐藏为true
            hide: false
        },
        {
            name: "监测点",
            selected: false,
            init: false,
            type: "widget",
            key: "yt-menu-monitorpoint",
            widgetId: 'yt-widget-monitorpoint',
            url: "yt-monpot",
            parent: 'bodyContainerID',
            ui: "top-menu-ui",
            icon: "fa fa-circle",
            mode: "cover",
            fill: true,
            hide: false,

            //浮动容器相关参数,align: l(左)、r(右)、t(上)、b(下)
            floatContainerParams: {
                gapX: 5,
                gapY: 5,
                w: '100%',//w: 360,//数值或百分比，如：100%
                h: '100%',//数值或百分比，如：100%
                align: 'tr' //左上
            }
        },
        {
            name: "监测数据",
            selected: false,
            init: false,
            type: "widget",
            key: "yt-menu-monitordata",
            widgetId: 'yt-widget-monitordata',
            url: "yt-mondata",
            parent: 'bodyContainerID',
            ui: "top-menu-ui",
            icon: "fa fa-cubes",
            mode: "cover",
            fill: true,
            hide: false,
            //浮动容器相关参数,align: l(左)、r(右)、t(上)、b(下)
            floatContainerParams: {
                gapX: 5,
                gapY: 5,
                w: 300,//数值或百分比，如：100%
                h: '100%',//数值或百分比，如：100%
                align: 'tr' //左上
            }
        },
        {
            name: "智能预警",
            selected: false,
            init: false,
            type: "widget",
            key: "yt-menu-aiwarm",
            widgetId: 'yt-widget-aiwarm',
            url: "yt-aiwarm",
            parent: 'bodyContainerID',
            ui: "top-menu-ui",
            icon: "fa fa-exclamation-triangle",
            mode: "cover",
            fill: true,
            hide: false,

            //浮动容器相关参数,align: l(左)、r(右)、t(上)、b(下)
            floatContainerParams: {
                gapX: 5,
                gapY: 5,
                w: 300,//数值或百分比，如：100%
                h: '100%',//数值或百分比，如：100%
                align: 'tr' //左上
            }
        },
        {
            name: "系统管理",
            selected: false,
            init: false,
            type: "widget",
            key: "yt-menu-setting",
            widgetId: 'yt-widget-setting',
            url: "yt-setting",
            html: 'http://182.92.2.91:8012',
            parent: 'bodyContainerID',
            ui: "top-menu-ui",
            icon: "fa fa-cog",
            mode: "cover",
            fill: true,
            hide: false,

            //浮动容器相关参数,align: l(左)、r(右)、t(上)、b(下)
            floatContainerParams: {
                gapX: 5,
                gapY: 5,
                w: '100%',//数值或百分比，如：100%
                h: '100%',//数值或百分比，如：100%
                align: 'tr' //左上
            }
        }
    ]
});
/*PS:通过"singleton: true"属性设置类为单例之后，不能再通过new关键字创建类的实例。
* 是否设置为单例类视个人喜好定,为了简化，现在屏蔽单例设置,否则需要通过全类型路径“jxxc.conf.SystemConfig”
* 调用其中的配置信息。*/
var conf = new yt.conf.SystemConfig();