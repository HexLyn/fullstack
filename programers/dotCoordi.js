// function solution(dot) {
//     for (let i = 0; i < 2; i++) {
//         for (let j = 0; j < 2; j++) {
//             if (dot[i] >= 0 && dot[j] >= 0) {
//                 return 1;
//             } else if (dot[i] >= 0 && dot[j] < 0) {
//                 return 2;
//             } else if (dot[i] < 0 && dot[j] < 0) {
//                 return 3;
//             } else return 4;
//         }
//     }
// }

// i=0 j=0, i=0 j=1
// i=1 j=0, i=1 j=1
//dot [i,j]를 입력받는다.
//i값이 x좌표, j값이 y좌표로 된다.

function solution(dot) {
    var answer = 0;
    if (dot[0] >= 0 && dot[1] >= 0) {
        return 1;
    } else if (dot[0] < 0 && dot[1] >= 0) {
        return 2;
    } else if (dot[0] < 0 && dot[1] < 0) {
        return 3;
    } else return 4;
}
