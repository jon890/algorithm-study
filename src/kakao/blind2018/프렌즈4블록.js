function solution(m, n, board) {
  let processed = board.map((b) => b.split(''));
  let answer = 0;

  while (true) {
    const canDelete = check(m, n, processed);
    if (!canDelete) break;
    answer += deleteBlocks(m, n, canDelete, processed);
  }

  return answer;
}

function check(m, n, splitedBoard) {
  const canDelete = new Array(m).fill().map((_) => new Array(n).fill(false));
  let count = 0;

  // 지워질수 있는 것 체크
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      // 현재 위치에서 4개의 원소를 체크한다
      const a = splitedBoard[i][j];
      const b = splitedBoard[i][j + 1];
      const c = splitedBoard[i + 1][j];
      const d = splitedBoard[i + 1][j + 1];

      if (!a || !b || !c || !d) continue;

      // 제거 가능 확인
      if (a === b && b === c && c === d) {
        canDelete[i][j] = true;
        canDelete[i][j + 1] = true;
        canDelete[i + 1][j] = true;
        canDelete[i + 1][j + 1] = true;
        count++;
      }
    }
  }

  return Boolean(count) ? canDelete : null;
}

function deleteBlocks(m, n, canDelete, splitedBoard) {
  let deletedCount = 0;

  // 제거
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (canDelete[i][j]) {
        deletedCount++;
        splitedBoard[i][j] = 0;
      }
    }
  }

  // 제거된 공간을 위쪽 블럭을 내려 채움
  // 컬럼을 기준으로 생각
  for (let col = 0; col < n; col++) {
    const colArray = [];
    for (let row = 0; row < m; row++) {
      colArray.push(splitedBoard[row][col]);
    }

    // 0원소와 아닌원소를 분리
    const hasZero = colArray.findIndex((v) => v === 0);
    if (~hasZero) {
      const zeros = [];
      const nonZeros = [];
      for (const v of colArray) {
        if (v === 0) zeros.push(v);
        else nonZeros.push(v);
      }
      const newColArray = [...zeros, ...nonZeros];

      for (let row = 0; row < m; row++) {
        splitedBoard[row][col] = newColArray[row];
      }
    }
  }

  return deletedCount;
}

solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']);
