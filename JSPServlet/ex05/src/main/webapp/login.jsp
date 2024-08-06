<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<body>
    <h1>EL 실습</h1>
    사용자 아이디: ${userid}<br>
    사용자 비밀번호: ${passwd}<br>

<%--    map이나 자바빈으로 접근할 때에는 .으로 안쪽 프로퍼티 사용 가능.--%>
<%--    name을 접근할 때에는 getName() 함수를 이용해서 접근한다.--%>
    사용자 정보: ${login.name}/${login.passwd}
    <%@ include file="navbar.jsp" %>
</body>
</html>
