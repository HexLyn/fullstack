const c = require('ansi-colors');
//const 상수, require 외부의 패키지를 가져오는 함수.
//c는 단순 네이밍.

function hello(name) {
    // console.log(c.green(name) + ' 님, 안녕하세요?');
    console.log(`${c.green(name)} 님 안녕하세요?`);
}

hello('홍길동');

//출력창에선 색상 미지원, 터미널에서 정상작동함.
//노드 환경이 잘 안나올 시 ctrl + c 두 번 눌러 탈출.

//터미널 cmd창에 npm uninstall ansi-colors
//삭제를 하면 pacakage에서 dependencies에서도
//ansi colors가 사라짐
