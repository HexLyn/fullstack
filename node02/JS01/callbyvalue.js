function swap(x, y) {
    let temp = x;
    x = y;
    y = temp;
    console.log(`swap 함수 안 -> x:${x} y:${y}`);
}

let a = 100;
let b = 200;

console.log(`swap 호출 전 -> a:${a} b:${b}`);
swap(a, b);
console.log(`swap 호출 후 -> a:${a} b:${b}`);
