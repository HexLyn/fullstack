function solution(n) {
    let piece = 6;
    let answer = (a, b) => (a * b) / maxi(a, b);
    let maxi = (a, b) => (b === 0 ? a : maxi(b, a % b));
    return answer(piece, n) / piece;
}
