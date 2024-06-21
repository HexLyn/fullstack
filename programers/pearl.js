function solution(balls, share) {
    const factorial = (n) => {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };

    const answer = (n, r) => {
        return (
            factorial(n) / (factorial(n - r) * factorial(r))
        );
    };

    return answer(balls, share);
}

//js에 팩토리얼 내장함수 없음.

// 주어진 숫자가 아주 클때에 사용.
// function solution(balls, share) {
//     const factorial = (n) => {
//         let result = 1n;
//         for (let i = 2n; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     };

//     const answer = (n, r) => {
//         return factorial(BigInt(n)) / (factorial(BigInt(n) - BigInt(r)) * factorial(BigInt(r)));
//     };

//     return Number(answer(balls, share));
// }
