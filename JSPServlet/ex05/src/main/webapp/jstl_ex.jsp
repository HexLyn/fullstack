<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>JSTL 테스트</h1>

<%--    directive, --%>
    <%@ include file="navbar.jsp" %>

<%--    표준 액션 태그--%>
<%--    <jsp:include page="navbar.jsp"/>--%>


    <c:if test="${role == 'ADMIN'}">관리자</c:if>
    <c:if test="${role != 'ADMIN'}">일반회원</c:if>

    <table>
      <c:forEach var="member" items="${members}" varStatus="state">
        <tr>
          <td>${state.index}</td>
          <td>${member.name}</td>
          <td>${member.userid}</td>
        </tr>
      </c:forEach>
    </table>

    ${today}<br>
    <fmt:formatDate value="${today}" type="date"/><br>
    <fmt:formatDate value="${today}" type="time"/><br>
    <fmt:formatDate value="${today}" type="both"/><br>
    <fmt:formatDate value="${today}" type="both" dateStyle="short" timeStyle="long"/><br>
    <fmt:formatDate value="${today}" type="both" dateStyle="long" timeStyle="short"/><br>
    <fmt:formatDate value="${today}" pattern="YYYY-MM-dd HH:mm:ss"/><br>
    <fmt:formatDate value="${today}" pattern="YYYY-MM-dd a hh:mm:ss"/><br>
</body>
</html>
