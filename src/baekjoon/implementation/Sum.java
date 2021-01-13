package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 합
 * https://www.acmicpc.net/problem/8393
 */
public class Sum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // sigma 1 ~ n
        int n = scanner.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        System.out.println(sum);
    }
}
