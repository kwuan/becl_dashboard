<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	th.co.becl.service.connectionJNDI jndi = new th.co.becl.service.connectionJNDI();

		String query="SELECT PLAZA_ID,PLAZA_NAME_EN,PLAZA_NAME_TH FROM DIM_PLAZA WHERE PLAZA_ID <> '1' AND PLAZA_ID <>'99' ORDER BY PLAZA_ID ASC"; 
		String columns="1,2,3";
           
	jndi.selectByIndexDwh(query, columns);
	out.println(jndi.getData());
%>