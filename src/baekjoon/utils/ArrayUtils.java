package baekjoon.utils;

public class ArrayUtils {

    /**
     * 배열의 최댓값을 찾는 함수 <br/>
     * 배열을 null 을 넣으면 RuntimeException 이 발생한다 <br/>
     * 배열의 원소가 없으면 RuntimeException 이 발생한다 <br/>
     *
     * @param array : 해당 배열
     * @return : 최댓값
     */
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
