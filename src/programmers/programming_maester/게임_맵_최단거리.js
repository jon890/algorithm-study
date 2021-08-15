function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // n x m 배열을 만들어 방문했는지 체크한다
  const visited = new Array(n).fill().map((_) => new Array(m));
  const move = [
    { x: -1, y: 0 }, // 위로 이동
    { x: 0, y: 1 }, // 오른쪽으로 이동
    { x: 1, y: 0 }, // 아래로 이동
    { x: 0, y: -1 }, // 왼쪽으로 이동
  ];

  const queue = [];
  let answer = -1;

  queue.push({ x: 0, y: 0, cost: 1 }); // 시작 위치를 넣는다
  visited[0][0] = true;

  while (queue.length) {
    const { x, y, cost } = queue.shift();

    if (x === n - 1 && y === m - 1) {
      answer = cost;
      break;
    }

    for (const { x: moveX, y: moveY } of move) {
      const nextX = x + moveX;
      const nextY = y + moveY;

      // 지도를 넘어가는 경우 체크
      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;
      // 장애물이 있는 경우 체크
      if (maps[nextX][nextY] === 0) continue;
      // 방문한 노드 체크
      if (visited[nextX][nextY]) continue;

      queue.push({ x: nextX, y: nextY, cost: cost + 1 });
      visited[nextX][nextY] = true;
    }
  }

  return answer;
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]);

/**
 * 2021-07-01
 * BFS에 대해 더 공부해보자
 * BFS는 최단경로를 구하는 알고리즘
 */
