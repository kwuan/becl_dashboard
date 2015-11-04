$(document).ready(function() {
	$("a[href='#tabs1']").click(function(){
		$(".paramYear").show();
		$(".paramMonth").hide();
		$(".paramPlaza").hide();
		
		$.ajax({
			url : "becl-traffic-year.html",
			type:"get",
			async:false,
			datatype:"html",
			success:function(data){
				$("#tabs-1").html(data).show();
			}
		});
		
		$.ajax({
			url:"../Model/Tap1/chart1_groupByPlaza.jsp",
			type:"get",
			datatype:"json",
			data:{"paramYear":$("#paramYear").val()},
			success:function(data){
				//console.log(data);
				var dataDump = [["อโศก 1",44835],["Mikee",30000]];
				var option=[];
				option['pointLabels'] = true;
				option['pointLabelsFont']='20px';
				option['pointLabelsColor']="red";


//				option['tooltip'] = true;
				pieChart("Chart_Tap1-1", data, option);
			}
		});
	});
});