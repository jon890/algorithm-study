function solution(board, skill) {
  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    // type1 => 공격
    // type2 => 회복

    let after = degree;
    if (type === 1) after *= -1;
    else if (type === 2) after *= 1;

    for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
        board[i][j] += after;
      }
    }
  });

  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] > 0) count++;
    }
  }
  console.log(count);
  return count;
}

solution(
  [
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5],
  ],
  [
    [1, 0, 0, 3, 4, 4],
    [1, 2, 0, 2, 3, 2],
    [2, 1, 0, 3, 1, 2],
    [1, 0, 1, 3, 3, 1],
  ],
);

/**
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.14ms, 30MB)
테스트 2 〉	통과 (0.13ms, 30.1MB)
테스트 3 〉	통과 (0.23ms, 30MB)
테스트 4 〉	통과 (0.44ms, 30MB)
테스트 5 〉	통과 (0.60ms, 30MB)
테스트 6 〉	통과 (2.23ms, 33.1MB)
테스트 7 〉	통과 (3.20ms, 33MB)
테스트 8 〉	통과 (3.72ms, 33.1MB)
테스트 9 〉	통과 (5.28ms, 33MB)
테스트 10 〉	통과 (7.18ms, 32.8MB)
효율성  테스트
테스트 1 〉	실패 (시간 초과)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (시간 초과)
채점 완료
 */
