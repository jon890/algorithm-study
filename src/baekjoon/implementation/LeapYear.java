package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 윤년
 * https://www.acmicpc.net/problem/2753
 */
public class LeapYear {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int year = scanner.nextInt();
        int output = isLeapYear(year) ? 1 : 0;
        System.out.println(output);
    }

    public static boolean isLeapYear(int year) {
        // 윤년 => 4의 배수이면서 100의 배수가 아님 혹은 4의 배수이면서 400의 배수임

        boolean multiplesOfFour = year % 4 == 0;
        boolean multiplesOfHundred = year % 100 == 0;
        boolean multiplesOfFourHundreds = year % 400 == 0;

        if (multiplesOfFour && !multiplesOfHundred)
            return true;

        if (multiplesOfFour && multiplesOfFourHundreds)
            return true;

        return false;
    }
}
