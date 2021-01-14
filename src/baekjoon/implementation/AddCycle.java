package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 더하기 사이클
 * https://www.acmicpc.net/problem/1110
 */
public class AddCycle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int init = scanner.nextInt();
        int count = 0;
        int next = init;

        while (true) {
            next = getNextCycle(next);
            count++;

            if (init == next) {
                System.out.println(count);
                break;
            }
        }
    }

    public static int getNextCycle(int number) {
        // 26 -> 68 -> 84 -> 26

        if (number < 0 || number > 99)
            throw new RuntimeException("허용되지 않는 범위의 수 입니다. 가능 범위 0 ~ 99");

        // 1. 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리수로 만들고, 각 자리의 숫자를 더한다.
        int sum;
        int right;

        if (number < 10) {
            sum = number;
            right = number;

        } else {
            int first = number / 10;
            int second = number % 10;

            sum = first + second;
            right = second;
        }

        // 2. 그 다음 주어진 수의 가장 오른쪽 자리수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들수 있다.
        return right * 10 + sum % 10;
    }
}
