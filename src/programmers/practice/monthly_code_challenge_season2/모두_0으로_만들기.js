function solution(a, edges) {
  const tree = new Array(a.length).fill().map((_) => []);
  for (const [start, end] of edges) {
    tree[start].push(end);
    tree[end].push(start);
  }

  // 0은 시작노드, -1은 부모노드
  const stack = [[0, -1]];
  // 방문 여부를 기록할 배열
  const visit = new Array(a.length).fill(false);

  // 정수 뒤에 n을 붙이면 BigInt 자료형으로 인식한다
  let answer = 0n;
  while (stack.length) {
    const [start, parent] = stack.pop();

    // 이미 방문했던 노드를 만난다
    // 더 이상 내려갈 곳이 없는 노드를 만남
    if (visit[start]) {
      answer += BigInt(Math.abs(a[start]));
      a[parent] += a[start];
      continue;
    }

    stack.push([start, parent]);
    visit[start] = true;

    for (const next of tree[start]) {
      if (!visit[next]) {
        stack.push([next, start]);
      }
    }
  }

  console.log(answer);
  return a[0] ? -1 : answer;
}

solution(
  [-5, 0, 2, 1, 2],
  [
    [0, 1],
    [3, 4],
    [2, 3],
    [0, 3],
  ],
);

/**
 * 2021-06-28
 * js iterative 한 dfs
 * BigInt 등을 공부
 * https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%AA%A8%EB%91%90-0%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-JS
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.27ms, 30.2MB)
테스트 2 〉	통과 (0.21ms, 29.9MB)
테스트 3 〉	통과 (483.62ms, 187MB)
테스트 4 〉	통과 (415.48ms, 188MB)
테스트 5 〉	통과 (466.40ms, 190MB)
테스트 6 〉	통과 (555.48ms, 211MB)
테스트 7 〉	통과 (467.94ms, 210MB)
테스트 8 〉	통과 (500.97ms, 209MB)
테스트 9 〉	통과 (520.64ms, 189MB)
테스트 10 〉	통과 (447.10ms, 196MB)
테스트 11 〉	통과 (544.03ms, 191MB)
테스트 12 〉	통과 (535.76ms, 217MB)
테스트 13 〉	통과 (519.23ms, 215MB)
테스트 14 〉	통과 (629.68ms, 218MB)
테스트 15 〉	통과 (566.45ms, 202MB)
테스트 16 〉	통과 (548.23ms, 202MB)
테스트 17 〉	통과 (581.98ms, 201MB)
테스트 18 〉	통과 (302.78ms, 215MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
