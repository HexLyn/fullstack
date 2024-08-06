package org.scoula.ex05.DTO;

public class LoginDTO {
    // getter, setter 필드 생성자 가지고 있으면 자바빈으로 사용 가능.
    private String name; // attribute, 밖에서 접근 불가(private)
    private String passwd;
    public LoginDTO() {}
    public LoginDTO(String name, String passwd) {
        this.name = name;
        this.passwd = passwd;
    }
    public String getName() {
        // property, getter/setter를 통해 밖에서 접근 가능해짐.
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getPasswd() {
        return passwd;
    }

    public void setPasswd(String passwd) {
        this.passwd = passwd;
    }
}
