package programmers.practice.bruteforce;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 프로그래머스
 * 코딩테스트 연습
 * 전체탐색 (Brute-Force)
 *
 * 모의고사
 * https://programmers.co.kr/learn/courses/30/lessons/42840
 */
public class MockExam {
    public int[] solution(int[] answers) {

        // 각각 인원의 찍기 패턴
        Map<Integer, List<Integer>> personPickPattern = new HashMap<>();
        personPickPattern.put(1, Arrays.asList(1, 2, 3, 4, 5));
        personPickPattern.put(2, Arrays.asList(2, 1, 2, 3, 2, 4, 2, 5));
        personPickPattern.put(3, Arrays.asList(3, 3, 1, 1, 2, 2, 4, 4, 5, 5));

        // 각 사람의 점수 구하기
        Map<Integer, Integer> personScore = new HashMap<>();
        personPickPattern.forEach((person, pattern) -> {
            int score = 0;
            int patternLength = pattern.size();

            for (int i = 0; i < answers.length; i++) {
                if (answers[i] == pattern.get(i % patternLength)) score++;
            }

            personScore.put(person, score);
        });

        // 최고 득점을 찾기
        int highestScore = personScore.values()
                .stream()
                .max(Integer::compare)
                .orElse(0);

        List<Integer> hasHighestScore = new ArrayList<>();

        // 최고 득점자를 리스트에 추가
        personScore.forEach((person, score) -> {
            if (score == highestScore) hasHighestScore.add(person);
        });

        // 오름차순으로 정렬
        Collections.sort(hasHighestScore);

        return hasHighestScore.stream().mapToInt(i -> i).toArray();
    }
}

/*
정확성  테스트
테스트 1 〉	통과 (9.55ms, 53MB)
테스트 2 〉	통과 (8.99ms, 50.7MB)
테스트 3 〉	통과 (10.28ms, 52.6MB)
테스트 4 〉	통과 (9.93ms, 53.1MB)
테스트 5 〉	통과 (10.39ms, 51MB)
테스트 6 〉	통과 (9.72ms, 53.1MB)
테스트 7 〉	통과 (10.04ms, 53MB)
테스트 8 〉	통과 (10.10ms, 53.1MB)
테스트 9 〉	통과 (14.30ms, 53.6MB)
테스트 10 〉	통과 (11.15ms, 52.8MB)
테스트 11 〉	통과 (13.99ms, 53.3MB)
테스트 12 〉	통과 (13.15ms, 53.1MB)
테스트 13 〉	통과 (9.55ms, 52.5MB)
테스트 14 〉	통과 (14.38ms, 53.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */