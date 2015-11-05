<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	th.co.becl.service.connectionJNDI jndi = new th.co.becl.service.connectionJNDI();
		String paramYear = request.getParameter("paramYear");
			String query="SELECT * FROM "
					  	+"(SELECT DP.PLAZA_ID, DP.PLAZA_NAME_TH, FPT.LANE_ID, SUM(FPT.NO_OF_PASSING) SUMNO FROM FACT_PASSING_TRANS FPT "
						+"JOIN DIM_PLAZA DP ON DP.PLAZA_KEY=FPT.PLAZA_KEY "
						+"JOIN DIM_DATE DD ON DD.DATE_KEY=FPT.DATE_KEY "
						+"WHERE DD.BUDDHIST_CALENDAR_YEAR = ' "+paramYear+"' "
						+"GROUP BY DP.PLAZA_ID, DP.PLAZA_NAME_TH, FPT.LANE_ID "
						+"ORDER BY SUMNO DESC) "
						+"WHERE ROWNUM <= 10"; 
		String columns="2,3,4";
           
	jndi.selectByIndexDwh(query, columns);
	out.println(jndi.getData());
%>