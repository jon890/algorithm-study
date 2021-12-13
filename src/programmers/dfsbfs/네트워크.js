function solution(n, computers) {
  const networkList = [];
  for (let i = 0; i < n; i++) {
    const network = dfs(i, n, computers);
    // 네트워크 목록에서 같은것이 있는지 확인
    const check = networkList.find((currentNetwork) =>
      equalsSet(currentNetwork, network),
    );
    // 중복되는 네트워크가 없다면 추가
    if (!check) networkList.push(network);
  }
  //   console.log(networkList);
  return networkList.length;
}

function dfs(start, n, computers) {
  const visit = new Array(n).fill(false); // 방문을 확인할 배열
  const network = new Set(); // 결과를 확인할 배열

  // 내부 재귀 함수
  function dfsUtil(current, set) {
    visit[current] = true;
    set.add(current);

    // 방문할 노드가 남았는가?
    const check = computers[current].find((connect, index) => {
      if (visit[index]) return false;
      if (connect === 0) return false;
      return true;
    });
    if (!check) return;

    for (let i = 0; i < computers[current].length; i++) {
      if (computers[current][i] !== 1) continue;
      if (visit[i]) continue;

      dfsUtil(i, set);
    }
  }
  dfsUtil(start, network);
  return network;
}

function equalsSet(set1, set2) {
  if (set1.size !== set2.size) return false;

  let check = true;
  for (const value of set1.values()) {
    if (!set2.has(value)) {
      check = false;
      break;
    }
  }
  return check;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);

/**
 * 2021-06-28
 * 드디어 이 문제를 해결하는구나
 * dfs로 탐색되는 모든 노드는 한 네트워크에 있다!
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.27ms, 30.1MB)
테스트 2 〉	통과 (0.26ms, 30.2MB)
테스트 3 〉	통과 (0.98ms, 30MB)
테스트 4 〉	통과 (0.82ms, 30.1MB)
테스트 5 〉	통과 (0.12ms, 30MB)
테스트 6 〉	통과 (6.79ms, 33.3MB)
테스트 7 〉	통과 (0.35ms, 30.2MB)
테스트 8 〉	통과 (7.30ms, 33.2MB)
테스트 9 〉	통과 (5.05ms, 32.5MB)
테스트 10 〉	통과 (4.51ms, 32.9MB)
테스트 11 〉	통과 (13.29ms, 32.1MB)
테스트 12 〉	통과 (11.94ms, 32.6MB)
테스트 13 〉	통과 (8.07ms, 32.9MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
