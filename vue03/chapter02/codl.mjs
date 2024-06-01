function Person({ name, gender, age, address, job }) {}

let Person = {
    name: 'a',
    gender: 'b',
    age: 10,
    address: 'd',
    job: 'e',
};
addPerson('a', 'b', 10, 'd', 'e');

let printInfo = new Person();

Person.prototype.printInfo = function () {
    console.log(
        `${name}의 성별은 ${gender}이며 ${age}입니다.\n주소는 ${address}이며 직업은${job}입니다.`
    );
};

yura.printInfo();
