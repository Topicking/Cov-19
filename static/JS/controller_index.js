function changeAll() {
      document.getElementById("first").style.backgroundColor="blue";
      document.getElementById("sceond").style.backgroundColor="red";
      $.ajax({
        url:"/c2",
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
     document.getElementById("first").style.backgroundColor="blue";
      document.getElementById("sceond").style.backgroundColor="red";
       $.ajax({
        url:"/c2",
        success: function(data) {
			option.series[0].data=data.nowconfirm

			option.series[0].name='现存确诊人数'
            myChart.setOption(option)
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}
function get_c2_data() {
    $.ajax({
        url:"/c2",
        success: function(data) {
            console.log(data)
            option.series[0].data=data.confirm
            myChart.setOption(option)


		},
		error: function(xhr, type, errorThrown) {

		}
    })
}


get_c2_data()
setInterval(get_c2_data,100000*10)