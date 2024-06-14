//배열을 바꾸지 않고 가중치값을 더한다.
//   [3, 76, 24] =>	[3, 1, 2]

//map은 배열 메서드로, 배열의 각 요소에 대해 주어진
//콜백 함수를 호출하고 그 결과를 새로운 배열로 반환.
//기존 배열을 변경하진 않음.
function solution(emergency) {
    let len = emergency.length;
    let indexedArray = emergency.map((value, index) => [
        value,
        index,
    ]);
    indexedArray.sort((a, b) => b[0] - a[0]);
    let weights = new Array(len);
    for (let i = 0; i < len; i++) {
        weights[indexedArray[i][1]] = i + 1;
    }
    return weights;
}

//sort는 기존 배열을 변경하여 요소를 정렬시킨다.
//slice는 배열을 변경하지 않고 새로운 배열을 할당한다.
function solution(emergency) {
    let sorted = emergency.slice().sort((a, b) => b - a);
    return emergency.map((v) => sorted.indexOf(v) + 1);
}
