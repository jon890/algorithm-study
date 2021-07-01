function solution(rows, columns, queries) {
  const matrix = getMatrix(rows, columns);
  const minValues = [];

  queries.forEach((query) => {
    const value = rotateMatrix(matrix, query);
    minValues.push(value);
  });

  console.log(minValues);
  return minValues;
}

function getMatrix(rows, columns) {
  const matrix = [];
  let count = 0;
  for (let i = 0; i < rows; i++) {
    const array = [];
    for (let j = 0; j < columns; j++) {
      array.push(++count);
    }
    matrix.push(array);
  }
  return matrix;
}

function rotateMatrix(matrix, query) {
  let [x1, y1, x2, y2] = query;
  x1--;
  y1--;
  x2--;
  y2--;

  // 값을 기억하면서 새로써야하므로 가장자리 4줄을 복사한다
  // Array.prototype.slice(begin, [end]);
  const top = matrix[x1].slice(y1, y2 + 1);
  const bottom = matrix[x2].slice(y1, y2 + 1);
  const left = [];
  const right = [];
  for (let i = x1; i <= x2; i++) {
    left.push(matrix[i][y1]);
    right.push(matrix[i][y2]);
  }

  // 윗쪽을 한 칸씩 오른쪽으로 민다
  for (let i = y1 + 1, j = 0; i <= y2; i++, j++) {
    matrix[x1][i] = top[j];
  }

  // 오른쪽을 한 칸씩 아래로 민다
  for (let i = x1 + 1, j = 0; i <= x2; i++, j++) {
    matrix[i][y2] = right[j];
  }

  // 아래쪽을 한 칸씩 왼쪽으로 민다
  for (let i = y1, j = 0; i < y2; i++, j++) {
    matrix[x2][i] = bottom[j + 1];
  }

  // 왼쪽을 한 칸씩 위로 민다
  for (let i = x1, j = 0; i < x2; i++, j++) {
    matrix[i][y1] = left[j + 1];
  }

  return Math.min(...top, ...bottom, ...left, ...right);
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);

solution(3, 3, [
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [2, 1, 3, 2],
  [2, 2, 3, 3],
]);

solution(100, 97, [[1, 1, 100, 97]]);

/**
 * 2021-06-21
 * 정확성  테스트
테스트 1 〉	통과 (5.12ms, 30.5MB)
테스트 2 〉	통과 (4.84ms, 30MB)
테스트 3 〉	통과 (35.69ms, 40.8MB)
테스트 4 〉	통과 (28.85ms, 36.3MB)
테스트 5 〉	통과 (31.13ms, 36.5MB)
테스트 6 〉	통과 (34.36ms, 41.3MB)
테스트 7 〉	통과 (56.66ms, 41.6MB)
테스트 8 〉	통과 (42.40ms, 37MB)
테스트 9 〉	통과 (56.19ms, 40.9MB)
테스트 10 〉	통과 (34.64ms, 38.2MB)
테스트 11 〉	통과 (32.16ms, 37MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
