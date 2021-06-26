function solution(nodeinfo) {
  const newNodeInfo = nodeinfo
    .map(([x, y], index) => ({
      id: index + 1,
      x,
      y,
      parentId: null,
      leftChildId: null,
      rightChildId: null,
    }))
    .sort((n1, n2) => {
      // 노드를 깊이 순으로 정렬
      if (n1.y !== n2.y) {
        return n2.y - n1.y;
      } else {
        // 좌측 순서부터 정렬
        return n1.x - n2.x;
      }
    });

  // 새로운 노드 정보들로
  // 자식들 정보를 연결한 트리를 구성한다
  for (let i = 0; i < newNodeInfo.length; i++) {
    const currentNode = newNodeInfo[i];
    const parentNode = newNodeInfo.find(
      (node) => node.id === currentNode.parentId,
    );

    let leftChildId = null;
    let rightChildId = null;

    for (let j = i + 1; j < newNodeInfo.length; j++) {
      const childNode = newNodeInfo[j];
      if (childNode.y === currentNode.y) continue;

      let flag = true;

      if (childNode.x < currentNode.x) {
        // left child id 기록
        if (parentNode && currentNode.x > parentNode.x) {
          // 현재 노드가 부모노드보다 오른쪽에 있다면
          // 자식 노드도 부모보다 오른쪽에 위치해야한다
          flag = childNode.x > parentNode.x;
        }

        if (flag) {
          leftChildId = childNode.id;
          childNode.parentId = currentNode.id;
        }
      } else if (childNode.x > currentNode.x) {
        // right child id 기록
        if (parentNode && currentNode.x < parentNode.x) {
          // 현재 노드가 부모노드보다 왼쪽에 있다면
          // 자식 노드도 부모보다 왼쪽에 있어야 한다
          flag = childNode.x < parentNode.x;
        }

        if (flag) {
          rightChildId = childNode.id;
          childNode.parentId = currentNode.id;
        }
      }

      // 다음 노드가 존재하고
      // y좌표가 내가 확인하는 자식노드와 달라진다면 종료
      const nextNode = newNodeInfo[j + 1];
      if (nextNode && nextNode.y !== childNode.y) break;
    }

    currentNode.leftChildId = leftChildId;
    currentNode.rightChildId = rightChildId;
  }

  console.log(newNodeInfo);
  var answer = [[]];
  return answer;
}

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
]);

// 두 팀으로 나누고
// 각 팀이 같은 곳을 다른 순서로 방문하도록해서 먼저 순회하는 팀이 승리
// 각 장소를 이진트리의 노드 순회 방법을 힌트로

// 보기엔 쉬워보이는데 생각보다 진짜 안됨..
