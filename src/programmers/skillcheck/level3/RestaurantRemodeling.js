function solution(n, weak, dist) {
  // dist => 친구들 이동거리를 내림차순으로 정렬
  // 이동거리가 큰 친구부터 최소로 사용해야함
  dist.sort((a, b) => b - a);
  console.log(dist);

  // 친구들의 초기위치는 바로 취약지점이 좋고
  // 어떤 기준으로 잡아야하나..?
  // 이 문제를 어떤 것으로 환원할수 있는지 생각해보자
  // 최소한의 영역을 사용해서 배열의 점들을 덮을 수 있는경우?
  // 배열은 아니다 좀 다르다 양끝이 이어져있다.

  // 제일 가까운 다른 취약지점간의 거리가 짧은것으로 이동하는게 좋겠지?
  const new_weaks = weak.map((item) => {
    // 나와 제일 가까운 거리를 같이 기록
  });
  var answer = 0;
  return answer;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));
