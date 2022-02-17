 var myChart_l1 = echarts.init(document.getElementById("l1"), "dark");
 var option_l1  = {
     title: {
         text: "各市累计确诊",
         textStyle: {
             // color: 'white',
         },
         left: 'left',
     },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['累计确诊','累计治愈','累计死亡','现有确诊'],
        left: "right",
        textStyle:{
            fontSize:10,
        }
    },
     grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
         name:"人数",
        type: 'value',
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
    },
   yAxis: {
          name:"城市",
        data: [],
        type: 'category',

    },
    series: [
        {
            color:"#3fbddc",
            name: '累计确诊',
            type: 'bar',
            barWidth: 20,
            label: {
                show: true,
                position: 'insideRight'
            },
            data: []
        },
        {
            name: '累计治愈',
            type: 'bar',

            barWidth: 6,
            stack: '累计',
            data: []
        },
        {
            name: '累计死亡',
            type: 'bar',
            stack: '累计',
            data: []
        },
        {
            name: '现有确诊',
            type: 'bar',
            stack: '累计',
            data: []
        },
    ]
};
 var myChart_r1 = echarts.init(document.getElementById("r1"), "dark");
 var option_r1  = {
       title: {
            text:'现存确诊人数趋势',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        dataZoom: [{
            type: 'inside'

        }],
        legend: {
            data: ['现存确诊'],
            left: 'right',
            top: 'top',
            padding: [
                10,  // 上
                10, // 右
                0,  // 下
                10, // 左
            ]

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:
            [{
                type: 'category',
                boundaryGap: false,
                data: [1, 2, 3]
            }]
        ,
        yAxis: [{
            name:"人数",
            type: 'value',
            //y轴字体设置
            axisLabel: {
                show: true,
                color: 'white',
                fontSize: 12,
                formatter: function (value) {
                    if (value >= 1000) {
                        value = value / 1000 + 'k';
                    }
                    return value;
                }
            },
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
            name: "现存确诊",
            type: 'line',
            smooth: true,
            data: [1, 2, 3],//[260, 406, 529],
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
                }, {
                    offset: 1,
                    color: 'rgba(50,60,114,0.00)'
                }])
            },
        },
            ]



};
 var myChart_r2 = echarts.init(document.getElementById('r2'), "dark");
 var option_r2 = {
        title: {
            text:'疫情趋势',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        dataZoom: [{
            type: 'inside'

        }],
        legend: {
            data: ['累计确诊', "累计治愈", "累计死亡","疑似"],
            left: 'right',
            top: 'top',
            padding: [
                10,  // 上
                10, // 右
                0,  // 下
                10, // 左
            ]

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:
            [{
                type: 'category',
                boundaryGap: false,
                data: [1, 2, 3]
            }]
        ,
        yAxis: [{
            name:"人数",
            type: 'value',
            //y轴字体设置
            axisLabel: {
                show: true,
                color: 'white',
                fontSize: 12,
                formatter: function (value) {
                    if (value >= 1000) {
                        value = value / 1000 + 'k';
                    }
                    return value;
                }
            },
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
            data: [1, 2, 3],//[260, 406, 529],
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
                }, {
                    offset: 1,
                    color: 'rgba(50,60,114,0.00)'
                }])
            },
        },
            {
                name: "累计治愈",
                type: 'line',
                smooth: true,
                data: [1, 2, 3],//[25, 25, 25]
                itemStyle: {
                    color: 'rgb(113,151,173)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(113,151,173,0.39)'
                    }, {
                        offset: .34,
                        color: 'rgba(76,155,255,0.25)'
                    }, {
                        offset: 1,
                        color: 'rgba(38,197,254,0.00)'
                    }])
                },
            },
            {
                name: "累计死亡",
                type: 'line',
                smooth: true,
                data: [6, 9, 17],//[6, 9, 17]
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
                    }, {
                        offset: 1,
                        color: 'rgba(140,100,135,0.00)'
                    }])
                },

            }
            ]

    };

 //安徽省地图
var mycharts_c2 = echarts.init(document.getElementById('c2'),"dark");
var mydata = [{'name': '宣称', 'value': 6}, {'name': '池州', 'value': 17}]
var option_c2 = {
    title: {
        text: '',
        subtext: '',
        x: 'left'
    },
    tooltip: {
        trigger: 'item'
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{ start: 1,end: 9 },
            {start: 10, end: 99 },
			{ start: 100, end: 999 },
            {  start: 1000, end: 9999 },
            { start: 10000 }],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
    //配置属性
    series: [{
        name: '累计确诊人数',
        type: 'map',
        mapType:'安徽' ,
        roam: false, //拖动和缩放
        nameMap:{
            "宣城市": "宣城",
            "池州市": "池州",
            "宣城市": "宣城",
            "亳州市": "亳州",
            "六安市": "六安",
            "宿州市": "宿州",
            "阜阳市": "阜阳",
            "滁州市": "滁州",
            "黄山市": "黄山",
            "安庆市": "安庆",
            "铜陵市": "铜陵",
            "淮北市": "淮北",
            "马鞍山市": "马鞍山",
            "淮南市": "淮南",
            "蚌埠市": "蚌埠",
            "芜湖市": "芜湖",
            "合肥市": "合肥"

        },
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data:[]
        //data:[{'name': '宣城', 'value': 6}, {'name': '池州', 'value': 17}]
        //data:[{'name': '宣城', 'value': 6}, {'name': '池州', 'value': 17}] //mydata //数据
    }]
};
mycharts_c2.setOption(option_c2)
    // 使用刚指定的配置项和数据显示图表。
myChart_l1.setOption(option_l1)
myChart_r1.setOption(option_r1)
myChart_r2.setOption(option_r2)





 //局部动态更新传参
function get_l1_data() {
$.ajax({
    url:"/city/安徽",
    success: function(data) {
        console.log(data)
        option_l1.yAxis.data=data.city

        option_l1.series[0].data=data.confirm
        option_l1.series[1].data=data.heal
        option_l1.series[2].data=data.dead
        option_l1.series[3].data=data.nowconfirm
        myChart_l1.setOption(option_l1)
    },
    error: function(xhr, type, errorThrown) {

    }
})
}
function get_c1_data() {
$.ajax({
    url: "/province/安徽省",
    success: function(data) {
        var a=(data.daedrate).toFixed(2)
        var b=String(a)+"%"
        $(".num h1").eq(0).text(data.confirm);
        $(".num h1").eq(1).text(data.heal);
        $(".num h1").eq(2).text(data.dead);
        $(".num h1").eq(3).text(data.suspect);
        $(".num h1").eq(4).text(data.nowconfirm);
        $(".num h1").eq(5).text(b);
    },
    error: function(xhr, type, errorThrown) {

    }
})
}
function get_r1_data() {
 $.ajax({
     url: "/province/now/安徽省",
     success: function (data) {
         // 指定图表的配置项和数据
         option_r1.xAxis[0].data = data.days
         option_r1.series[0].data = data.confirmed
         myChart_r1.setOption(option_r1)

     }
 })
}
function get_r2_data() {
 $.ajax({
    url:"/province/history/安徽省",
    success: function (data) {
        console.log(data)
        // 指定图表的配置项和数据
        option_r2.xAxis[0].data=data.days
        option_r2.series[0].data = data.confirmed
        option_r2.series[1].data = data.heal
        option_r2.series[2].data = data.dead
        myChart_r2.setOption(option_r2)
    },
    error: function (xhr, type, errorThrown) {

    }
})
}
function get_map_data() {
    $.ajax({
        url:"/c2/安徽",
        success: function(data) {
			option_c2.series[0].data=data.data
            mycharts_c2.setOption(option_c2)
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}
get_map_data()




get_l1_data()
get_c1_data()
get_r1_data()
get_r2_data()
