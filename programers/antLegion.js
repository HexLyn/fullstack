function solution(hp) {
    let answer = 0;
    let G = 5;
    let S = 3;
    let W = 1;

    answer += Math.floor(hp / G);
    hp %= G;

    answer += Math.floor(hp / S);
    hp %= S;

    answer += hp;
    return answer;
    // if (hp % G === 0) {
    //     answer += hp / G;
    // } else if ((hp % G) % S === 0) {
    //     answer += (hp % G) / S;
    // } else answer += (hp % G) % S;

    // return answer;
}
//hp%G를 해서 나머지가 0이면 딱 떨어짐. 마릿수는 hp/G로 몫을 반환.
//나머지가 있다면 hp%G에서 병정S로 또 나눠봄.

// function solution(hp) {
//     return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
// }
