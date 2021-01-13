package baekjoon.greedy;

import java.util.Arrays;
import java.util.Scanner;

public class Rope {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int count = Integer.parseInt(scanner.nextLine());
        int[] ropes = new int[count];
        for (int i = 0; i < count; i++) {
            int weight = Integer.parseInt(scanner.nextLine());
            ropes[i] = weight;
        }

        System.out.println(getSolution(count, ropes));
    }

    public static int getSolution(int count, int[] ropes) {
        /**
         * greedy 최대로 많이 버틸수 있는 로프로 결정?
         * 3 1 1 100 이면  1개의 로프로 100kg를 들면 되는것아닌가..?
         *
         * 일단 내림차순 정렬후
         * 최대 무게 = 갯수 x 버틸수 있는 무게량의 최솟값
         */

        Arrays.sort(ropes);
        int[] results = new int[count];
        for (int i = ropes.length - 1; i >= 0; i--) {
            results[i] = (ropes.length - i) * ropes[i];
        }

        return getMaximum(results);
    }

    public static int getMaximum(int[] array) {
        int compare = Integer.MIN_VALUE;

        for (int i = 0; i < array.length; i++) {
            if (array[i] > compare) {
                compare = array[i];
            }
        }

        return compare;
    }
}
