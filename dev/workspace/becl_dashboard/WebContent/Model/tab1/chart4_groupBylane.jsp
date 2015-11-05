<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	th.co.becl.service.connectionJNDI jndi = new th.co.becl.service.connectionJNDI();
		String paramYear = request.getParameter("paramYear");
// 		String paramPlaza = request.getParameter("paramPlaza");
// 		String paramMonth = request.getParameter("paramMonth");
			String query="SELECT fpt.lane_id, sum(fpt.no_of_passing), dd.calendar_month_no FROM fact_passing_trans fpt "
					+"join dim_date dd on dd.date_key=fpt.date_key "
					+"join dim_plaza dp on dp.plaza_key=fpt.plaza_key "
					+"where dd.buddhist_calendar_year=' "+paramYear+"' and dd.calendar_month_no='7' and dp.plaza_id='201' "
					+"group by fpt.lane_id,dd.calendar_month_no "
					+"order by  fpt.lane_id ASC"; 
		String columns="1,3,2";
           
	jndi.selectByIndexDwh(query, columns);
	out.println(jndi.getData());

%>