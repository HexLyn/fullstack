function solution(age) {
    var answer = '';
    // 배열번호는 0~9
    let changeAlpha = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
    ];
    let FFF = age / 10;
    let SSS = FFF / 10;
    let LLL = SSS / 10;
    for (let i = 0; i < 3; i++) {
        if (FFF < 10) {
            return changeAlpha[FFF], changeAlpha[age % 10];
        } else if (SSS < 10) {
            return changeAlpha[SSS], changeAlpha[FFF % 10];
        } else changeAlpha[LLL], changeAlpha[SSS % 10];

        return answer;
    }
}

// age%10으로 할 경우,
//102면 10...2
//56이면 5...6
//맨 처음, age/10을 하고, 해당 값이 10보다 크면, 다시 나눈다?

function solution(age) {
    var answer = '';
    // 배열번호는 0~9
    let changeAlpha = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
    ];

    // age를 문자열로 변환하여 각 자릿수에 접근
    let ageStr = age.toString();

    // 각 자릿수를 알파벳으로 변환
    for (let i = 0; i < ageStr.length; i++) {
        let digit = parseInt(ageStr[i]); // 문자열로부터 숫자 추출
        answer += changeAlpha[digit]; // 해당 숫자를 알파벳으로 변환하여 추가
    }

    return answer;
}
