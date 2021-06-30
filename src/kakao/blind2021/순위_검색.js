function solution(info, queries) {
  const LANGUAGE_COUNT = 3;
  const TASK_COUNT = 2;
  const RANK_COUNT = 2;
  const SOUL_FOOD_COUNT = 2;

  // 4차원 db배열 선언
  const db = new Array(LANGUAGE_COUNT)
    .fill()
    .map((_) =>
      new Array(TASK_COUNT)
        .fill()
        .map((_) =>
          new Array(RANK_COUNT)
            .fill()
            .map((_) => new Array(SOUL_FOOD_COUNT).fill().map((_) => [])),
        ),
    );

  info.forEach((item) => {
    const [language, task, rank, soulfood, score] = item.split(' ');
    const { i, j, k, l } = getIndex(language, task, rank, soulfood);
    db[i][j][k][l].push(parseInt(score)); // db에 점수목록을 저장
  });

  // score를 찾기 위해 배열을 전체 탐색할 수 없으므로
  // 정렬후 이진 탐색을 한다
  for (let i = 0; i < LANGUAGE_COUNT; i++) {
    for (let j = 0; j < TASK_COUNT; j++) {
      for (let k = 0; k < RANK_COUNT; k++) {
        for (let l = 0; l < SOUL_FOOD_COUNT; l++) {
          db[i][j][k][l].sort((a, b) => a - b);
        }
      }
    }
  }

  return queries.map((query) => {
    const [language, task, rank, soulfood, score] = query
      .split(' ')
      .filter((condition) => condition !== 'and');

    const {
      i: indexOfI,
      j: indexOfJ,
      k: indexOfK,
      l: indexOfL,
    } = getQueryIndex(language, task, rank, soulfood);

    let matchedCount = 0;

    for (let i = indexOfI.start; i < indexOfI.end; i++) {
      for (let j = indexOfJ.start; j < indexOfJ.end; j++) {
        for (let k = indexOfK.start; k < indexOfK.end; k++) {
          for (let l = indexOfL.start; l < indexOfL.end; l++) {
            const scoreList = db[i][j][k][l];
            if (!scoreList.length) continue;

            // 이진 탐색을 통해 내가 원하는 값이 어느 인덱스에 있는지 확인
            const index = lowerBound(scoreList, parseInt(score));
            matchedCount += scoreList.length - index;
          }
        }
      }
    }

    return matchedCount;
  });
}

let lowerBound = (A, T) => {
  if (A.length === 1) {
    return A[0] >= T ? 0 : 1;
  }
  let N = A.length,
    i = 0,
    j = N;
  while (i < j) {
    let k = Math.floor((i + j) / 2);
    if (A[k] < T) i = k + 1;
    else j = k;
  }
  return i;
};

function getIndex(language, task, rank, soulfood) {
  const LANGUAGE_INDEX = {
    cpp: 0,
    java: 1,
    python: 2,
  };

  const TASK_INDEX = {
    backend: 0,
    frontend: 1,
  };

  const RANK_INDEX = {
    junior: 0,
    senior: 1,
  };

  const SOULFOOD_INDEX = {
    chicken: 0,
    pizza: 1,
  };

  return {
    i: LANGUAGE_INDEX[language],
    j: TASK_INDEX[task],
    k: RANK_INDEX[rank],
    l: SOULFOOD_INDEX[soulfood],
  };
}

function getQueryIndex(language, task, rank, soulfood) {
  const LANGUAGE_INDEX = {
    cpp: { start: 0, end: 1 },
    java: { start: 1, end: 2 },
    python: { start: 2, end: 3 },
    '-': { start: 0, end: 3 },
  };

  const TASK_INDEX = {
    backend: { start: 0, end: 1 },
    frontend: { start: 1, end: 2 },
    '-': { start: 0, end: 2 },
  };

  const RANK_INDEX = {
    junior: { start: 0, end: 1 },
    senior: { start: 1, end: 2 },
    '-': { start: 0, end: 2 },
  };

  const SOULFOOD_INDEX = {
    chicken: { start: 0, end: 1 },
    pizza: { start: 1, end: 2 },
    '-': { start: 0, end: 2 },
  };

  return {
    i: LANGUAGE_INDEX[language],
    j: TASK_INDEX[task],
    k: RANK_INDEX[rank],
    l: SOULFOOD_INDEX[soulfood],
  };
}

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    ['- and - and - and - 150'],
  ),
);

/**
 * 2021-06-30
 * 정확성 40점 효율성 60점인듯
 * 20분에 정확성 통과
 *
 * 쿼리 ~10만 지원자 ~5만
 * 50억번 연산으로는 해결안될것 같고
 * 새로운 방법을 고민해봐야할듯
 * 
 * 샤옹자 쿼리를 캐싱하고,
 * 점수를 목록화해서
 * 이진탐색 (+ LowerBound)를 이용해서 사용자 계산
 * 아이디어를 떠올릴수 없어 다른 사람의 풀이에서 아이디어를 얻었다
 * 
 * 정확성  테스트
테스트 1 〉	통과 (0.87ms, 30.1MB)
테스트 2 〉	통과 (0.88ms, 30.2MB)
테스트 3 〉	통과 (1.27ms, 30.3MB)
테스트 4 〉	통과 (8.09ms, 34.6MB)
테스트 5 〉	통과 (10.25ms, 35.1MB)
테스트 6 〉	통과 (6.84ms, 33.9MB)
테스트 7 〉	통과 (15.43ms, 35.2MB)
테스트 8 〉	통과 (12.86ms, 34MB)
테스트 9 〉	통과 (13.37ms, 35.2MB)
테스트 10 〉	통과 (13.81ms, 34.5MB)
테스트 11 〉	통과 (13.32ms, 34.8MB)
테스트 12 〉	통과 (6.86ms, 33.9MB)
테스트 13 〉	통과 (15.49ms, 35.3MB)
테스트 14 〉	통과 (10.81ms, 34.8MB)
테스트 15 〉	통과 (44.74ms, 33.9MB)
테스트 16 〉	통과 (11.03ms, 34.6MB)
테스트 17 〉	통과 (5.71ms, 32.8MB)
테스트 18 〉	통과 (10.63ms, 34.3MB)
효율성  테스트
테스트 1 〉	통과 (328.56ms, 82.7MB)
테스트 2 〉	통과 (330.97ms, 83.4MB)
테스트 3 〉	통과 (602.25ms, 78.6MB)
테스트 4 〉	통과 (582.02ms, 79.3MB)
채점 결과
정확성: 40.0
효율성: 60.0
합계: 100.0 / 100.0
 */
