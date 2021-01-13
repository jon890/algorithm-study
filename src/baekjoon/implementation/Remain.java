package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 나머지
 * https://www.acmicpc.net/problem/10430
 */
public class Remain {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();
        System.out.println((a + b) % c);
        System.out.println(((a % c) + (b % c)) % c);
        System.out.println((a * b) % c);
        System.out.println(((a % c) * (b % c)) % c);
    }
}
