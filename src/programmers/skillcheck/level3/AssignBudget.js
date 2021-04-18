/**
 * 프로그래머스
 * 스킬체크 레벨 3
 *
 * Assign Budget (예산 배정)
 * chanllenge_id=2464
 *
 */
function solution(budgets, M) {
  // 예산액 배열 정렬
  budgets.sort((b1, b2) => b2 - b1);

  let answer;
  let exceed_number = 0; // 예산 요청을 넘은 갯수
  let current_budget = 0; // 사용한 예산

  // 예산액 제일 큰 것 부터 검사 시작
  // 초괴 ~ 통과 사이의 값을 찾는다
  for (let i = 0; i < budgets.length; i++) {
    current_budget = 0;
    exceed_number = i;

    // 예산 요청을 넘지않은 지방에 한하여 예산을 모두 더한다
    for (let j = exceed_number; j < budgets.length; j++) {
      current_budget += budgets[j];
    }

    // 나머지 금액은 상한액 만큼 더한다
    current_budget += exceed_number * budgets[i];

    if (current_budget <= M) {
      answer = budgets[i];
      break;
    }
  }

  // 남은 예산 사용하기
  const remain = M - current_budget;
  answer += Math.floor(remain / exceed_number);

  return answer;
}

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	실패 (3.59ms, 37.7MB)
테스트 2 〉	실패 (3.58ms, 37.7MB)
테스트 3 〉	실패 (3.51ms, 37.8MB)
테스트 4 〉	통과 (2.05ms, 37.2MB)
테스트 5 〉	통과 (3.35ms, 37.1MB)
테스트 6 〉	통과 (2.14ms, 37.2MB)
테스트 7 〉	실패 (3.38ms, 37.7MB)
테스트 8 〉	실패 (3.65ms, 37.8MB)
테스트 9 〉	실패 (3.61ms, 37.6MB)
테스트 10 〉	실패 (3.55ms, 37.8MB)
테스트 11 〉	실패 (3.53ms, 37.8MB)
테스트 12 〉	통과 (2.26ms, 37.3MB)
테스트 13 〉	실패 (3.58ms, 37.8MB)
테스트 14 〉	통과 (2.15ms, 37.5MB)
테스트 15 〉	실패 (3.54ms, 37.7MB)
효율성  테스트
테스트 1 〉	실패 (8.50ms, 38.3MB)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	통과 (22.71ms, 38.4MB)
테스트 4 〉	실패 (9.37ms, 38.2MB)
테스트 5 〉	실패 (12.69ms, 38.7MB)
채점 결과
정확성: 12.5
효율성: 2.5
합계: 15.0 / 50

하아...
상한액을 변경할때를 다시 생각해봐!!
너무 어려웠다 이번 테스트는...!!!
기본기 역량을 더 쌓자!!
 */
