function solution(lottos, win_nums) {
  // 로또에 낙서 -> 일부 번호 알아볼수 없다
  // 이때 가능한 최고 순위, 최저 순위

  // 44 1 0 0   31 25 -> 알아볼수 없음 0
  // 6  1 45 10 31 9
  // 최고 4개 일치
  // 최저 2개 일치

  // 상수
  const CANT_RECONGNIZE = 0;

  const filter = lottos.filter((value) => value !== CANT_RECONGNIZE);

  let correct_count = 0; // 반드시 맞힌 로또 숫자 갯수
  let cant_recongnize_count = lottos.length - filter.length; // 알아볼수 없는 숫자의 갯수

  filter.forEach((value) => {
    if (win_nums.includes(value)) {
      correct_count++;
    }
  });

  const max = correct_count + cant_recongnize_count;
  const min = correct_count;
  return [getRank(max), getRank(min)];
}

function getRank(score) {
  switch (score) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

// 답 [3,5]
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

/**
 * 2021-06-21
 * 정확성  테스트
테스트 1 〉	통과 (0.08ms, 30.1MB)
테스트 2 〉	통과 (0.08ms, 30.1MB)
테스트 3 〉	통과 (0.11ms, 30.1MB)
테스트 4 〉	통과 (0.12ms, 30.2MB)
테스트 5 〉	통과 (0.12ms, 30MB)
테스트 6 〉	통과 (0.12ms, 30MB)
테스트 7 〉	통과 (0.12ms, 29.9MB)
테스트 8 〉	통과 (0.12ms, 29.9MB)
테스트 9 〉	통과 (0.11ms, 30.1MB)
테스트 10 〉	통과 (0.13ms, 30MB)
테스트 11 〉	통과 (0.12ms, 29.9MB)
테스트 12 〉	통과 (0.11ms, 29.9MB)
테스트 13 〉	통과 (0.12ms, 30.2MB)
테스트 14 〉	통과 (0.11ms, 30.1MB)
테스트 15 〉	통과 (0.10ms, 30.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
