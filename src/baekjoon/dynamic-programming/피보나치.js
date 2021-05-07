const readline = require('readline');

const inputs = [];

readline
  .createInterface({
    input: process.stdin,
    output: process.stdoutout,
  })
  .on('line', function (line) {
    inputs.push(line * 1); // 숫자로 변환
  })
  .on('close', function () {
    init();
    process.exit();
  });

/**
 * 피보나치
 * https://www.acmicpc.net/problem/1003
 */
function solution(n) {
  // n번째 피보나치 수를 재귀로 구했을 때
  // f(0)과 f(1)의 호출되는 횟수
  const dp = Array(n + 1);
  dp[0] = [1, 0];
  dp[1] = [0, 1];
  dp[2] = [1, 1];

  for (let i = 3; i <= n; i++) {
    dp[i] = Array(2);
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i - 2][j];
    }
  }

  return dp[n];
}

function init() {
  const testCaseCount = inputs[0];
  for (let i = 0; i < testCaseCount; i++) {
    const [f0_count, f1_count] = solution(inputs[i + 1]);
    console.log(`${f0_count} ${f1_count}`);
  }
}
