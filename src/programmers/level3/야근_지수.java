package programmers.level3;

import java.util.Collections;
import java.util.PriorityQueue;

/**
 * 2021-08-25
 * 드디어 3단계 하나 풀었드아 ㅠㅠ
 * 2단계랑 갭차이 느껴진다..
 *
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (0.47ms, 56.8MB)
 * 테스트 2 〉	통과 (0.58ms, 68.5MB)
 * 테스트 3 〉	통과 (0.42ms, 68.9MB)
 * 테스트 4 〉	통과 (0.52ms, 69.9MB)
 * 테스트 5 〉	통과 (0.46ms, 70.4MB)
 * 테스트 6 〉	통과 (0.48ms, 68.3MB)
 * 테스트 7 〉	통과 (0.45ms, 60.6MB)
 * 테스트 8 〉	통과 (1.67ms, 69.6MB)
 * 테스트 9 〉	통과 (1.66ms, 73.7MB)
 * 테스트 10 〉	통과 (0.42ms, 68.2MB)
 * 테스트 11 〉	통과 (0.56ms, 60MB)
 * 테스트 12 〉	통과 (0.51ms, 69.8MB)
 * 테스트 13 〉	통과 (0.42ms, 58.7MB)
 * 효율성  테스트
 * 테스트 1 〉	통과 (127.48ms, 68.1MB)
 * 테스트 2 〉	통과 (124.40ms, 68.7MB)
 * 채점 결과
 * 정확성: 86.7
 * 효율성: 13.3
 * 합계: 100.0 / 100.0
 */

public class 야근_지수 {

    public long solution(int n, int[] works) {

        PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());
        long answer = 0;

        for (int work : works) {
            queue.add(work);
        }

        while (n != 0) {
            // 최댓값을 가져온다
            int max = queue.poll();
            if(max == 0) break;
            max--;
            n--;
            queue.add(max);
        }

        for (int work : queue) {
            answer += (long) work * work;
        }

        return answer;
    }

    public static void main(String[] args) {
        int[] works1 = {4, 3, 3};
        int n1 = 4;

        야근_지수 obj = new 야근_지수();
        obj.solution(n1, works1);
    }
}
