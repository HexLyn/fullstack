//////////////////////////////////////////////////////////////////////
//구조 분해 할당한 채로 넘겨준다.
function addContact1({
    name,
    phone,
    email = '이메일 없음',
    age = 0,
}) {
    console.log(name, phone, email, age);
}
addContact1({ name: 'dog', phone: 'eat' });

//////////////////////////////////////////////////////////////////////

function addContact2(contact) {
    // 기본 파라미터를 넘겨주는 대신, 해당 값이 있는지 체크 후 속성 추가.
    if (!contact.email) contact.email = '이메일 없음';
    if (!contact.age) contact.age = 0;
    let { name, phone, email, age } = contact;
    // contact쪽에서 구조 분해 할당
    console.log(name, phone, email, age);
}

addContact2({ name: 'dog', phone: 'eat' });

//////////////////////////////////////////////////////////////////////

function addContact3(
    name,
    phone,
    email = '이메일 없음',
    age = 0
) {
    console.log(name, phone, email, age);
}

addContact3('dog', 'eat');

//////////////////////////////////////////////////////////////////////
