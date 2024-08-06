package org.scoula.ex04.session;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/cart_save")
public class CartSaveServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String product = request.getParameter("product");

        //현재 세션을 가져옴
        HttpSession session = request.getSession();

        //속성을 가져올 땐 object로 가져오기 때문에 캐스팅이 필요하다.
        ArrayList<String> list =
                (ArrayList<String>) session
                        .getAttribute("product");
        if(list == null) {
            // list가 null일 경우 리스트를 새로 생성해서 세션에 저장.
            list = new ArrayList<String>();
            session.setAttribute("product", list);
        }

        //리스트에 새로운 상품 추가.
        list.add(product);
        out.print("<html><body>");
        out.print("Product 추가!<br>");
        out.print("<a href='session_product.jsp'>상품선택페이지</a><br>");
        out.print("<a href='cart_view'>장바구니 보기</a>");
        out.print("</body></html>");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        doGet(request, response);
    }
}
