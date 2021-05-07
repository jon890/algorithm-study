const readline = require('readline');

const inputs = [];

readline
  .createInterface({
    input: process.stdin,
    output: process.stdoutout,
  })
  .on('line', function (line) {
    inputs.push(line * 1);
  })
  .on('close', function () {
    init();
    process.exit();
  });

function solution(n) {
  // n - 1 + 1
  // n - 2 + 2
  // n - 3 + 3
  // 케이스로 분류하여
  // an = an-3 + an-2 + an-1 의 점화식 생성!

  const dp = Array(12);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}

function init() {
  const testCaseCount = inputs[0];
  for (let i = 0; i < testCaseCount; i++) {
    console.log(solution(inputs[i + 1]));
  }
}
