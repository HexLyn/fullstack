let cm = parseFloat(prompt('cm 입력', '입력'));
console.log(cm);

let feet = inch * 12;
let inch = cm * 2.54;
alert(`${cm} cm는 ${inch}인치, ${feet} 피트 입니다.`);

console.log(converse(cm));
