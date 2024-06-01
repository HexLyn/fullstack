let obj1 = { name: '박문수', age: 29 };
let obj2 = obj1;
let obj3 = { ...obj1 };
let obj4 = { ...obj1, email: 'msiej@krkr.com' };

obj2.age = 19;
console.log(obj1); //{ name: '박문수', age: 19 }
console.log(obj2); //{ name: '박문수', age: 19 }
console.log(obj3); //{ name: '박문수', age: 29 }
console.log(obj1 == obj2); //true
console.log(obj1 == obj3); //false

let arr1 = [100, 200, 300];
let arr2 = ['hello', ...arr1, 'world'];
//전개 연사자를 통해 값들을 중간에 삽입 가능.
console.log(arr1); //[ 100, 200, 300 ]
console.log(arr1); //[ 100, 200, 300 ]
