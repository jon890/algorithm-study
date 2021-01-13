package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * X 보다 작은 수
 * https://www.acmicpc.net/problem/10871
 */
public class NumberLessThanX {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = scanner.nextInt();
        int x = scanner.nextInt();

        for (int i = 0; i < count; i++) {
            int number = scanner.nextInt();
            if (number < x) {
                System.out.print(number + " ");
            }
        }
    }
}
