package baekjoon.greedy;

import java.util.Scanner;

/**
 * 백준 알고리즘 - 그리디 - 설탕 배달
 * https://www.acmicpc.net/problem/2839
 */
public class DeliverySugar {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int sugars = scanner.nextInt();
        System.out.println(getSolution(sugars));
    }

    public static int getSolution(int sugars) {
        // 최대한 5kg를 사용하고
        // 나머지를 3kg를 사용하면 된다.

        // 5kg 를 최대한으로 사용할 수 있는 갯수
        int maximum_5kg = sugars / 5;
        for (int count_5kg = maximum_5kg; count_5kg >= 0; count_5kg--) {
            // 5kg 의 양을 줄이면서 정확히 Nkg를 만들수 있는지 확인한다.
            int temp = sugars - count_5kg * 5;

            if (temp % 3 == 0) {
                return count_5kg + temp / 3;
            }
        }

        return -1;
    }
}
