
<%@ page contentType="text/html;charset=UTF-8" errorPage="error.jsp" %>
<%--에러가 발생했을 경우 error.jsp 페이지 호출, errorPage 속성에 명시--%>

<!DOCTYPE>
<html lang="ko">
<head>
    <title>Exception 실습</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
    <%
        int n= 4/0;
    %>
</body>
</html>
