function solution(n) {
    let answer = [];
    let division = 2;

    //n이 1보다 클 때동안 수행.
    while(n>1) {
        while( n % division == 0) {
            // n을 division으로 나눈 나머지가 0일때,
            // division을 answer에 push한다.
            answer.push(division);
            // n엔 n을 division으로 나눈 몫을 저장.
            n = n/ division;
            //만약 2로 나눴는데 또다시 2로 나눌 수 있으면 while문이 계속 반복된다.
            // 이 단계에서는 중복값으로 저장됨. 
            // n=12면 첫 시행에서 division=2가 푸쉬됨, n=12/2, 6이 저장되고 여전히
            // while문 충족 하므로 divison =2가 또다시 푸쉬, n= 6/2로 3이 저장.
            // 3 % 2 != 0이므로 while문 탈출, divison++ 수행.
            // n=3이라 외곽의 while(n>1)문은 충족, n=3, division=3인 상태로 while문 진입.
            // 나머지 0이므로 push, [2,2,3], 몫이 1이므로 전체 while문 탈출
        }
        division++;
    }

    // Set을 활용한 중복 제거.
    let set = new Set(answer);
    let unique = [...set];
    return unique;
}

// function solution(n) {
//     let answer = [];
//     for(let i =1; i <= Math.sqrt(n); i++) {
//         if(n % i ==0) {
//             answer[2*i-1] = n/i;
//             answer[2*i-2] = i;
//         }
//     }
//     let set = new Set(answer);
//     let unique = [...set];
//     return unique;
// }
// 17
// 기댓값 〉	[17]
// 실행 결과 〉	실행한 결괏값 [null,1,17]이 기댓값 [17]과 다릅니다.

// 소인수분해
// 12를 소인수 분해 할 시 2*2*3으로 가능, 12의 소인수는 2,3이다.
// n=12 입력되면 result = [2,3]으로 반환.

// 기본 소인수 분해 방식.
// function solution(n) {
//     let answer = []

//     let i = 2;
//     while (i <= n) {
//       if (n % i === 0) {
//         answer.push(i)     
//         n = n / i
//       } else {
//       i++        
//       }
//     }

//     return [...new Set(answer.sort((a, b) => a > b ? 1 : -1))]
// }