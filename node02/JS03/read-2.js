fs = require('fs');

const data = fs.readFileSync(
    './node02/JS03/example.txt',
    'utf-8'
);
console.log(data);

//기본 리턴 값은 버퍼 객체기 때문에 인코딩을 해야 제대로 볼 수 있다.
