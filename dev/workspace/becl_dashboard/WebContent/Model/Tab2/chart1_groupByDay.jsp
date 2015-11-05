<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	th.co.becl.service.connectionJNDI jndi = new th.co.becl.service.connectionJNDI();
		String paramYear = request.getParameter("paramYear");
		String paramMonth = request.getParameter("paramMonth");
		String paramPlaza = request.getParameter("paramPlaza");
		/* String paramYear = "2558";
		String paramMonth = "7";
		String paramPlaza = "201"; */
		String query="select"
				+"  dd.day_no, "
				+"  dd.calendar_month_no, "
				+"  sum(fpt.no_of_passing) no_of "
				+"from fact_passing_trans fpt, dim_date dd " 
				+"where fpt.date_key = dd.date_key "
				+"and dd.buddhist_calendar_year ='"+paramYear+"'"
				+"and dd.calendar_month_no = '"+paramMonth+"' "
				+"and exists ( "
				+"  select dp.plaza_id from dim_plaza dp " 
				+"  where fpt.plaza_key = dp.plaza_key " 
				+"  and dp.plaza_id = '"+paramPlaza+"' "
				+") "
				+"group by dd.day_no, dd.calendar_month_no "
				+"order by dd.day_no";
				
		String columns="1,2,3";
           
	jndi.selectByIndexDwh(query, columns);
	out.println(jndi.getData());
%>