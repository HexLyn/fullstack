function solution(my_string) {
    let sum = 0;
    let solve = my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
    
    solve.forEach(n=> {
        sum += n;
    })
    
    return sum;
}