package org.scoula.demo;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    private String message;

    @Override
    public void init() throws ServletException {
        message = "Home";
        System.out.println("init call");
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setContentType("text/html; charset=UTF-8");
        //한글 깨짐 방지

        System.out.println("request HelloServlet");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
//        out.println("<h1>Hello Servlet!</h1>");
        out.println("<h1>" + message + "</h1>");
        out.println("<a href=/>home</a>");
        out.println("<a href=\"/\">한글만세\\use<a>");
        out.println("</body></html>");

        // Hello
//        PrintWriter out = response.getWriter();
//        out.println("<html><body>");
//
//        out.println("</body></html>");
    }

    @Override
    public void destroy() {
        System.out.println("destroy call");
    }
}