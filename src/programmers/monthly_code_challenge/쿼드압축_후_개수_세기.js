const global_counts = {
  count_0: 0,
  count_1: 0,
};

/**
 * 쿼드압축 후 개수 세기
 * 프로그래머스 월간 코드 챌린지 시즌 1
 * https://programmers.co.kr/learn/courses/30/lessons/68936
 */
function solution(arr) {
  dfs(arr, {});
  return [global_counts.count_0, global_counts.count_1];
}

function dfs(array, options) {
  const {
    rowStart = 0,
    rowEnd = array.length,
    columnStart = 0,
    columnEnd = array.length,
  } = options;

  const result = check(array, options);

  if (result.compressed || rowEnd - rowStart === 2) {
    // 마지막 depth에 도달 => 압축되었거나, 최소 행렬 (2 x 2 행렬) 에 도달
    global_counts.count_0 += result.count_0;
    global_counts.count_1 += result.count_1;
    return;
  }

  // 현재 가진 array를 4등분하여 dfs로 검사
  const rowMiddle = (rowStart + rowEnd) / 2;
  const columnMiddle = (columnStart + columnEnd) / 2;

  // 왼쪽 위 사각형
  dfs(array, {
    rowStart,
    rowEnd: rowMiddle,
    columnStart,
    columnEnd: columnMiddle,
  });

  // 오른쪽 위 사각형
  dfs(array, {
    rowStart: rowMiddle,
    rowEnd,
    columnStart,
    columnEnd: columnMiddle,
  });

  // 왼쪽 아래 사각형
  dfs(array, {
    rowStart,
    rowEnd: rowMiddle,
    columnStart: columnMiddle,
    columnEnd,
  });

  // 오른쪽 아래 사각형
  dfs(array, {
    rowStart: rowMiddle,
    rowEnd,
    columnStart: columnMiddle,
    columnEnd,
  });
}

function check(array, options) {
  const {
    rowStart = 0,
    rowEnd = array.length,
    columnStart = 0,
    columnEnd = array.length,
  } = options;

  let count_0 = 0;
  let count_1 = 0;

  for (let i = rowStart; i < rowEnd; i++) {
    for (let j = columnStart; j < columnEnd; j++) {
      if (array[i][j] === 0) {
        count_0++;
        continue;
      }

      if (array[i][j] === 1) {
        count_1++;
        continue;
      }
    }
  }

  const compressed =
    (count_0 > 0 && count_1 === 0) || (count_0 === 0 && count_1 > 0);

  // 압축되었다면 count를 고쳐준다
  if (compressed) {
    if (count_0 > 0) {
      count_0 = 1;
    }

    if (count_1 > 0) {
      count_1 = 1;
    }
  }
  return {
    compressed,
    count_0,
    count_1,
  };
}

// console.log(
//   solution([
//     [1, 1, 0, 0],
//     [1, 0, 0, 0],
//     [1, 0, 0, 1],
//     [1, 1, 1, 1],
//   ])
// );

// console.log(
//   solution([
//     [1, 1, 1, 1, 1, 1, 1, 1],
//     [0, 1, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 1, 1, 1, 1],
//     [0, 1, 0, 0, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 1, 0, 0, 1],
//     [0, 0, 0, 0, 1, 1, 1, 1],
//   ])
// );

/**
 * DFS와 구현을 겸해서 연습해볼 수 있는 문제였다
 * 시간이 꽤나 오래 걸렸다
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.87ms, 30.1MB)
테스트 2 〉	통과 (0.81ms, 30MB)
테스트 3 〉	통과 (0.67ms, 30.2MB)
테스트 4 〉	통과 (0.38ms, 30.2MB)
테스트 5 〉	통과 (32.00ms, 45.2MB)
테스트 6 〉	통과 (19.57ms, 42.2MB)
테스트 7 〉	통과 (18.34ms, 42.2MB)
테스트 8 〉	통과 (12.15ms, 42.1MB)
테스트 9 〉	통과 (13.00ms, 41.7MB)
테스트 10 〉	통과 (6.78ms, 75MB)
테스트 11 〉	통과 (0.33ms, 29.9MB)
테스트 12 〉	통과 (0.35ms, 30.1MB)
테스트 13 〉	통과 (12.91ms, 42MB)
테스트 14 〉	통과 (22.48ms, 75.1MB)
테스트 15 〉	통과 (27.40ms, 75.4MB)
테스트 16 〉	통과 (18.90ms, 42.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
