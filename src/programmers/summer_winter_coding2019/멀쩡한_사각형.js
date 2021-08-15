function solution(w, h) {
  let discard = 0;

  for (let i = 0; i < w; i++) {
    // 구간에서의 증가량
    const delta = (h * i) / w;
    const nextDelta = (h * (i + 1)) / w;

    // 걸치는 사각형은 사용 불가능하다
    // 최소 ~ 최대 경계를 찾는다
    const lower = Math.floor(delta);
    const upper = Math.ceil(nextDelta);

    discard += upper - lower;
  }
  return w * h - discard;
}

console.log(solution(8, 12));

/**
 * 2021-07-01
 *
 * 수학적 규칙 찾기
 * 소숫점 계산시 주의
 *
 * javascript 특성 상 소수점을 가진 값의 계산이 조금 부정확합니다.
 * 예를 들면 0.1 + 0.2 = 0.300000000000000000004 처럼 나오는데요.
 * 이 말은 소수점을 가진 값을 계산을 할수록 더 부정확해진다는거죠.
 * h/w를 나눠서 i를 곱하는것은 h/w라는 소수점을 가진 값에 어떤 값을 곱해서 또 소수점을 가진 값을 만드는 것입니다.
 * 차라리 h에 i를 먼저 곱한뒤 w로 나눠보세요 그럼 계산이 더 정확해져서 통과합니다.
 */
