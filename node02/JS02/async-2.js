let likePizza = true;
// likePizza 참으로 선언해놓음.
// boolean 타입
// let likePizza = false;

const pizza = new Promise((resolve, reject) => {
    if (likePizza) resolve('피자주문');
    // resolve라는 함수에 문자열 넘겨줌.
    else reject('피자주문안해');
});
//넘겨준 것이 promise에 저장됨.

// promise : 객체를 생성할 때 비동기 작업함수 전달.
// resolve : 작업 성공 시 호출할 함수.
// reject : 작업 실패 시 호출할 함수.

// promise 객체의 메서드
// .then(result): 작업 성공 시 resolve 함수의 매개변수 전달
// .catch(err): 작업 실패 시 reject 함수의 매개변수 전달.
pizza
    .then((result) => console.log(result))
    // pizza.then 과 이어 pizza.catch까지 쓰기위해 ;없음
    .catch((err) => console.log(err))

    .finally(() => console.log('finally'));
// finally는 실패, 성공 상관없이 실행되는 코드이다.
