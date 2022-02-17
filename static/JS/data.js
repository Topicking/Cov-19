function get_data() {
    $.ajax({
        url:"/countryname",
        success: function(data) {
            let a=[];
            let i=0;
            a = data.country
            a.forEach(v=>{
                i++;
                let str1="c"+String(i)
                let str=v[0];
                creatEcharts(str1,str)
            });
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}

function creatEcharts(str1,str) {
    var myChart = echarts.init(document.getElementById(str1), "dark");
    var option = {
        title: {
            text:str+'疫情趋势',
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
            data: ['累计确诊', "累计治愈", "累计死亡","新增确诊","新增治愈","新增死亡"],
            left: 'center',
            bottom: 0,
            padding: [
                10,  // 上
                10, // 右
                0,  // 下
                10, // 左
            ]

        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: true},
                magicType: {show: true, type: ['line']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [1, 2, 3]
            }
        ],

        yAxis: [{
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
        },
        {
            type: 'value',
            name: '当日新增',
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

            splitLine: {
               show: false,

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

            },
         {
            name: '新增确诊',
            type: 'bar',
             yAxisIndex: 1,
            data: []
        },
        {
            name: '新增治愈',
            type: 'bar',
            yAxisIndex: 1,
            data: []
        },
        {
            name: '新增死亡',
            type: 'bar',
            yAxisIndex: 1,
            data: []
        },],
         animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }

    };

    myChart.showLoading();
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)

    $.ajax({
        url: "/" + str,
        success: function (data) {
            myChart.hideLoading();
            // 指定图表的配置项和数据
            option.xAxis[0].data = data.day
            option.series[0].data = data.confirmed
            option.series[1].data = data.heal
            option.series[2].data = data.dead
            option.series[3].data = data.increase_confirmed
            option.series[4].data = data.increase_heal
            option.series[5].data = data.increase_dead
            myChart.setOption(option)
        },
        error: function (xhr, type, errorThrown) {

        }
    })
}

get_data()