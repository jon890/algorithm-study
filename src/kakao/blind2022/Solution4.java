package kakao.blind2022;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Solution4 {

    public int[] solution(int n, int[] info) {
        final int NUMBER_OF_SCORES = 11;

        List<int[]> result = new ArrayList<>();
        int[] max = new int[1];

        // 11개의 점수 종류중 n개를 쏘는 중복조합을 만든다
        reCombination(n, new int[NUMBER_OF_SCORES], NUMBER_OF_SCORES, n, 0, 0, combinationArray -> {
            // 라이언 ~ 어피치 점수를 계산한다
            int ryanScore = 0;
            int apeachScore = 0;

            for (int i = 0; i < NUMBER_OF_SCORES; i++) {
                int ryan = combinationArray[i];
                int apeach = info[i];
                int score = NUMBER_OF_SCORES - i - 1;

                if (ryan == 0 && apeach == 0)
                    continue;
                if (ryan > apeach)
                    ryanScore += score;
                else
                    apeachScore += score;
            }

            if (ryanScore > apeachScore) {
                int difference = ryanScore - apeachScore;
                if (max[0] < difference) {
                    // 새로운 max가 등장함 => 기존 결과를 초기화한다
                    result.clear();
                    max[0] = difference;
                }
                if (max[0] <= difference)
                    result.add(combinationArray);
            }
        });

        int[] answer = result.size() == 0 ? new int[] { -1 } : result.stream().sorted((o1, o2) -> {
            // 더 작은 점수를 많이 쏜 친구를 리턴
            int length = o1.length;
            for (int i = length - 1; i >= 0; i--) {
                int v1 = o1[i];
                int v2 = o2[i];

                if (v1 > v2) {
                    return -1;
                } else if (v1 < v2) {
                    return 1;
                }
            }
            return 0;
        }).collect(Collectors.toList()).get(0);

        return answer;
    }

    // 중복조합
    private static void reCombination(int realR, int[] reComArr, int n, int r, int index, int target,
            CompleteListener listener) {
        if (r == 0) {
            // 어피치의 info와 같은 형식으로 전달한다
            int[] result = new int[n];
            for (int i = 0; i < realR; i++) {
                result[n - reComArr[i] - 1]++;
            }
            listener.onCombination(result);
            return;
        }
        if (target == n)
            return;

        reComArr[index] = target;
        reCombination(realR, reComArr, n, r - 1, index + 1, target, listener);
        reCombination(realR, reComArr, n, r, index, target + 1, listener);
    }

    public interface CompleteListener {
        void onCombination(int[] combinationArray);
    }

    public static void main(String[] args) {
        Solution4 obj = new Solution4();
        // obj.solution(5, new int[]{2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0});
        // obj.solution(1, new int[]{1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
        obj.solution(9, new int[] { 0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1 });
    }

}

/**
 * 채점을 시작합니다. 정확성 테스트 테스트 1 〉 통과 (2.15ms, 62.5MB) 테스트 2 〉 통과 (19.39ms, 65.7MB)
 * 테스트 3 〉 통과 (15.94ms, 64.8MB) 테스트 4 〉 통과 (5.11ms, 60MB) 테스트 5 〉 통과 (33.89ms,
 * 84.5MB) 테스트 6 〉 통과 (32.95ms, 84.1MB) 테스트 7 〉 통과 (5.18ms, 74.8MB) 테스트 8 〉 통과
 * (2.41ms, 67.6MB) 테스트 9 〉 통과 (4.42ms, 73.8MB) 테스트 10 〉 통과 (4.12ms, 67.8MB) 테스트
 * 11 〉 통과 (4.23ms, 71.7MB) 테스트 12 〉 통과 (4.68ms, 69.4MB) 테스트 13 〉 통과 (7.60ms,
 * 60.7MB) 테스트 14 〉 통과 (18.43ms, 83.1MB) 테스트 15 〉 통과 (18.96ms, 66.3MB) 테스트 16 〉
 * 통과 (4.23ms, 60.3MB) 테스트 17 〉 통과 (3.48ms, 61.9MB) 테스트 18 〉 통과 (2.42ms, 71.8MB)
 * 테스트 19 〉 통과 (0.67ms, 59.3MB) 테스트 20 〉 통과 (16.99ms, 79.9MB) 테스트 21 〉 통과
 * (18.32ms, 65.9MB) 테스트 22 〉 통과 (26.13ms, 70.8MB) 테스트 23 〉 통과 (1.09ms, 70MB)
 * 테스트 24 〉 통과 (26.82ms, 83.2MB) 테스트 25 〉 통과 (26.09ms, 69MB) 채점 완료
 */
