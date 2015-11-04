<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	th.co.becl.service.connectionJNDI jndi = new th.co.becl.service.connectionJNDI();

		String query="SELECT DISTINCT BUDDHIST_CALENDAR_YEAR FROM DIM_DATE WHERE BUDDHIST_CALENDAR_YEAR <> '0' AND BUDDHIST_CALENDAR_YEAR NOT LIKE '%9999%' ORDER BY BUDDHIST_CALENDAR_YEAR DESC"; 
		String columns="1";
		
	jndi.selectByIndexDwh(query, columns);
	out.println(jndi.getData());

%> 