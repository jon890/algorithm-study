package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * A + B - 7
 * https://www.acmicpc.net/problem/11021
 */
public class APlusB7 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int testCases = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < testCases; i++) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            String output = String.format("Case #%d: %d", i + 1, a + b);
            System.out.println(output);
        }
    }
}
