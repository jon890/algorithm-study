package programmers.heap;

import java.util.PriorityQueue;

public class 더_맵게 {

    public int solution(int[] scoville, int K) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(); // 최소 힙

        for (int j : scoville) {
            heap.add(j);
        }


        int count = 0;

        while (true) {
            try {
                int firstMin = heap.poll();
                if (firstMin >= K) break;

                Integer secondMin = heap.poll();
                int newScoville = firstMin + secondMin * 2;
                heap.add(newScoville);
                count++;
            } catch (NullPointerException e) {
                return -1;
            }
        }

        return count;
    }

// 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶다
// 가장 낮은 두 개의 음식을 특별한 방법으로 섞어 새로운 음식
// 섞은 = 가장 맵지 않은 + ( 두 번째로 맵지 않은 * 2)
// K 이상이 될 때 까지 반복
}
