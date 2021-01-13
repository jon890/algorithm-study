package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 시험 성적
 * https://www.acmicpc.net/problem/9498
 */
public class TestScore {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        String grade;
        if (n >= 90) {
            grade = "A";
        } else if (n >= 80) {
            grade = "B";
        } else if (n >= 70) {
            grade = "C";
        } else if (n >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }

        System.out.println(grade);
    }
}
