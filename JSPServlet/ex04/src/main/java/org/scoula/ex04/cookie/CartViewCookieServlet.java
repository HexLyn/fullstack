package org.scoula.ex04.cookie;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/cart_view_cookie")
public class CartViewCookieServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.print("<html><body>");
        out.print("장바구니 리스트<br>");

        Cookie [] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie c : cookies) {
//                각 쿠키의 이름과 값을 출력.
                out.print(c.getName() + "=" + c.getValue() + "<br>");
            }
        } else {
            out.print("장바구니 비었음<br>");
        }
        out.print("<a href='cookie_product.jsp'>상품선택페이지</a><br>");
        out.print("<a href='cart_delete_cookie'>장바구니 비우기</a>");
        out.print("</body></html>");

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        doGet(request, response);
    }
}
