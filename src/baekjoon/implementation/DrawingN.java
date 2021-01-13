package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * N 찍기
 * https://www.acmicpc.net/problem/2741
 */
public class DrawingN {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        for (int i = 1; i <= n; i++) {
            System.out.println(i);
        }
    }
}
