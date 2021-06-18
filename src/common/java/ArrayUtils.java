package common.java;

public class ArrayUtils {

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
}
