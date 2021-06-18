package codility;

// LESSON 3 - Time Complexity
public class PermMissingElem {

    public int solution(int[] A) {
        // write your code in Java SE 8
        // 빠진 원소를 찾아라!!

        boolean[] check = new boolean[A.length + 2]; // 1 ~ N + 1을 커버하기 위해
        check[0] = true; // 오류 방지
        for (int i : A) {
            check[i] = true;
        }

        for (int i = 0; i < check.length; i++) {
            if (!check[i]) {
                return i;
            }
        }

        return -1;
    }
}
