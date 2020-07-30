package programmers.skillcheck.level3;

import java.util.Arrays;
import java.util.Collections;

public class OverTimeFatigue {


    public long solution(int n, int[] works) {
        /*
         * 야근 -> 피로도 쌓임
         * 야근 피로도 = 야근 시점 + 남은일의 작업량 ^ 2
         * N 시간 동안 야근 피로도 최소화
         * 1시간당 1만큼 작업량 처리
         */

        // greedy 하게?
//         for (int i = 0; i < n; i++) {
//             // works에서 제일 큰 값을 찾는다
//             // 1뺀다
//             int max_idx = findMaximumIndex(works);
//             if (max_idx == -1) break;

//             works[max_idx]--;
//         }

        while (n > 0) {
            Arrays.sort(works);

            // 최댓값이 0이면 -> 야근을 궂이 안해도 되면 종료
            if (works[works.length - 1] == 0) break;

            for (int i = works.length - 1; i > 0; i--) {
                if (works[i] > works[i - 1]) {
                    int difference = works[i] - works[i - 1];
                    difference = Math.min(difference, n);
                    n -= difference;
                    works[i] -= difference;
                    break;
                } else if (works[i] == works[i - 1]) {
                    if (works[i - 1] > 0) {
                        works[i - 1]--;
                        n--;
                        break;
                    }
                }
            }
            System.out.println(Arrays.toString(works));
        }


        long answer = 0;
        for (int work : works) {
            if (work == 0) continue;

            answer += work * work;
        }

        return answer;
    }

    public static int findMaximumIndex(int[] array) {
        int INDEX = -1;
        int MAXIMUM = 0;

        for (int i = 0; i < array.length; i++) {
            if (array[i] > MAXIMUM) {
                INDEX = i;
                MAXIMUM = array[i];
            }
        }
        ;

        return INDEX;
    }

    public static void main(String[] args) {
        OverTimeFatigue obj = new OverTimeFatigue();
//        obj.solution(4, new int[]{4, 3, 3});
        obj.solution(1, new int[]{2, 2, 1});
    }
}

/*
2020-07-30

값을 평탄화하는데 좋은 알고리즘은 무엇일까..? 고민해보자
답은 찾았지만 효율성에서 탈락함

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (1.08ms, 50.4MB)
테스트 2 〉	통과 (1.07ms, 52.4MB)
테스트 3 〉	통과 (1.58ms, 53.2MB)
테스트 4 〉	통과 (0.98ms, 52.3MB)
테스트 5 〉	통과 (1.00ms, 50.5MB)
테스트 6 〉	통과 (1.14ms, 50.8MB)
테스트 7 〉	통과 (1.10ms, 52.6MB)
테스트 8 〉	통과 (1.62ms, 53.2MB)
테스트 9 〉	통과 (2.51ms, 50.2MB)
테스트 10 〉	통과 (1.54ms, 54.2MB)
테스트 11 〉	통과 (1.01ms, 52.6MB)
테스트 12 〉	통과 (1.09ms, 52.6MB)
테스트 13 〉	통과 (1.08ms, 50.6MB)
효율성  테스트
테스트 1 〉	실패 (시간 초과)
테스트 2 〉	실패 (시간 초과)
채점 결과
정확성: 43.3
효율성: 0.0
합계: 43.3 / 50
 */