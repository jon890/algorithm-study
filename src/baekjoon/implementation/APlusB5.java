package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * A + B - 5
 * https://www.acmicpc.net/problem/10952
 */
public class APlusB5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();

            if (a == 0 && b == 0)
                break;

            System.out.println(a + b);
        }
    }
}
