let obj = { result: 0 };
obj.add = function (x, y) {
    this.result = x + y;
};
//없는 키값을 넣으면 추가된다.= obj에 add라는 키 값을 추가시킴.
//obj{result:0, add}

obj.add(3, 4);
//add에 3,4를 넣음.

console.log(obj);
