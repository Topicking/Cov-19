
function get_all_data() {
    $.ajax({
        url:"/countryname",
        success: function(data) {
            let a=[];
            let i=0;
            a = data.country
            a.forEach(v=>{
                i++;
                let str = v[0];
                var div = document.createElement("div");
                div.id = "c"+String(i);
                div.style.position = "relative";
                div.style.top = "80px"
                div.style.height = "550px";
                div.style.width = "48%";
                div.style.cssFloat = "left";
                div.style.padding = "50px 30px";
                div.color = "green";
                div.innerHTML = "Javascript DIV";
                document.body.appendChild(div);

            });
		},
		error: function(xhr, type, errorThrown) {

		}
    })
}

get_all_data()
