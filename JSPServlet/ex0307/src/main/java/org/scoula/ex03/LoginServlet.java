package org.scoula.ex03;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
//    get메서드로 보낸 데이터를 받아오기 위해 doGet 메서드 사용
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //        요청에서 파라미터 얻기
        String userid = request.getParameter("userid");
        String passwd = request.getParameter("passwd");

        //            응답 내보내기
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.print("<html><body>");
            out.print("아이디 값: " + userid + "<br>");
            out.print("비밀번호 값: " + passwd + "<br>");
            out.print("</body></html>");
        }
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        doGet(request, response);
    }
}
