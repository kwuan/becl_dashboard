<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	th.co.becl.service.connectionJNDI jndi = new th.co.becl.service.connectionJNDI();
		String paramYear = request.getParameter("paramYear");
// 		String paramPlaza = request.getParameter("paramPlaza");
			String query="SELECT DD.CALENDAR_MONTH_NO, DD.CALENDAR_MONTH_NAME, DP.PLAZA_ID, DP.PLAZA_NAME_TH, SUM(FPT.NO_OF_PASSING) SUMNO FROM FACT_PASSING_TRANS FPT "
					+"JOIN DIM_DATE DD ON DD.DATE_KEY=FPT.DATE_KEY "
					+"JOIN DIM_PLAZA DP ON FPT.PLAZA_KEY=DP.PLAZA_KEY "
					+"WHERE DD.BUDDHIST_CALENDAR_YEAR=' "+paramYear+" 'AND DP.PLAZA_ID='201' "
					+"GROUP BY DD.CALENDAR_MONTH_NO, DD.CALENDAR_MONTH_NAME,DP.PLAZA_ID, DP.PLAZA_NAME_TH "
					+"ORDER BY DD.CALENDAR_MONTH_NO ASC"; 
		String columns="2,4,5";
           
	jndi.selectByIndexDwh(query, columns);
	out.println(jndi.getData());

//  OR DP.PLAZA_ID=' "+paramMonth+"' -->
%>

