<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.Calendar" %>

    <%
        Calendar cal = Calendar.getInstance();
        int hour = cal.get(Calendar.HOUR_OF_DAY);
        int min = cal.get(Calendar.MINUTE);
        int sec = cal.get(Calendar.SECOND);
    %>
현재 시각은 <%=hour%> 시 <%= min%> 분 <%= sec%> 초 입니다.
