<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	th.co.becl.service.connectionJNDI jndi = new th.co.becl.service.connectionJNDI();
		/* String paramYear = request.getParameter("paramYear");
		String paramMonth = request.getParameter("paramMonth");
		String paramPlaza = request.getParameter("paramPlaza");
		String paramDay = request.getParameter("paramDay"); */
		String paramYear = "2558";
		String paramMonth = "7";
		String paramPlaza = "201"; 
		String paramDay = "8";
		String query="select"
				+"  dd.day_no, dtr.time_range_key, dtr.time_range_desc, "  
				+"  sum(fpt.no_of_passing) no_of "
				+"from fact_passing_trans fpt, dim_date dd, dim_time_range dtr "
				+"where fpt.date_key = dd.date_key "
				+"and dtr.time_range_key = fpt.time_range_key "
				+"and dd.buddhist_calendar_year = '"+paramYear+"' "
				+"and dd.calendar_month_no = '"+paramMonth+"' "
				+"and dd.day_no = '"+paramDay+"' "
				+"and exists ( "
				+"  select dp.plaza_id from dim_plaza dp " 
				+"  where fpt.plaza_key = dp.plaza_key " 
				+"  and dp.plaza_id = '"+paramPlaza+"' "
				+") "
				+"group by dd.day_no, dtr.time_range_key, dtr.time_range_desc "
				+"order by dtr.time_range_key";
				
		String columns="3,4";
           
	jndi.selectByIndexDwh(query, columns);
	out.println(jndi.getData());
%>