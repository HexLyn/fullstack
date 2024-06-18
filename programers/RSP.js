function solution(rsp) {
    let answer = [];

    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '0') {
            answer.push('5');
        } else if (rsp[i] === '5') {
            answer.push('2');
        } else if (rsp[i] === '2') {
            answer.push('0');
        }
    }
    return answer.join('');
}

// 가위는 2, 바위는 0, 보는 5.
// 문자열 rsp에 가위바위보 내는 순서에 따라 저장됨.
// rsp 배열 모두를 이기는 경우의 수 문자열 출력.

// function solution(rsp) {
//     let arr = {
//         2: 0,
//         0: 5,
//         5: 2
//     };
//     var answer = [...rsp].map(v => arr[v]).join("");
//     return answer;
// }
