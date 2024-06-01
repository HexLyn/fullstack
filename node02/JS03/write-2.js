fs = require('fs');

const data = fs.readFileSync(
    './node02/JS03/example.txt',
    'utf-8'
);

//해당 파일이 존재하는지 여부를 boolean형으로 반환.
if (fs.existsSync('text-1.txt')) {
    console.log('file already');
} else {
    fs.writeFileSync('./text-1.txt', data);
}
