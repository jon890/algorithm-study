function solution(places) {
  /**
   * 면접 대기
   * 거리두기 맨해튼거리가 2이하로 앉지 말기
   * 단 파티션으로 막혀있으면 허용
   */
  const PERSON = 'P';
  const EMPTY = 'O';
  const PARTITION = 'X';

  const answer = places.map((place) => {
    const newPlace = place.map((p) => {
      const splits = p.split('');
      return splits;
    });

    // 사람들의 위치를 기록한다
    const personLocations = [];
    newPlace.forEach((row, rowIndex) => {
      row.forEach((value, columnIndex) => {
        if (value === PERSON) {
          personLocations.push([rowIndex, columnIndex]);
        }
      });
    });

    // 맨해튼 거리가 2이하인 쌍을 찾는다
    const nearDisatncePairs = [];
    personLocations.forEach((location1, index1) => {
      personLocations.some((location2, index2) => {
        if (index1 >= index2) {
          return false; // continue
        }

        if (getDistance(location1, location2) <= 2) {
          nearDisatncePairs.push([location1, location2]);
        }
      });
    });

    let check = true;
    nearDisatncePairs.some(([person1, person2]) => {
      const [row1, column1] = person1;
      const [row2, column2] = person2;
      // 둘 중간이 파티션으로 막혀있는지 확인

      // 케이스1. 같은 row인가?
      if (row1 === row2) {
        // 바로 옆자리인가?
        if (Math.abs(column1 - column2) === 1) {
          check = false;
          return true; // break
        }

        // 둘 사이에 파티션이 있는가?
        const mid = (column1 + column2) / 2;
        if (newPlace[row1][mid] !== PARTITION) {
          check = false;
          return true; // break
        }
        return false; // continue
      }

      // 케이스2. 같은 column인가?
      if (column1 === column2) {
        // 바로 옆자리인가?
        if (Math.abs(row1 - row2) === 1) {
          check = false;
          return true; // break
        }

        // 둘 사이에 파티션이 있는가?
        const mid = (row1 + row2) / 2;
        if (newPlace[mid][column1] !== PARTITION) {
          check = false;
          return true; // break
        }
        return false; // continue
      }

      // 케이스3. 그외의 경우 -> 대각선 모양으로 앉았을때
      // 대각선이 파티션으로 막혀있어야 한다
      if (
        newPlace[row1][column2] !== PARTITION ||
        newPlace[row2][column1] !== PARTITION
      ) {
        check = false;
        return true; // break;
      }
    });

    return check ? 1 : 0;
  });
  console.log(answer);
  return answer;
}

function getDistance([row1, column1], [row2, column2]) {
  return Math.abs(row1 - row2) + Math.abs(column1 - column2);
}

solution([
  ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
  ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
  ['PXOPX', 'OXOXP', 'OXPXX', 'OXXXP', 'POOXX'],
  ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
  ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
]);
