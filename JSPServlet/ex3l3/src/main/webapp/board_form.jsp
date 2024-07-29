<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<h1>getParameterNams 실습</h1>
<br action="board" method="post">
    <input type="hidden" name="action" value="write">
    제목: <input type="text" name="title"></br>
    작성자: <input type="text" name="author"></br>
    내용: <textarea name="content" rows="10"></textarea></br>
    <input type="submit" value="저장">
</form>

</body>
</html>