package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 별 찍기 - 1
 * https://www.acmicpc.net/problem/2438
 */
public class DrawingStarsOne {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int lines = scanner.nextInt();
        for (int i = 0; i < lines; i ++) {

            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }

            System.out.println("");
        }
    }
}
