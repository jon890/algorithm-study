function solution(grades) {
  const gradeScoreMap = {
    'A+': 4.5,
    A0: 4,
    'A-': 3.75,
    'B+': 3.5,
    B0: 3.0,
    'B-': 2.75,
    'C+': 2.5,
    C0: 2,
    'C-': 1.75,
    'D+': 1.5,
    D0: 1.0,
    'D-': 0.75,
    F: 0,
  };

  const subjectGradeMap = new Map(); // 과목 - 성적 연관 맵
  const subjectSequenceMap = new Map(); // 과목 - 순서 연관 맵

  grades.forEach((gradeInfo, index) => {
    const [subjectCode, grade] = gradeInfo.split(' ');
    const currScore = gradeScoreMap[grade];

    if (subjectGradeMap.has(subjectCode)) {
      // 성적이 높다면 업데이트
      const prevScore = gradeScoreMap[subjectGradeMap.get(subjectCode)];
      if (currScore > prevScore) {
        subjectGradeMap.set(subjectCode, grade);
        subjectSequenceMap.set(subjectCode, index);
      }
    } else {
      subjectGradeMap.set(subjectCode, grade);
      subjectSequenceMap.set(subjectCode, index);
    }
  });

  // 성적 순으로 정렬
  // 성적이 같다면 먼저 수강한 과목부터

  const answer = [];
  subjectGradeMap.forEach((v, k) => {
    answer.push({ subjectCode: k, grade: v });
  });
  return answer
    .sort((s1, s2) => {
      // 점수순으로 비교
      if (s1.grade !== s2.grade) {
        const score1 = gradeScoreMap[s1.grade];
        const score2 = gradeScoreMap[s2.grade];
        console.log(score1, score2);
        return score2 - score1;
      } else {
        // 점수가 같다면, 수강 순으로 비교
        const seq1 = subjectSequenceMap.get(s1.subjectCode);
        const seq2 = subjectSequenceMap.get(s2.subjectCode);
        return seq1 - seq2;
      }
    })
    .map(({ subjectCode, grade }) => `${subjectCode} ${grade}`);
}

// 깔끔하게 정리한 성적표
// 반복 수강으로 삭제된 과목들을 취소선으로 표시
// 가장 높은 성적만 인정되고 나머지는 삭제
// 가장 좋은 성적이 여러개 => 가장 먼저 수강한 것만 인정
// 순서를 보장하는 MAP?

console.log(
  solution([
    'DS7651 A0',
    'CA0055 D+',
    'AI5543 C0',
    'OS1808 B-',
    'DS7651 B+',
    'AI0001 F',
    'DB0001 B-',
    'AI5543 D+',
    'DS7651 A+',
    'OS1808 B-',
  ]),
);

/**
 * 정확성  테스트
테스트 1 〉	통과 (0.23ms, 29.8MB)
테스트 2 〉	통과 (0.42ms, 30.1MB)
테스트 3 〉	통과 (0.51ms, 30.2MB)
테스트 4 〉	통과 (0.62ms, 30.1MB)
테스트 5 〉	통과 (1.35ms, 30MB)
테스트 6 〉	통과 (2.10ms, 30.1MB)
테스트 7 〉	통과 (5.06ms, 32.5MB)
테스트 8 〉	통과 (34.61ms, 40.5MB)
테스트 9 〉	통과 (53.68ms, 42.8MB)
테스트 10 〉	통과 (14.13ms, 35.1MB)
테스트 11 〉	통과 (68.79ms, 50.9MB)
테스트 12 〉	통과 (38.16ms, 38.6MB)
테스트 13 〉	통과 (70.25ms, 48.6MB)
테스트 14 〉	통과 (96.87ms, 58.9MB)
테스트 15 〉	통과 (91.58ms, 56.5MB)
테스트 16 〉	통과 (76.24ms, 52.1MB)
테스트 17 〉	통과 (42.22ms, 41.8MB)
테스트 18 〉	통과 (12.21ms, 34.6MB)
테스트 19 〉	통과 (13.88ms, 35.2MB)
테스트 20 〉	통과 (103.51ms, 59.7MB)
채점 결과
정확성: 100.0
효율성: 0.0
합계: 100.0 / 100.0
 */
