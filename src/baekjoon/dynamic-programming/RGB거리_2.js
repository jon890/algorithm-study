const readline = require('readline');

const inputs = [];

readline
  .createInterface({
    input: process.stdin,
    output: process.stdoutout,
  })
  .on('line', function (line) {
    inputs.push(line);
  })
  .on('close', function () {
    init();
    process.exit();
  });

const results = [];
const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';

/**
 * RGB거리
 * https://www.acmicpc.net/problem/1149
 */
function solution(count, colorCosts) {
  // 집의 갯수, 집을 각각 rgb로 칠하는 가격의 리스트가 있을 때
  // 조건을 만족하며 가장 가격이 적게드는 방법

  // n-1 번째까지 집을 칠했을때의 최적의 해를 통해
  // 이전 최적의 해를 저장하고 다음 최적의 해를 찾는다
  const dp = Array(count);
  dp[0] = colorCosts[0];

  for (let i = 1; i < count; i++) {
    dp[i] = Array(3);
    dp[i][0] = colorCosts[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = colorCosts[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = colorCosts[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  return Math.min(...dp[count - 1]);
}

function init() {
  const homeCount = inputs[0] * 1;
  const colorCosts = [];
  // 0 번쨰원소는 집의 갯수이므로
  // 1부터 for문을 시작
  for (let i = 1; i < inputs.length; i++) {
    const [r, g, b] = inputs[i].split(' '); // 공백을 기준으로 분리
    colorCosts.push([r * 1, g * 1, b * 1]); // 숫자로 변환
  }
  const answer = solution(homeCount, colorCosts);
  console.log(answer);
}
