const readline = require('readline');

readline
  .createInterface({
    input: process.stdin,
    output: process.stdoutout,
  })
  .on('line', function (line) {
    const input = parseInt(line);
    console.log(solution(input));
  })
  .on('close', function () {
    process.exit();
  });

/**
 * 1로 만들기
 * https://www.acmicpc.net/problem/1463
 */
function solution(n) {
  const dp = Array(10e6 + 1);
  dp[1] = 0;

  // 다이나믹 프로그래밍 진행 보텀업
  for (let i = 2; i <= n; i++) {
    // 현재의 수에서 1을 빼는 경우
    dp[i] = dp[i - 1] + 1;

    // 현재의 수가 2로 나누어 떨어지는 경우
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[parseInt(i / 2)] + 1);
    }

    // 현재의 수가 3으로 나누어 떨어지는 경우
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[parseInt(i / 3)] + 1);
    }
  }

  return dp[n];
}
