package org.scoula.dynamicweb;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
@Data // 기본생성자+Getter+Setter

@RequiredArgsConstructor //final 이 붙은 필드를 무조건 생성자에 넣겠다.
public class Restaurant {
    @Autowired //외부에서 의존성 주입해서 자동으로 연결.
    private Chef chef; //Chef가 Bean 객체로 등록되어 있어야 받아올 수 있다.
//    final private Chef chef; <= 권장되는 방식.
}
