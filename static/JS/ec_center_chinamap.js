
var myChart = echarts.init(document.getElementById('c2'), "dark");

var mydata = [{"name": '北京' , value: 84303},{"name": '广西' , value: 842629}]


var option = {
    title: {
        text: '',
        subtext: '',
        x: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var res = params.name + '<br/>';
            var myseries = option.series;
            for (var i = 0; i < myseries.length; i++) {
                for (var j = 0; j < myseries[i].data.length; j++) {
                    if (myseries[i].data[j].name == params.name) {
                        res += myseries[i].name + ' : ' + myseries[i].data[j].value + '</br>';
                    }
                }
            }
            return res;
        }
    },
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
            color: 'white'
        },
        splitList: [
            {start: 0, end: 0},
            {start: 1, end: 99},
            {start: 100, end: 999},
            {start: 1000, end: 9999},
            {start: 10000, end: 99999},
            {start: 100000}],
        color: ['#891830', '#CE445B', '#EB7778', '#F6BABA', '#FDE9E7', '#FFF9F6']
    },
    //配置属性
    series: [
        {
            name: '累计确诊人数',
            type: 'map',
            mapType: 'china',
            roam: true, //拖动和缩放
            data: [],
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
                    //fontSize: 8,
                },
                emphasis: {
                    show: true,
                    //fontSize: 8,
                }
            }//mydata //数据
        }
    ]
};
myChart.setOption(option);
window.onresize = myChart.resize;
// 处理点击事件并且跳转到相应的省份地图
myChart.on('click', function (params) {
    // 控制台打印数据的名称
    console.log(params.name);
    // if (params.dataType === '安徽') {
    //     window.open('../templates/anhui.html')
    // }
     if(params.name =='安徽'){
       window.open('../../static/html/china_province.html?province=安徽省')
    }else if(params.name =='辽宁'){
       window.open('../../static/html/china_province.html?province=辽宁省')
    }else if (params.name =='河北'){
        window.open('../../static/html/china_province.html?province=河北省')
    }else if(params.name =='山西'){
        window.open('../../static/html/china_province.html?province=山西省')
    }else if(params.name =='吉林'){
        window.open('../../static/html/china_province.html?province=吉林省')
    }else if(params.name =='黑龙江'){
        window.open('../../static/html/china_province.html?province=黑龙江省')
    }else if(params.name =='江苏'){
        window.open('../../static/html/china_province.html?province=江苏省')
    }else if(params.name =='浙江'){
        window.open('../../static/html/china_province.html?province=浙江省')
    }else if(params.name =='福建'){
        window.open('../../static/html/china_province.html?province=福建省')
    }else if(params.name =='江西'){
        window.open('../../static/html/china_province.html?province=江西省')
    }else if(params.name =='山东'){
        window.open('../../static/html/china_province.html?province=山东省')
    }else if(params.name =='河南'){
        window.open('../../static/html/china_province.html?province=河南省')
    }else if(params.name =='湖北'){
        window.open('../../static/html/china_province.html?province=湖北省')
    }else if(params.name =='湖南'){
        window.open('../../static/html/china_province.html?province=湖南省')
    }else if(params.name =='广东'){
        window.open('../../static/html/china_province.html?province=广东省')
    }else if(params.name =='海南'){
        window.open('../../static/html/china_province.html?province=海南省')
    }else if(params.name =='四川'){
        window.open('../../static/html/china_province.html?province=四川省')
    }else if(params.name =='贵州'){
        window.open('../../static/html/china_province.html?province=贵州省')
    }else if(params.name =='云南'){
        window.open('../../static/html/china_province.html?province=云南省')
    }else if(params.name =='陕西'){
        window.open('../../static/html/china_province.html?province=陕西省')
    }else if(params.name =='甘肃'){
       window.open('../../static/html/china_province.html?province=甘肃省')
    }else if(params.name =='青海'){
        window.open('../../static/html/china_province.html?province=青海省')
    }else if(params.name =='台湾'){
        window.open('../../static/html/china_province.html?province=台湾')
    }else if(params.name =='北京'){
        window.open('../../static/html/china_province.html?province=北京市')
    }else if(params.name =='上海'){
        window.open('../../static/html/china_province.html?province=上海市')
    }else if(params.name =='重庆'){
        window.open('../../static/html/china_province.html?province=重庆市')
    }else if(params.name =='天津'){
        window.open('../../static/html/china_province.html?province=天津市')
    }else if(params.name =='广西'){
        window.open('../../static/html/china_province.html?province=广西壮族自治区')
    }else if(params.name =='宁夏'){
        window.open('../../static/html/china_province.html?province=宁夏回族自治区')
    }else if(params.name =='西藏'){
        window.open('../../static/html/china_province.html?province=西藏自治区')
    }else if(params.name =='新疆'){
        window.open('../../static/html/china_province.html?province=新疆维吾尔自治区')
    }else if(params.name =='内蒙古'){
        window.open('../../static/html/china_province.html?province=内蒙古自治区')
    }else if(params.name =='香港'){
        window.open('../../static/html/china_province.html?province=香港')
    }else if(params.name =='澳门'){
        window.open('../../static/html/china_province.html?province=澳门')
    }
});