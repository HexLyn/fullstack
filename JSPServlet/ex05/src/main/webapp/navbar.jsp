<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<hr>
<%--세션 쪽에 user정보 넣어줘야 user값 받아오기 가능--%>
<%--user값이 null이라면 로그인, 회원가입 화면 보여주기.--%>
<c:if test="${empty user}">
    <a href="login_form.jsp">로그인</a> | <a href="#">회원가입</a>
</c:if>
<c:if test="${!empty user}">
    ${user.name} | <a href="logout">로그아웃</a>
</c:if>
<hr>
