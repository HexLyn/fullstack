package org.scoula.ex04.cookie;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/cart_save_cookie")
public class CartSaveCookieServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String product = request.getParameter("product");

        // request에서 모든 쿠키를 가져온다.
        Cookie [] cookies = request.getCookies();
        Cookie c = null;
        if(cookies == null || cookies.length == 0) {
            // 쿠키가 하나도 없다면 생성한다.
            c = new Cookie("product", product);
        } else {
            // 쿠키가 있다면 쿠키의 길이로 인덱스를 넣어준다.
            c = new Cookie("product"+(cookies.length+1), product);
        }

//        쿠키의 유효기간 설정 메서드, 이 메서드가 있다면 os파일에 쿠키가 저장됨.
        // 이 메서드를 명시하지 않으면 쿠키는 메모리에 저장됨.
//        c.setMaxAge(60*60);

        response.addCookie(c);

        out.print("<html><body>");
        out.print("Product 추가!!!<br>");
        out.print("<a href='cookie_product.jsp'>상품선택페이지</a><br>");
        out.print("<a href='cart_view_cookie'>장바구니 보기</a>");
        out.print("</body></html>");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        doGet(request, response);
    }
}
