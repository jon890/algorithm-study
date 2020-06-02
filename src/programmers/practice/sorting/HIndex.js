/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 정렬
 *
 * H-Index
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 */
function solution(citations) {
    // 인용 횟수를 내림 차순 으로 정렬
    citations.sort((a, b) => b - a);

    for (let h = citations[0]; h >= 0; h--) {
        let count = citations.findIndex(el => el < h);

        // 예외 처리
        // 찾지 못한 경우
        // 주어진 모든 원소가 h보다 크다
        if (count === -1) count = citations.length;

        if (count >= h) return h;
    }
}

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (35.60ms, 39.4MB)
테스트 2 〉	통과 (48.53ms, 39MB)
테스트 3 〉	통과 (44.81ms, 39.4MB)
테스트 4 〉	통과 (40.43ms, 39.4MB)
테스트 5 〉	통과 (49.05ms, 39.2MB)
테스트 6 〉	통과 (52.39ms, 39.1MB)
테스트 7 〉	통과 (27.60ms, 39.1MB)
테스트 8 〉	통과 (11.58ms, 38.9MB)
테스트 9 〉	통과 (15.52ms, 39.1MB)
테스트 10 〉	통과 (29.59ms, 39MB)
테스트 11 〉	통과 (55.11ms, 39.1MB)
테스트 12 〉	통과 (17.63ms, 39MB)
테스트 13 〉	통과 (53.38ms, 39MB)
테스트 14 〉	통과 (50.74ms, 39.1MB)
테스트 15 〉	통과 (53.51ms, 39.2MB)
테스트 16 〉	통과 (2.34ms, 37.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */