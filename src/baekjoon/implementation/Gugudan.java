package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 구구단
 * https://www.acmicpc.net/problem/2739
 */
public class Gugudan {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int dan = scanner.nextInt();
        for (int j = 1; j <= 9; j++) {
            System.out.println(String.format("%d * %d = %d", dan, j, dan * j));
        }
    }
}
