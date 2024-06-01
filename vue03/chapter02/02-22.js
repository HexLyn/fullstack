let p = new Promise((resolve, reject) => {
    resolve('first!');
});

p.then((msg) => {
    console.log(msg); //first를 받아옴
    //throw new Error("## 에러!!")
    return 'second';
})
    .then((msg) => {
        console.log(msg); //second를 받아옴
        return 'third';
    })
    .then((msg) => {
        console.log(msg); //third를 받아옴
    })
    .catch((error) => {
        console.log('오류발생 ==> ' + error);
    });
