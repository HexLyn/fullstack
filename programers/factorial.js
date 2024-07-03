function solution(n) {
    let i = 1;
    let facto = 1;

    while(facto <= n) {
        i++;
        facto *= i;
    }

    return i-1;
}

    // 틀림 + while이 더 적합
    // for(let i=1; i<=n; i++) {
    //     if( n > 0) {
    //         n /= i;
    //     } else if( n == 1) {
    //         return answer = i;
    //     } else { return  answer = --i;}
    // }

// 정수 n을 받으면 해당 값의 팩토리얼을 반환해야 한다.
// ex) n = 3,628,800은 10!(i=10)의 결과값이다.
//  3,628,800을 n으로 입력받으면 result=10을 반환
// i! <= n인 정수 i를 리턴.
// 걍 i는 1부터 차례로 증가하면서, 나눈다.
// 나눠진 n이 0이면, 팩토리얼로 나눠떨어지는거니 반환한다.


// function solution(n) {
//     var answer = 0;
//     let first = 1;

//     for( let i =0; i<=n; i++) {
//       answer = first * i;
//     }

//     return answer;
// }