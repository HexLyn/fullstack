let obj = { result: 0 };

obj.add = function (x, y) {
    this.result = x + y;
};

let add2 = obj.add;

console.log(add2 === obj.add);
// add2와 obj.add는 동일한 함수다. =true 출력

add2(3, 4); //전역변수 result에 7이 할당된다. = obj.add가 수정되는게 아님.
console.log(obj);
//result: 0 출력

console.log(result);
// 7 출력
