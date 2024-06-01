function addContact(
    name,
    mobile,
    home = 'not',
    address = 'not',
    email = 'not'
    // 기본 파라미터 설정.
) {
    let str = `name=${name}, mobile=${mobile},home=${home},address=${address},email=${email}, `;
    console.log(str);
}

addContact('gildong', '111-111-1111');
addContact('mamam', '222-2222-2222', 'homie');
addContact('giliong');
// 기본값 정의 안한채로 입력 안하면 undefined
