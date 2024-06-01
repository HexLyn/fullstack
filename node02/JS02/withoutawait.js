//비동기 promise 방식

fetch('https://jsonplaceholder.typicode.com/users')
    // 서버와 http연결 통신으로 데이터를 받아옴. promise 리턴
    .then((response) => response.json())
    // 받아온 파일을 json 확장자로 바꿔줌
    // json은 객체와 같이 key 값으로 이루어져있다.
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// fecth.then.then.catch
//문자열로 바뀌어서 가져온다.
