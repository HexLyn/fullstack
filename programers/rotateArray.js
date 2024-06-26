function solution(numbers, direction) {
    var answer = numbers;

    if (direction === 'right') {
        temp = numbers.pop();
        numbers.unshift(temp);
    } else {
        temp = numbers.shift();
        numbers.push(temp);
    }

    return answer;
}

// 정수 배열  numbers와 문자열 direction이 주어진다.
//numbers의 원소를 direction 방향으로 한 칸 씩 회전 시킨 배열 return
// direction에는 right, left 둘 중 하나.

// 더 간단하게.
// if ("right" == direction) {
//     numbers.unshift(numbers.pop());
// } else {
//     numbers.push(numbers.shift());
// }
