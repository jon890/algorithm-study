package codility;

import java.util.HashSet;
import java.util.Set;

public class FrogRiverOne {

    // O(n^2) => 효율성 실패!
//    public int solution(int X, int[] A) {
//        // write your code in Java SE 8
//        // X 까지 커버 되는 제일 빠른시간 찾기
//
//        boolean[] check = new boolean[X + 1];
//        check[0] = true;
//        int result = -1;
//
//        for (int i = 0; i < A.length; i++) {
//            check[A[i]] = true;
//
//            boolean flag = true;
//            for (boolean b : check) {
//                if (!b) {
//                    flag = false;
//                    break;
//                }
//            }
//
//            if (flag) {
//                result = i;
//                break;
//            }
//        }
//
//        return result;
//    }

    public int solution(int X, int[] A) {
        // O(n)이나 O(n * logN) 방법을 생각해야한다!!
        Set<Integer> set = new HashSet<>();

        for (int i = 0; i < A.length; i++) {
            if (A[i] <= X) {
                set.add(A[i]);
            }

            // boolean 배열을 순회하지않고
            // 개수로 비교!!
            if (set.size() == X) {
                return i;
            }
        }

        return -1;
    }
}
