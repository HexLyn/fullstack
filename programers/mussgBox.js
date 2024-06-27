function solution(box, n) {
    let answer = 0;
    return (answer =
        Math.floor(box[0] / n) *
        Math.floor(box[1] / n) *
        Math.floor(box[2] / n));
}
// box[a,b,c] 로 컨테이너의 a는 가로길이, b는 세로길이, c는 높이길이
// n 은 넣을 박스의 크기.
// 1단을 채우는 방법부터
// a,b로 가로세로, n으로 박스크기(정육면체)
// a/n b/n
// if a=4 b=4 n=2이면, 몫만큼.

// function solution(box, n) {
//     let answer = 0;
//     let calc = 1;
//     for(let i =0; i<box.length;i++) {
//         if (Math.floor(box[i]/n > 0) {
//             calc*=Math.floor(box[i]/n);
//         } else {
//             return answer
//         }
//     }
//     return calc;
// }

// reduce예제
// function solution(box, n) {
//     return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
// }

// reduce 메서드는 배열의 각 요소에 대해 주어진 reducer 함수를 실해앟고 하나의 결과값을 반환한다.
// reduce는 누적기 accumulator와 현재값을 인수로 받아 실행.
// 위 예제에서 초기값 1로 설정. acc(누적기) 현재값v는 배열 box의 각 요소.
