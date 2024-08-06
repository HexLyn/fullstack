<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<html>
<head>
    <title>Title</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            background-color: #121212;
            color: #f0f0f0;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        h1 {
            color: #FFD700;
            font-size: 2.5em;
            text-align: center;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        .container {
            width: 80%;
            max-width: 800px;
            background-color: #1f1f1f;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        }

        table {
            width: 100%;
            margin-bottom: 20px;
        }

        table, th, td {
            border-collapse: collapse;
        }

        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #444;
        }

        th {
            background-color: #2b2b2b;
            color: #FFD700;
            font-size: 1.2em;
        }

        tr:hover {
            background-color: #333;
        }

        a {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 0;
            text-decoration: none;
            color: #FFD700;
            background-color: #444;
            border-radius: 4px;
            text-align: center;
            transition: background-color 0.3s;
        }

        a:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <h1>새 Todo 생성</h1>
    <form method="POST">
        <div>
            제목: <input type="text" name="title"><br>
            내용: <textarea name="content" rows="10"></textarea>
        </div>
        <input type="submit">
    </form>
</body>
</html>
