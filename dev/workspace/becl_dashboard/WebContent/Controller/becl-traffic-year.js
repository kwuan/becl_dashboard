$(document).ready(function() {
	$("a[href='#tabs1']").click(function(){
		$(".paramYear").show();
		$(".paramMonth").hide();
		$(".paramPlaza").hide();
		
		$("#tabs-1").css({"display":"none"});
		$("#tabs-2").css({"display":"none"});
		$("#tabs-3").css({"display":"none"});
		
		var paramYear = $("#paramYear").val();
		var paramMonth = $("#paramMonth").val();
		var paramPlaza = $("#paramPlaza").val();
		var paramMonthName = $("#paramMonth option:selected").text();
		var paramPlazaName = $("#paramPlaza option:selected").text();
		
		$.ajax({
			url : "becl-traffic-year.html",
			type:"get",
			async:false,
			dataType:"html",
			success:function(data){
				$("#tabs-1").html(data).show();
			}
		});
		
		$.ajax({
			url:"../Model/Tap1/chart1_groupByPlaza.jsp",
			type:"get",
			dataType:"json",
			data:{"paramYear":$("#paramYear").val()},
			success:function(data){
//				console.log(data);
				$(".Charttext_Tap1-1").append("ปริมาณจราจรแยกตามด่าน "+paramMonthName);
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap1-1").append(htmlStr);
				}else{
					var option=[];
					option['pointLabels'] = true;
					option['pointLabelsFont']='20px';
					option['pointLabelsColor']="red";
					pieChart("Chart_Tap1-1", data, option);
				}
			}
		});
		
		$.ajax({
			url:"../Model/Tap1/chart2_Top10.jsp",
			type:"get",
			dataType:"json",
			data:{"paramYear":$("#paramYear").val()},
			success:function(data){
//				console.log(data);
				$(".Charttext_Tap1-2").append("ปริมาณจราจรตามด่าน-ช่องทาง "+paramMonthName);
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap1-2").append(htmlStr);
				}else{
					var option=[];
					option["rendererOptions"] = "{barDirection: 'horizontal'}";
					barChart("Chart_Tap1-2",data,option);
				}
			}
		});
				
		$.ajax({
			url:"../Model/Tap1/chart3_groupBymonth.jsp",
			type:"get",
			dataType:"json",
			data:{"paramYear":paramYear, "paramMonth":paramMonth},
			success:function(data){
//				console.log(data);
				$(".Charttext_Tap1-3").append("ปริมาณจราจรตามช่องทาง "+paramMonthName);
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap1-3").append(htmlStr);
				}else{
					var option=[];
					option["rendererOptions"] = "{barDirection: 'horizontal'}";
					barChart("Chart_Tap1-3",data,option);
				}
			}
		});
		
		$.ajax({
			url:"../Model/Tap1/chart4_groupBylane.jsp",
			type:"get",
			dataType:"json",
			data:{"paramYear":paramYear, "paramMonth":paramMonth, "paramPlaza":paramPlaza},
			success:function(data){
//				console.log(data);
				$(".Charttext_Tap1-4").append("ปริมาณจราจรตามช่องทาง "+paramMonthName);
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap1-4").append(htmlStr);
				}else{
					var option=[];
					option["rendererOptions"] = "{barDirection: 'horizontal'}";
					barChart("Chart_Tap1-4",data,option);
				}
			}
		});
	});
});