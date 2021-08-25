/**
 * 2021-08-22
 * 빡빡한 문제는 아닌듯
 * 효율성도 쉽게 통과해버렸다..!!
 * 규칙찾기 문제가 아니였나보다
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.06ms, 30MB)
테스트 2 〉	통과 (0.06ms, 30MB)
테스트 3 〉	통과 (0.06ms, 29.8MB)
테스트 4 〉	통과 (0.06ms, 30MB)
테스트 5 〉	통과 (0.07ms, 30.1MB)
테스트 6 〉	통과 (0.06ms, 30.1MB)
테스트 7 〉	통과 (0.07ms, 30.1MB)
테스트 8 〉	통과 (0.06ms, 30MB)
테스트 9 〉	통과 (0.08ms, 29.8MB)
테스트 10 〉	통과 (0.09ms, 29.8MB)
테스트 11 〉	통과 (0.06ms, 30MB)
테스트 12 〉	통과 (0.07ms, 30MB)
테스트 13 〉	통과 (0.07ms, 29.9MB)
테스트 14 〉	통과 (0.07ms, 30.1MB)
효율성  테스트
테스트 1 〉	통과 (0.11ms, 30MB)
테스트 2 〉	통과 (0.10ms, 30MB)
테스트 3 〉	통과 (0.12ms, 30MB)
테스트 4 〉	통과 (0.09ms, 29.7MB)
테스트 5 〉	통과 (0.12ms, 29.8MB)
테스트 6 〉	통과 (0.10ms, 30MB)
채점 결과
정확성: 70.0
효율성: 30.0
합계: 100.0 / 100.0
 */

function solution(n) {
  const oneCount = count(n.toString(2), '1');

  while (true) {
    n++;
    const nextCount = count(n.toString(2), '1');
    if (oneCount === nextCount) return n;
  }
}

function count(source, target) {
  let count = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === target) count++;
  }
  return count;
}

solution(78);
