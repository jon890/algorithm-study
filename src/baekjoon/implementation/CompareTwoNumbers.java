package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 두 수 비교하기
 * https://www.acmicpc.net/problem/1330
 */
public class CompareTwoNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = scanner.nextInt();
        int b = scanner.nextInt();

        final String BIGGER = ">";
        final String LESS = "<";
        final String EQUAL = "==";

        String output;
        if (a > b) {
            output = BIGGER;
        } else if (a == b) {
            output = EQUAL;
        } else {
            output = LESS;
        }

        System.out.println(output);
    }
}
