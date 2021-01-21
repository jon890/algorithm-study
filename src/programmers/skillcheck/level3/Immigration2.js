/**
 * 입국심사
 *
 * 프로그래머스 이분탐색 Level3
 * https://programmers.co.kr/learn/courses/30/lessons/43238
 *
 * @param {Number} n
 * @param {Array} times
 */
function solution(n, times) {
  /**
   * 이분탐색
   * 정렬되어 있는 리스트에서 절반씩 범위를 좁혀가며 탐색하는 방법
   */

  /**
   * 파라 메트릭 서치 (Parametric Search)
   * 최적화 문제를 결정 문제 ('예' , '아니오)로 바꾸어 해결하는 기법
   * 예) 특정한 조건을 만족하는 가장 알맞은 값을 빠르게 찾는 최적화 문제
   */

  /**
   * 큰 탐색 범위 => 이진탐색을 떠올려라
   */

  /**
   * 이 문제에서도
   * 입국심사를 기다리는 사람의 수 n이 최대 10억까지이다
   * 선형시간보다 줄일 수 있는 방법을 찾아야한다.
   */

  /**
   * 최소시간 ~ 최대시간 범위에서 알맞게 찾아나간다
   * 최소시간은 최소로 걸리는 검색대에서 모두 입국심사를 받는 경우
   * 최대시간은 최대로 걸리는 검색대에서 모두 입국심사를 받는 경우이다
   */
  times.sort((t1, t2) => t1 - t2);
  let start = 1;
  let end = n * times[times.length - 1];

  // console.log(mid);
  // js 에서 소숫점을 간단히 뗴버리려면 parseInt를 사용합시다

  let answer = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    // mid 의 범위에서 최대 몇명 검사 가능인가?
    const immigrationAvailablePersonCount = times.reduce(
      (sum, currentValue) => sum + parseInt(mid / currentValue),
      0 // init value
    );

    if (immigrationAvailablePersonCount >= n) {
      // 입국 심사 가능한 사람이 더 많은가?
      answer = mid;
      end = mid - 1;
    } else if (immigrationAvailablePersonCount < n) {
      // 더 적은가?
      start = mid + 1;
    }
  }

  return answer;
}

/**
 * 2020-01-19
 * 이진탐색으로 해결완료!!
 * 몇 일 만에 드디어 푼 문제목록으로 넣게 되었다
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.31ms, 30.4MB)
테스트 2 〉	통과 (0.46ms, 30MB)
테스트 3 〉	통과 (3.54ms, 32.4MB)
테스트 4 〉	통과 (837.46ms, 59.8MB)
테스트 5 〉	통과 (160.29ms, 42.8MB)
테스트 6 〉	통과 (147.87ms, 42.5MB)
테스트 7 〉	통과 (217.58ms, 45.1MB)
테스트 8 〉	통과 (186.25ms, 43.2MB)
테스트 9 〉	통과 (0.48ms, 30.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
