/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 정렬
 *
 * 가장 큰 수
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 */
function solution(numbers) {
    const result_array = [];
    permutation(numbers, 0, numbers.length, numbers.length, result_array);
    result_array.sort((a, b) => b - a);
    // console.log(result_array);
    // console.log(result_array[0]);
    return String(result_array[0]);
}

function permutation(array, depth, n, k, result_array) {
    if (depth === k) {
        let numbers = "";
        for (let i = 0; i < array.length; i++) {
            numbers += String(array[i]);
        }
        result_array.push(Number(numbers));
        return;
    }

    for (let i = depth; i < n; i++) {
        swap(array, i, depth);
        permutation(array, depth + 1, n, k, result_array);
        swap(array, i, depth);
    }
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

/*
테스트 케이스는 다 맞추는데
제출하면 다 틀린다... 뭐지?
뭘 빠뜨렷으려나... 잘 모르겠다....
 */