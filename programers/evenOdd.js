
function solution(num_list) {
    let oddCount = 0;
    let evenCount = 0;
    let answer= [];
    for (i=0; i<num_list.length;i++) {
        if(num_list[i]%2===0) {
            evenCount++;
        } else oddCount++;
    }
     return answer[evenCount,oddCount];
}