/**
 * 이차원 배열두개가 같은지 비교
 * @param {Array} A
 * @param {Array} B
 */
function deepEquals_2DimensionArrays(A, B) {
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] !== B[i][j]) {
        return false;
      }
    }
  }
  return true;
}
