function solution(n, times) {
  /**
   * 다음사람을 넣기 전에
   * 각 심사대를 모두 비교 (남은시간 + 처리시간)이 제일 짧은곳으로 이동하게 하면 ok
   * 그리디 + 구현?
   */

  // 입국심사가 남은 사람들 - 처음에 비어있는 심사대가 없게 모든 심사대에 한 명씩 투입한다
  let remainPerson = n - times.length;
  let currentTime = 0;

  // 입국심사대 정보를 관리하는 배열 선언
  const immigrationInfos = [];
  times.forEach((time) => {
    const immigration = {
      processingTime: time,
      remainTime: time, // 초기에 심사대에 한 명씩 투입
    };
    immigrationInfos.push(immigration);
  });

  while (remainPerson > 0) {
    // 남은 시간 + 처리 시간이 제일 짧은곳으로 가서 입국심사를 받는다
    // 남은 시간 + 처리시간으로 정렬한다
    immigrationInfos.sort(
      (i1, i2) =>
        i1.processingTime + i1.remainTime - (i2.processingTime + i2.remainTime)
    );

    const immigration = immigrationInfos[0];
    immigration.remainTime += immigration.processingTime;
    remainPerson--;
  }

  // 남은시간이 제일 큰 것을 현재 시간에 더한다
  immigrationInfos.sort((i1, i2) => i2.remainTime - i1.remainTime);
  currentTime += immigrationInfos[0].remainTime;

  return currentTime;
}

console.log(solution(6, [7, 10]));

/**
 * 2021-01-19
 * 깔끔하게 잘 푼것 같은데 시간초과가 난다 왜일까?
 * 10억번 이고 소트하는 내부정렬을 돌리면 nlogn 에 정렬되지 않나..?
 * 어떤곳에서 시간을 더 줄여야할지 이정도면 최선인거 같은데..
 * 더 효율적인 알고리즘이 있나보다..
 * 다른사람 풀이를 참고해봐야할듯
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	실패 (0.14ms, 30.1MB)
테스트 2 〉	통과 (6.12ms, 32.8MB)
테스트 3 〉	통과 (142.95ms, 34.2MB)
테스트 4 〉	실패 (52.66ms, 42.5MB)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	실패 (시간 초과)
테스트 7 〉	실패 (시간 초과)
테스트 8 〉	실패 (시간 초과)
테스트 9 〉	실패 (시간 초과)
채점 결과
정확성: 11.1
효율성: 0.0
합계: 11.1 / 50
 */
