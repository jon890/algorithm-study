function solution(gems) {
  // 투 포인터로 풀면 될것 같다
  // 커버링 할 수 있을 만큼 오른쪽으로 인덱스를 옮기고
  // 모두 커버되었다면 왼쪽으로 당겨봄

  const typeOfGems = new Set(gems);

  let answer;
  let end = 0;
  const gemsMap = new Map();

  // 짧은 구간의 길이
  let minInterval = 100000;

  // start를 차례대로 증가시키며 반복
  for (let start = 0; start < gems.length; start++) {
    // end를 가능한 만큼 이동시키기
    while (!isCovered(gemsMap, typeOfGems) && end < gems.length) {
      const endGem = gems[end];
      if (gemsMap.has(endGem)) {
        gemsMap.set(endGem, gemsMap.get(endGem) + 1);
      } else {
        gemsMap.set(endGem, 1);
      }
      end++;
    }

    // 현재 보석이 covered 되었을 때 기록
    const interval = end - start;
    if (isCovered(gemsMap, typeOfGems) && interval < minInterval) {
      minInterval = interval;
      answer = [start + 1, end];
    }

    // 앞의 보석 제거
    const startGem = gems[start];
    if (gemsMap.has(startGem)) {
      const gemCount = gemsMap.get(startGem);
      if (gemCount === 1) {
        gemsMap.delete(startGem);
      } else {
        gemsMap.set(startGem, gemCount - 1);
      }
    }
  }

  console.log(answer);
  return answer;
}

function isCovered(gemsMap, typeOfGems) {
  return gemsMap.size === typeOfGems.size;
}

solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']);
// solution(['AA', 'AB', 'AC', 'AA', 'AC']);
// solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB']);

/**
 * 2021-05-04
 * 3번의 수정을 거친덕에 효율성까지 통과
 * 일반 array를 쓰면서 원소를 제거하는 조작보다
 * map을 이용해서 기록하는게 훨씬 효율적이었다
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.16ms, 30.1MB)
테스트 2 〉	통과 (0.26ms, 30MB)
테스트 3 〉	통과 (0.43ms, 30.1MB)
테스트 4 〉	통과 (0.37ms, 29.9MB)
테스트 5 〉	통과 (0.33ms, 30.1MB)
테스트 6 〉	통과 (0.14ms, 30MB)
테스트 7 〉	통과 (0.15ms, 30.1MB)
테스트 8 〉	통과 (0.76ms, 30.1MB)
테스트 9 〉	통과 (0.84ms, 30MB)
테스트 10 〉	통과 (0.87ms, 29.9MB)
테스트 11 〉	통과 (1.22ms, 30MB)
테스트 12 〉	통과 (0.87ms, 29.8MB)
테스트 13 〉	통과 (1.31ms, 30.1MB)
테스트 14 〉	통과 (2.70ms, 30.2MB)
테스트 15 〉	통과 (5.36ms, 33MB)
효율성  테스트
테스트 1 〉	통과 (5.42ms, 32.7MB)
테스트 2 〉	통과 (8.05ms, 33MB)
테스트 3 〉	통과 (6.57ms, 33.2MB)
테스트 4 〉	통과 (10.22ms, 33.1MB)
테스트 5 〉	통과 (8.72ms, 32.6MB)
테스트 6 〉	통과 (8.25ms, 33.6MB)
테스트 7 〉	통과 (10.00ms, 32.9MB)
테스트 8 〉	통과 (10.33ms, 33MB)
테스트 9 〉	통과 (10.00ms, 33.9MB)
테스트 10 〉	통과 (10.97ms, 33.5MB)
테스트 11 〉	통과 (15.80ms, 34.3MB)
테스트 12 〉	통과 (19.82ms, 35.1MB)
테스트 13 〉	통과 (22.51ms, 36.1MB)
테스트 14 〉	통과 (19.47ms, 35.1MB)
테스트 15 〉	통과 (23.76ms, 35.9MB)
채점 결과
정확성: 33.3
효율성: 66.7
합계: 100.0 / 100.0
 */
