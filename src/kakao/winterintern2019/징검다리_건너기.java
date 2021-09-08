package kakao.winterintern2019;

/**
 * 21-09-08
 * 답은 어짜피 min ~ max 사이이다
 * min ~ max를 이분탐색으로 건널 수 있는지 검사해서 답을 찾는다
 * check 로직 n
 * 이분탐색 로직 log(max - min)
 * nlogm의 시간 복잡도를 갖는다
 *
 * 참 아이디어란 대단해..
 * 빠르게 해아한다 => 이분탐색을 떠올려보자
 */
public class 징검다리_건너기 {

    public int solution(int[] stones, int k) {
        int max = 0;
        int min = 200000000;

        for (int v : stones) {
            max = Math.max(max, v);
            min = Math.min(min, v);
        }

        return binarySearch(stones, k, min, max);
    }

    public int binarySearch(int[] stones, int k, int low, int high) {
        if (low == high) return low;

        while (low < high) {
            int mid = (low + high) / 2;

            if (check(stones, k, mid)) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return high - 1;
    }

    private boolean check(int[] stones, int k, int mid) {
        int count = 0;

        for (int stone: stones) {
            if (stone - mid < 0) count ++;
            else count = 0;

            if (count == k) return false;
        }

        return true;
    }

    public static void main(String[] args) {
        징검다리_건너기 obj = new 징검다리_건너기();
        obj.solution(new int[]{2, 4, 5, 3, 2, 1, 4, 2, 5, 1}, 3);
    }
}
