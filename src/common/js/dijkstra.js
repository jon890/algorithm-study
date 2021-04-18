function dijkstra(startIndex, graph) {
  const number_of_nodes = graph.length;

  const distance = new Array(number_of_nodes);
  distance.fill(Number.MAX_VALUE, 0, distance.length);
  distance[startIndex] = 0; // 시작 노드 => 시작 노드 거리는 0으로 한다

  const visited = new Array(number_of_nodes);
  visited.fill(false, 0, visited.length);

  while (true) {
    // 모든 노드를 방문하면 종료
    const exit = !visited.includes(false);
    if (exit) {
      break;
    }

    // 방문하지 않은 노드 중 제일 거리가 짧은 노드를 찾는다
    const not_visited = distance.map((d, index) =>
      visited[index] ? Number.MAX_VALUE : d
    );
    const smallestIndex = not_visited.indexOf(Math.min(...not_visited));

    // 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 테이블 업데이트
    graph[smallestIndex].some((next, destination) => {
      if (!next) {
        return false; // continue
      }
      const current = distance[destination];
      const goThrough = distance[smallestIndex] + next;

      if (current > goThrough) {
        distance[destination] = goThrough;
      }
    });

    // 노드를 방문했다고 기록한다
    visited[smallestIndex] = true;
  }

  return distance;
}
