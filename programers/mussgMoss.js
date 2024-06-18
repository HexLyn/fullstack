function solution(letter) {
    var answer = '';

    const morse = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
    };

    for (const code in morse) {
        const regex = new RegExp(code, 'g');
        letter = letter.replace(regex, morse[code]);
    }

    answer = letter;
    return answer;
}

// function solution(letter) {
//     return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
// }
