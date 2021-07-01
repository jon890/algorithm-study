package programmers.practice.monthly_code_challenge;

/**
 * 내적
 * 프로그래머스 월간 코드 챌린지 시즌1
 * https://programmers.co.kr/learn/courses/30/lessons/70128
 */
public class 내적 {
    public int solution(int[] a, int[] b) {
        int answer = 0;
        for (int i = 0; i < a.length; i++) {
            try {
                answer += a[i] * b[i];
             } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("array length가 다릅니다 array a :" + a.length + " , b : " + b.length);
            }
        }
        return answer;
    }
}

/**
 * so easy
 *
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (0.05ms, 53.1MB)
 * 테스트 2 〉	통과 (0.03ms, 53MB)
 * 테스트 3 〉	통과 (0.03ms, 53.6MB)
 * 테스트 4 〉	통과 (0.03ms, 52.7MB)
 * 테스트 5 〉	통과 (0.04ms, 52.7MB)
 * 테스트 6 〉	통과 (0.05ms, 52.5MB)
 * 테스트 7 〉	통과 (0.04ms, 52.3MB)
 * 테스트 8 〉	통과 (0.05ms, 51.8MB)
 * 테스트 9 〉	통과 (0.07ms, 52.5MB)
 * 채점 결과
 * 정확성: 100.0
 * 합계: 100.0 / 100.0
 */