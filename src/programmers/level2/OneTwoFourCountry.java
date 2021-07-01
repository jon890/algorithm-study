package programmers.practice.level2;

/**
 * 프로그래머스
 * 코딩 테스트 연습
 * Level 2
 *
 * 124 나라
 * https://programmers.co.kr/learn/courses/30/lessons/42587?language=java
 */
public class OneTwoFourCountry {
    public String solution(int n) {

        StringBuilder answer = new StringBuilder();

        int addNum = 0;
        while (n != 0) {
            // 3으로 나누어 떨어지면 4로 변환
            addNum = n % 3 == 0 ? 4 : n % 3;
            
            // 3으로 나누어 떨어지면 -1을 해준다
            n = addNum == 4 ? n / 3 - 1 : n / 3;

            answer.insert(0, addNum);
        }

        return answer.toString();
    }
}

/*
풀어보려고 계속 봤는데.. 규칙찾기를 너무 어렵게생각했다..
3진수를 왜 생각못했을까..
3진수를 생각후 조금더 발전시켜야하네 나한텐 매우 약한 규칙찾기였음 ㅠㅠ

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.90ms, 52.2MB)
테스트 2 〉	통과 (0.95ms, 52.6MB)
테스트 3 〉	통과 (0.85ms, 52.6MB)
테스트 4 〉	통과 (0.87ms, 54.5MB)
테스트 5 〉	통과 (0.92ms, 52.6MB)
테스트 6 〉	통과 (0.87ms, 50.4MB)
테스트 7 〉	통과 (0.91ms, 52.3MB)
테스트 8 〉	통과 (0.94ms, 50.6MB)
테스트 9 〉	통과 (0.79ms, 52.2MB)
테스트 10 〉	통과 (0.88ms, 52.7MB)
테스트 11 〉	통과 (0.93ms, 50.1MB)
테스트 12 〉	통과 (0.88ms, 49.9MB)
테스트 13 〉	통과 (0.79ms, 50.4MB)
테스트 14 〉	통과 (0.79ms, 54.6MB)
효율성  테스트
테스트 1 〉	통과 (0.88ms, 50.4MB)
테스트 2 〉	통과 (0.84ms, 52.5MB)
테스트 3 〉	통과 (0.89ms, 52.1MB)
테스트 4 〉	통과 (0.92ms, 50.5MB)
테스트 5 〉	통과 (0.93ms, 52MB)
테스트 6 〉	통과 (0.95ms, 50.3MB)
채점 결과
정확성: 70.0
효율성: 30.0
합계: 100.0 / 100.0
 */
