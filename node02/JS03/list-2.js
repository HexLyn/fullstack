const fil = require('fs');

fil.readdir('./', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});
//에러가 발생하면 return을 만나 탈출 = console.log(files)실행 안됨.

//fs.readdier: 비동기로 파일을 읽어온다.
