function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;

    let divisor = gcd(numer, denom);

    numer /= divisor;
    denom /= divisor;

    return [numer, denom];
}

console.log(solution(1, 2, 1, 3));
