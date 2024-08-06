package org.scoula.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class SampleDTOList {
    private List<SampleDTO> list;

    public SampleDTOList() {  // 생성자는 클래스와 이름이 같아야
        list = new ArrayList<>();
    }
}
