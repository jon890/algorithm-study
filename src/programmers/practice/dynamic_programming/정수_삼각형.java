package programmers.practice.dynamic_programming;

import java.util.Arrays;

public class 정수_삼각형 {

    public int solution(int[][] triangle) {

        // triangle과 크기가 같은 dp 테이블 선언
        int[][] dp = new int[triangle.length][];
        for (int i = 0; i < triangle.length; i++) {
            dp[i] = new int[triangle[i].length];
        }
        dp[0][0] = triangle[0][0];


        // 두 번째 행부터 최댓값을 기록하면서 찾아나가기
        for (int i = 1; i < triangle.length; i++) {
            for (int j = 0; j < triangle[i].length; j++) {
                // 첫 번째 열인가?
                if (j == 0) {
                    dp[i][j] = dp[i - 1][j] + triangle[i][j];
                    continue;
                }

                // 마지막 열인가?
                if (j + 1 == triangle[i].length) {
                    dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
                    continue;
                }

                // 이 외의 열인가?
                dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
            }
        }

        return findMaximum(dp[dp.length - 1]);
    }

    public static int findMaximum(int[] array) {
        int MAX = Integer.MIN_VALUE;
        for (int i = 0; i < array.length; i++) {
            if (array[i] > MAX) {
                MAX = array[i];
            }
        }
        return MAX;
    }

    public static void main(String[] args) {
        정수_삼각형 obj = new 정수_삼각형();

        int[][] triangle_1 = new int[][]{{7}, {3, 8}, {8, 1, 0}, {2, 7, 4, 4}, {4, 5, 2, 6, 5}};
        int answer_1 = 30;
        test(obj, triangle_1, answer_1);
    }

    public static void test(정수_삼각형 obj, int[][] triangle, int answer) {
        int result = obj.solution(triangle);
        System.out.println("테스트 ##########");
        System.out.println("테스트 결과 : " + result);
        System.out.println("테스트 예상결과 : " + answer);

        if (result == answer) {
            System.out.println("✅ 예상 결과가 일치합니다!!");
        } else {
            System.out.println("❌ 예상 결과가 다릅니다!!");
        }
    }
}

/**
 * 2021-05-22
 * DP = 이전 결과를 저장하고 활용하는 기법이다
 * 연산되는 최댓값들을 계속 저장하고
 * 다음 연산에 활용하기!!
 *
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (0.05ms, 52.9MB)
 * 테스트 2 〉	통과 (0.04ms, 52.9MB)
 * 테스트 3 〉	통과 (0.05ms, 52.1MB)
 * 테스트 4 〉	통과 (0.10ms, 53.7MB)
 * 테스트 5 〉	통과 (0.43ms, 53.2MB)
 * 테스트 6 〉	통과 (0.13ms, 51.6MB)
 * 테스트 7 〉	통과 (0.38ms, 52.3MB)
 * 테스트 8 〉	통과 (0.15ms, 52.6MB)
 * 테스트 9 〉	통과 (0.04ms, 52.8MB)
 * 테스트 10 〉	통과 (0.08ms, 52.2MB)
 * 효율성  테스트
 * 테스트 1 〉	통과 (10.97ms, 61.2MB)
 * 테스트 2 〉	통과 (8.25ms, 58.8MB)
 * 테스트 3 〉	통과 (9.16ms, 61.1MB)
 * 테스트 4 〉	통과 (9.58ms, 61.4MB)
 * 테스트 5 〉	통과 (10.81ms, 60.3MB)
 * 테스트 6 〉	통과 (9.82ms, 63.3MB)
 * 테스트 7 〉	통과 (9.22ms, 61.8MB)
 * 테스트 8 〉	통과 (8.23ms, 60MB)
 * 테스트 9 〉	통과 (11.66ms, 61.5MB)
 * 테스트 10 〉	통과 (9.51ms, 61.3MB)
 * 채점 결과
 * 정확성: 64.3
 * 효율성: 35.7
 * 합계: 100.0 / 100.0
 */

