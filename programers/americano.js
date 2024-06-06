function solution(money) {
    let price = 5500;

    let coffee = parseInt(money / price);

    let leftover = money % price;

    let answer = [coffee, leftover];
    return answer;
}

// function solution(money) {
//     return [Math.floor(money / 5500), money % 5500];
// }
//굳이 변수선언 안해도 오케
