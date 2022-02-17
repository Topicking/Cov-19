function get_c2_data() {
    $.ajax({
        url:"/world",
        success: function(data) {
			console.log(data)
            option.series[0].data=data.confirm
            myChart.setOption(option)
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}

function changeAll() {
      document.getElementById("first").style.backgroundColor="blue";
      document.getElementById("sceond").style.backgroundColor="red";
       $.ajax({
        url:"/world",
        success: function(data) {
			option.series[0].data=data.confirm
			option.series[0].name='累计确诊人数'
            myChart.setOption(option)
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}
function changeNow() {
     document.getElementById("first").style.backgroundColor="red";
     document.getElementById("sceond").style.backgroundColor="blue";
       $.ajax({
        url:"/world",
        success: function(data) {
			option.series[0].data=data.nowconfirm

			option.series[0].name='现存确诊人数'
            myChart.setOption(option)
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}
//function changeheal() {
//   document.getElementById("first").style.backgroundColor="red";
//   document.getElementById("sceond").style.backgroundColor="red";
//   document.getElementById("third").style.backgroundColor="blue";
//     $.ajax({
//      url:"/world",
//      success: function(data) {
//			option.series[0].data=data.heal
//
//			option.series[0].name='治愈人数'
//          myChart.setOption(option)
//		},
//		error: function(xhr, type, errorThrown) {
//
//		}
//  })
//}
 function trans(){
       var boxval = $('input[type=text]').val();
       if(boxval=='')alert("您的输入为空");
       else
       window.open('../static/html/searchCountry.html?country='+boxval)
   }
get_c2_data()

setInterval(get_c2_data,100000*10)