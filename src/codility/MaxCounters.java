package codility;

import java.util.Arrays;

public class MaxCounters {

    // O(N*M)
//    public static int[] solution(int N, int[] A) {
//        // write your code in Java SE 8
//        int[] counters = new int[N];
//
//        for (int i : A) {
//            if (i == N + 1) {
//                int max = findMaximumValue(counters);
//                Arrays.fill(counters, max);
//            } else {
//                counters[i - 1]++;
//            }
//        }
//
//        return counters;
//    }

    // 최대화 쥐어 짜내기!!
    // O(N + M)
    public static int[] solution(int N, int[] A) {
        int[] counters = new int[N];
        int max = 0; // max 값을 기록
        int correctionMax = 0; // maxCounter를 만났을 때 보정해줄 correctionMax

        for (int i : A) {
            if (i == N + 1) {
                correctionMax = max;
            } else {
                // correctionMax 값보다 작다면 correctionMax + 1
                counters[i - 1] = counters[i - 1] < correctionMax ? correctionMax + 1 : counters[i - 1] + 1;

                // max 기록
                if (counters[i - 1] > max) {
                    max = counters[i - 1];
                }
            }
        }

        for (int i = 0; i < counters.length; i++) {
            if (counters[i] < correctionMax) {
                counters[i] = correctionMax;
            }
        }

        return counters;
    }

    public static int findMaximumValue(int[] array) {
        int max = Integer.MIN_VALUE;

        if (array.length == 0)
            return -1;

        for (int i = 0; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }

        return max;
    }

    public static void main(String[] args) {
        int test_N = 5;
        int[] test_A = new int[]{3, 4, 4, 6, 1, 4, 4};
        solution(test_N, test_A);
    }
}
