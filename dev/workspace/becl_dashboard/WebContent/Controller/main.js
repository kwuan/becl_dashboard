function formatNumber(num) {
	if (num == null) {
		num = 0;
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	} else {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	}
}

$(document)
		.ready(
				function() {
					$('.subnav').affix({
						offset : {
							top : $('.navtop').height()
						}
					})

					$(".paramYear .input-group").show();
//				 	$(".paramMonth .input-group").hide();
//				 	$(".paramPlaza .input-group").hide();

					$(".paramYear").show();
					$(".paramMonth").show();
//					$(".paramNull").hide();
					
//					$(".paramPlaza").hide();
//					$(".paramNull2").show();

					// Get User Pentaho
					function cerateParamUser() {
						$.ajax({
							url : "../Model/Parameter/paramUser.jsp",
							type : "get",
							dataType : "json",
							async : false,
							success : function(data) {
								var htmlParamUser = data;

								// htmlParamYear = indexEntry[0];

								$("#UserID").html(htmlParamUser); // id for
																	// Index.html

							}
						});
					}
					// cerateParamUser();
					// Get User Pentaho

					// start paramYear
					function cerateParamYear() {
						$
								.ajax({
									url : "../Model/paramYear.jsp",
									type : "get",
									dataType : "json",
									async : false,
									success : function(data) {
										var htmlParamYear = "";
										// htmlParamYear
										htmlParamYear += "<select class=\"selectpicker form-control\" data-live-search=\"true\" id=\"paramYear\" style=\"font-family:TH SarabunIT๙;font-size: 24px;padding:0px 12px;\" >";
										// loop [json]data into <option>
										$
												.each(
														data,
														function(index,
																indexEntry) {
															// alert(index+":"+indexEntry[0]);
															if (index == 0) {
																htmlParamYear += "<option selected=\"selected\">";
																htmlParamYear += indexEntry[0];
																htmlParamYear += "</option>";
															} else {
																htmlParamYear += "<option>";
																htmlParamYear += indexEntry;
																htmlParamYear += "</option>";
															}
														});
										htmlParamYear += "</select>";
										$("#paramYearList").html(htmlParamYear); 
										// id
										// for																					
										// Index.html
										// $("#paramYear").kendoDropDownList();
										// // value
										// cerateParamMonth($("#paramYear").val());

									}
								});
					}
					cerateParamYear();
					// end paramYear

					// start paramMonth
					function cerateParamMonth(paramYear) {
						$
								.ajax({
									url : "../Model/paramMonth.jsp",
									type : "get",
									dataType : "json",
									data : {
										"paramYear" : $("#paramYear").val()
									},
									async : false,
									success : function(data) {
										var htmlParamMonth = "";
										// htmlParamYear
										htmlParamMonth += "<select class=\"selectpicker form-control\" data-live-search=\"true\" id=\"paramMonth\" style=\"font-family:TH SarabunIT๙;font-size: 22px;padding:0px 12px;\" >";
										// loop [json]data into <option>
										$
												.each(
														data,
														function(index,
																indexEntry) {
															if (index == 0) {
																htmlParamMonth += "<option selected=\"selected\" value=\" "
																		+ indexEntry[0]
																		+ " \" >";
																htmlParamMonth += indexEntry[1];
																htmlParamMonth += "</option>";
															} else {
																htmlParamMonth += "<option value=\" "
																		+ indexEntry[0]
																		+ " \">";
																htmlParamMonth += indexEntry[1];
																htmlParamMonth += "</option>";
															}
														});
										htmlParamMonth += "</select>";
										$("#paramMonthList").html(
												htmlParamMonth); // id for
																	// Index.html

									}
								});
					}
					cerateParamMonth(paramYear);
					// end paramMonth

					// start paramPlaza พารามิเตอร์=>ด่าน
					function cerateParamPlaza(paramMonth) {
						$
								.ajax({
									url : "../Model/paramPlaza.jsp",
									type : "get",
									dataType : "json",
									// data:{"paramMonth":$("#paramMonth").val()},
									async : false,
									success : function(data) {
										var htmlParamPlaza = "";
										htmlParamPlaza += "<select class=\"selectpicker form-control\" data-live-search=\"true\" id=\"paramPlaza\" style=\"font-family:TH SarabunIT๙;font-size: 22px;padding:0px 12px;\" >";
										// loop [json]data into <option>
										$
												.each(
														data,
														function(index,
																indexEntry) {
															if (index == 0) {
																htmlParamPlaza += "<option selected=\"selected\" value=\" "
																		+ indexEntry[0]
																		+ " \" >";
																htmlParamPlaza += indexEntry[2];
																htmlParamPlaza += "</option>";
															} else {
																htmlParamPlaza += "<option value=\" "
																		+ indexEntry[0]
																		+ " \">";
																htmlParamPlaza += indexEntry[2];
																htmlParamPlaza += "</option>";
															}
														});
										htmlParamPlaza += "</select>";
										$("#paramPlazaList").html(
												htmlParamPlaza); // id for
																	// Index.html
									}
								});
					}
					cerateParamPlaza(paramMonth);
					// end paramPlaza
				});