package wadiz;

public class Solution3 {

    public int solution(int[] arr) {
        int answer = 0;

        while (true) {
            // 종료 조건 => arr의 원소가 모두 0이 됨 => O(n)
            if (check(arr)) break;

            // 0이 없는 구간을 찾는다
            int[] interval = findIntervalWithoutZero(arr);

            // 0보다 큰 수중 제일 작은 수를 찾는다 => O(n)
            int min = findMinWithoutZero(arr, interval[0], interval[1]);

            // 0보다 큰값들을 min 만큼 뺀다
            // 0이 되는 순간까지만 뺀다
            int start = interval[0];
            int end = Math.min(arr.length, interval[1]);
            for (int i = start; i <= end; i++) {
                arr[i] -= min;
            }

            answer++;
        }

        System.out.println(answer);
        return answer;
    }

    private boolean check(int[] array) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] != 0) return false;
        }
        return true;
    }

    private int[] findIntervalWithoutZero(int[] array) {
        int start = -1;
        int end = -1;

        for (int i = 0; i < array.length; i++) {
            // start, end 처음 셋팅하기
            if (start == -1 && array[i] != 0) {
                start = i;
                end = i;
                continue;
            }

            if (array[i] != 0) end = i;

            if (start != -1 && array[i] == 0) break;
        }
        return new int[]{start, end};
    }

    private int findMinWithoutZero(int[] array, final int start, final int end) {
        int min = 1000000000;
        int realEnd = Math.min(end, array.length);

        for (int i = start; i <= realEnd; i++) {
            if (array[i] == 0) continue;
            if (array[i] < min) min = array[i];
        }
        return min;
    }

    public static void main(String[] args) {
        Solution3 obj = new Solution3();

        int[] array1 = new int[]{1, 2, 4, 8, 4, 2, 1};
        int[] array2 = new int[]{1, 3, 5, 7, 6, 8, 9, 5, 1};
        int[] array3 = new int[]{10, 0, 10, 0, 10, 0};
        int[] array4 = new int[]{5, 4, 5, 4, 5, 5};

        obj.solution(array1);
        obj.solution(array2);
        obj.solution(array3);
        obj.solution(array4);
    }
}

// 같은 배열로 만들기 위한 최소 작업 횟수!
// 제일 작은수를 빼나감