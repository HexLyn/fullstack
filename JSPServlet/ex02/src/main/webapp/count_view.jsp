<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
    <h1> 방문자 수 조회하기 화면</h1>
    <%
        int count = (Integer)application.getAttribute("countValue");
//   getAttribute로 다른 jsp에서 설정한 값도 가져올 수 있다.
    %>
현재까지 총 방문자 수: <%= count%>
</body>
</html>
