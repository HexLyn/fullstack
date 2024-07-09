// function solution(my_string) {
//     let solve = my_string.replace(/[qwertyuioplkjhgfdsazxcvbnm]]/g, '');
// 빡대갈 방식
//     solve = solve.split('').sort().join('');
//     return solve;
// }

// 주어진 문자열 my_string 안에 있는 숫자만 골라 오름차순 정렬.
// my_string = "hi12392", result = [1, 2, 2, 3, 9] 

// 문자열을 배열로 변환, 정렬한 후 다시 문자열로 변환합니다.
// function solution(my_string) {
//     let solve = my_string.replace(/[a-zA-Z]/g, '');
//     solve = solve.split('').sort().join('');
//     return solve;
// }
// "[1, 2, 2, 3, 9]"

function solution(my_string) {
    let solve = my_string.replace(/[a-zA-Z]/g, '');
    let array = solve.split('').filter(char => char !== '').map(char => parseInt(char));
    array.sort((a, b) => a - b);
    return array;
}

// 정규식(숫자를 검색)
// function solution(my_string) {
//     return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
// }