function solution(n) {
  let answer = 0;

  // + 1을 할것인가 아니면 x2를 할것인가
  // n은 10억까지
  while (n) {
    if (n % 2 === 0) {
      n = Math.floor(n / 2);
    } else {
      n--;
      answer++;
    }
  }
  console.log(answer);
  return answer;
}

// K칸 점프 or 현재까지온거리 x2(순간이동)
// 순간이동 => 소모량 0, K점프 소모량 K
// 순간이동이 효율적

solution(5);
solution(6);
solution(5000);

/**
 * 2021-07-03
 * 비슷한 문제를 풀어본 경험이 떠올랐다
 * 무조건 순간이동이 효율적이므로
 * 2의 배수이면 순간이동을 택하고
 * 그렇지 않다면 점프를 하면됨
 */
