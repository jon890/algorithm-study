package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * A + B - 4
 * https://www.acmicpc.net/problem/10951
 */
public class APlusB4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            if (scanner.hasNextInt()) {
                int a = scanner.nextInt();
                int b = scanner.nextInt();
                System.out.println(a + b);
            } else {
                break;
            }
        }
    }
}
