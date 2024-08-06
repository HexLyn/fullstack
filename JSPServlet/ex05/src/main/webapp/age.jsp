<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<html>
<%
    Integer age = null; //지역변수
    request.setAttribute("age", 10); // request scope
%>
<head>
    <title>Title</title>
</head>
<body>
    변수 age: <%= age%> <br>
<%--    변수 age는 10이 반환.
        EL은  40반환됨.--%>
    EL age: ${age}

<%--스크립트릿<%=%>은 지역변수를 가져온다.--%>
<%--    null 설정 시 그대로 null이란 글자가 나온다.--%>

<%--EL은 작은 범위부터 타고 올라가면서 해당 값을 찾는다.--%>
<%--    page-> request-> session->application --%>
<%-- null일 경우 공백으로 처리.--%>
</body>
</html>
