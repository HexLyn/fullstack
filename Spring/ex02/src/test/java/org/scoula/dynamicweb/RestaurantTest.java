package org.scoula.dynamicweb;

import lombok.extern.log4j.Log4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.scoula.dynamicweb.config.RootConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.jupiter.api.Assertions.*;


//@WebAppConfiguration
@ExtendWith(SpringExtension.class) // Spring 테스트를 위한 확장기능 사용 선언.
@ContextConfiguration(classes = {RootConfig.class})
// 테스트에서 사용할 Spring Context 받아올 설정 클래스 지정.
@Log4j // log4j.xml을 사용해 log 기능 가져오기.
class RestaurantTest {
    @Autowired
    private Restaurant restaurant;

    @Test
    void getChef() {
        //restaurant가 null이 아닌지 확인한다.
        assertNotNull(restaurant);
        log.info(restaurant);
        log.info("=================");
        log.info(restaurant.getChef());
    }
}



