<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>include 액션 실습</title>
</head>
<body>
    <h1>include 액션 태그 실습</h1>
    현재 시간을 구하는 예제입니다. 다음 줄에 삽입됩니다. <br>
    <jsp:include page="header.jsp" flush="true"/>
<%--header.jsp를 가져와 해당 부분에 동적으로 삽입.--%>
<%--flush는 현재 페이지의 버퍼를 비워준다.--%>
</body>
</html>
