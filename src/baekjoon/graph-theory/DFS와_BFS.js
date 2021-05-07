const { cpuUsage } = require('process');
const readline = require('readline');

const inputs = [];

readline
  .createInterface({
    input: process.stdin,
    output: process.stdoutout,
  })
  .on('line', function (line) {
    inputs.push(line);
  })
  .on('close', function () {
    init();
    process.exit();
  });

function solution(nodeCount, lines, startNodeIndex) {
  // graph 배열 초기화
  const graph = Array(nodeCount + 1);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = Array(nodeCount + 1).fill(-1);
  }
  lines.forEach(([start, end]) => {
    graph[start][end] = 1;
    graph[end][start] = 1;
  });

  // dfs 수행
  const dfsResult = [startNodeIndex];
  dfs(graph, startNodeIndex, dfsResult);
  console.log(dfsResult.join(' '));

  // bfs 수행
  const bfsResult = bfs(graph, startNodeIndex);
  console.log(bfsResult.join(' '));
}

function dfs(graph, currentNodeIndex, visited) {
  const connected = graph[currentNodeIndex];
  const willVisit = [];
  for (let i = 0; i < connected.length; i++) {
    if (connected[i] === -1) {
      continue;
    }
    if (visited.includes(i)) {
      continue;
    }
    visited.push(i);
    willVisit.push(i);
    dfs(graph, i, visited);
  }

  if (willVisit.length === 0) {
    return;
  }
}

function bfs(graph, start) {
  const visited = [];
  visited.push(start);

  const willVisitQueue = [];
  willVisitQueue.push(start);

  while (willVisitQueue.length > 0) {
    // 방문한 마지막 노드를 가져온다
    const last = willVisitQueue.shift();

    // last와 연결된 노드중
    // 방문한 적이 없고
    // 인덱스가 제일 작은것을 찾는다
    const connected = graph[last];
    let willVisit = -1;
    for (let i = 0; i < connected.length; i++) {
      if (connected[i] === -1) {
        continue;
      }
      if (visited.includes(i)) {
        continue;
      }
      if (willVisitQueue.includes(i)) {
        continue;
      }

      willVisit = i;
      visited.push(i);
      willVisitQueue.push(i);
    }

    // 방문할 노드가 없으면 종료
    if (willVisit === -1) {
      break;
    }
  }

  return visited;
}

function init() {
  const [nodeCount, lineCount, startNodeIndex] = inputs[0].split(' ');
  const lines = [];
  for (let i = 0; i < lineCount; i++) {
    const [start, end] = inputs[i + 1].split(' ');
    lines.push([start * 1, end * 1]); // 숫자로 변환
  }
  solution(nodeCount * 1, lines, startNodeIndex * 1); // 숫자로 변환
}

// 2020-05-07 ~
// 12% 에서 실패중!!..
