var name=getParam("country")
console.log(name)
var myChart_s1 = echarts.init(document.getElementById("s3"), "dark");
var option_s1 = {
    title: {
        text: name + '治愈与死亡率趋势',
        fontSize: 25
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
    toolbox: {
        feature: {
            magicType: {show: true, type: ['line']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    dataZoom: [{
        type: 'inside'

    }],
    legend: {
        data: ['治愈率', "死亡率"],
        left: 'center',
        top: 0,
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
    }],
    series: [{
        name: "治愈率",
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
            name: "死亡率",
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
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }

};
// 使用刚指定的配置项和数据显示图表。
myChart_s1.setOption(option_s1)


var myChart_s2 = echarts.init(document.getElementById("s2"), "dark");
var option_s2 = {
     title: {
        text: name + '疫情趋势',
        fontSize: 25
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
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
    toolbox: {
        feature: {
            magicType: {show: true, type: ['line']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    dataZoom: [{
        type: 'inside'

    }],
    legend: {},
    tooltip: {
        trigger: 'axis',
        showContent: true
    },
    dataset: {
        source: [
            ['count',],
            ['现存确诊',],
            ['累计治愈',],
            ['累计死亡',],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {
        gridIndex: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#17273B',
                width: 1,
                type: 'solid',
            }
        }
    },
    grid: {top: '55%'},
    series: [
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                formatter: '{@count}: {@04-01} ({d}%)'
            },
            encode: {
                itemName: 'product',
                value: '04-01',
                tooltip: '04-01'
            }
        }
    ]
};

myChart_s2.on('updateAxisPointer', function (event) {
    console.log(event)
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart_s2.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{@count}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

// 使用刚指定的配置项和数据显示图表。
myChart_s2.setOption(option_s2)

var myChart_s3 = echarts.init(document.getElementById("s1"), "dark");
var option_s3 = {
    title: {
        text: name + '疫情新增趋势',
        fontSize: 25
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
     toolbox: {
        feature: {
            magicType: {show: true, type: ['line']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['累计确诊','新增确诊', '新增治愈', '新增死亡']
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
        name:'新增趋势',
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
        name:'累计确诊',
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
    series: [
        {
            name: '累计确诊',
            type: 'line',
            yAxisIndex: 1,
            data: []
        },
        {
            name: '新增确诊',
            type: 'bar',
            data: []
        },
        {
            name: '新增治愈',
            type: 'bar',
            data: []
        },
        {
            name: '新增死亡',
            type: 'bar',
            data: []
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart_s3.setOption(option_s3)


function get_data_s1(name) {
    $.ajax({
        url: "/" + name,
        success: function (data) {
            // 指定图表的配置项和数据
            console.log(data.confirmed[0])
            if (!data.confirmed[0]) {
                alert("没有该国家信息");
                window.opener = null;
                window.close();
            }
            option_s1.xAxis[0].data = data.day
            option_s1.series[0].data = data.heal_rate
            option_s1.series[1].data = data.dead_rate
            myChart_s1.setOption(option_s1)
            option_s3.xAxis[0].data = data.day

            option_s3.series[0].data = data.confirmed
            option_s3.series[1].data = data.increase_confirmed
            option_s3.series[2].data = data.increase_heal
            option_s3.series[3].data = data.increase_dead

            myChart_s3.setOption(option_s3)
            console.log(data.day)
            var a=option_s2.dataset.source[0]
            a = a.concat(data.day);
            console.log(a)
            option_s2.dataset.source[0]=a
            var b=option_s2.dataset.source[1]
            b = b.concat(data.nowconfirmed);
            option_s2.dataset.source[1]=b
            console.log(b)
            var c=option_s2.dataset.source[2]
            c = c.concat(data.heal);
            option_s2.dataset.source[2]=c

            var d=option_s2.dataset.source[3]
            d = d.concat(data.dead);
            option_s2.dataset.source[3]=d

            myChart_s2.setOption(option_s2)


        },
        error: function (xhr, type, errorThrown) {

        }
    })
}


function getParam(paramName) {
            paramValue = "";
            isFound = false;
            varurl=decodeURI(window.location.search);
            if (varurl.indexOf("?") == 0 && varurl.indexOf("=") > 1) {
                arrSource = unescape(varurl).substring(1, varurl.length).split("&");
                i = 0;
                console.log(arrSource)
                while (i < arrSource.length && !isFound) {
                    if (arrSource[i].indexOf("=") > 0) {
                        if (arrSource[i].split("=")[0] == paramName) {
                            paramValue = arrSource[i].split("=")[1];
                            isFound = true;
                        }
                    }
                    i++;
                }
            }
            console.log(paramValue)
            return paramValue;
        }

get_data_s1(name)