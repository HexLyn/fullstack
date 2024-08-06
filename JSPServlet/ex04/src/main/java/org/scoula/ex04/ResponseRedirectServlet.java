package org.scoula.ex04;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/response_redirect")
public class ResponseRedirectServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username= (String) request.getAttribute("username");
        String useraddress = (String) request.getAttribute("useraddress");

        request.setAttribute("username", username);
        request.setAttribute("useraddress", useraddress);

        RequestDispatcher dis = request.getRequestDispatcher("redirect_response.jsp");
        dis.forward(request, response);
    }

}
