/**
 * 풍선 터뜨리기
 * 프로그래머스 월간 코드 챌린지 시즌 1
 * https://programmers.co.kr/learn/courses/30/lessons/68646?language=javascript
 * @param {Array} a
 */
function solution(a) {
  // 모든 경우를 검증하고 나온 결과를 set에 담자
  const answers_set = new Set();
  bfs(a, false, answers_set);
  return answers_set.size;
}

function bfs(balloons, smallerBalloonPop_flag, answer_set) {
  if (balloons.length === 1) {
    answer_set.add(balloons[0]);
    return;
  }

  for (let i = 0; i < balloons.length - 1; i++) {
    // balloons 배열 복사
    const new_balloons = [...balloons];

    const a = new_balloons[i];
    const b = new_balloons[i + 1];

    // 작은 수를 제거하는 경우 flag = true => 다음번에 진행되지 않게
    if (smallerBalloonPop_flag) {
      // 이미 작은 수를 한 번 제거
      // 큰 수를 제거
      if (a > b) {
        new_balloons.splice(i, 1);
      } else {
        new_balloons.splice(i + 1, 1);
      }
      bfs(new_balloons, true, answer_set);
    } else {
      // 아직 작은 수를 제거하지 않음
      // 작은 수를 제거
      let smaller_delete = new_balloons.filter(
        (value) => value !== Math.min(a, b)
      );
      bfs(smaller_delete, true, answer_set);

      // 큰 수를 제거
      let bigger_delete = new_balloons.filter(
        (value) => value !== Math.max(a, b)
      );
      bfs(bigger_delete, false, answer_set);
    }
  }
}

/**
 * bfs시 계속 배열의 복사가 일어나고 참조하는게 너무 많아지면서
 * 메모리 오류가 나는듯 하다
 * 흠.. 딱 테스트 케이스만 통과하는 정도군
 * 깔끔하게 풀 수 있는 방법을 더 고민해보자..
 * 
정확성  테스트
테스트 1 〉	통과 (0.24ms, 30.1MB)
테스트 2 〉	통과 (0.23ms, 30MB)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (signal: aborted (core dumped))
테스트 5 〉	실패 (signal: aborted (core dumped))
테스트 6 〉	실패 (signal: aborted (core dumped))
테스트 7 〉	실패 (signal: aborted (core dumped))
테스트 8 〉	실패 (signal: aborted (core dumped))
테스트 9 〉	실패 (signal: aborted (core dumped))
테스트 10 〉	실패 (signal: aborted (core dumped))
테스트 11 〉	실패 (signal: aborted (core dumped))
테스트 12 〉	실패 (signal: aborted (core dumped))
테스트 13 〉	실패 (signal: aborted (core dumped))
테스트 14 〉	실패 (signal: aborted (core dumped))
테스트 15 〉	실패 (signal: aborted (core dumped))
채점 결과
정확성: 13.3
합계: 13.3 / 100.0
 */

console.log(solution([9, -1, -5]));
