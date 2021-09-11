function solution(id_list, report, k) {
  // 해당 유저가 어떤 유저를 신고했는지 기록
  const userReportMap = new Map();
  // 해당 유저가 얼마나 신고 당했는지 기록
  const userReportCountMap = new Map();

  id_list.forEach((id) => {
    userReportMap.set(id, new Set());
    userReportCountMap.set(id, 0);
  });

  report.forEach((info) => {
    const [userId, reportId] = info.split(' ');
    if (userReportMap.has(userId)) {
      const reportIdSet = userReportMap.get(userId);
      reportIdSet.add(reportId);
    }
  });

  userReportMap.forEach((reportIdSet, userId) => {
    reportIdSet.forEach((id) => {
      if (userReportCountMap.has(id)) {
        userReportCountMap.set(id, userReportCountMap.get(id) + 1);
      }
    });
  });

  console.log(userReportMap);
  console.log(userReportCountMap);

  const result = id_list.map((id) => {
    let count = 0;
    const reportIdSet = userReportMap.get(id);

    reportIdSet.forEach((id) => {
      if (userReportCountMap.get(id) >= k) count++;
    });

    return count;
  });
  console.log(result);
  return result;
}

// 정지 사실 메일로 발송
// 동일한 유저에 대한 신고횟수는 1회로 처리

// solution(
//   ['muzi', 'frodo', 'apeach', 'neo'],
//   ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
// );
solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con']);

/**
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.21ms, 30MB)
테스트 2 〉	통과 (0.21ms, 30MB)
테스트 3 〉	통과 (174.41ms, 77.9MB)
테스트 4 〉	통과 (0.23ms, 30.1MB)
테스트 5 〉	통과 (0.27ms, 30.2MB)
테스트 6 〉	통과 (2.09ms, 30.3MB)
테스트 7 〉	통과 (5.75ms, 32.4MB)
테스트 8 〉	통과 (8.42ms, 33.1MB)
테스트 9 〉	통과 (89.36ms, 55.2MB)
테스트 10 〉	통과 (93.06ms, 55.7MB)
테스트 11 〉	통과 (210.15ms, 79MB)
테스트 12 〉	통과 (0.59ms, 30.1MB)
테스트 13 〉	통과 (0.59ms, 30MB)
테스트 14 〉	통과 (87.95ms, 51.5MB)
테스트 15 〉	통과 (161.68ms, 59.3MB)
테스트 16 〉	통과 (0.49ms, 30.1MB)
테스트 17 〉	통과 (0.59ms, 29.8MB)
테스트 18 〉	통과 (0.89ms, 30MB)
테스트 19 〉	통과 (1.34ms, 30.4MB)
테스트 20 〉	통과 (92.22ms, 52MB)
테스트 21 〉	통과 (151.82ms, 59MB)
테스트 22 〉	통과 (0.20ms, 29.9MB)
테스트 23 〉	통과 (0.19ms, 29.8MB)
테스트 24 〉	통과 (0.17ms, 30MB)
채점 완료
 */
