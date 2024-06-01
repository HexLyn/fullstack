const fil = require('fs');

let files = fil.readdirSync('./');
console.log(files);
//fil.readdirSync 동기로 폴더를 읽어온다.
