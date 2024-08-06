package org.scoula.dynamicweb;

import org.scoula.ex05.command.Command;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

// WebServlet 어노테이션 붙이지 않는다.
// 자식이 붙이는 것, 부모클래스는 붙이지 않는다.
public class DispatcherServlet extends HttpServlet {
    Map<String, Command> getMap; //GET요청이 들어올 시 사용할 맵
    Map<String, Command> postMap; // POST요청이 들어올 시 사용할 맵.

    String prefix = "/WEB-INF/views/";
    String suffix = ".jsp";

// 서블릿 초기화 메서드
    public void init() {
//        MAP은 인터페이스이므로 구현 클래스인 HashMap으로 객체 생성.
        getMap = new HashMap<>();
        postMap = new HashMap<>();
        createMap(getMap, postMap);
    }

    protected void createMap(Map<String, Command> map,
                             Map<String, Command> postMap) {

    }

    // 아래 메서드는 다른 프로젝트에서도 동일하게 작동.
    public void execute(Command command, HttpServletRequest request,
                        HttpServletResponse response)
            throws IOException, ServletException {

//       커맨드의 실행결과는 jsp 의 이름으로 받아옴.
        String viewName = command.execute(request, response);
        if(viewName.startsWith("redirect:")) {
//            redirect로 처리할 경우 view의 경로에서
//            "redirect"를 제외하고 띄운다.
            response.sendRedirect(viewName.substring
                    (
                            "redirect:".length()
                    )
            );
        } else {
//            forward로 처리할 경우
            String view = prefix + viewName + suffix;
//            가지고 온 viewName에
//            /WEB-INF/views/와 .jsp를 붙여준다.
            RequestDispatcher dis = request.getRequestDispatcher(view);
            dis.forward(request, response);
        }
    }

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws ServletException, IOException {

        Command command = getCommand(request);
        if (command != null) {
            execute(command, request, response);
        } else {
            // 없는 페이지일 경우, 만들어둔 404.jsp 페이지로 처리한다.
            String view = prefix + "404" + suffix;
            RequestDispatcher dis = request.getRequestDispatcher(view);
            dis.forward(request, response);
        }

//        forward : 화면을 띄워줌.
        // redirect

    }

    public void doPost(HttpServletRequest request,
                       HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

    private String getCommandName(HttpServletRequest request) {
        String requestURI = request.getRequestURI();
        String contextPath = request.getContextPath();
        return requestURI.substring(contextPath.length());
        // requestURI에서 contextPath 길이만큼 앞의 글자를 지운다.
    }

    private Command getCommand(HttpServletRequest request) {
        String commandName = getCommandName(request);
        Command command;

//        equalsIgnoreCase("GET") : "get"이라는 단어와 대소문자 구분없이 비교
//        request에서 받아온 메소드가 GET이면 getMap에서 커맨드 찾기
        if(request.getMethod().equalsIgnoreCase("GET")) {
            command = getMap.get(commandName);
        } else {
            // request에서 받아온 메소드가 POST면 postMap에서 커맨드 찾기.
            command = postMap.get(commandName);
        }
        return command;
    }
}
