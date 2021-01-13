package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 기찍 N (zz 찍기 N 을 뒤집음)
 * https://www.acmicpc.net/problem/2742
 */
public class DrawingReverseN {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        for (int i = n ; i >= 1; i--) {
            System.out.println(i);
        }
    }
}
