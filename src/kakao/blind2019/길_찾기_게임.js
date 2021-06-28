function solution(nodeinfo) {
  // 의미를 가지게 새로운 노드정보 구조 생성
  const newNodeInfo = nodeinfo
    .map(([x, y], index) => ({
      id: index + 1,
      x,
      y,
      min: null,
      max: null,
      left: null,
      right: null,
    }))
    .sort(({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
      if (y1 !== y2) {
        // y좌표 큰 순으로 정렬 => 클 수록 루트 노드임
        return y2 - y1;
      } else {
        // x좌표 순으로 정렬
        return x1 - x2;
      }
    });

  // node levels array 생성
  const levels = [...new Set(nodeinfo.map(([_, y]) => y))].sort(
    (a, b) => b - a,
  );

  // 자식 노드를 연결
  for (let i = 0; i < newNodeInfo.length; i++) {
    const parentNode = newNodeInfo[i];
    const index = levels.findIndex((level) => parentNode.y === level);

    for (let j = i + 1; j < newNodeInfo.length; j++) {
      const childNode = newNodeInfo[j];
      if (childNode.y > levels[index + 1]) {
        continue;
      } else if (childNode.y < levels[index + 1]) {
        break;
      }

      let { max, min } = parentNode;
      if (!min) min = 0;
      if (!max) max = 100000;
      if (childNode.x < min || childNode.x > max) continue;

      if (childNode.x < parentNode.x) {
        max = Math.min(max, parentNode.x);
        parentNode.left = childNode.id;
      } else {
        min = Math.max(min, parentNode.x);
        parentNode.right = childNode.id;
      }

      childNode.max = max;
      childNode.min = min;
    }
  }

  // node - children map 구조 생성
  const nodeMap = new Map();
  newNodeInfo.forEach(({ id, left, right }) =>
    nodeMap.set(id, { id, left, right }),
  );

  return [
    preOrder(newNodeInfo[0].id, nodeMap),
    postOrder(newNodeInfo[0].id, nodeMap),
  ];
}

function preOrder(rootNodeId, nodeMap) {
  const record = [];

  const recursion = (id) => {
    const node = nodeMap.get(id);
    record.push(node.id);
    if (node.left) recursion(node.left);
    if (node.right) recursion(node.right);
  };

  recursion(rootNodeId);
  return record;
}

function postOrder(rootNodeId, nodeMap) {
  const record = [];

  const recursion = (id) => {
    const node = nodeMap.get(id);
    if (node.left) recursion(node.left);
    if (node.right) recursion(node.right);
    record.push(node.id);
  };

  recursion(rootNodeId);
  return record;
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ]),
);

/**
 * 2021-06-28
 * 3단계를 내손으로 다풀다니
 * 너무 뿌듯하다
 * 더 공부해야할 것 : js에서 tree 자료구조 사용하기, 전위순회, 후위순회
 * 
 * 정확성  테스트
테스트 1 〉	통과 (0.54ms, 30.1MB)
테스트 2 〉	통과 (0.64ms, 30.2MB)
테스트 3 〉	통과 (0.45ms, 30.1MB)
테스트 4 〉	통과 (0.44ms, 30.1MB)
테스트 5 〉	통과 (0.46ms, 30.1MB)
테스트 6 〉	통과 (11.23ms, 32.3MB)
테스트 7 〉	통과 (11.29ms, 32.4MB)
테스트 8 〉	통과 (41.77ms, 35.3MB)
테스트 9 〉	통과 (30.36ms, 40.1MB)
테스트 10 〉	통과 (16.59ms, 32.7MB)
테스트 11 〉	통과 (31.44ms, 39.9MB)
테스트 12 〉	통과 (32.72ms, 39.6MB)
테스트 13 〉	통과 (1.83ms, 30.3MB)
테스트 14 〉	통과 (12.07ms, 32.9MB)
테스트 15 〉	통과 (69.78ms, 36.4MB)
테스트 16 〉	통과 (216.67ms, 40.1MB)
테스트 17 〉	통과 (9.59ms, 32.7MB)
테스트 18 〉	통과 (77.02ms, 38.9MB)
테스트 19 〉	통과 (11.73ms, 33.4MB)
테스트 20 〉	통과 (33.49ms, 35.7MB)
테스트 21 〉	통과 (39.67ms, 37.7MB)
테스트 22 〉	통과 (70.34ms, 39.8MB)
테스트 23 〉	통과 (69.02ms, 40.3MB)
테스트 24 〉	통과 (0.49ms, 29.9MB)
테스트 25 〉	통과 (0.52ms, 30.4MB)
테스트 26 〉	통과 (16.15ms, 32.9MB)
테스트 27 〉	통과 (0.76ms, 30.2MB)
테스트 28 〉	통과 (0.56ms, 29.7MB)
테스트 29 〉	통과 (0.41ms, 30.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
