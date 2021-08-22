function solution(word, cards) {
  const cardGraph = cards.map((c) => c.split(''));
  const CARD_SIZE = cards.length;
  const WORD_SIZE = word.length;
  const answer = [0];

  // 해당 단어를 만들 수 없음
  if (WORD_SIZE > CARD_SIZE) return 0;

  const currentWord = '';
  const visitedColumn = [];
  const nextRows = [];
  for (let i = CARD_SIZE - 1; i >= 0; i--) {
    nextRows.push(i);
  }

  if (CARD_SIZE === WORD_SIZE) {
    // 0번째 행부터 선택
    for (let col = 0; col < CARD_SIZE; col++) {
      dfs(nextRows, col, currentWord, word, visitedColumn, cardGraph, answer);
    }
  } else {
    // how to do
    // 행의 조합을 선택 => 연속되지 않을 수도있음
    const newNextRows = combinationArray(nextRows, WORD_SIZE);
    for (let i = 0; i < newNextRows.length; i++) {
      for (let j = 0; j < CARD_SIZE; j++) {
        dfs(
          [...newNextRows[i]],
          j,
          currentWord,
          word,
          visitedColumn,
          cardGraph,
          answer,
        );
      }
    }
  }

  return answer[0];
}

function dfs(
  nextRows,
  column,
  currentWord,
  targetWord,
  visitedColumn,
  graph,
  answer,
) {
  const GRAPH_SIZE = graph.length;

  visitedColumn.push(column);
  const currentRow = nextRows.pop();
  currentWord += graph[currentRow][column];

  // 종료 조건
  if (!nextRows.length || currentWord.length === targetWord.length) {
    const check = checkConvertable(currentWord, targetWord);
    if (check) answer[0]++;
    return;
  }

  // 방문하지 않은 열에 대하여 다음을 수행
  for (let col = 0; col < GRAPH_SIZE; col++) {
    if (visitedColumn.includes(col)) continue;
    dfs(
      [...nextRows],
      col,
      currentWord,
      targetWord,
      [...visitedColumn],
      graph,
      answer,
    );
  }
}

// currentWord의 조합을 변경하여
// targetWord를 만들수 있는지 검사
function checkConvertable(currentWord, targetWord) {
  if (currentWord.length !== targetWord.length) return false;
  const SIZE = currentWord.length;

  const currentMap = new Map();
  const targetMap = new Map();

  for (let i = 0; i < SIZE; i++) {
    const currentItem = currentWord[i];
    if (currentMap.has(currentItem)) {
      const currentValue = currentMap.get(currentItem);
      currentMap.set(currentItem, currentValue + 1);
    } else {
      currentMap.set(currentItem, 1);
    }

    const targetItem = targetWord[i];
    if (targetMap.has(targetItem)) {
      const targetValue = targetMap.get(targetItem);
      targetMap.set(targetItem, targetValue + 1);
    } else {
      targetMap.set(targetItem, 1);
    }
  }

  // 두 맵의 원소들이 같은지 검사
  let check = true;
  targetMap.forEach((targetValue, targetKey) => {
    if (currentMap.has(targetKey)) {
      const currentValue = currentMap.get(targetKey);
      if (targetValue !== currentValue) check = false;
    } else {
      check = false;
    }
  });
  return check;
}

function combinationArray(array, count) {
  if (!Array.isArray(array)) return;
  if (array.length === 0) return;
  if (count <= 0) return;

  const result = [];

  function combination(source, target, n, r, index) {
    if (r === 0) result.push(target);
    else if (n === 0 || n < r) return;
    else {
      target.push(source[index]);
      combination(source, Object.assign([], target), n - 1, r - 1, index + 1);
      target.pop();
      combination(source, Object.assign([], target), n - 1, r, index + 1);
    }
  }

  combination(array, [], array.length, count, 0);
  return result;
}

// 카드를 적절히 선택해 해당 단어를 만들기
// 같은행열의 카드는 최대 한장만 고를 수 있다
// 단어를 만들 수 있도록 카드를 선택하는 방법의 수를 리턴
// 단어를 못만듬 => 0 리턴
// 모든 경우를 다 검사해보자
// 최대 8!의 가지만 검사해보면됨

solution('APPLE', ['LLZKE', 'LCXEA', 'CVPPS', 'EAVSR', 'FXPFP']);
solution('BAB', ['ZZBZ', 'BAZB', 'XBXB', 'XBAX']);

/**
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.58ms, 30.2MB)
테스트 2 〉	통과 (0.31ms, 30.1MB)
테스트 3 〉	통과 (0.31ms, 30.3MB)
테스트 4 〉	통과 (0.31ms, 30.2MB)
테스트 5 〉	통과 (0.37ms, 30.1MB)
테스트 6 〉	통과 (0.29ms, 30.3MB)
테스트 7 〉	통과 (0.28ms, 30.1MB)
테스트 8 〉	통과 (0.30ms, 30.2MB)
테스트 9 〉	통과 (0.31ms, 30.1MB)
테스트 10 〉	통과 (0.29ms, 30.1MB)
테스트 11 〉	통과 (0.50ms, 30.1MB)
테스트 12 〉	통과 (0.12ms, 30.2MB)
테스트 13 〉	통과 (1.62ms, 30.1MB)
테스트 14 〉	통과 (0.59ms, 30.1MB)
테스트 15 〉	통과 (9.43ms, 35.8MB)
테스트 16 〉	통과 (4.44ms, 34.7MB)
테스트 17 〉	통과 (57.38ms, 35.1MB)
테스트 18 〉	통과 (15.86ms, 35.3MB)
테스트 19 〉	통과 (79.24ms, 34.7MB)
테스트 20 〉	통과 (509.93ms, 36MB)
테스트 21 〉	통과 (86.91ms, 35.6MB)
테스트 22 〉	통과 (0.13ms, 30.1MB)
테스트 23 〉	통과 (408.00ms, 35.7MB)
테스트 24 〉	통과 (409.76ms, 35.7MB)
테스트 25 〉	통과 (405.68ms, 35.6MB)
테스트 26 〉	통과 (403.16ms, 35.5MB)
테스트 27 〉	통과 (0.49ms, 29.9MB)
테스트 28 〉	통과 (0.29ms, 30MB)
테스트 29 〉	통과 (0.31ms, 30.2MB)
테스트 30 〉	통과 (0.31ms, 30.2MB)
테스트 31 〉	통과 (0.29ms, 29.9MB)
채점 결과
정확성: 100.0
효율성: 0.0
합계: 100.0 / 100.0
 */
