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
  <form action="/sample/exUploadPost" method="post" enctype="multipart/form-data">
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
      <input type="file" name="files">
    </div>
    <div>
      <input type="submit">
    </div>
  </form>
</body>
</html>
