<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	th.co.becl.service.connectionJNDI jndi = new th.co.becl.service.connectionJNDI();

		String query="SELECT DISTINCT CALENDAR_MONTH_NO , CALENDAR_MONTH_NAME FROM DIM_DATE WHERE CALENDAR_MONTH_NO <> '0' ORDER BY CALENDAR_MONTH_NO DESC"; 
		String columns="1,2";
           
	jndi.selectByIndexDwh(query, columns);
	out.println(jndi.getData());
%>