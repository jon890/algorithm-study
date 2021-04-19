function solution(jobs) {
  // 작업이 들어온 순서로 정렬한다
  jobs.sort((a, b) => a[0] - b[0]);

  // 현재 시간
  let currentTime = 0;

  // 대기시간 + 처리시간들을 계산할 배열
  const times = [];

  while (jobs.length > 0) {
    const shortestJobIndex = jobs
      .sort((a, b) => a[1] - b[1]) // 작업들을 실행 시간을 기준으로 정렬한다
      .findIndex(([arriveTime]) => arriveTime <= currentTime); // 도착한 작업을 찾는다

    // 도착한 제일 짧은 작업이 없다!
    if (!~shortestJobIndex) {
      currentTime++;
      continue;
    }

    const [arrivedTime, processingTime] = jobs[shortestJobIndex];

    // 작업 배열에서 제거한다
    jobs.splice(shortestJobIndex, 1);
    // 작업을 수행한다
    currentTime += processingTime;
    // 기다린시간 + 작업처리시간을 시간 배열에 추가한다
    times.push(currentTime - arrivedTime);
  }

  const sum = times.reduce((acc, cur) => acc + cur, 0);
  return parseInt(sum / times.length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ]),
);

/**
 * 시간 초과가 나는듯
 * 처음에 풀었을 때 보다 깔끔하게 정리가 되었으나..
 * 시간을 어디서 줄여할까
 * => 시간을 최대한 줄여보아도 런타임 에러가 난다 오류가 있는건가보다
 * => 첫 작업을 선택시 0초에 작업이 들어오지 않으면 무한루프를 돌았다
 *    이 부분을 처리해서 해결 완료!
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (4.95ms, 32.2MB)
테스트 2 〉	통과 (4.08ms, 32MB)
테스트 3 〉	통과 (3.87ms, 32.1MB)
테스트 4 〉	통과 (3.51ms, 31.9MB)
테스트 5 〉	통과 (4.39ms, 32.1MB)
테스트 6 〉	통과 (0.53ms, 30MB)
테스트 7 〉	통과 (3.25ms, 31.9MB)
테스트 8 〉	통과 (3.16ms, 31.7MB)
테스트 9 〉	통과 (1.42ms, 30.3MB)
테스트 10 〉	통과 (5.07ms, 32.5MB)
테스트 11 〉	통과 (0.25ms, 30.1MB)
테스트 12 〉	통과 (0.26ms, 30MB)
테스트 13 〉	통과 (0.24ms, 30.1MB)
테스트 14 〉	통과 (0.23ms, 29.9MB)
테스트 15 〉	통과 (0.26ms, 30.1MB)
테스트 16 〉	통과 (0.19ms, 30.2MB)
테스트 17 〉	통과 (0.20ms, 29.9MB)
테스트 18 〉	통과 (0.16ms, 30.2MB)
테스트 19 〉	통과 (0.20ms, 30.2MB)
테스트 20 〉	통과 (0.14ms, 30MB)
채점 결과
정확성: 50.0
효율성: 0.0
합계: 50.0 / 50
 */
