function solution(gems) {
  const gemTypes = [...new Set(gems)].length;
  const gemCounts = gems.length;

  // 투 포인터 알고리즘 활용
  // 리스트에 순차적으로 접근해야 할 때
  // 두개의 점을 이용해 위치를
  // 기록하면서 처리하는 기법

  // start, end 가 0을 가르키게 한다
  // 확인할 떄 사용할 map
  const gemsMap = {
    [gems[0]]: 1,
  };

  let left = 0, // 두개의 포인터
    right = 0;

  let candidates = []; // 답의 후보

  while (left < gemCounts && right < gemCounts) {
    // 보석이 부족할 때
    // Object.keys 키의 갯수 => 모든 보석이 존재하는지 확인을 하기 위해서 사용
    if (Object.keys(gemsMap).length < gemTypes) {
      // 오른쪽으로 한 칸이동한다
      right++;
      // 오른쪽이 마지막에 도달하면 반복을 종료한다
      if (right === gemCounts) break;
      // 맵에 기록한다
      gemsMap[gems[right]] = (gemsMap[gems[right]] || 0) + 1;
    } else {
      // 답이 된다면 후보에 추가한다
      candidates.push([left + 1, right + 1]);
      // start 를 오른쪽으로 한 칸 이동한다
      gemsMap[gems[left]]--;
      // 이 떄 맵에 보석이 사라지면 원소를 제거한다
      if (gemsMap[gems[left]] === 0) delete gemsMap[gems[left]];
      left++;
    }
  }

  candidates.sort((a, b) => {
    // 답의 길이에 따라 분류하되
    // 길이가 같다면
    // 최신 인덱스가 앞으로 정렬되게 표시한다
    return a[1] - a[0] === b[1] - b[0]
      ? a[0] - b[0]
      : a[1] - a[0] - (b[1] - b[0]);
  });

  return candidates[0];
}

// 너무 기교를 부렸나..?
// 효율성 실패..
/**
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.23ms, 30.1MB)
테스트 2 〉	통과 (0.57ms, 30.1MB)
테스트 3 〉	통과 (0.99ms, 30.2MB)
테스트 4 〉	통과 (9.80ms, 31.3MB)
테스트 5 〉	통과 (0.68ms, 30.2MB)
테스트 6 〉	통과 (0.18ms, 30.2MB)
테스트 7 〉	통과 (0.24ms, 30.2MB)
테스트 8 〉	통과 (3.43ms, 31MB)
테스트 9 〉	통과 (3.40ms, 30.8MB)
테스트 10 〉	통과 (19.12ms, 32.1MB)
테스트 11 〉	통과 (31.01ms, 32.3MB)
테스트 12 〉	통과 (6.80ms, 33MB)
테스트 13 〉	통과 (8.97ms, 33.6MB)
테스트 14 〉	통과 (64.08ms, 32.3MB)
테스트 15 〉	통과 (18.65ms, 35.4MB)
효율성  테스트
테스트 1 〉	통과 (34.82ms, 35.5MB)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	통과 (94.56ms, 39.8MB)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	통과 (100.54ms, 41.9MB)
테스트 7 〉	실패 (시간 초과)
테스트 8 〉	실패 (시간 초과)
테스트 9 〉	통과 (258.62ms, 52.1MB)
테스트 10 〉	실패 (시간 초과)
테스트 11 〉	실패 (시간 초과)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	실패 (시간 초과)
테스트 14 〉	실패 (시간 초과)
테스트 15 〉	실패 (시간 초과)
채점 결과
정확성: 33.3
효율성: 17.8
합계: 51.1 / 100.0
 */
