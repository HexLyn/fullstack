// 이러면 ''리턴됨. ㅅㄱ
// function solution(numbers, num1, num2) {
//     for (num1; num1 < num2; num1++) {
//         numbers[num1 - 1] = '';
//     }

//     return numbers;
// }

// splice이용.
function solution(numbers, num1, num2) {
    const result = numbers.splice(num1, num2 - num1 + 1);

    return result;
}
//splice는 1. 원본배열에서 요소들을 제거한다.
//         2. 제거된 요소들을 배열로 반환한다.
//아래의 경우, 원본배열에서 요소들을 제거하지만, 제거된 요소들
//을 배열로 반환하는데 저장할 변수를 지정하지 않았다.
//위의 코드에선 result에 2.제거된 요소들을 배열로 반환하게 됨.
function solution(numbers, num1, num2) {
    numbers.splice(num1, num2 - num1 + 1);

    return result;
}
