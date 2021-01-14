package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 아스키 코드
 * https://www.acmicpc.net/problem/11654
 */
public class AsciiCode {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String string = scanner.nextLine();
        if (string.length() > 0) {
            char c = string.charAt(0);
            System.out.println((int) c);
        }
    }
}
