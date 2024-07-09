// function solution(my_string) {
//     let solve = [];
//     let answer = '';

//     solve = [...my_string];

//     for(let i = 0; i< solve.length; i++) {
//        if( solve[i] == 'a' || solve[i] =='e' || solve[i] =='i' || solve[i] =='o' || solve[i] =='u') {
//         solve[i] = "";
//        }
//     }
//     answer = solve.join("")
//     return answer
// }

    

// a e i o u 만 제거한다.
// 주어진 문자열 string을 배열로 분해 한 뒤 제거해서 다시 붙임.


// vowel에 담아두고 includes 사용.
// function solution(my_string) {
//     let solve = [...my_string];
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     for(let i = 0; i < solve.length; i++) {
//        if(vowels.includes(solve[i])) {
//            solve[i] = "";
//        }
//     }
    
//     return solve;
// }


// 정규표현식
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}
