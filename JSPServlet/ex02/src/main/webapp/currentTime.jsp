<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.Date"%>
<html>
<head>
    <title>스크립트릿 실습</title>
</head>
<body>
<h1>현재 날짜 출력 실습</h1>
<%
    Date d = new Date();
    int sum = 0;
    for(int i=0; i<10; i++) {
        sum += i;
    }
    Date d2 = null;
%>
현재 날짜 : <%= d%> <br>
1~10의 합 : <%= sum %> <br>
<%--<%= d2%>--%>
<% if(d2!=null) {%>
    <%= d2%>
<%}%>
</body>
</html>
