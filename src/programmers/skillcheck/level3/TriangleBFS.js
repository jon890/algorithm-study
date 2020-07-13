function solution(triangle) {
    // 모든 경우를 고려하여
    // 최댓값을 찾아야 겠지?
    const answers = [];
    bfs(0, 0, 0, triangle, answers);

    // console.log(answers);
    return Math.max(...answers);
}

function bfs(depth, index, value, triangle, answers) {
    // get n-depth array
    const array = triangle[depth];
    value += array[index];

    // 끝에 도달했다면 값을 선택지에 추가한다
    if (depth + 1 === triangle.length) {
        answers.push(value);
    } else {
        bfs(depth + 1, index, value, triangle, answers);
        bfs(depth + 1, index + 1, value, triangle, answers);
    }
}

/*
20-07-07
재귀쪽에서 메모리 오류가 뜨는 것 같은데 더 고민해보자..

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (1.72ms, 37.3MB)
테스트 2 〉	통과 (1.86ms, 37.3MB)
테스트 3 〉	통과 (3.95ms, 38.2MB)
테스트 4 〉	실패 (signal: aborted (core dumped))
테스트 5 〉	실패 (signal: aborted (core dumped))
테스트 6 〉	실패 (signal: aborted (core dumped))
테스트 7 〉	실패 (signal: aborted (core dumped))
테스트 8 〉	실패 (signal: aborted (core dumped))
테스트 9 〉	통과 (1.76ms, 37.3MB)
테스트 10 〉	실패 (signal: aborted (core dumped))
효율성  테스트
테스트 1 〉	실패 (signal: aborted (core dumped))
테스트 2 〉	실패 (signal: aborted (core dumped))
테스트 3 〉	실패 (signal: aborted (core dumped))
테스트 4 〉	실패 (signal: aborted (core dumped))
테스트 5 〉	실패 (signal: aborted (core dumped))
테스트 6 〉	실패 (signal: aborted (core dumped))
테스트 7 〉	실패 (signal: aborted (core dumped))
테스트 8 〉	실패 (signal: aborted (core dumped))
테스트 9 〉	실패 (signal: aborted (core dumped))
테스트 10 〉	실패 (signal: aborted (core dumped))
채점 결과
정확성: 16.1
효율성: 0.0
합계: 16.1 / 50
 */