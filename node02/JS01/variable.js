let x = 100;
let y = 200;

function swap() {
    let temp = x;
    x = y;
    y = temp;
    console.log(`${x} ${y}`);
}
//지역변수가 전역변수보다 우선순위가 높다.
// 함수 내에서 지역변수로 쓰이고, 함수가 끝나면 즉시 반환됨.

console.log(`${x} ${y}`);
swap(x, y);
console.log(`${x} ${y}`);
