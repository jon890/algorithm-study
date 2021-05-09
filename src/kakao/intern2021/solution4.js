const INF = 5000;

function solution(n, start, end, roads, traps) {
  /**
   * 미로 탈출
   * 함정 존재 -> 함정에 걸리면 연결된 모든 화살표의 방향 변경
   * 탈출하는데 최소 시간
   * 함정이 있는 빠른 길찾기
   */
  // 그래프 초기화
  const graph = new Array(n);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Array(n).fill(INF);
    graph[i][i] = 0;
  }

  // 그래프에 roads 정보를 담음
  roads.forEach(([nodeStart, nodeEnd, cost]) => {
    graph[nodeStart - 1][nodeEnd - 1] = cost;
  });

  const distance = dijkstra(start - 1, graph, traps);
  console.log(distance);
  return distance[end - 1];
}

function dijkstra(start, graph, traps) {
  const n = graph.length; // 노드 갯수

  const distance = [...graph[start]];
  distance[start] = 0; // 시작 노드 => 시작 노드 거리는 0으로 한다

  const visited = new Array(n);
  visited.fill(false);
  visited[start] = true;

  for (let i = 0; i < n - 2; i++) {
    const current = getSmallestNode(distance, visited);
    visited[current] = true;

    // 트랩인지 확인 후 그래프 업데이트
    if (traps.includes(current + 1)) {
      const trapped = graph[current];
      for (let j = 0; j < trapped.length; j++) {
        // swap
        const temp = trapped[i];
        graph[current][j] = graph[j][current];
        graph[j][current] = temp;
      }
    }

    for (let j = 0; j < n; j++) {
      if (!visited[j]) {
        // 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 테이블 업데이트
        const goThrough = distance[current] + graph[current][j];
        if (goThrough < distance[j]) {
          distance[j] = goThrough;
        }
      }
    }
  }

  return distance;
}

function getSmallestNode(distance, visited) {
  // 방문하지 않은 노드 중 제일 거리가 짧은 노드를 찾는다
  let nearNodeIndex = -1;
  let nearDistance = INF;
  for (let i = 0; i < distance.length; i++) {
    if (visited[i]) {
      continue;
    }

    if (distance[i] < nearDistance) {
      nearNodeIndex = i;
      nearDistance = distance[i];
    }
  }
  return nearNodeIndex;
}

// solution(
//   3,
//   1,
//   3,
//   [
//     [1, 2, 2],
//     [3, 2, 3],
//   ],
//   [2],
// );
solution(
  4,
  1,
  4,
  [
    [1, 2, 1],
    [3, 2, 1],
    [2, 4, 1],
  ],
  [2, 3],
);
