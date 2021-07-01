function solution(left, right) {
  let sum = 0;

  // 약수가 짝수는 더하고, 홀수는 뺀다
  for (let i = left; i <= right; i++) {
    const set = getDivisor(i);
    if (set.size % 2 === 0) {
      sum += i;
    } else {
      sum -= i;
    }
  }

  return sum;
}

/**
 * 약수를 반환하는 함수
 * @param {Number} number
 */
function getDivisor(number) {
  const set = new Set();
  const last = parseInt(number / 2);

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      set.add(i);
      set.add(parseInt(number / i));
    }
  }
  return set;
}

solution(13, 17);

function solution_mathmatical(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

/**
 * 2021-06-26
 *
 * Number.isInteger 메소드
 * Math.sqrt 메소드
 * 자연수 중, 약수의 갯수가 홀수인 것 => 제곱수
 */
