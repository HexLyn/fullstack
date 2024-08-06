<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>Title</title>
</head>
<body>
<%--response에서 브라우저를 열면 값을 받아올 수 없으니 null이 나온다.--%>
<%-- RequestServlet의 값을 받고 싶으면 해당 파일에 지정한 경로, /req로 가면 나온다.--%>
    username 값: <%=request.getAttribute("username") %><br>
    useraddress 값: <%=request.getAttribute("useraddress") %><br>
</body>
</html>
