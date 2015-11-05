$(document).ready(function() {
	$("a[href='#tabs3']").click(function(){
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
		
		/*Get Html append to Tab-3*/
		$.ajax({
			url : "tap3-selling-easyPass.html",
			type:"get",
			async:false,
			dataType:"html",
			success:function(data){
				$("#tabs-3").empty().append(data).show();
			}
		});
		
		/*Get value and generate pieChart-1*/
		$.ajax({
			url:"../Model/Tab3/chart1_Sell_Years.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"paramYear":paramYear},
			success:function(data){
				//console.log(data);
				$("#Charttext_Tap3-1").append("ยอดขาย Easy Pass ย้อนหลัง 2 ปี (จำนวนบัตร)");
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap3-1").append(htmlStr);
				}else{
					var option = [];
					pieChart("Chart_Tap3-1",data ,option);
				}
			}
		});
		
		/*Get value and generate barChart-2*/
		$.ajax({
			url:"../Model/Tab3/chart2_Refill_Years.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"paramYear":paramYear},
			success:function(data){
				//console.log(data);
				$("#Charttext_Tap3-4").append("ยอดเติมเงินย้อนหลัง 2 ปี");
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap3-2").append(htmlStr);
				}else{
					var option = [];
					option['stackSeries']= true;
					BarChart("Chart_Tap3-2",data ,option);
				}
			}
		});
		
		/*Get value and generate pieChart-3*/
		$.ajax({
			url:"../Model/Tab3/chart3_Sell_Months.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"paramYear":paramYear, "paramMonth":paramMonth},
			success:function(data){
				//console.log(data);
				$("#Charttext_Tap3-3").append("ยอดขาย Easy Pass แยกตามเดือน (จำนวนบัตร)");
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap3-3").append(htmlStr);
				}else{
					var option = [];
					pieChart("Chart_Tap3-3",data ,option);
				}
			}
		});
		
		/*Get value and generate barChart-4*/
		$.ajax({
			url:"../Model/Tab3/chart4_Refill_Months.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"paramYear":paramYear, "paramMonth":paramMonth},
			success:function(data){
				//console.log(data);
				$("#Charttext_Tap3-4").append("ยอดเติมเงินรายเดือน");
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap3-4").append(htmlStr);
				}else{
					var option = [];
					option['stackSeries']= true;
					BarChart("Chart_Tap3-4",data ,option);
				}
			}
		});
		
		/*Get value and generate pieChart-5*/
		$.ajax({
			url:"../Model/Tab3/chart5_Sell_Plaza.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"paramYear":paramYear, "paramMonth":paramMonth, "paramPlaza":paramPlaza},
			success:function(data){
				//console.log(data);
				$("#Charttext_Tap3-5").append("ยอดขาย Easy Pass แยกตามด่าน (จำนวนบัตร)");
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap3-5").append(htmlStr);
				}else{
					var option = [];
					pieChart("Chart_Tap3-5",data ,option);
				}
			}
		});
		
		/*Get value and generate pieChart-3*/
		$.ajax({
			url:"../Model/Tab3/chart6_Refill_Months.jsp",
			type:"get",
			dataType:"json",
			async:false,
			data:{"paramYear":paramYear, "paramMonth":paramMonth, "paramPlaza":paramPlaza},
			success:function(data){
				//console.log(data);
				$("#Charttext_Tap3-6").append("ยอดเติมเงินแยกตามด่าน");
				if(data.length == 0){
					var htmlStr = "<h3 style=\"color:red; text-align:center;\"> No Data Found!! </h3>";
					$("#Chart_Tap3-6").append(htmlStr);
				}else{
					var option = [];
					pieChart("Chart_Tap3-6",data ,option);
				}
			}
		});
		
	});
});