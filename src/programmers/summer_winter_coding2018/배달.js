function solution(N, road, K) {
  const graph = getGraph(N, road);
  const distance = dijkstra(0, graph);
  return distance.filter((d) => d <= K).length;
}

function getGraph(N, road) {
  // N x N 의 2차원 그래프 생성
  const graph = new Array(N).fill().map((_) => new Array(N).fill(Infinity));

  for (let [start, end, distance] of road) {
    start--;
    end--;

    // 도로가 여러개 있을 수 있으므로 이전값과 비교
    distance = Math.min(distance, graph[start][end] || 0);
    graph[start][end] = distance;
    graph[end][start] = distance;
  }

  return graph;
}

function dijkstra(startIndex, graph) {
  const n = graph.length; // 노드 갯수

  const distance = new Array(n).fill(Infinity);
  distance[startIndex] = 0; // 시작 노드 => 시작 노드 거리는 0으로 한다

  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    // 방문하지 않은 노드중 가장 짧은 거리에 있는 노드를 찾음
    const shortestIndex = getShortest();
    visited[shortestIndex] = true;

    // 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 테이블 업데이트
    graph[shortestIndex].forEach((next, destination) => {
      if (next === Infinity) return; // 다른 노드로 갈 수 없다면 continue

      const current = distance[destination];
      const goThrough = distance[shortestIndex] + next;
      if (current > goThrough) distance[destination] = goThrough;
    });
  }

  function getShortest() {
    let index = -1;
    let min = Infinity;
    for (let i = 0; i < distance.length; i++) {
      if (visited[i]) continue;

      if (distance[i] < min) {
        index = i;
        min = distance[i];
      }
    }
    return index;
  }

  return distance;
}

solution(
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3,
);

solution(
  6,
  [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  4,
);
