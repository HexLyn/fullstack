let _ = require('lodash');
//lodesh 패키지 가져오기.

//기존 배열 복사의 문제점
// :참조형이기 때문에 생기는 문제들.

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 4;

console.log(`arr1 : ${arr1}`);
console.log(`arr2 : ${arr2}`);

//얕은 복사
//전개 연산자 사용: ... (내부 데이터들을 펼쳐준다.)

let shall1 = ['a', 'b', 'c'];
let shall2 = [...shall1];

shall2[1] = 4;

console.log(`shall1 : ${shall1}`);
console.log(`shall2 : ${shall2}`);

//참조형 데이터 안에 다른 참조형 데이터가 있을 때,

let tri1 = ['가', '나', '다', ['a', 'b', 'c']];
let tri2 = [...tri1];

tri1[3][0] = '변경';

console.log(`tri1 : ${tri1}`);
console.log(`tri2 : ${tri2}`);

//깊은 복사
//lodash의 cloneDeep 함수 사용
//내부를 순환하면서 모든 데이터들을 값으로 복사해준다.

let dee1 = ['가', '나', '다', ['a', 'b', 'c']];
let dee2 = [...dee1];

dee1[3][0] = '변경';

console.log(`dee1 : ${dee1}`);
console.log(`dee2 : ${dee2}`);
