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
  // n번째 집을 칠했을 떄 최적의 해를 비교?
  // 일단 떠오르는건 노드가 1000개 이하이므로 bfs가 떠오름

  bfs(0, null, 0, colorCosts);
  results.sort((a, b) => a - b);
  return results[0];
}

function bfs(depth, prevColor, currentCost, colorCosts) {
  if (depth === colorCosts.length) {
    results.push(currentCost);
    return;
  }

  // 현재 칠할 집의 색상 가격을 가져온다
  const [COST_RED, COST_GREEN, COST_BLUE] = colorCosts[depth];

  // 모든 경우를 확인한다, 단 이전 집에 사용한 색상은 사용할 수 없다
  switch (prevColor) {
    case RED:
      bfs(depth + 1, GREEN, currentCost + COST_GREEN, colorCosts);
      bfs(depth + 1, BLUE, currentCost + COST_BLUE, colorCosts);
      break;
    case GREEN:
      bfs(depth + 1, RED, currentCost + COST_RED, colorCosts);
      bfs(depth + 1, BLUE, currentCost + COST_BLUE, colorCosts);
      break;
    case BLUE:
      bfs(depth + 1, RED, currentCost + COST_RED, colorCosts);
      bfs(depth + 1, GREEN, currentCost + COST_GREEN, colorCosts);
      break;
    default:
      bfs(depth + 1, RED, currentCost + COST_RED, colorCosts);
      bfs(depth + 1, GREEN, currentCost + COST_GREEN, colorCosts);
      bfs(depth + 1, BLUE, currentCost + COST_BLUE, colorCosts);
      break;
  }
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

// 시간초과!!
