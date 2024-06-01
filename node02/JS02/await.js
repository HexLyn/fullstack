//동기 방식
//함수로 묶어줌.

//async를 붙여줌으로써 비동기 함수 선언.
//catch는 요청이 실패했을 때 작동.
//try는 요청이 성공했을 때 작동.

async function init() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        //response라는 변수에 fetch에서 데이터 받아온걸 저장.
        //앞에 await 붙여 순서 보장

        const users = await response.json();
        console.log(users);
    } catch (err) {
        console.err(err);
    }
}

init();
