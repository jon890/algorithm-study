package programmers.skillcheck.level3;

import java.util.ArrayList;
import java.util.List;

/**
 * 프로그래머스
 * 스킬체크 레벨 3
 *
 * Palindrome
 * chanllenge_id=2425
 *
 * 황금비를 쭉 따라가
 * 제일 큰 직사각형의 둘레를 구하기
 */
public class GoldenRatio {

    public long solution(int N) {

        long[] fibonacci = new long[N+1];
        fibonacci[0] = 1;
        fibonacci[1] = 1;

        for (int i = 2; i <= N; i++) {
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        }

        return 2 * (fibonacci[N-1] + fibonacci[N]);
    }

    public static void main(String[] args) {
        GoldenRatio obj = new GoldenRatio();

        int n_1 = 5;
        long answer_1 = obj.solution(n_1);
        System.out.println("########## 예제 1의 결과는 ?");
        System.out.println(answer_1);
        System.out.println("##########");

        int n_2 = 6;
        long answer_2 = obj.solution(n_2);
        System.out.println("########## 예제 2의 결과는 ?");
        System.out.println(answer_2);
        System.out.println("##########");
    }
}

/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.83ms, 50.2MB)
테스트 2 〉	통과 (0.78ms, 50.2MB)
테스트 3 〉	통과 (0.79ms, 52.6MB)
테스트 4 〉	통과 (0.82ms, 52.2MB)
테스트 5 〉	통과 (0.79ms, 52.5MB)
테스트 6 〉	통과 (0.83ms, 52.8MB)
테스트 7 〉	통과 (0.85ms, 50.4MB)
테스트 8 〉	통과 (0.72ms, 52.7MB)
효율성  테스트
테스트 1 〉	통과 (0.52ms, 50.8MB)
테스트 2 〉	통과 (0.63ms, 52.3MB)
테스트 3 〉	통과 (0.58ms, 52.3MB)
테스트 4 〉	통과 (0.58ms, 52.3MB)
채점 결과
정확성: 33.3
효율성: 16.7
합계: 50.0 / 50
 */
