<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<%--http://localhost:8080/sample/exUpload--%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
    <title>Title</title>
</head>
<body>
<%--  파일 업로드를 위해 enctype 설정 필수.--%>
  <form action="/sample/exUploadPost" method="post" enctype="multipart/form-data">
    <div>
      <input type="file" name="files">
<%--  해당 input의 name이 받아주는 곳의 메서드 매개변수 files와 연결.--%>
    </div>
    <div>
      <input type="file" name="files">
    </div>
    <div>
      <input type="file" name="files">
    </div>
    <div>
      <input type="file" name="files">
    </div>
    <div>
      <input type="file" name="files">
    </div>
    <div>
      <input type="submit">
    </div>
  </form>
</body>
</html>
