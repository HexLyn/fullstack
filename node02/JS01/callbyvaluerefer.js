function swap(numbers) {
    let temp = numbers[0];
    numbers[0] = numbers[1];
    numbers[1] = temp;
    console.log(`swap 함수 안 -> numbers: ${numbers}`);
}

let arr = [100, 200];

console.log(`swap 호출 전 -> arr:${arr}`);
swap(arr);
//실제 데이터가 저장된 주소값에 접근해서 변경.
//참조타입
console.log(`swap 호출 후 -> arr:${arr}`);
