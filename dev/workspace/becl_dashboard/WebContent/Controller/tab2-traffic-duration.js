$(document).ready(function() {
	$("a[href='#tabs2']").click(function(){
		$(".paramYear").show();
		$(".paramMonth").show();
		$(".paramPlaza").show();
		
		$("#tabs-1").css({"display":"none"});
		$("#tabs-2").css({"display":"none"});
		$("#tabs-3").css({"display":"none"});
		
		var paramYear = $("#paramYear").val();
		var paramMonth = $("#paramMonth").val();
		var paramPlaza = $("#paramPlaza").val();
		var paramMonthName = $("#paramMonth option:selected").text();
		var paramPlazaName = $("#paramPlaza option:selected").text();
		
		/*Get Html append to Tab-2*/
		$.ajax({
			url : "tab2-traffic-duration.html",
			type:"get",
			async:false,
			dataType:"html",
			success:function(data){
				$("#tabs-2").empty().append(data).show();
			}
		});
		
		/*Get value and generate BarChart-1*/
		$.ajax({
			url:"../Model/Tab2/chart1_groupByDay.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"paramYear":paramYear, "paramMonth":paramMonth, "paramPlaza":paramPlaza},
			success:function(data){
				//console.log("ปริมาณจราจรจำแนกตามวัน ของ ปี "+paramYear+" เดือน "+paramMonthName);
				$("#ChartHead_Tap2-1").append("ปริมาณจราจรจำแนกตามวัน ของ เดือน "+paramMonthName+" "+paramYear);
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap2-1").append(htmlStr);
				}else{
					var option = [];
					barChart("Chart_Tap2-1",data ,option);
				}
			}
		});
		
		/*Get value and generate BarChart-2*/
		var chart2_groupByHours = function(){
			var paramDay = 8;
			$.ajax({
				url:"../Model/Tab2/chart2_groupByHours.jsp",
				type:"get",
				dataType:"json",
				async:false,
				data:{"paramYear":paramYear, "paramMonth":paramMonth, 
					"paramPlaza":paramPlaza, "paramDay":paramDay},
				success:function(data){
					//console.log(data);
					$("#ChartHead_Tap2-2").append("ปริมาณจราจรจำแนกตามชัวโมง ของ วันที่ "+paramDay+" เดือน "+paramMonth+"  ปี "+paramYear);
					if(data.length == 0){
						var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
						$("#Chart_Tap2-1").append(htmlStr);
					}else{
						//var option = [];
						//barChart("Chart_Tap2-1",data ,option);
					}
				}
			});
		};
	});
});