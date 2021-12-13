package programmers.bruteforce;

/**
 * 프로그래머스
 * 코딩테스트 연습
 * 전체탐색 (Brute-Force)
 *
 * 카펫
 * https://programmers.co.kr/learn/courses/30/lessons/42842
 */
public class Carpet {

    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];

        for (int i = yellow; i > 0; i--) {
            if (yellow % i == 0) {
                int a = i;
                int b = yellow / i;
                int c = 2 * a + 2 * b + 4;

                if (brown == c) {
                    answer[0] = a + 2;
                    answer[1] = b + 2;
                    break;
                }
            }
        }

        return answer;
    }

}

/*
정확성  테스트
테스트 1 〉	통과 (1.62ms, 52.2MB)
테스트 2 〉	통과 (1.76ms, 52.5MB)
테스트 3 〉	통과 (8.10ms, 50.8MB)
테스트 4 〉	통과 (1.56ms, 52.6MB)
테스트 5 〉	통과 (1.54ms, 51MB)
테스트 6 〉	통과 (4.73ms, 53.3MB)
테스트 7 〉	통과 (8.40ms, 52.9MB)
테스트 8 〉	통과 (7.97ms, 52.4MB)
테스트 9 〉	통과 (8.86ms, 52.5MB)
테스트 10 〉	통과 (9.26ms, 52.2MB)
테스트 11 〉	통과 (1.62ms, 52.1MB)
테스트 12 〉	통과 (1.59ms, 51.9MB)
테스트 13 〉	통과 (1.54ms, 52.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */