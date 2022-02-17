var ec_right1 = echarts.init(document.getElementById('r1'),"dark");
var ec_right1_option = {
	//标题样式
	title : {
	    text : "非湖北地区城市本土确诊TOP5",
	    textStyle : {
	        color : 'white',
	    },
	    left : 'left'
	},
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [],
        type: 'bar',
		barMaxWidth:"50%",
        itemStyle: {
            normal: {
                barBorderRadius: 10,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ACE1EA'
                }, {
                    offset: 1,
                    color: '#1B9CDC'
                }]),
            }
        }
    }]
};
ec_right1.setOption(ec_right1_option)