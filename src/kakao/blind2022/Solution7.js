function solution(board, aloc, bloc) {
  var answer = -1;
  return answer;
}

// 발판이 있어야 서 있을 수 있다
// 발판은 캐릭터가 이동하면 사라짐
// 상하좌우로 이동 가능

// 상하좌우가 모두 없거나, 보드 밖이라서 이동 불가능 => 패배
// 같은 발판에 있을 때, 상대 플레이어가 다른 발판으로 이동하면 => 사라짐 => 패배
