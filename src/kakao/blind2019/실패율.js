function solution(N, stages) {
  // 실패율
  // 도달했으나 클리어 x / 도달한 사람수

  const stageReached = new Array(N + 1).fill(0);
  const stageCleared = new Array(N + 1).fill(0);
  stages.forEach((stage) => {
    for (let i = 0; i < stage; i++) {
      // stage 값이 2라면
      // 0, 1 스테이지 도달한 사람
      stageReached[i]++;

      // 0 스테이지 클리어한 사람
      if (i !== stage - 1) {
        stageCleared[i]++;
      }
    }
  });

  // 실패율 계산
  const failureInfo = [];
  for (let i = 0; i < N; i++) {
    const ratio = (stageReached[i] - stageCleared[i]) / stageReached[i];
    failureInfo.push({
      stage: i + 1,
      ratio: ratio,
    });
  }

  // 스테이지 번호를 실패율의 내림차순으로 정렬
  // 실패율이 같다면 작은 번호의 스테이지가 먼저 오도록
  // 3 - 4 - 2 - 1 - 5
  return failureInfo
    .sort((a, b) => {
      if (a.ratio !== b.ratio) {
        return b.ratio - a.ratio;
      } else {
        // 실패율이 같다면
        // 스테이지 오름차순
        return a.stage - b.stage;
      }
    })
    .map((item) => item.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

/**
 * 2021-06-21
 * 정확성  테스트
테스트 1 〉	통과 (0.25ms, 30.1MB)
테스트 2 〉	통과 (1.84ms, 32.7MB)
테스트 3 〉	통과 (11.65ms, 32.3MB)
테스트 4 〉	통과 (41.78ms, 34.1MB)
테스트 5 〉	통과 (157.05ms, 36.8MB)
테스트 6 〉	통과 (3.87ms, 32.1MB)
테스트 7 〉	통과 (5.29ms, 32.1MB)
테스트 8 〉	통과 (42.05ms, 34.3MB)
테스트 9 〉	통과 (160.87ms, 36.9MB)
테스트 10 〉	통과 (43.70ms, 34.5MB)
테스트 11 〉	통과 (40.64ms, 34.4MB)
테스트 12 〉	통과 (20.89ms, 35.3MB)
테스트 13 〉	통과 (77.11ms, 35.8MB)
테스트 14 〉	통과 (0.64ms, 30.2MB)
테스트 15 〉	통과 (8.33ms, 33.7MB)
테스트 16 〉	통과 (4.43ms, 32.7MB)
테스트 17 〉	통과 (7.53ms, 34.3MB)
테스트 18 〉	통과 (22.31ms, 33.3MB)
테스트 19 〉	통과 (15.80ms, 32.2MB)
테스트 20 〉	통과 (5.19ms, 33.4MB)
테스트 21 〉	통과 (6.06ms, 34MB)
테스트 22 〉	통과 (293.54ms, 36.9MB)
테스트 23 〉	통과 (8.60ms, 36.2MB)
테스트 24 〉	통과 (14.29ms, 37.2MB)
테스트 25 〉	통과 (0.29ms, 30MB)
테스트 26 〉	통과 (0.15ms, 30MB)
테스트 27 〉	통과 (0.15ms, 30.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
