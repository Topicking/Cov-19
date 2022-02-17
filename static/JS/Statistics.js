// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'),'dark');

// 指定图表的配置项和数据
var datelist = ['2月24日','2月28日',
'3月1日','3月4日','3月12日','3月16日','3月20日','3月24日','3月28日',
'4月1日','4月4日','4月12日','4月16日','4月20日','4月24日','4月28日',
'5月1日','5月5日','5月9日','5月13日','5月17日','5月21日','5月24日'];
var countryList = ['USA','China','Spanish','Germany','UK','France','Italy','lran','Russian','turky'];
//国旗图片的引用
var flagIcons = {
    'usa': '../imgs/usa.png',
    'chn': '../imgs/chn.png',
    'spa': '../imgs/spa.png',
    'ger': '../imgs/ger.png',
    'tur': '../imgs/gbr.png',
    'fra': '../imgs/fra.png',
    'ita': '../imgs/ita.png',
    'uk': '../imgs/uk.png',
    'rus': '../imgs/rus.png',
    'lran': '../imgs/lran.png',
    'tur': '../imgs/tur.png'
};
var option = {
	//时间轴
    timeline:{
        axisType: 'category',
        autoPlay: false,
        playInterval: 1500,
        data: datelist,
        label:{
            fontSize: 18
        }
    },
    baseOption:{
        dataset:{
            source:[
					['date','USA','China','Spanish','Germany','UK','France','Italy','lran','Russian','turky'],
					['2月24日',35,77779,2,16,13,12,230,61,2,0],
					['2月28日',60,79389,25,48,16,300,653,270,2,0],
					['3月1日',63,80174,58,117,35,100,1128,978,5,0],
					['3月4日',122,80565,151,240,51,212,2502,2922,6,0],
					['3月8日',445,80904,516,847,206,949,5883,6566,10,0],
					['3月12日',1004,81003,2968,2078,460,2281,12462,10075,28,1],
					['3月16日',3700,81099,9191,6671,1543,5423,24938,14991,63,18],
					['3月20日',14250,81385,19980,15439,3269,10995,41035,19644,253,359],
					['3月24日',46450,81806,39673,30138,6650,19856,64378,24811,495,1529],
					['3月28日',105470,82282,72248,52802,17089,33414,87275,35408,1264,5698],
					['4月1日',189633,82691,102136,67366,29474,52128,105792,47593,2777,13531],
					['4月4日',278537,82899,124736,85778,41903,64338,120281,55743,4731,20921],
					['4月8日',399979,83189,146690,103228,55242,78167,135893,67286,8672,34109],
					['4月12日',530830,83523,166019,120479,84279,93790,152860,71686,15770,52167],
					['4月16日',640014,83799,182816,130450,103093,106206,165155,77995,27938,69392],
					['4月20日',760570,84239,200210,141672,124743,112606,178972,83505,47121,86306],
					['4月24日',870468,84313,219764,150383,143464,120804,192994,88194,68622,101790],
					['4月28日',989357,84367,210773,156337,157149,128339,199414,92584,93558,112261],
					['5月1日',1070032,84387,215216,160758,171253,129581,205463,95646,114431,120204],
					['5月5日',1181885,84404,219329,163860,211364,131863,211938,99970,155370,127659],
					['5月9日',1286833,84416,223578,168551,190584,138421,217185,106220,198676,135569],
					['5月13日',1371395,84461,228691,171306,229705,140227,221216,112725,242271,141475],
					['5月17日',1470199,84487,231350,174355,240161,142291,224760,120198,281752,148067],
					['5月21日',1528568,84506,232037,176007,248818,143427,226699,124603,308705,151615],
					['5月24日',1626258,84525,235772,178281,257154,144806,229327,135701,344481,155686]
								  
			]
        },
		
        title: {
            text: '4月24日世界各国累计确诊人数',
            left: 'center',
            textStyle:{
                fontSize:24
            }
        },
        tooltip: {
            trigger: 'axis'
        },
     /*   toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        legend: {                
        },      */         
        grid: {
            left: '10%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: [
            {
            type:'category',
            data: countryList,
            axisPointer: {
            type: 'shadow'
            },
            
            axisLabel: {
                formatter: function (value) {
                    return '{' + value + '| }\n{value|' + value + '}';
                },
                margin: 20,
                rich: {
                    value: {
                        lineHeight: 30,
                        fontSize: 18,
                        align: 'center'
                    },
                    
              	USA: {
                   height: 40,
                     align: 'center',
                     backgroundColor: {
                         image: flagIcons.usa
                     }
                 },
                 China: {
                     height: 40,
                     align: 'center',
                     backgroundColor: {
                         image: flagIcons.chn
                     }
                 },
                 Spanish: {
                     height: 40,
                     align: 'center',
                     backgroundColor: {
                         image: flagIcons.spa
                     }
                 },
                 Germany: {
                     height: 40,
                     align: 'center',
                     backgroundColor: {
                         image: flagIcons.ger
                     }
                 },
                 UK: {
                     height: 40,
                     align: 'center',
                     backgroundColor: {
                         image: flagIcons.uk
                     }
                 },
                 France: {
                     height: 40,
                     align: 'center',
                     backgroundColor: {
                         image: flagIcons.fra
                     }
                 },
                 Italy: {
                     height: 40,
                     align: 'center',
                     backgroundColor: {
                         image: flagIcons.ita
                     }
                 },
                 lran: {
                     height: 40,
                     align: 'center',
                     backgroundColor: {
                         image: flagIcons.lran
                     }
                 },
				 Russian: {
				       height: 40,
				       align: 'center',
				       backgroundColor: {
				           image: flagIcons.rus
				       }
				   },
					 turky: {
					       height: 40,
					       align: 'center',
					       backgroundColor: {
					           image: flagIcons.tur
					       }
					   }, 
                }
            } 
            
            },
        ],
        yAxis:[ 
            {
            name:'人数',
            type:'value',
            nameTextStyle:{
                fontSize:18
            },
            axisLabel:{
                fontSize:18
            }
            },                
        ],
        series: [                
            {
            //name: 'date',
            type: 'bar',
            seriesLayoutBy: 'row',
            itemStyle: {
           		color:'#c23531'
	        },
            encode:{
                x:'date',
                y:'4月23日'
            }
            },
        ]
    },
    options:[]

};
for (var n = 0; n<datelist.length; n++){
    option.options.push({
        title:{
            show:true,
            text:datelist[n]+'世界累计确诊人数',
            left: 'center',
            textStyle:{
                fontSize:24
            }
        },
        series:[
            {
            type: 'bar',
            seriesLayoutBy: 'row',
            encode:{
                x:'date',
                y:datelist[n]
            }
            },
        ]
    });
};
console.log(option.baseOption.series)
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;
