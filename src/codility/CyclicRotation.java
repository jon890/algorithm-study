package codility;

// LESSON 2 - Arrays
public class CyclicRotation {

    public int[] solution(int[] A, int K) {
        if (A.length == 0) {
            return A;
        }

        if (K % A.length == 0) {
            return A;
        }

        int offset = K % A.length;
        int[] result = new int[A.length];

        for (int i = 0; i < offset; i++) {
            result[i] = A[A.length - offset + i];
        }

        for (int i = offset; i < result.length; i++) {
            result[i] = A[i - offset];
        }

        return result;
    }
}
