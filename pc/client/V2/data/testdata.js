define([],function () {
    var warnDZMarkersData = [{
        id: '1',
        type: 'dzd',
        name: '贵溪市石膏矿采空塌陷区',
        x: '28.220454',
        y: '117.202889',
        le: '4',
//		warn:'五级',
        addr:'南山大道与火炬大道交叉口东200米',
        msg: '警告信息1'
    },
        {
            id: '2',
            type: 'dzd',
            name: '雷溪采空塌陷区',
            x: '28.240131',
            y: '117.203318',
            le: '3',
//		warn:'五级',
            addr:'南山大道与火炬大道交叉口东100米',
            msg: '警告信息2'
        },
        {
            id: '3',
            type: 'dzd',
            name: '二水采空塌陷区',
            x: '28.216921',
            y: '117.217595',
            le: '2',
//		warn:'三级',
            addr:'南山大道与火炬大道交叉口北200米',
            msg: '警告信息3'
        },
        {
            id: '4',
            type: 'dzd',
            name: '承信采空塌陷区',
            x: '28.193918',
            y: '117.208754',
            le: '1',
//		warn:'二级',
            addr:'南山大道与火炬大道交叉口北100米',
            msg: '警告信息4'
        },
        {
            id: '5',
            type: 'dzd',
            name: '罗河采空塌陷区',
            x: '28.237177',
            y: '117.177512',
            le: '0',
//		warn:'一级',
            addr:'南山大道与火炬大道交叉口西北300米',
            msg: '警告信息5'
        },
        {
            id: '6',
            type: 'dzd',
            name: '罗塘石膏矿区鱼种场',
            x: '28.270822',
            y: '117.190043',
            le: '0',
//		warn:'一级',
            addr:'南山大道与火炬大道交叉口西200米',
            msg: '警告信息6'
        }
    ]

    var dzMarkersData = [{
        id: '1',
        name: '地灾点1',
        type: 'dzd',
        x: '28.220454',
        y: '117.202889',
        le: '',
//		warn:'五级',
        addr:'南山大道与火炬大道交叉口东200米',
        msg: '全部信息1'
    },
        {
            id: '2',
            name: '地灾点2',
            type: 'dzd',
            x: '28.240131',
            y: '117.203318',
            le: '',
//		warn:'一级',
            addr:'南山大道与火炬大道交叉口东100米',
            msg: '全部信息2'
        },
        {
            id: '3',
            name: '地灾点3',
            type: 'dzd',
            x: '28.216921',
            y: '117.217595',
            le: '',
//		warn:'一级',
            addr:'南山大道与火炬大道交叉口北200米',
            msg: '全部信息3'
        },
        {
            id: '4',
            name: '地灾点4',
            type: 'dzd',
            x: '28.193918',
            y: '117.208754',
            le: '',
//		warn:'一级',
            addr:'南山大道与火炬大道交叉口北100米',
            msg: '全部信息4'
        },
        {
            id: '5',
            name: '地灾点5',
            type: 'dzd',
            x: '28.237177',
            y: '117.177512',
            le: '',
//		warn:'一级',
            addr:'南山大道与火炬大道交叉口西北300米',
            msg: '全部信息5'
        },
        {
            id: '6',
            name: '地灾点6',
            type: 'dzd',
            x: '28.270822',
            y: '117.190043',
            le: '',
//		warn:'五级',
            addr:'南山大道与火炬大道交叉口西200米',
            msg: '全部信息6'
        }
    ]

    var warnjcMarkersData = [{
        id: '1',
        name: '裂缝监测设备1',
        dzd:'贵溪市石膏矿',
        type: 'lfjc',
        x: '28.224357',
        y: '117.204488',
        le: '4',
//		warn:'五级',
        msg: '警告信息1',
        src: 'photos/1.png',
        addr:'南山大道与火炬大道交叉口西200米',
        typeNM:'裂缝监测'
    },
        {
            id: '2',
            name: '位移监测设备1',
            dzd:'贵溪市石膏矿',
            type: 'bmwyjc',
            x: '28.219786',
            y: '117.205647',
            le: '3',
//		warn:'四级',
            msg: '警告信息2',
            src: 'photos/yljc-1.png',
            addr:'南山大道与火炬大道交叉口西北300米',
            typeNM:'位移监测'
        },
        {
            id: '3',
            name: '位移监测设备2',
            dzd:'贵溪市石膏矿',
            type: 'bmwyjc',
            x: '28.221610',
            y: '117.200626',
            le: '2',
//		warn:'三级',
            msg: '警告信息3',
            src: 'photos/yljc-2.png',
            addr:'南山大道与火炬大道交叉口北100米',
            typeNM:'位移监测'
        },
        {
            id: '6',
            name: '位移监测设备3',
            dzd:'贵溪市煤矿',
            type: 'bmwyjc',
            x: '28.215559',
            y: '117.203952',
            le: '0',
            msg: '警告信息6',
            src: 'photos/2.png',
            addr:'南山大道与火炬大道交叉口北200米',
//		warn:'一级',
            typeNM:'位移监测'
        },
        {
            id: '4',
            name: '雨量监测设备1',
            dzd:'贵溪市煤矿',
            type: 'yljc',
            x: '28.223155',
            y: '117.201356',
            le: '1',
//		warn:'二级',
            msg: '警告信息4',
            src: 'photos/yljc-1.png',
            addr:'南山大道与火炬大道交叉口东100米',
            typeNM:'雨量监测'
        },
        {
            id: '5',
            name: '雨量监测设备2',
            dzd:'贵溪市煤矿',
            type: 'yljc',
            x: '28.217533',
            y: '117.201635',
            le: '0',
//		warn:'一级',
            msg: '警告信息5',
            src: 'photos/yljc-2.png',
            addr:'南山大道与火炬大道交叉口东200米',
            typeNM:'雨量监测'
        }
    ]

    var searchListData = [{
        id: '1',
        name: '地灾点1',
        type: 'dzd',
        x: '28.220454',
        y: '117.202889',
        le: '',
        msg: '全部信息1'
    },
        {
            id: '2',
            name: '地灾点2',
            type: 'dzd',
            x: '28.240131',
            y: '117.203318',
            le: 'red',
            msg: '全部信息2'
        },
        {
            id: '3',
            name: '地灾点3',
            type: 'dzd',
            x: '28.216921',
            y: '117.217595',
            le: 'red',
            msg: '全部信息3'
        },
        {
            id: '1',
            name: '监测设备1',
            type: 'lfjc',
            x: '28.224357',
            y: '117.204488',
            le: 'red',
            msg: '警告信息1'
        },
        {
            id: '2',
            name: '监测设备2',
            type: 'bmwyjc',
            x: '28.219786',
            y: '117.205647',
            le: 'orange',
            msg: '警告信息2'
        },
        {
            id: '3',
            name: '监测设备3',
            type: 'bmwyjc',
            x: '28.221610',
            y: '117.200626',
            le: 'yellow',
            msg: '警告信息3'
        },
        {
            id: '4',
            name: '监测设备4',
            type: 'yljc',
            x: '28.223155',
            y: '117.201356',
            le: 'blue',
            msg: '警告信息4'
        }
    ]

    var commentListData = [{
        userid: '1',
        name: '用户1',
        type: 'dzd',
        id:'dzd1',
        le: '3',
        msg: '该地灾点设备安装牢固，监测数据准确，不错！'
    },
        {
            userid: '1',
            name: '用户2',
            type: 'dzd',
            id:'dzd1',
            le: '4',
            msg: '该地灾点设备被破坏，请尽快安排人修理！'
        },
        {
            userid: '1',
            name: '用户3',
            type: 'dzd',
            id:'dzd1',
            le: '5',
            msg: '有了这种地灾监测设备，可以实时报警，很好！'
        },
    ]

    var jscbListData = [{
			id:'lfjc1',
			name: '裂缝监测1',
			dzd:'贵溪市煤矿',
			type: 'lfjc',
			src: 'photos/1.png'
		},
        {
            type: 'lfjc2',
            title: '裂缝监测2',
            type: 'lfjc',
            src: 'photos/2.png'
        },
        {
            id:'bmwyjc1',
            title: '表面位移监测1',
            type: 'bmwyjc',
            src: 'photos/yljc-2.png'
        },
        {
            id:'bmwyjc2',
            title: '表面位移监测2',
            type: 'bmwyjc',
            src: 'photos/yljc-1.png'
        },
        {
            id:'yljc1',
            title: '雨量监测1',
            type: 'yljc',
            src: 'photos/yljc-1.png'
        },
        {
            id:'yljc2',
            title: '雨量监测2',
            type: 'yljc',
            src: 'photos/yljc-2.png'
        },
        {
            id:'dzd1',
            title: '测试设备',
            type: 'yljc',
            src: 'photos/dz1.png'
        }
    ]

    var dzGdxxData = [{
        id: '1',
        type: 'dzd',
        name: '贵溪市罗塘石膏矿区雷溪乡采空区',
        company: '鹰潭市国土资源局',
        dangertype: '地面塌陷',
        dangerLev: '大型',
        threatPersonNum: '1838',
        measures: '监测、避让、巡查',
        warnmethod: '口哨、铜锣',
        avoidaddr: '村委会、投亲戚家、邻居',
        leaveline: '村前公路',
        person: '张志辉',
        persontel: '18102300170',
        jcsbbreif: '总计4种类型，11个监测设备',
        probreif: '该地灾点的险情等级很高，威胁人数很多，需要重点监测。'
    }
    ]

    var jcsbGdxxData = [{
        id: '1',
        type: 'jcsb',
        person: '张三',
        persontel: '18099000001',
        buildaddr: '贵溪市罗塘石膏矿区雷溪乡采空区',
        builddate: '2017/03/13',
        maintenancecycle: '1次/月',
        lastmaintenance: '2017/10/13'
    }
    ]

	return {
        warnDZMarkersData: warnDZMarkersData,
        dzMarkersData: dzMarkersData,
        warnjcMarkersData: warnjcMarkersData,
        searchListData: searchListData,
        commentListData: commentListData,
        jscbListData: jscbListData,
        dzGdxxData: dzGdxxData,
    	jcsbGdxxData: jcsbGdxxData
	}
})