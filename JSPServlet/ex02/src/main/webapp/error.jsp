<%@ page contentType="text/html;charset=UTF-8" isErrorPage="true" %>
<%--isErrorPage 속성을 true로 줘, 해당 페이지가 예외 처리 페이지임을 명시.--%>

<!DOCTYPE>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Title</title>
</head>
<body>
    <h1> divide.jsp 발생된 예외를 처리하는 페이지</h1>
    <%
        out.print("발생된 예외는 " + exception.getMessage());
    %>
</body>
</html>
