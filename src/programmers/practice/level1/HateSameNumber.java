package programmers.practice.level1;

import java.util.ArrayList;
import java.util.List;

/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 연습문제
 * Level 1
 *
 * 같은 숫자는 싫어!
 * https://programmers.co.kr/learn/courses/30/lessons/12906
 */

public class HateSameNumber {
    public int[] solution(int []arr) {

        List<Integer> answers = new ArrayList<>();

        for (int current : arr) {
            int answerSize = answers.size();
            if (answerSize == 0) {
                answers.add(current);
                continue;
            }

            // 마지막 숫자와 현재 숫자가 같은지 비교
            if (answers.get(answerSize - 1) != current) {
                answers.add(current);
            }
        }

        return answers.stream().mapToInt(i -> i).toArray();
    }
}

/*
2020-07-04

간만에 공부 시작하는데 첫 날부터 빼먹기 싫어서 레벨1로 했다!!!
내일은 레벨2로 도전!!

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (6.88ms, 52MB)
테스트 2 〉	통과 (6.95ms, 50.4MB)
테스트 3 〉	통과 (5.42ms, 50.6MB)
테스트 4 〉	통과 (7.13ms, 52.8MB)
테스트 5 〉	통과 (7.99ms, 52.8MB)
테스트 6 〉	통과 (7.97ms, 52.6MB)
테스트 7 〉	통과 (7.78ms, 52.3MB)
테스트 8 〉	통과 (6.02ms, 50.2MB)
테스트 9 〉	통과 (7.25ms, 50.4MB)
테스트 10 〉	통과 (7.37ms, 52.5MB)
테스트 11 〉	통과 (5.57ms, 53.8MB)
테스트 12 〉	통과 (6.15ms, 52.2MB)
테스트 13 〉	통과 (6.60ms, 53.2MB)
테스트 14 〉	통과 (7.53ms, 51.1MB)
테스트 15 〉	통과 (5.92ms, 50.2MB)
테스트 16 〉	통과 (5.46ms, 50.2MB)
테스트 17 〉	통과 (5.68ms, 52.3MB)
효율성  테스트
테스트 1 〉	통과 (59.71ms, 119MB)
테스트 2 〉	통과 (55.63ms, 117MB)
테스트 3 〉	통과 (56.91ms, 119MB)
테스트 4 〉	통과 (60.91ms, 123MB)
채점 결과
정확성: 71.9
효율성: 28.1
합계: 100.0 / 100.0
 */