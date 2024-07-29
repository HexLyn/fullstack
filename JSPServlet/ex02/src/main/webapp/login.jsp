<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<body>
    <h1> 로그인 정보 세션 저장</h1>
    <%
        String id = request.getParameter("userid");
        if (id == null) {
            response.sendRedirect("loginForm.html");
        } else {
            String pw = request.getParameter("Password");
            session.setAttribute("userid", id);
            session.setAttribute("password", pw);
            out.print("하이, " + id + "</br>");
            out.print("<a href='loginInfo2.jsp'>정보보기</a>");
        }
    %>
</body>
</html>
