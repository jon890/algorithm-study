package baekjoon.implementation;

import java.util.Scanner;

/**
 * 백준 알고리즘
 * Implementation (구현)
 * 최소, 최대
 * https://www.acmicpc.net/problem/10818
 */
public class MaximumAndMinimum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());
        int[] array = new int[count];

        for (int i = 0; i < count; i++) {
            if (scanner.hasNext()) {
                array[i] = scanner.nextInt();
            }
        }

        System.out.println(findMinimum(array) + " " + findMaximum(array));
    }

    public static int findMaximum(int[] array) {
        if (array == null)
            throw new RuntimeException("parameter is null!");

        if (array.length == 0)
            throw new RuntimeException("array is not having element!!");

        int max = array[0];

        for (int i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }

        return max;
    }

    public static int findMinimum(int[] array) {
        if (array == null)
            throw new RuntimeException("parameter is null!");

        if (array.length == 0)
            throw new RuntimeException("array is not having element!!");

        int min = array[0];

        for (int i = 1; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }

        return min;
    }
}
