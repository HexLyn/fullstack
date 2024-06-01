const road = require('path');
//변수 road 지정, 내장모듈 'path' 이용하여 경로요소 some, work, ex.txt 결합.

const fullPath = road.join('some', 'work', 'ex.txt');
console.log(fullPath);

//절대 경로
console.log(`파일 절대 경로: ${__filename}`);

//경로 추출 dirname
const dir = road.dirname(__filename);
console.log(`경로만: ${dir}`);

//파일 이름 추출 basename
const fn = road.basename(__filename);
const fn2 = road.basename(__filename, '.js');

console.log(`파일 이름: ${fn}`);
console.log(`파일 이름(확장자 제외): ${fn2}`);

//확장자 추출. extname
const ext = road.extname(__filename);
console.log(`파일 확장자: ${ext}`);
console.log(road.basename(__filename, ext));

//전체 타입 경로 요소, 경로 분해 parse
const parsedPath = road.parse(__filename);
console.log(parsedPath);
