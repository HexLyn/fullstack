package org.scoula.dynamicweb;

import org.scoula.ex05.controller.HomeController;
import org.scoula.ex05.controller.TodoController;

import javax.servlet.annotation.WebServlet;
import java.util.HashMap;

// value="/" : 모든 요청을 다 받아주겠다.
@WebServlet(name="frontControllerServlet", value="/")
// 경로 지정하는 방법에는 두가지가 있다.
// 1) 디렉토리 기반(/board), 2)확장명 기반(*.do).
public class FrontControllerServlet extends DispatcherServlet {

//    Map<String, Command> getMap;
//    Map<String, Command> postMap;
//
//    String prefix = "/WEB-INF/views/";
//    String suffix = ".jsp";

    HomeController homeController = new HomeController();
    TodoController todoController = new TodoController();


    public void init() {
        getMap = new HashMap<>();
        postMap = new HashMap<>();
//  "/" 경로로 HomeController의 getIndex 메소드를 찾을 수 있다.
        getMap.put("/", homeController::getIndex);

        getMap.put("/todo/list", todoController::getList);
        getMap.put("/todo/view", todoController::getView);
        getMap.put("/todo/create", todoController::getCreate);
        getMap.put("/todo/update", todoController::getUpdate);

        postMap.put("/todo/create", todoController::postCreate);
        postMap.put("/todo/update", todoController::postUpdate);
        postMap.put("/todo/delete", todoController::postDelete);
    }

//    // 아래 메서드는 다른 프로젝트에서도 동일하게 작동.
//    public void execute(Command command, HttpServletRequest request,
//                        HttpServletResponse response)
//            throws IOException, ServletException {
//
//        String viewName = command.execute(request, response);
//        if(viewName.startsWith("redirect:")) {
//            response.sendRedirect(viewName.substring
//                    (
//                    "redirect:".length()
//                    )
//            );
//        } else {
//            String view = prefix + viewName + suffix;
//            RequestDispatcher dis = request.getRequestDispatcher(view);
//            dis.forward(request, response);
//        }
//    }
//
//    public void doGet(HttpServletRequest request,
//                         HttpServletResponse response)
//            throws ServletException, IOException {
//
//        Command command = getCommand(request);
//        if (command != null) {
//            execute(command, request, response);
//        } else {
//            String view = prefix + "404" + suffix;
//            RequestDispatcher dis = request.getRequestDispatcher(view);
//            dis.forward(request, response);
//        }
//
//    }
//
//    public void doPost(HttpServletRequest request,
//                          HttpServletResponse response)
//            throws ServletException, IOException {
//        doGet(request, response);
//    }
//
//    private String getCommandName(HttpServletRequest request) {
//        String requestURI = request.getRequestURI();
//        String contextPath = request.getContextPath();
//        return requestURI.substring(contextPath.length());
//    }
//
//    private Command getCommand(HttpServletRequest request) {
//        String commandName = getCommandName(request);
//
//        Command command;
//        if(request.getMethod().equalsIgnoreCase("GET")) {
//            command = getMap.get(commandName);
//        } else {
//            command = postMap.get(commandName);
//        }
//        return command;
//    }
}
