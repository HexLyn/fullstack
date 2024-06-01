fs = require('fs');

const data = fs.readFileSync(
    './node02/JS03/example.txt',
    'utf-8'
); //인코딩 지정.
fs.writeFileSync('text-1.txt', data);

//동기로 파일 쓰기.
