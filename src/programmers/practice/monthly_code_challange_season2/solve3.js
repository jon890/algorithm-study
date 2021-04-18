function solution(a, edges) {
  // 불가능한 경우 모든 노드의 합이 0이 아님
  if (!isAvailable(a)) {
    return -1;
  }

  // 두 노드를 잇는 그래프 초기화
  const graph = new Array(a.length);
  for (let i = 0; i < graph.length; i++) {
    const array = new Array(a.length);
    // 갈 수 없는 길은 MAX_VALUE 처리
    array.fill(Number.MAX_VALUE, 0, array.length);
    graph[i] = array;
  }

  edges.forEach(([start, end]) => {
    // 두 노드사이는 직접 연결되어있으므로 거리가 1
    graph[start][end] = 1;
    graph[end][start] = 1;
  });

  while (true) {
    const hasOtherValue = ~a.find((v) => v !== 0);
    if (!hasOtherValue) {
      break;
    }

    // - 값을 기준으로 주변을 탐색하자
    const minusNodeIndex = a.findIndex((v) => v < 0);
    const minusNodeValue = a[minusNodeIndex];
    console.log(minusNodeIndex, minusNodeValue);

    // 다익스트라 알고리즘을 통해 해당노드로부터의 거리들을 찾자
    const distances = dijkstra(minusNodeIndex, graph);

    // 해당 음수값을 
    const values = distances.map(value, (index) => {});
    break;
  }

  return 0;
}

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

function isAvailable(a) {
  let sum = a.reduce((acc, cur) => acc + cur, 0);
  return sum === 0;
}

solution(
  [-5, 0, 2, 1, 2],
  [
    [0, 1],
    [3, 4],
    [2, 3],
    [0, 3],
  ]
);
