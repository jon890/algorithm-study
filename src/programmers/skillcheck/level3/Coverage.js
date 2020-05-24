/**
 * 프로그래머스
 * 스킬체크 레벨 3
 *
 * Coverage
 * chanllenge_id=486
 *
 * 아파트 전체에 전파를 전달하기
 */
function solution(n, stations, w) {

    // 한 개의 기지국이 커버할 수 있는 범위
    const coverage = 2 * w + 1;

    let start = 1;
    let end = n;
    let answer = 0;

    stations.forEach(st => {
        // start ~ 각 station 까지 범위의 최소 기지국 수를 계산
        // stations에서 커버된 범위를 뺌 st - w
        const interval = (st - w) - start;
        const cov = interval / coverage;

        // js에서 number/number가 어떻게 계산되는가..
        // 소수점 까지 계산되는군..
        // console.log(">>> cov : " + cov);
        // console.log(">>> Math.ceil(cov) : " + Math.ceil(cov));
        answer += Math.ceil(cov);

        start = st + w;
    });

    // 마지막 끝에서 마지막 기지국 계산
    const interval = end - (stations[stations.length - 1] + w);
    const cov = interval / coverage;
    answer += Math.ceil(cov);

    return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (1.69ms, 37.5MB)
테스트 2 〉	통과 (1.71ms, 37.4MB)
테스트 3 〉	통과 (1.72ms, 37.7MB)
테스트 4 〉	실패 (3.14ms, 37.9MB)
테스트 5 〉	통과 (1.69ms, 37.5MB)
테스트 6 〉	통과 (1.72ms, 37.5MB)
테스트 7 〉	통과 (1.71ms, 37.4MB)
테스트 8 〉	실패 (3.14ms, 37.8MB)
테스트 9 〉	통과 (1.74ms, 37.4MB)
테스트 10 〉	통과 (1.74ms, 37.4MB)
테스트 11 〉	통과 (1.73ms, 37.5MB)
테스트 12 〉	통과 (1.70ms, 37.4MB)
테스트 13 〉	통과 (1.74ms, 37.6MB)
테스트 14 〉	통과 (1.70ms, 37.4MB)
테스트 15 〉	통과 (1.70ms, 37.5MB)
테스트 16 〉	통과 (1.72ms, 37.5MB)
테스트 17 〉	실패 (3.10ms, 37.8MB)
테스트 18 〉	통과 (1.72ms, 37.4MB)
테스트 19 〉	실패 (3.16ms, 37.7MB)
테스트 20 〉	통과 (1.70ms, 37.5MB)
테스트 21 〉	실패 (3.13ms, 37.8MB)
효율성  테스트
테스트 1 〉	통과 (3.28ms, 38.3MB)
테스트 2 〉	통과 (3.22ms, 38.2MB)
테스트 3 〉	통과 (3.28ms, 38.4MB)
테스트 4 〉	통과 (3.22ms, 38.2MB)
채점 결과
정확성: 26.8
효율성: 14.8
합계: 41.6 / 50
 */