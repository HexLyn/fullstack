package org.scoula.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j // Lombok 제공, log()라는 멤버변수가 생긴다.
public class HomeController {
    @GetMapping("/")
    // GET 메서드로 "/"에 접근 시 home()실행.
    public String home(Model model) {
        // 키와 value 쌍으로 MODEL에 저장.
        // request scope에 저장되며, view에서 사용 가능.
        model.addAttribute("name", "홍길동");
        return "index";
    }
}