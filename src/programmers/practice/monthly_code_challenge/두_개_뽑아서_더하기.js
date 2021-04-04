/**
 * 두 개 뽑아서 더하기
 * 프로그래머스 월간 코드 챌린지 시즌 1
 * https://programmers.co.kr/learn/courses/30/lessons/68644
 *
 * @param {*} numbers
 */
function solution(numbers) {
  // 중복 원소를 제거하기 위해 set으로 선언
  const answer = new Set();

  // 두수를 모두 더해본다.
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const a = numbers[i];
      const b = numbers[j];
      const c = a + b;
      answer.add(c);
    }
  }

  return [...answer].sort((a, b) => a - b);
}

/**
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.08ms, 30.3MB)
테스트 2 〉	통과 (0.09ms, 30.2MB)
테스트 3 〉	통과 (0.09ms, 30.3MB)
테스트 4 〉	통과 (0.09ms, 30.3MB)
테스트 5 〉	통과 (0.11ms, 30.1MB)
테스트 6 〉	통과 (0.17ms, 30.1MB)
테스트 7 〉	통과 (0.71ms, 30.2MB)
테스트 8 〉	통과 (0.70ms, 30.1MB)
테스트 9 〉	통과 (0.65ms, 30.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
