function solution(n) {
    let answer = 0;

    function check(num) {
        if (num < 2) return false;
        let count = 0;

        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                count++;
                if (i !== n / i) {
                    count++;
                }
            }
        }
        return count > 2;
    }

    for (let i = 2; i <= n; i++) {
        if (check(i)) {
            answer++;
        }
    }
    return answer;
}

// 약수의 개수가 세 개 이상인 수,
//  합성수 = 1하고 자기자신 외에도 나누어지면 된다.
//3은 1,3으로만되니 안됨. 4는 1,2,4로 되니 합성수.
// 순서쌍 구하기에서 응용 = 순서쌍이 2개 이상이면 합성수 취급?

// function solution(n) {
//     let count = 0;
//     for (let i = 1; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             count++;
//             if (i !== n / i) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
//
