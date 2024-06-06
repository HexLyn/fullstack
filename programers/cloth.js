function solution(price) {
    var answer = 0;

    if (price >= 500000) {
        answer = price * 0.8;
    } else if (price >= 300000) {
        answer = price * 0.9;
    } else if (price >= 100000) {
        answer = price * 0.95;
    } else answer = price;

    return Math.floor(answer);
}

// ####다른 풀이####
// const discounts = [
//     [500000, 20],
//     [300000, 10],
//     [100000,  5],
// ]

// const solution = (price) => {
//     for (const discount of discounts)
//         if (price >= discount[0])
//             return Math.floor(price - price * discount[1] / 100)
//     return price
// }
