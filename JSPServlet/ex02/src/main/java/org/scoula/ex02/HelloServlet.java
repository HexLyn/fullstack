package org.scoula.ex02;

import java.io.*;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "MyServlet", urlPatterns = {"/xxx", "/yyy"})
public class HelloServlet extends HttpServlet {

    // 서블릿이 정상적으로 종료됐을 때 불러주는 메서드.
    @Override
    public void destroy() {
        System.out.println("call destroy");
    }

    // 서블릿 초기화 해주는 메서드
    @Override
    public void init() throws ServletException {
        System.out.println("call init");
    }

//    private String message;
//    public void init() {
//    message = "Hello World!";
//}
//    public void destroy() {
//    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException,IOException {
        response.setContentType("text/html;charset=UTF-8");
        System.out.println("Hello Servlet 요청청청");
        PrintWriter out = response.getWriter();
        out.println("<h1>Hello 한글 Servlet</h1>");
    }

}
