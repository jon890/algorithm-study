const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

/**
 * 백준
 * 그리디
 * 행렬
 * 1080번
 * @param {Array} A : 0, 1로 이루어진 행렬
 * @param {Array} B : 0, 1로 이루어진 행렬
 */
function solution(A, B) {
  // 예외 A 크기가 3*3 미만이고 A와 B가 다르다면 바꿀수 없다
  if (A.length < 3 || A[0].length < 3) {
    if (!compare2DimensionArray(A, B)) return -1;
  }

  console.log(A);
  console.log(B);
}

const [rowNum, _] = input();
const matrixList = [];
for (let i = 0; i < 2; i++) {
  const matrix = [];
  for (let j = 0; j < rowNum; j++) {
    const row = input().split("");
    matrix.push(row);
  }
  matrixList.push(matrix);
}
console.log(matrixList[0], matrixList[1]);

function compare2DimensionArray(A, B) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] !== B[i][j]) {
        return false;
      }
    }
  }
  return true;
}
