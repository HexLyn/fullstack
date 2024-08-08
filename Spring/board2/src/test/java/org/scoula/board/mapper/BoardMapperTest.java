package org.scoula.board.mapper;

import lombok.extern.log4j.Log4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.scoula.board.domain.BoardVO;
import org.scoula.config.RootConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {RootConfig.class})
@Log4j
public class BoardMapperTest {
    @Autowired
    private BoardMapper mapper;

    @Test
    @DisplayName("BoardMapper 목록")
    public void getList() {
        for(BoardVO board : mapper.getList()) {
            log.info(board);
        }
    }

    @Test
    @DisplayName("BoardMapper 게시글")
    public void get() {
        BoardVO board = mapper.get(1L);
        log.info(board);
    }

    @Test
    @DisplayName("BoardMapper 새글 작성")
    public void create() {
        BoardVO board = new BoardVO();
        board.setTitle("새로 작성글");
        board.setContent("새로 작성 내용");
        board.setWriter("user0");

        mapper.create(board);

        log.info(board);
    }

    @Test
    @DisplayName("BoardMapper 글 수정")
    public void update() {
        BoardVO board = new BoardVO();
        // No에 존재하는 값을 넣어야 수정됨.
        board.setNo(5L);
//        Long 타입이라 L. 자바의 기본 정수 타입은 int,
        // Double쓰고 싶으면 뒤에 f
        board.setTitle("수정 제목");
        board.setContent("수정 내용");
        board.setWriter("user00");

//        count에는 수정된 행의 수를 반환.
        int count = mapper.update(board);

        log.info("UPDATE COUNT : " + count);
    }

    @Test
    @DisplayName("BoardMapper 글 삭제")
    public void delete() {
        log.info("DELETE COUNT : " + mapper.delete(3L));
    }
}