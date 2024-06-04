function solution(slice, n) {
    let pizza = 1;
    let bat;
    while (true) {
        if (bat < 1) {
            let pizza = (a, b) => Math.ceil((a * b) / n);
            pizza++;
        } else break;
        bat = pizza(slice, n) / slice;
    }
    return bat;
}
