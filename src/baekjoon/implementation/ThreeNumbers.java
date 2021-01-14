package baekjoon.implementation;

import java.util.Arrays;
import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 세 수
 * https://www.acmicpc.net/problem/10817
 */
public class ThreeNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 두번째로 큰 정수 출력
        // 1 <= A, B, C <= 100

        // 예 1) 20 30 10 => 20
        // 예 2) 30 30 10 => 30 ?? 10 아니구..?
        // 예 3) 40 40 40 =? 40
        // 예 4) 20 10 10 => 10
        // 경우를 잘 체크해야 하네

        int[] array = new int[3];
        for (int i = 0; i < array.length; i++) {
            array[i] = scanner.nextInt();
        }
        Arrays.sort(array);
//        System.out.println(Arrays.toString(array));
        System.out.println(array[1]);
    }
}
