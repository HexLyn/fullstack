var getTriangle = function (base, height) {
    return (base * height) / 2;
};
console.log('삼각형의 면적 :' + getTriangle(5, 2));

//화살표 함수(람다함수)
let getTri = (base, height) => (base * height) / 2;
console.log(getTri(5, 2));

//화살표함수(괄호까지 제거)

let getCir = (radius) => radius ** 2 * Math.PI;
console.log(getCir(3));

let getObject = () => ({ 이름: 'kim' });
console.log(getObject());
