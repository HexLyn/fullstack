//비동기 처리

function displayA() {
    console.log('A');
}
function displayB(callback) {
    setTimeout(() => {
        console.log('B');
        callback();
    }, 2000);
}
function displayC() {
    console.log('C');
}
displayA();
displayB(displayC);
//2초후에 B,C가 출력된다.

// displayC();
//남아 있으면A C B C로 출력됨
