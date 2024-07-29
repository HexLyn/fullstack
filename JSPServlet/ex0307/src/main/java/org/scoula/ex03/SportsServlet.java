package org.scoula.ex03;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/sports")
// 경로를 sports로 설정
public class SportsServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");

        String[] sports = request.getParameterValues("sports");
//        sports에 저장된 값이 여러개일 수 있으므로,
//        getParameterValues를 이용해 배열로 받아온다.
        String sex = request.getParameter("sex");

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.print("좋아하는 운동: ");

        //체크된 값들을 돌면서 하나씩 출력한다.
        for(String sport : sports) {
            out.print( sport + " ");
        }
        // 라디오 값(성별)은 무조건 택1이므로 for문 처리 불필요.
        out.print("<br> 성별: " + sex + "<br>");
        out.print("</body></html>");
    }
}
