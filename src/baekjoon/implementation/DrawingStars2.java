package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 별 찍기 - 2
 * https://www.acmicpc.net/problem/2439
 */
public class DrawingStars2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int lines = scanner.nextInt();
        for (int i = 0; i < lines; i ++) {

            for (int j = lines - 1; j >= 0; j--) {
                if (j > i) { // 4 3 2 1 0
                    System.out.print(" ");
                } else { // i == j 일때는 별을 그려준다
                    System.out.print("*");
                }
            }

            System.out.println("");
        }
    }
}
