function foodReport(name, age, ...favoriteFoods) {
    // 여기서는 가변 파라미터의 의미. 단독으로 사용 시 전개연산자
    console.log(name + ', ' + age);
    console.log(favoriteFoods);
}

foodReport('me', 56, 'i', 'my', 'me', 'mine');
foodReport('you', 2959, 'you');

// 기본 파라미터와 가변파라미터를 둘 다 사용시, 기본이 앞으로,
// 가변 파라미터는 뒤에 모든 인자를 배열형태로 지정.
// function foodReport(name, age=15, ...favoriteFoods)
