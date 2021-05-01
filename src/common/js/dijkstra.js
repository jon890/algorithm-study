function dijkstra(startIndex, graph) {
  const n = graph.length; // 노드 갯수

  const distance = new Array(n);
  distance.fill(Number.MAX_VALUE, 0, n);
  distance[startIndex] = 0; // 시작 노드 => 시작 노드 거리는 0으로 한다

  const visited = new Array(n);
  visited.fill(false, 0, n);

  while (true) {
    // 모든 노드를 방문하면 종료
    let exit = true;
    for (let i = 0; i < visited.length; i++) {
      if (!visited[i]) {
        exit = false;
        break;
      }
    }

    if (exit) {
      break;
    }

    // 방문하지 않은 노드 중 제일 거리가 짧은 노드를 찾는다
    let nearNodeIndex = -1;
    let nearDistance = Number.MAX_VALUE;
    for (let i = 0; i < distance.length; i++) {
      if (visited[i]) {
        continue;
      }

      if (distance[i] < nearDistance) {
        nearNodeIndex = i;
        nearDistance = distance[i];
      }
    }

    // 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 테이블 업데이트
    graph[nearNodeIndex].some((next, destination) => {
      if (!next) {
        return false; // continue
      }
      const current = distance[destination];
      const goThrough = distance[nearNodeIndex] + next;

      if (current > goThrough) {
        distance[destination] = goThrough;
      }
    });

    // 노드를 방문했다고 기록한다
    visited[nearNodeIndex] = true;
  }

  return distance;
}