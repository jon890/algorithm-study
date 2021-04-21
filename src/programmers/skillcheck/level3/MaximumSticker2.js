function solution(sticker) {
  // 경계값 처리
  if (sticker.length === 1) {
    return sticker[0];
  }

  // 경계값 처리
  if (sticker.length === 2) {
    return Math.max(sticker[0], sticker[1]);
  }

  // dp를 이용해보자 - 첫 번째 원소 포함
  const dp_with_first = [];
  dp_with_first[0] = sticker[0];
  dp_with_first[1] = sticker[0];
  for (let i = 2; i < sticker.length - 1; i++) {
    // 마지막 스티커 이용 불가
    dp_with_first[i] = Math.max(
      dp_with_first[i - 1],
      dp_with_first[i - 2] + sticker[i],
    );
  }

  // dp를 이용해보자 - 첫 번째 원소 없이
  const dp_without_first = [];
  dp_without_first[0] = 0;
  dp_without_first[1] = sticker[1];
  for (let i = 2; i < sticker.length; i++) {
    dp_without_first[i] = Math.max(
      dp_without_first[i - 1],
      dp_without_first[i - 2] + sticker[i],
    );
  }

  console.log(dp_with_first);
  console.log(dp_without_first);

  return Math.max(
    dp_with_first[dp_with_first.length - 1],
    dp_without_first[dp_without_first.length - 1],
  );
}

solution([14, 6, 5, 11, 3, 9, 2, 10]);

/**
 * dp는 참 아이디어가 신기해
 * 이전에 선택한 최적의 값을 비교해서
 * 계속 나아가면 되는거구나
 * 
 * 정확성  테스트
테스트 1 〉	통과 (0.10ms, 30.1MB)
테스트 2 〉	통과 (0.06ms, 30.1MB)
테스트 3 〉	통과 (0.13ms, 29.9MB)
테스트 4 〉	통과 (0.11ms, 30.1MB)
테스트 5 〉	통과 (0.12ms, 30.1MB)
테스트 6 〉	통과 (0.14ms, 30MB)
테스트 7 〉	통과 (0.50ms, 30.1MB)
테스트 8 〉	통과 (0.52ms, 29.7MB)
테스트 9 〉	통과 (0.53ms, 30MB)
테스트 10 〉	통과 (0.26ms, 30.1MB)
테스트 11 〉	통과 (0.49ms, 29.9MB)
테스트 12 〉	통과 (0.28ms, 30.1MB)
테스트 13 〉	통과 (0.52ms, 30MB)
테스트 14 〉	통과 (0.52ms, 30MB)
테스트 15 〉	통과 (0.49ms, 30MB)
테스트 16 〉	통과 (0.26ms, 29.9MB)
테스트 17 〉	통과 (0.54ms, 30.1MB)
테스트 18 〉	통과 (0.53ms, 30MB)
테스트 19 〉	통과 (0.28ms, 30.2MB)
테스트 20 〉	통과 (0.52ms, 30.1MB)
테스트 21 〉	통과 (0.52ms, 29.9MB)
테스트 22 〉	통과 (0.54ms, 30MB)
테스트 23 〉	통과 (0.53ms, 30MB)
테스트 24 〉	통과 (0.28ms, 29.9MB)
테스트 25 〉	통과 (0.50ms, 30.1MB)
테스트 26 〉	통과 (0.49ms, 30.2MB)
테스트 27 〉	통과 (0.53ms, 30MB)
테스트 28 〉	통과 (0.52ms, 29.9MB)
테스트 29 〉	통과 (0.51ms, 30MB)
테스트 30 〉	통과 (0.51ms, 30.1MB)
테스트 31 〉	통과 (0.50ms, 30.1MB)
테스트 32 〉	통과 (0.54ms, 30.1MB)
테스트 33 〉	통과 (0.09ms, 30.1MB)
효율성  테스트
테스트 1 〉	통과 (8.86ms, 38.2MB)
테스트 2 〉	통과 (10.18ms, 38.1MB)
테스트 3 〉	통과 (9.64ms, 38.3MB)
테스트 4 〉	통과 (9.41ms, 38.3MB)
채점 결과
정확성: 49.7
효율성: 50.3
합계: 100.0 / 100.0
 */
