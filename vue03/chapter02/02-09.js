const test1 = function (a, b) {
    return a + b;
};

const test2 = (a, b) => {
    return a + b;
};
// function까지 생략.

const test3 = (a, b) => a + b;
//return, 중괄호 까지 생략

console.log(test1(3, 4));
console.log(test2(3, 4));
console.log(test3(3, 4));
//셋 다 동일한 내용 출력.

// 터미널창에서 접근하기
//cd로 디렉터리 이동한 뒤, node 02-09.js 입력
