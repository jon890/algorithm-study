package codility;

import java.util.ArrayList;
import java.util.List;

public class BinaryGap {

    public static int solution(int N) {
        List<Integer> list = new ArrayList<>();
        int i = 0;
        while (N != 0) {
            int q = N / 2;
            int r = N % 2;

            if (r == 1) {
                list.add(i); // 1이 들어가는 장소를 저장한다
            }
            N = q;
            i++;
        }

        // 두 원소를 순차적으로 비교해서 차이값이 제일 큰 것을 찾는다
        int max = 0;
        for (int j = 0; j < list.size() - 1; j++) {
            int a = list.get(j);
            int b = list.get(j + 1);

            int diff = Math.abs(a - b) - 1;
            if (diff > max) {
                max = diff;
            }
        }

        return max;
    }

    public static void main(String[] args) {
        System.out.println(solution(1041));
    }
}
