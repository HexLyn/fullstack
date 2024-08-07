package org.scoula.controller;

import lombok.extern.log4j.Log4j;
import org.scoula.dto.SampleDTO;
import org.scoula.dto.TodoDTO;
import org.scoula.dto.SampleDTOList;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;

@Controller // bean에 등록.
@RequestMapping("/sample") // 공통된 url설정,
// 아래 basic의 경우, localhost:8080/sample/basic으로 매핑된다.
@Log4j
public class SampleController {
    @RequestMapping("")
    public void basic() { // 클래스 안의 함수 = 메서드.
        log.info("basic.................");
    }

    @RequestMapping(value="/basic", method={RequestMethod.GET, RequestMethod.POST})
    public void basicGet() {
        log.info("basicGet.................");
    }

    //GetMapping : RequestMapping + Get 요청을 합친 어노테이션, GET요청만 처리가능.
    @GetMapping("/basicOnlyGet")
    public void basicGet2 () {
        log.info("basicOnlyGet..............");
    }

    @GetMapping("/ex01")
    public String ex01(SampleDTO dto) {
        log.info("" + dto); //넣어준 값이 없을 경우 초기값으로 나온다.
        return "ex01"; // view의 이름을 반환.
    }

    @GetMapping("/ex02")
    public String ex02(
            // RequestParam: DTO객체를 안쓰고 각각 파라미터를 받아줄 때 사용.
            // 필드 두개 다 제대로 안넣어주면 예외 발생, 개별 파라미터는 뷰로 전달 불가능.
            @RequestParam("name") String name,
            @RequestParam("age") int age) {
        log.info("name : " + name);
        log.info("age : " + age);
        return "ex02";
    }

    // 같은 이름으로 여러번 전달하는 경우 List나 배열로 받아올 수 있다.
    // http://localhost:8080/sample/ex02List?ids=AAA&ids=BBB&ids=CCC
    @GetMapping("/ex02List")
    public String ex02List(
            @RequestParam("ids") ArrayList<String> ids) {
        log.info("ids : " + ids);
        return "ex02List";
    }

    @GetMapping("/ex02Bean")
    public String ex02Bean(SampleDTOList list) {
        log.info("list dtos: " + list);
        return "ex02Bean";
    }

// http://localhost:8080/sample/ex03?title=test&dueDate=2023/01/01
    @GetMapping("/ex03")
    public String ex03(TodoDTO dto) {
        log.info("" + dto);
        return "ex03";
    }

    @GetMapping("/ex04")
    // page를 기본 자료형으로 넘기면 로그에는 찍히지만 뷰로는 전달되지 않는다.
    // 따라서 @ModelAttribute로 전달해야 한다(request scope에 저장).
    public String ex04(SampleDTO dto, @ModelAttribute("page") int page) {
        log.info("dto" + dto);
        log.info("page" + page);

        return "sample/ex04";
    }

    // return값이 void 일 경우 요청 url을 기준으로 jsp파일을 찾는다.
    // WEB-INF/views/sample/ex05.jsp 파일을 찾게됨
    @GetMapping("/ex05")
    public void ex05() {
        log.info("/ex05...........");
    }


    @GetMapping("/ex06")
    public String ex06(RedirectAttributes ra) {
        log.info("/ex06............");
        // 리다이렉트 시 요청 파라미터로 name과 age를 추가해준다.
        ra.addAttribute("name", "AAA");
        ra.addAttribute("age", 18);
        // 리다이렉트 시 "redirect" 접두사를 사용한다.
        return "redirect:/sample/ex06-2";
    }

    @GetMapping("/ex07")
    // ResponseBody 어노테이션은 반환된 객체가 json형태로 변환되어 보여지도록 한다.
    public @ResponseBody SampleDTO ex07() {
        log.info("ex07..............");
        SampleDTO dto = new SampleDTO();
        dto.setAge(10);
        dto.setName("AAA");

        return dto;
    }

    // responseentity: json형태의 body+응답 해더
    @GetMapping("/ex08")
    public ResponseEntity<String> ex08() {
        log.info("ex08..............");

        String msg= "{\"name\" : \"홍길동\"}";

        HttpHeaders header = new HttpHeaders();
        header.add("Content-Type", "application/json;charset=UTF-8");
        //  HttpHeaders 객체 생성 후 content-type 해더 설정
        // responseEntity
        return new ResponseEntity<>(msg,header, HttpStatus.OK);
    }

    @GetMapping("/exUpload")
    public void exUpload() {
        log.info("exUpload..............");
    }
//    http://localhost:8080/sample/exUpload

    @PostMapping("/exUploadPost")
    public void exUploadPost(ArrayList<MultipartFile> files) {
        for(MultipartFile file : files) {
            // multipartfile 하나가 업로드한 파일 하나에 대응된다.
            log.info("---------------------");
            log.info("name : " + file.getOriginalFilename()); //파일의 원래 이름 출력
            log.info("size : " + file.getSize()); //파일의 원래 크기 출력
        }
    }
}
