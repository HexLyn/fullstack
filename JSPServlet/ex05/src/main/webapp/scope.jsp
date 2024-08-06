<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>데이터 보기</h1>
<%--    각 스코프들을 돌면서 scopeName에 저장해둔 값을 가져온다.--%>
    pageScope의 속성값은: ${pageScope.scopeName}<br>
    requestScope의 속성값은: ${requestScope.scopeName}<br>
    sessionScope 속성값은: ${sessionScope.scopeName}<br>
    applicationScope 속성값은: ${applicationScope.scopeName}<br>

    scopeName 자동 찾기: ${scopeName}<br>
    member: ${member.name}(${member.userid})<br>
</body>
</html>
