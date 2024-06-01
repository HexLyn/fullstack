let p1 = {
    name: 'ipad',
    price: 1,
    quantity: 2,

    // 기존 선언 방법.
    order: function () {
        if (!this.amount) {
            // 빈 값, 0, null, false, undefined는 false로 분류된다
            // 즉, 어떤 값이 들어 있을 때만 실행된다?
            // 0이 아닐 경우 실행.
            this.amount = this.quantity * this.price;
        }
        console.log('주문금액 :' + this.amount);
    },

    //ES6의 메서드 선언.
    discount(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount =
                (1 - rate) * this.price * this.quantity;
        }
        console.log(100 * rate + '% 할인된 금액으로 구매');
    },
};

p1.discount(0.2);
p1.order();
