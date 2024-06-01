function Person(name, gender, age, address, job) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.address = address;
    this.job = job;
}

Person.prototype.printInfo = function () {
    console.log(
        `${this.name}의 성별은 ${this.gender}이며 ${this.age}입니다.\n주소는 ${this.address}이며 직업은${this.job}입니다.`
    );
};

// let Person = new Person('a', 'b', 'c', 'd', 'e');

let sset = new Person('a', 'b', 'c', 'd', 'e');

sset.printInfo();
