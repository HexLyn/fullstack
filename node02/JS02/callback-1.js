const order = (menu, callback) => {
    console.log(`${menu} 주문 접수.`);
    setTimeout(() => {
        callback(menu);
        // callback(menu)에 display가 넘어온다.
    }, 3000);
};
// menu, callback을 매개변수로 받는 화살표함수 order 생성.
//

const display = (result) => {
    console.log(`${result} 완료`);
};
//const display = result => {}
// 변수가 1개일땐 화살표함수 괄호 생략 가능.

order('아메리카노', display);
// 아메리카노와 display함수를 넘긴다.
