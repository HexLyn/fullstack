function solution(my_string) {
    let answer = '';
    let len = my_string.length;
    for (i = len - 1; i >= 0; i--) {
        answer += my_string[i];
    }

    return answer;
}

// reverse 사용 예
// function solution(my_string) {
//     var answer = [...my_string].reverse().join("");
//     return answer;
// }
// 스프레드 연산자: [...my_string]
