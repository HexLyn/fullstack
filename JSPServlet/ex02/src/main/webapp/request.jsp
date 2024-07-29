<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
    <h1> 로그인 입력 화면</h1>
<%--    action에 있는 경로는 form을 제출할 때 이동할 경로, 상대경로--%>
<%--    현재 loginInfo.jsp는 이 파일과 같은 폴더에 위치한다.--%>
<%--    form의 메서드는 get, post 두가지 이고 get 사용시 뒤에 쿼리스트링이 붙는다.--%>
    <form action = "loginInfo.jsp" method="get">
        <fieldset>
            <legend> 로그인 폼</legend>
            <ul>
                <li>
                    <label for="userid">아이디</label>
                    <input type="text" name="userid" id="userid">
<%--                    id="" 를 넣어서 라벨의 빨간줄이 지워짐. 보기좋네--%>
<%--                    name은 쿼리스트링 값과 연결, id는 for와 연결.--%>
                </li>
                <li>
                    <label for="Password">비밀번호</label>
                    <input type="password" name="Password" id="Password">
<%--                    대소문자를 구분한다.--%>
                </li>
                <li>
                    <label for ="age">나이</label>
                    <input type="number" name="age" id="age">
                </li>
                <li><input type="submit" value="전송"></li>
            </ul>
        </fieldset>
    </form>
</body>
</html>
