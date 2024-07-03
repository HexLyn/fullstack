function solution(numbers) {
    var answer = 0;

    // 일단 내림차순 정렬
    numbers.sort(function(a,b) {
        return b-a;
    })
    //  맨 앞 두 수의 곱.
    answer = numbers[0]*numbers[1];
    
    return answer;
}

// 정수배열 numbers가 주어진다.
// 해당 배열의 원소 중 두개를 곱해 만들 수 있는 최대값을 return

// 1.전부 곱하기
// 2.내림차순 배열 & 맨 앞에 두 숫자 곱하면 그게 제일큰거아님?


// function solution(numbers) {
//     numbers.sort((a,b)=>b-a);
//     return numbers[0]*numbers[1];
// }