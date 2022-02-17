
var city_name=getParam("province")
document.getElementById("title").innerHTML =city_name+'疫情实时追踪'

var head = document.head;
var script = document.createElement("script")
script.setAttribute("src","../JS/province/"+city_name+".js");
head.appendChild(script)


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

            label: {
                show: true,
                position: 'right'
            },
            data: []
        },
        {
            name: '累计治愈',
            type: 'bar',

            barWidth: 4,
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

var mycharts_c2 = echarts.init(document.getElementById('c2'),"dark");
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
        mapType:city_name ,
        roam: true, //拖动和缩放
        nameMap:{

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


 //局部动态更新传参
function get_l1_data() {
$.ajax({
    url:"/city/"+city_name,
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
    url: "/province/"+city_name,
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
     url: "/province/now/"+city_name,
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
    url:"/province/history/"+city_name,
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
        url:"/c2/"+city_name,
        success: function(data) {
            if(city_name =='吉林省'){
        option_c2.series[0].nameMap= {
            "长春市": "长春",
            "吉林市": "吉林",
            "四平市": "四平市",
            "通化市": "通化",
            "白山市": "白山",
            "辽源市": "辽源",
            "白城市": "白城",
            "松原市": "松原",
            "延边朝鲜族自治州":"延边",

        }
    }
     else if(city_name =='黑龙江省'){
        option_c2.series[0].nameMap= {
             "哈尔滨市": "哈尔滨",
            "齐齐哈尔市": "齐齐哈尔",
            "牡丹江市": "牡丹江",
            "佳木斯市": "佳木斯",
            "大庆市": "大庆",
            "伊春市": "伊春",
            "鸡西市": "鸡西",
            "鹤岗市": "鹤岗",
            "双鸭山市": "双鸭山",
            "七台河市": "七台河",
            "绥化市": "绥化",
            "黑河市": "黑河",
            "大兴安岭地区": "大兴安岭"
        }
        }
     else if(city_name =='湖北省'){
        option_c2.series[0].nameMap= {
             "武汉市": "武汉",
            "黄石市": "黄石",
            "十堰市": "十堰",
            "宜昌市": "宜昌",
            "襄阳市": "襄阳",
            "鄂州市": "鄂州",
            "荆门市": "荆门",
            "孝感市": "孝感",
            "荆州市": "荆州",
            "黄冈市": "黄冈",
            "咸宁市": "咸宁",
            "随州市": "随州",
            "恩施土家族苗族自治州" : "恩施州",
            "神农架林区" : "神农架林区",
            "天门市": "天门",
            "潜江市": "潜江",
            "仙桃市": "仙桃"

        }

        window.open('../../static/html/china_province.html?province=河南省')
    }
     else if(city_name =='湖南省'){
        option_c2.series[0].nameMap= {
             "长沙市": "长沙",
            "株洲市": "株洲",
            "湘潭市": "湘潭",
            "衡阳市": "衡阳",
            "邵阳市": "邵阳",
            "岳阳市": "岳阳",
            "常德市": "常德",
            "张家界市": "张家界",
            "益阳市": "益阳",
            "郴州市": "郴州",
            "永州市": "永州",
            "怀化市": "怀化",
            "娄底市": "娄底",
            "湘西土家族苗族自治州": "湘西自治州"

        }
        }
     else if(city_name =='海南省'){
        option_c2.series[0].nameMap= {
            "海口市": "海口",
            "三亚市": "三亚",
            "儋州市": "儋州",
            "三沙市": "三沙",
            "五指山市": "五指山",
            "文昌市": "文昌",
            "琼海市": "琼海",
            "万宁市": "万宁",
            "东方市": "东方",
            "琼中黎族苗族自治县" : "琼中",
            "白沙黎族自治县" : "白沙",
            "昌江黎族自治县" : "昌江",
            "乐东黎族自治县" : "乐东",
            "陵水黎族自治县" : " 陵水",
            "保亭黎族苗族自治县" : "保亭",
            "澄迈县":"澄迈",
            "临高县":"临高",
            "定安县":"定安",


        }
        }
     else if(city_name =='四川省'){
        option_c2.series[0].nameMap= {
             "成都市": "成都",
            "绵阳市": "绵阳",
            "自贡市": "自贡",
            "攀枝花市": "攀枝花",
            "泸州市": "泸州",
            "德阳市": "德阳",
            "广元市": "广元",
            "遂宁市": "遂宁",
            "内江市": "内江",
            "乐山市": "乐山",
            "资阳市": "资阳",
            "宜宾市": "宜宾",
            "南充市": "南充",
            "达州市": "达州",
            "雅安市": "雅安",
            "广安市": "广安",
            "巴中市": "巴中",
            "眉山市": "眉山",
            "阿坝藏族羌族自治州": "阿坝州",
            "甘孜藏族自治州" : "甘孜州",
            "凉山彝族自治州" : "凉山州"

        }

    }
     else if(city_name =='贵州省'){
        option_c2.series[0].nameMap= {
            "贵阳市": "贵阳",
            "遵义市": "遵义",
            "六盘水市": "六盘水",
            "黔南布依族苗族自治州": "黔南州",
            "毕节市": "毕节",
            "安顺市": "安顺",
            "黔东南苗族侗族自治州": "黔东南州",
            "黔西南布依族苗族自治州": "黔西南州",
            "铜仁市":"铜仁"

        }

    }
      else if(city_name =='云南省'){
        option_c2.series[0].nameMap= {
            "昆明市": "昆明",
            "曲靖市": "曲靖",
            "玉溪市": "玉溪",
            "昭通市": "昭通市",
            "临沧市": "临沧",
            "保山市": "保山",
            "丽江市": "丽江",
            "普洱市": "普洱",
            "红河哈尼族彝族自治州": "红河州",
            "德宏傣族景颇族自治州": "德宏州",
            "楚雄彝族自治州": "楚雄州",
            "大理白族自治州": "大理",
            "文山壮族苗族自治州": "文山州",
            "西双版纳傣族自治州": "西双版纳",
            "怒江傈僳族自治州": "怒江州",
            "迪庆藏族自治州" : "迪庆州",
            "昭通市":"昭通"
        }

    }
      else if(city_name =='甘肃省'){
        option_c2.series[0].nameMap= {
            "兰州市": "兰州",
            "定西市": "定西",
            "平凉市": "平凉",
            "庆阳市": "庆阳",
            "白银市": "白银",
            "甘南藏族自治州": "甘南",
            "天水市": "天水",
            "陇南市": "陇南",
            "临夏回族自治州": "临夏",
            "张掖市": "张掖",
            "金昌市": "金昌",
            "威武市":"威武",
            "酒泉市":"酒泉"
        }

    }
      else if(city_name =='青海省'){
        option_c2.series[0].nameMap= {
            "海北藏族自治州": "海北州",
            "西宁市": "西宁"
        }

    }
      else if(city_name =='新疆维吾尔自治区'){
        option_c2.series[0].nameMap= {
             "乌鲁木齐市": "乌鲁木齐",
            "克拉玛依市": "克拉玛依",
            "吐鲁番市": "吐鲁番市",
            "哈密市": "哈密",
            "昌吉回族自治州": "昌吉州",
            "博尔塔拉蒙古自治州": "博尔塔拉",
            "巴音郭楞蒙古自治州": "巴州",
            "阿克苏地区": "阿克苏地区",
            "伊犁哈萨克自治州": "伊犁州",
            "石河子市":"石河子",
            "五家渠市":"五家渠",
            "塔城地区":"塔城",
            "石河子市":"石河子"


        }

    }
      else if(city_name =='内蒙古自治区'){
        option_c2.series[0].nameMap= {
             "呼和浩特市": "呼和浩特",
            "包头市": "包头",
            "呼伦贝尔市": "呼伦贝尔",
            "乌兰察布市": "乌兰察布",
            "锡林郭勒盟": "锡林郭勒盟",
            "赤峰市": "赤峰",
            "通辽市": "通辽",
            "兴安盟": "兴安盟",
            "乌海市": "乌海",
            "巴彦淖尔市": "巴彦淖尔",
            "鄂尔多斯市": "鄂尔多斯"
        }

    }
     else if(city_name =='重庆市'){
        option_c2.series[0].nameMap= {
            "城口县":"城口县",
            "巫溪县":"巫溪县",
            "巫山县":"巫山县",
            "开州区":"开州区",
            "云阳县":"云阳县",
            "奉节县":"奉节县",
            "万州区":"万州区",
            "梁平区":"梁平区",
            "垫江县":"垫江县",
            "忠县":"忠县",
            "石柱土家族自治县": "石柱县",
            "彭水苗族土家族自治县": "彭水县",
            "秀山土家族苗族自治县": "秀山县",
            "酉阳土家族苗族自治县": "酉阳县",
            "江北区":"江北区",
            "合川区":"合川区",
            "綦江区":"綦江区",
            "长寿区":"长寿区",
            "九龙坡区":"九龙坡区",
            "渝中区":"渝中区",
            "潼南区":"潼南区",
            "渝北区":"渝北区",
            "南岸区":'南岸区',
            "丰都县":"丰都县",
            "铜梁区":"铜梁区",
            "璧山区":"璧山区",
            "荣昌区":"荣昌区",
            "武隆县":"武隆区",
        }
    }
     else {
        option_c2.series[0].nameMap= {
        }
    }
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
