const INF = 100000;

function solution(n, edge) {
  const graph = getGraph(n, edge);
  const distance = dijkstra(0, graph);
  const max = Math.max(...distance);
  return distance.filter((d) => d === max).length;
}

function getGraph(n, edge) {
  const graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = Array(n).fill(INF);
    graph[i][i] = 0;
  }

  edge.forEach(([start, end]) => {
    const newStart = start - 1;
    const newEnd = end - 1;
    graph[newStart][newEnd] = 1;
    graph[newEnd][newStart] = 1;
  });

  return graph;
}

function dijkstra(start, graph) {
  const visit = Array(graph.length).fill(false);
  visit[start] = true;

  const distance = [...graph[start]];
  distance[start] = 0;

  for (let i = 0; i < graph.length - 2; i++) {
    const current = getSmallestNode(distance, visit);
    visit[current] = true;

    for (let j = 0; j < graph.length; j++) {
      if (!visit[j]) {
        // 해당 노드를 거쳐 다른 노드로 가는 비용을 계산 하여 테이블 업데이트
        const goThrough = distance[current] + graph[current][j];
        if (goThrough < distance[j]) {
          distance[j] = goThrough;
        }
      }
    }
  }

  return distance;
}

// 방문하지 않은 노드중 가장 짧은 것을 찾는다
function getSmallestNode(distance, visit) {
  let nearIndex = -1;
  let nearDistance = INF;

  for (let i = 0; i < distance.length; i++) {
    if (visit[i]) continue;

    if (distance[i] < nearDistance) {
      nearIndex = i;
      nearDistance = distance[i];
    }
  }

  return nearIndex;
}

/**
 * 2021-05-18
 * 테스트  7, 8, 9 는 아마도 시간 초과가 나는듯 하다.
 * 정확성  테스트
테스트 1 〉	통과 (0.28ms, 30.2MB)
테스트 2 〉	통과 (0.37ms, 30.3MB)
테스트 3 〉	통과 (0.46ms, 30.1MB)
테스트 4 〉	통과 (2.42ms, 32.7MB)
테스트 5 〉	통과 (12.76ms, 37.2MB)
테스트 6 〉	통과 (26.19ms, 44.8MB)
테스트 7 〉	실패 (signal: aborted (core dumped))
테스트 8 〉	실패 (signal: aborted (core dumped))
테스트 9 〉	실패 (signal: aborted (core dumped))
채점 결과
정확성: 66.7
합계: 66.7 / 100.0
 */
