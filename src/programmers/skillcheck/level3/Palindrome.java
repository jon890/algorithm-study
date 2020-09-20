package programmers.skillcheck.level3;

import java.util.Optional;

/**
 * 프로그래머스
 * 스킬체크 레벨 3
 *
 * Palindrome
 * chanllenge_id=318
 *
 * 문자열 s에서, s의 부분문자열중
 * 가장 긴 팰린드롬의 길이를 return 하는 함수 만들기
 */
public class Palindrome {

    public int solution(String s) {

        // s의 substring의 길이를 줄여가면서 검사
        for (int i = s.length(); i > 0; i--) {

            int repeat = 1;
            // s의 substring중 길이가 i인 것을 검사
            for (int j = 0; j < repeat; j++) {
                String substring = s.substring(j, i + j);
                if (checkPalindrome(substring)) {
                    return substring.length();
                }
            }
            repeat++;
        }
        return 0;
    }

    public boolean checkPalindrome(String s) {
        Optional<String> maybeString = Optional.ofNullable(s);

        if (maybeString.isPresent()) return false;

        String reversed = new StringBuffer(maybeString.get()).reverse().toString();
        return maybeString.get().equals(reversed);
    }

    public static void main(String[] args) {
        Palindrome obj = new Palindrome();

        String s_1 = "abcdcba";
        int answer_1 = obj.solution(s_1);
        System.out.println("########## 예제 1의 결과는 ?");
        System.out.println(answer_1);
        System.out.println("##########");

        String s_2 = "abacde";
        int answer_2 = obj.solution(s_2);
        System.out.println("########## 예제 2의 결과는 ?");
        System.out.println(answer_2);
        System.out.println("##########");

    }
}


/*
채점을 시작합니다.
정확성  테스트
테스트 1 〉	실패 (1.81ms, 52.3MB)
테스트 2 〉	실패 (1.86ms, 50MB)
테스트 3 〉	실패 (2.47ms, 53MB)
테스트 4 〉	실패 (2.27ms, 50.1MB)
테스트 5 〉	실패 (2.39ms, 52.3MB)
테스트 6 〉	실패 (2.35ms, 50.5MB)
테스트 7 〉	실패 (2.41ms, 50.3MB)
테스트 8 〉	실패 (2.26ms, 54.1MB)
테스트 9 〉	실패 (1.91ms, 50.6MB)
테스트 10 〉	실패 (1.74ms, 52.2MB)
테스트 11 〉	통과 (0.98ms, 50.3MB)
테스트 12 〉	통과 (0.98ms, 50.6MB)
테스트 13 〉	실패 (2.38ms, 52.8MB)
테스트 14 〉	실패 (2.67ms, 53.9MB)
테스트 15 〉	실패 (2.49ms, 50.7MB)
테스트 16 〉	실패 (2.78ms, 52.2MB)
테스트 17 〉	통과 (0.64ms, 50.1MB)
테스트 18 〉	통과 (1.11ms, 54.6MB)
테스트 19 〉	실패 (2.22ms, 52.5MB)
테스트 20 〉	통과 (1.05ms, 52.5MB)
테스트 21 〉	실패 (2.06ms, 52.2MB)
효율성  테스트
테스트 1 〉	실패 (19.89ms, 58.7MB)
테스트 2 〉	통과 (1.06ms, 49.7MB)
채점 결과
정확성: 8.3
효율성: 7.7
합계: 15.9 / 50
 */