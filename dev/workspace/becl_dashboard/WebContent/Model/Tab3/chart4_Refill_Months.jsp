<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	th.co.becl.service.connectionJNDI jndi = new th.co.becl.service.connectionJNDI();
		/* String paramYear = request.getParameter("paramYear");
		String paramMonth = request.getParameter("paramMonth");*/
		String paramYear = "2558";
		String paramMonth = "7";
		String query="";
				
		String columns="";
           
	jndi.selectByIndexDwh(query, columns);
	out.println(jndi.getData());
%>