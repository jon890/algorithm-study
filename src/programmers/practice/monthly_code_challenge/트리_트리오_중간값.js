/**
 * 트리 트리오 중간값
 * 프로그래머스 월간 코드 챌린지 시즌 1
 * https://programmers.co.kr/learn/courses/30/lessons/68937?language=javascript
 */
function solution(n, edges) {
  // 연결 그래프 변수 선언
  const graph = new Array(n);

  // 그래프 초기화
  for (let i = 0; i < graph.length; i++) {
    const array = new Array(n);
    // 갈 수 없는 길은 MAX_VALUE 처리
    array.fill(Number.MAX_VALUE, 0, array.length);
    graph[i] = array;
  }

  edges.forEach(([a, b]) => {
    let start = Math.min(a, b) - 1;
    let end = Math.max(a, b) - 1;

    // 두 노드사이는 직접 연결되어있으므로 거리가 1
    graph[start][end] = 1;
    graph[end][start] = 1;
  });

  // 그래프를 바탕으로 최단 거리를 구한다 => 다익스트라 최단 거리
  const shortest_distances = new Array(n);
  for (let i = 0; i < shortest_distances.length; i++) {
    shortest_distances[i] = dijkstra(i, graph);
  }

  // 각각 최단거리를 정렬후 앞의원소 3개만 가져온후 => 중간값만 리턴
  const maximum_middles = shortest_distances.map((array) => {
    array.sort((a, b) => b - a);
    return array[1];
  });

  return Math.max(...maximum_middles);
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

/**
 * 할 수 있는 최선의 노력을 다했다.
 * DP 공부 => 다익스트라 공부
 * 문제를 풀면서 최적화 할 수 있다는 부분은 많이 느껴지긴 했는데
 * 풀이 방법을 다르게 생각해보든지 해야할거 같다.
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.38ms, 30.2MB)
테스트 2 〉	통과 (0.40ms, 30.2MB)
테스트 3 〉	통과 (0.46ms, 30.3MB)
테스트 4 〉	통과 (0.47ms, 30.3MB)
테스트 5 〉	통과 (0.54ms, 30.2MB)
테스트 6 〉	통과 (0.60ms, 30.1MB)
테스트 7 〉	통과 (0.67ms, 30.2MB)
테스트 8 〉	실패 (시간 초과)
테스트 9 〉	실패 (시간 초과)
테스트 10 〉	실패 (시간 초과)
테스트 11 〉	실패 (시간 초과)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	실패 (시간 초과)
테스트 14 〉	실패 (시간 초과)
테스트 15 〉	실패 (시간 초과)
테스트 16 〉	실패 (signal: aborted (core dumped))
테스트 17 〉	실패 (signal: aborted (core dumped))
테스트 18 〉	실패 (signal: aborted (core dumped))
테스트 19 〉	실패 (signal: aborted (core dumped))
테스트 20 〉	실패 (signal: aborted (core dumped))
테스트 21 〉	실패 (signal: aborted (core dumped))
테스트 22 〉	실패 (signal: aborted (core dumped))
테스트 23 〉	실패 (signal: aborted (core dumped))
테스트 24 〉	실패 (signal: aborted (core dumped))
테스트 25 〉	실패 (signal: aborted (core dumped))
테스트 26 〉	실패 (signal: aborted (core dumped))
채점 결과
정확성: 26.9
합계: 26.9 / 100.0
 */
