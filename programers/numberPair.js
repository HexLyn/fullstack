function solution(n) {
    let answer = 0;
    // i=1부터, 입력값 n의 제곱근까지 시행
    for (let i = 1; i <= Math.sqrt(n); i++) {
        // n을 i로 나눈 나머지가 0이면 i와 n/i는 n의 약수임.
        if (n % i === 0) {
            answer++;
            // 여기서 i와 n/i이 다르다면, 서로 다른 순서쌍이므로
            // 한번 더 answer++ 수행한다.
            if (i !== n / i) {
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution(20));
// n이 20 이므로 곱이 20인 순서쌍은 (1, 20),
// (2, 10), (4, 5), (5, 4), (10, 2), (20, 1)
// 이므로 6을 return합니다.

// function solution(n) {
//     let count = 0;
//     for (let i = 1; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         let pair1 = i;
//         let pair2 = n / i;
//         if (pair1 !== pair2) {
//           count += 2;
//         } else {
//           count += 1;
//         }
//       }
//     }
//     return count;
//   }
