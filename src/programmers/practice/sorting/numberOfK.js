/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 정렬
 *
 * K번째 수
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 */
function solution(array, commands) {

    const answer = [];

    for (let i = 0; i < commands.length; i++) {
        let start, end, k;
        [start, end, k] = commands[i];

        // 배열 잘라서 복사
        const array_copy = [];
        for (let j = start - 1; j < end; j++) {
            array_copy.push(array[j]);
        }

        // 오름 차순 으로 정렬
        array_copy.sort((a, b) => a - b);

        // 배열의 k번째 수를 답에 넣기
        answer.push(array_copy[k - 1]);
    }

    return answer;
}

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (2.21ms, 37.5MB)
테스트 2 〉	통과 (2.18ms, 37.4MB)
테스트 3 〉	통과 (2.20ms, 37.4MB)
테스트 4 〉	통과 (2.16ms, 37.8MB)
테스트 5 〉	통과 (2.20ms, 37.4MB)
테스트 6 〉	통과 (2.15ms, 37.7MB)
테스트 7 〉	통과 (2.22ms, 37.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0

Array.push 가 성능이 더 떨어진다는 얘기를 들었는데
일단은 사용해도 괜찮을듯?
읽기 쉬운코드가 우선인게 좋은듯 하다.

배열 잘라서 복사하는것을 유틸리티로 만들던지,
유틸리티 메소드가 없는지 확인해보자.
 */