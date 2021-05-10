function solution(estimates, k) {
  const sumList = [];

  for (let i = 0; i <= estimates.length - k; i++) {
    const sum = estimates.slice(i, i + k).reduce((acc, cur) => acc + cur, 0);
    sumList.push(sum);
  }

  return Math.max(...sumList);
}

solution([5, 1, 9, 8, 10, 5], 3);
