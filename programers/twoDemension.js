function solution(num_list, n) {
    var answer = [];

    for (let i = 0; i < num_list.length; i += n) {
        answer.push(num_list.slice(i, i + n));
    }

    return answer;
}

// while문 이용, splice활용.
// function solution(num_list, n) {
//     var answer = [];

// while(num_list.length) : num_list.length가 0이 아닌 동안 true.
//     while(num_list.length) {
//         answer.push(num_list.splice(0,n));
//     }
// push로 값을 집어넣는다, splice로 n번째를 0으로 치환한다.

//     return answer;
// }

// splice는 배열을 반환하며 원본을 수정한다.
// slice는 배열을 반환하며 원본이 아닌 새로운 배열을 만든다.
