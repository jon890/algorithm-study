function solution(n, a, b) {
  let answer = 1;

  while (true) {
    if (a % 2 === 0 && a - 1 === b) break;
    if (b % 2 === 0 && b - 1 === a) break;

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }
  return answer;
}

solution(8, 4, 7);
