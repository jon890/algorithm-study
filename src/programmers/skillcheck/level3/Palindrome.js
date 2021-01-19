/**
 * 프로그래머스
 * 스킬체크 레벨 3
 *
 * 문자열 s에서, s의 부분문자열중
 * 가장 긴 팰린드롬의 길이를 return 하는 함수 만들기
 * @param {String} s
 */
function solution(s) {
  // 순차 탐색으로 찾아내기?
  let start = 0;
  let end = 1;

  const candidates = [];

  while (true) {
    const test = s.substring(start, end);
    if (checkPalindrome(test)) {
      candidates.push(test.length);
    }

    // end가 끝에 도달
    end++;
    if (end > s.length) {
      start++;
      end = start + 1;
      if (start > s.length) {
        break;
      }
    }
  }

  console.log(candidates);
  return Math.max(...candidates);
}
function checkPalindrome(str) {
  return str == str.split("").reverse().join("");
}

/**
 * 2020 - 01 - 18
 * O(n^2) 이고 n <= 2500 이라 효율성을 통과 못한듯하다
 * 투 포인터로 될까 고민해보고 있다..
 * 
 * 채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.18ms, 30.1MB)
테스트 2 〉	통과 (0.18ms, 30.1MB)
테스트 3 〉	통과 (6.74ms, 31.6MB)
테스트 4 〉	통과 (6.61ms, 31.9MB)
테스트 5 〉	통과 (6.81ms, 31.6MB)
테스트 6 〉	통과 (6.68ms, 31.6MB)
테스트 7 〉	통과 (6.29ms, 31.8MB)
테스트 8 〉	통과 (6.00ms, 32MB)
테스트 9 〉	통과 (6.13ms, 31.8MB)
테스트 10 〉	통과 (5.92ms, 31.4MB)
테스트 11 〉	통과 (6.83ms, 33.1MB)
테스트 12 〉	통과 (8.00ms, 33.8MB)
테스트 13 〉	통과 (5.99ms, 31.2MB)
테스트 14 〉	통과 (34.41ms, 34.6MB)
테스트 15 〉	통과 (30.73ms, 35.1MB) 
테스트 16 〉	통과 (30.37ms, 34.5MB)
테스트 17 〉	통과 (0.10ms, 30MB)
테스트 18 〉	통과 (0.11ms, 30.1MB)
테스트 19 〉	통과 (5.58ms, 31.5MB)
테스트 20 〉	통과 (6.75ms, 31.6MB)
테스트 21 〉	통과 (6.77ms, 31.7MB)
효율성  테스트
테스트 1 〉	실패 (시간 초과)
테스트 2 〉	실패 (시간 초과)
채점 결과
정확성: 34.7
효율성: 0.0
합계: 34.7 / 50
 */
