package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 별 찍기 - 3
 * https://www.acmicpc.net/problem/2440
 */
public class DrawingStars3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int lines = scanner.nextInt();
        for (int stars = lines; stars > 0; stars--) {
            for (int i = 0; i < stars; i ++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }
}
