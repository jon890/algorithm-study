const LEFT = 'L';
const RIGHT = 'R';

function solution(numbers, hand) {
  let currentLeft = '*';
  let currentRight = '#';

  return numbers
    .map((n) => {
      const pressedButtonHand = handleButton(
        n,
        currentLeft,
        currentRight,
        hand,
      );

      switch (pressedButtonHand) {
        case LEFT:
          currentLeft = n;
          break;
        case RIGHT:
          currentRight = n;
          break;
      }

      return pressedButtonHand;
    })
    .join('');
}

function handleButton(number, currentLeft, currentRight, hand) {
  const LEFT_HAND = 'left';
  const RIGHT_HAND = 'right';

  const KEY_PAD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  switch (number) {
    case 1:
    case 4:
    case 7:
      return LEFT;
    case 3:
    case 6:
    case 9:
      return RIGHT;
  }

  // 행, 열의 번호를 찾는다
  let targetRow;
  let targetColumn;

  let leftRow;
  let leftColumn;

  let rightRow;
  let rightColumn;

  KEY_PAD.forEach((rowPad, rowIndex) => {
    rowPad.forEach((pad, columnIndex) => {
      if (pad === number) {
        targetRow = rowIndex;
        targetColumn = columnIndex;
      }

      if (pad === currentLeft) {
        leftRow = rowIndex;
        leftColumn = columnIndex;
      }

      if (pad === currentRight) {
        rightRow = rowIndex;
        rightColumn = columnIndex;
      }
    });
  });

  // 현재 왼쪽의 손가락에서 타겟 번호까지의 거리가 얼마인가?
  const leftDistance =
    Math.abs(targetRow - leftRow) + Math.abs(targetColumn - leftColumn);
  const rightDistance =
    Math.abs(targetRow - rightRow) + Math.abs(targetColumn - rightColumn);

  if (leftDistance > rightDistance) {
    return RIGHT;
  } else if (leftDistance === rightDistance) {
    if (hand === LEFT_HAND) {
      return LEFT;
    } else if (hand === RIGHT_HAND) {
      return RIGHT;
    } else {
      // hand type error
    }
  } else {
    return LEFT;
  }
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));

/**
 * 2021-05-04
 * 30분 소요
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.18ms, 30.2MB)
테스트 2 〉	통과 (0.26ms, 30.3MB)
테스트 3 〉	통과 (0.22ms, 30MB)
테스트 4 〉	통과 (0.18ms, 30.1MB)
테스트 5 〉	통과 (0.22ms, 30.3MB)
테스트 6 〉	통과 (0.17ms, 30.1MB)
테스트 7 〉	통과 (0.26ms, 30MB)
테스트 8 〉	통과 (0.33ms, 30.1MB)
테스트 9 〉	통과 (0.18ms, 30.1MB)
테스트 10 〉	통과 (0.26ms, 30MB)
테스트 11 〉	통과 (0.33ms, 29.9MB)
테스트 12 〉	통과 (0.20ms, 30.2MB)
테스트 13 〉	통과 (0.39ms, 29.9MB)
테스트 14 〉	통과 (0.59ms, 30MB)
테스트 15 〉	통과 (0.93ms, 30MB)
테스트 16 〉	통과 (0.91ms, 30.1MB)
테스트 17 〉	통과 (1.35ms, 30.2MB)
테스트 18 〉	통과 (1.38ms, 30.1MB)
테스트 19 〉	통과 (1.48ms, 30.2MB)
테스트 20 〉	통과 (1.41ms, 30.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
