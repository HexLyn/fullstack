package org.scoula.ex04;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;

@WebServlet("/req")
public class RequestServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req,
                         HttpServletResponse response)
            throws ServletException, IOException {
        req.setAttribute("username", "홍길동");
        req.setAttribute("useraddress", "서울");

        RequestDispatcher dis = req.getRequestDispatcher("/response.jsp");
        dis.forward(req, response);
    }
}
