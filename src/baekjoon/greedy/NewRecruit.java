package baekjoon.greedy;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Greedy
 * 신입사원
 * https://www.acmicpc.net/problem/1946
 */
public class NewRecruit {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int testCases = scanner.nextInt();
        for (int i = 0; i < testCases; i++) {
            int person = scanner.nextInt();
            int[][] ranks = new int[person][2];

            for (int j = 0; j < person; j++) {
                for (int k = 0; k < 2; k++) {
                    ranks[j][k] = scanner.nextInt();
                }
            }

            System.out.println(getSolution(person, ranks));
        }
    }

    // 21-01-13 => 시간초과 ㅠㅠ
    public static int getSolution(int person, int[][] ranks) {
        /**
         * 한 사람의
         */
        int answer = 0;

        for (int i = 0; i < person; i++) {
            boolean check = true;

            for (int j = 0; j < person; j++) {
                if (i == j) {
                    continue;
                }
                if (ranks[i][0] > ranks[j][0] && ranks[i][1] > ranks[j][1]) {
                    check = false;
                    break;
                }
            }

            if (check) {
                answer++;
            }
        }

        return answer;
    }
}
