/**
 * 삼진법 뒤집기
 * 프로그래머스 월간 코드 챌린지 시즌 1
 * https://programmers.co.kr/learn/courses/30/lessons/68935
 */
function solution(n) {
  const converted = convertBase(n, 3);
  const reversed = converted.split("").reverse().join("");

  console.log(converted);
  console.log(reversed);

  return convert10Base(reversed, 3);
}

/**
 * 십진법의 수를 다른 진법의 수로 변환
 */
function convertBase(n, base) {
  let result = "";

  let number = n;
  while (number !== 0) {
    const remain = number % base;
    result += remain;
    number = parseInt(number / base);
  }

  return result.split("").reverse().join("");
}

/**
 * 다른 진법의 수를 10진수로 변환
 */
function convert10Base(n, base) {
  // JS 숫자의 범위를 넘어가면 다르게 출력됨 => BigInt 사용
  // https://stackoverflow.com/questions/38372658/why-does-javascript-number-function-return-wrong-value-for-this-number
  const number = BigInt(n);
  const numberString = "" + number;

  let sum = 0;
  for (let i = numberString.length; i > 0; i--) {
    const pow = numberString.length - i;
    sum += numberString.charAt(i - 1) * Math.pow(base, pow);
  }

  return sum;
}

// console.log(solution(78413450));

/**
 * fixme kbt : 진법을 변환하는 유틸리티 함수를 따로 뽑아내보자!
 * 숫자의 범위가 넘어가는지 항상 고려해보자 -> BigInt 사용
 * 
 * 정확성  테스트
테스트 1 〉	통과 (0.13ms, 30.1MB)
테스트 2 〉	통과 (0.32ms, 30.1MB)
테스트 3 〉	통과 (0.34ms, 30.3MB)
테스트 4 〉	통과 (0.32ms, 30.5MB)
테스트 5 〉	통과 (0.31ms, 30.2MB)
테스트 6 〉	통과 (0.31ms, 30.4MB)
테스트 7 〉	통과 (0.26ms, 30.3MB)
테스트 8 〉	통과 (0.35ms, 30.3MB)
테스트 9 〉	통과 (0.34ms, 30.3MB)
테스트 10 〉	통과 (0.34ms, 30.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
