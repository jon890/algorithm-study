package programmers.practice.level2;

/**
 * 프로그래머스
 * 코딩 테스트 연습
 * Level 2
 *
 * 주식가격
 * https://programmers.co.kr/learn/courses/30/lessons/42584?language=java
 */
public class StockPrice {

    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];

        for (int i = 0; i <prices.length; i++) {
            int count = 0;

            for (int j = i + 1; j <prices.length; j++) {
                if (prices[j] >= prices[i]) {
                    count++;
                } else {
                    break;
                }
            }

            answer[i] = count;
        }
        return answer;
    }
}


/*
2020-07-15
스택/큐 카테고리에 있는데 이용안해도 깔끔하게 풀리는 문제였다

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (1.46ms, 52.5MB)
테스트 2 〉	통과 (1.39ms, 52.2MB)
테스트 3 〉	통과 (2.02ms, 50.9MB)
테스트 4 〉	통과 (1.63ms, 50.5MB)
테스트 5 〉	통과 (2.24ms, 50.5MB)
테스트 6 〉	통과 (1.53ms, 52.7MB)
테스트 7 〉	통과 (1.92ms, 52.3MB)
테스트 8 〉	통과 (1.49ms, 50.2MB)
테스트 9 〉	통과 (1.53ms, 54.2MB)
테스트 10 〉	통과 (2.19ms, 52.5MB)
효율성  테스트
테스트 1 〉	통과 (18.51ms, 57.9MB)
테스트 2 〉	통과 (14.75ms, 60.3MB)
테스트 3 〉	통과 (23.16ms, 61.9MB)
테스트 4 〉	통과 (16.29ms, 60.4MB)
테스트 5 〉	통과 (13.13ms, 56.1MB)
채점 결과
정확성: 66.7
효율성: 33.3
합계: 100.0 / 100.0
 */