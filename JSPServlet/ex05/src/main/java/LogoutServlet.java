import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        PrintWriter out = response.getWriter();
        out.print("<html><body>");
        out.print("로그 아웃 완료!<br>");

        HttpSession session = request.getSession();
        if(session != null) {
            session.invalidate();
        } else {
            out.print("??<br>");
        }
        out.print("<a href=login_form.jsp>로그인</a>");
        out.print("</body></html>");
    }
}
