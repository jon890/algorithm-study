function solution(office, k) {
  // 온풍기를 적절한 위치에 두어서
  // 최대의 인원이 커버되도록 하기

  const areaSize = office.length;
  const coveredSumList = [];

  // k의 크기에 맞게 모든 경우를 검사
  for (let i = 0; i <= areaSize - k; i++) {
    for (let j = 0; j <= areaSize - k; j++) {
      let covered = 0;

      for (let row = i; row < i + k; row++) {
        for (let column = j; column < j + k; column++) {
          if (office[row][column] === 1) {
            covered++;
          }
        }
      }

      coveredSumList.push(covered);
    }
  }

  //   console.log(coveredSumList);
  return Math.max(...coveredSumList);
}

solution(
  [
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
  ],
  2,
);
