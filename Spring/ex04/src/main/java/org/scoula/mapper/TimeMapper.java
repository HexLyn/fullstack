package org.scoula.mapper;

import org.apache.ibatis.annotations.Select;

public interface TimeMapper {
    //""안에 실제 sql문장.
    @Select("SELECT sysdate()")
    public String getTime();

    //데이터 베이스에서 현재 시스템 날짜와 시간을 반환.
    public String getTime2();
}
