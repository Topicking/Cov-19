var ec_left1 = echarts.init(document.getElementById('l1'), "dark");

var ec_left1_Option = {
	//标题样式
	title: {
		text: "全国累计趋势",
		textStyle: {
			// color: 'white',
		},
		left: 'left',
	},
	tooltip: {
		trigger: 'axis',
		//指示器
		axisPointer: {
			type: 'line',
			lineStyle: {
				color: '#7171C6'
			}
		},
	},
	legend: {
		data: ['累计确诊', '现有疑似', "累计治愈", "累计死亡"],
		left: "right",
	},

	//图形位置
	grid: {
		left: '4%',
		right: '6%',
		bottom: '4%',
		top: 50,
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		//x轴坐标点开始与结束点位置都不在最边缘
		// boundaryGap : true,
		data: []//['01.20', '01.21', '01.22']
	}],
	yAxis: [{
		type: 'value',
		//y轴字体设置
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 1000) {
					value = value / 1000 + 'k';
				}
				return value;
			}
		},
		//y轴线设置显示
		axisLine: {
			show: true
		},
		//与x轴平行的线样式
		splitLine: {
			show: true,
			lineStyle: {
				color: '#17273B',
				width: 1,
				type: 'solid',
			}
		}
	}],
	series: [{
        name: "累计确诊",
        type: 'line',
        smooth: true,
        data: [],//[260, 406, 529],
        itemStyle: {
                color: 'rgb(161,69,114)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                color: 'rgba(161,69,114,0.39)'
            }, {
                offset: .34,
                color: 'rgba(100,60,114,0.25)'
            },{
                offset: 1,
                color: 'rgba(50,60,114,0.00)'
            }])
            },
	}, {
		name: "现有疑似",
		type: 'line',
		smooth: true,
		data: [],//[54, 37, 3935]

         itemStyle: {
                color: 'rgb(221,107,102)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                color: 'rgba(221,107,102,0.39)'
            }, {
                offset: .34,
                color: 'rgba(180,90,102,0.25)'
            },{
                offset: 1,
                color: 'rgba(130,60,104,0.00)'
            }])
            },

	},
		{
		name: "累计治愈",
		type: 'line',
		smooth: true,
		data: [],//[25, 25, 25]
        itemStyle: {
                 color:'rgb(113,151,173)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                color: 'rgba(113,151,173,0.39)'
            }, {
                offset: .34,
                color: 'rgba(76,155,255,0.25)'
            },{
                offset: 1,
                color: 'rgba(38,197,254,0.00)'
            }])
            },
	}, {
		name: "累计死亡",
		type: 'line',
		smooth: true,
		data: [],//[6, 9, 17]
             itemStyle: {
                color: 'rgb(230,157,135)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                color: 'rgba(230,157,135,0.39)'
            }, {
                offset: .34,
                color: 'rgba(180,137,135,0.25)'
            },{
                offset: 1,
                color: 'rgba(140,100,135,0.00)'
            }])
            },

	}],

};

ec_left1.setOption(ec_left1_Option)
