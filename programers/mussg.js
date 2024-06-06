function solution(array, height) {
    let answer = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > height) {
            answer++;
        }
    }

    return answer;
}

// 정수 배열 array가 주어진다.
// height는 매개변수
//머쓱이보다 키 큰 사람의 수를 return
