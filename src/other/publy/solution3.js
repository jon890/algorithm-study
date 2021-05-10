function solution(numbers) {
  // 모든경우 검사
  // 최대 2^100 안괜찮아보이는데
  // 가지치기가 있는 bfs?
  const answer = [0];
  bfs(numbers, 0, 0, answer);
  return answer[0];
}

function bfs(numbers, current, depth, answer) {
  if (depth === numbers.length) {
    if (current === 0) {
      answer[0]++;
    }
    return;
  }

  const num = numbers[depth];
  const newDepth = depth + 1;
  bfs(numbers, current + num, newDepth, answer);
  bfs(numbers, current - num, newDepth, answer);
}

solution([1, 1, 1, 1]);
