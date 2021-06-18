package codility;

// LESSON 3 - Time Complexity
public class TapeEquilibrium {

    public static int solution(int[] A) {
        // write your code in Java SE 8

        // 두 구간으로 나눠서
        // 이전까지의 합 이후까지의합의 차를 최소로 만들기

        int total = 0;
        for (int i : A) {
            total += i;
        }

        int forwardSum = 0;
        int difference = Integer.MAX_VALUE;
        for (int i = 0; i < A.length - 1; i++) {
            forwardSum += A[i];

            int backwardSum = total - forwardSum;
            int currentDifference = Math.abs(forwardSum - backwardSum);
            if (difference > currentDifference) {
                difference = currentDifference;
            }
        }

        return difference;
    }

    public static void main(String[] args) {
//        int[] test_A = new int[]{-10, -20, -30, -40, 100};
        int[] test_A = new int[]{-1000, 1000};
        solution(test_A);
    }
}
