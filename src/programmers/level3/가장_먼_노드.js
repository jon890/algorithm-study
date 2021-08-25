/**
 * 다익스트라 최종버전
 * 인접행렬
 * 최소힙
 * 위를 모두 사용하는것으로 업데이트하자!!
 * 2021-08-23
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.28ms, 30MB)
테스트 2 〉	통과 (0.30ms, 30.3MB)
테스트 3 〉	통과 (0.83ms, 29.8MB)
테스트 4 〉	통과 (3.20ms, 32MB)
테스트 5 〉	통과 (10.45ms, 34.5MB)
테스트 6 〉	통과 (15.95ms, 36.1MB)
테스트 7 〉	통과 (668.74ms, 51.6MB)
테스트 8 〉	통과 (1844.26ms, 67.7MB)
테스트 9 〉	통과 (1568.60ms, 67.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(n, edge) {
  // 인접행렬 그래프 초기화
  const adj = new Array(n);
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }

  edge.forEach(([start, end]) => {
    adj[start - 1].push([end - 1, 1]);
    adj[end - 1].push([start - 1, 1]);
  });

  const distance = dijkstra(0, adj);
  console.log(distance);

  // 최댓값의 갯수를 세기
  const max = distance.sort((a, b) => b - a)[0];
  let count = 0;
  for (let i = 0; i < distance.length; i++) {
    if (max === distance[i]) count++;
    else break;
  }
  return count;
}

function dijkstra(start, graph) {
  const NODE_COUNT = graph.length;

  const distance = new Array(NODE_COUNT).fill(Infinity);
  const visited = new Array(NODE_COUNT).fill(false);

  distance[start] = 0;

  for (let i = 0; i < NODE_COUNT; i++) {
    // 제일 가까운 노드를 찾는다
    const shortestIndex = findShortest();
    visited[shortestIndex] = true;

    // 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 테이블 업데이트
    graph[shortestIndex].forEach(([destination, nextDistance]) => {
      const current = distance[destination];
      const goThrough = distance[shortestIndex] + nextDistance;
      if (current > goThrough) distance[destination] = goThrough;
    });
  }

  // 방문하지 않은 노드중 가장 가까운 노드를 찾는다
  function findShortest() {
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

// 1번 노드에서 가장 멀리 떨어진 노드의 갯수

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
