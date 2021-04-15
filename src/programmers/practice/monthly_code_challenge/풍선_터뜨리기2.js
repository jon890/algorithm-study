const answers = new Set();

/**
 * 풍선 터뜨리기
 * 프로그래머스 월간 코드 챌린지 시즌 1
 * https://programmers.co.kr/learn/courses/30/lessons/68646?language=javascript
 * @param {Array} a
 */
function solution(a) {
  // 모든 경우를 검증하고 나온 결과를 set에 담자
  bfs(a);
  return answers.size;
}

function bfs(balloons) {
  if (balloons.length === 1) {
    answers.add(balloons[0]);
    return;
  }

  for (let i = 0; i < balloons.length - 1; i++) {
    const small = Math.min(balloons[i], balloons[i + 1]);
    const big = Math.max(balloons[i], balloons[i + 1]);

    // 아직 작은 수를 제거하지 않음
    // 둘중에 더 작은 숫자를 제거한다
    // 작은 숫자를 제거하면 이제부터는 큰 수를 제거해야하므로
    // 최종적으로 제일 작은 수만 남게된다
    let smallDelete = balloons.filter((value) => value !== small);
    const minimum = Math.min(...smallDelete);
    answers.add(minimum);

    // 큰 수를 제거
    // splice vs filter
    // splice는 기존 배열의 변화
    // filter는 새로운 배열 생성
    let biggerDelete = balloons.filter((value) => value !== big);
    bfs(biggerDelete);
  }
}

console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));
/**
 * 작은 풍선을 한 번 터뜨리면
 * 큰 풍선만 제거해야하므로 => 작은 풍선을 터 뜨린후 최솟값을 즉시 answer 후보에 올리는 방식으로
 * 개선해보았는데 통과하진 못했다 ㅠㅠ
 * 생각보다 어렵네..
 * 
 * 정확성  테스트
테스트 1 〉	통과 (0.16ms, 30.1MB)
테스트 2 〉	통과 (0.17ms, 29.9MB)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (signal: aborted (core dumped))
테스트 5 〉	실패 (런타임 에러)
테스트 6 〉	실패 (런타임 에러)
테스트 7 〉	실패 (런타임 에러)
테스트 8 〉	실패 (런타임 에러)
테스트 9 〉	실패 (런타임 에러)
테스트 10 〉	실패 (런타임 에러)
테스트 11 〉	실패 (런타임 에러)
테스트 12 〉	실패 (런타임 에러)
테스트 13 〉	실패 (런타임 에러)
테스트 14 〉	실패 (런타임 에러)
테스트 15 〉	실패 (런타임 에러)
채점 결과
정확성: 13.3
합계: 13.3 / 100.0
 */
