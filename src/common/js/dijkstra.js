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
