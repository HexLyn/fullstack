function solution(num_list) {
    let temp = 0;
    let len = num_list.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        temp = num_list[i];
        num_list[i] = num_list[len - i - 1];
        num_list[len - i - 1] = temp;
    }

    return num_list;
}

//####간단하게 reverse사용####
// function solution(num_list) {
//     return num_list.reverse()
// }

// ####push사용####
// function solution(num_list) {
//     var answer = [];
//     var j = num_list.length
//     for(var i = 1; i <= j; i++){
//         answer.push(num_list[j-i])
//     }
//     return answer;
// }

//####sort함수에서 -1로 준다.####
// function solution(num_list) {
//     return num_list.sort((a, b) => -1);
// }

// ####unshift####
// function solution(num_list) {
//     var answer = [];
//     num_list.forEach(i => answer.unshift(i))
//     return answer
// }
