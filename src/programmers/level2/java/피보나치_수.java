package programmers.level2.java;

public class 피보나치_수 {

    private static int[] dp = new int[100001];

    public int solution(int n) {
        dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp [i] = (dp[i - 1] + dp[i - 2]) % 1234567;
        }
        return dp[n];
    }
}
