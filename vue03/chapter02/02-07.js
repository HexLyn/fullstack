let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3);
// 4개를 넣었지만 3개까지만 되므로 앞의 3개가 저장됨.

let p1 = { name: 'dkjdk', age: 2020, gender: 'UFO' };

let { name: n, age: ou, gender } = p1;
// 별명 지정.

//별명으로 호출.
console.log(n, ou, gender);
