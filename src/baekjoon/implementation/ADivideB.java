package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * A / B
 * https://www.acmicpc.net/problem/1008
 */
public class ADivideB {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = scanner.nextInt();
        int b = scanner.nextInt();
        double divide = (double) a / b;
        System.out.println(divide);
    }
}
