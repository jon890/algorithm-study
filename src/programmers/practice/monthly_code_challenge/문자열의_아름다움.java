package programmers.practice.monthly_code_challenge;

/**
 * 두 개 뽑아서 더하기
 * 프로그래머스 월간 코드 챌린지 시즌 1
 * https://programmers.co.kr/learn/courses/30/lessons/68938?language=java
 */
public class 문자열의_아름다움 {

    public long solution(String s) {
        // 모든 부분 문자열들의 아름다움의 합을 구하라..
        // 1<= s <= 300,000

        // 1 + 2 + ... n -1 = n (n -1) / 2
        // 모든 부분 문자열 구해?

        long answer = 0;
        for (int i = 0; i <= s.length(); i++) {
            for (int j = i; j <= s.length(); j++) {
                if (i > j - 2) { // 문자열의 길이가 1보다 짧으면 검사하지 말자
                    continue;
                }

                String sub = s.substring(i, j);
                if (isBeautiful(sub)) {
                    continue;
                } else {
//                    System.out.println("sub : " + sub + " @@@@ value : " + solve(sub));
                    answer += solve(sub);
                }
            }
        }

        return answer;
    }

    private int solve(String s) {
        int length = s.length();

        char first = s.charAt(0);
        char last = s.charAt(length - 1);

        if (first != last) {
            return length - 1;
        } else {
            String compare = first + "";

            // 앞뒤 한칸씩 자르기
            String sub = s.substring(1, length - 1);

            // 첫 번쨰 문자가 마지막의 어디에서 나타는지 확인
            int first_char_index = sub.lastIndexOf(compare);
            if (first_char_index == -1) {
                return length - 2;
            }
            first_char_index = first_char_index + 1 == sub.length() ? first_char_index - 1 : first_char_index + 1;

            // 마지막 문자가 시작위치로부터 어디에서 나타는지 확인
            int last_char_index = sub.indexOf(compare);
            if (last_char_index == -1) {
                return length - 2;
            }
            last_char_index = last_char_index == 0 ? last_char_index + 1 : last_char_index - 1;

            return Math.max(first_char_index + 1, length - last_char_index - 2);
        }
    }

    private boolean isBeautiful(String s) {
        char prev = 0;

        for (int i = 0; i < s.length(); i++) {
            char cur = s.charAt(i);

            if (prev != 0) {
                if (prev != cur) {
                    return false;
                }
            }

            prev = cur;
        }
        return true;
    }

    public static void main(String[] args) {
        문자열의_아름다움 obj = new 문자열의_아름다움();
//        System.out.println("result oo: " + obj.solution("oo"));
        System.out.println("result baby: " + obj.solution("baby"));
        System.out.println("result abaa: " + obj.solution("abaa"));
    }
}

/**
 * 일단 메모리를 이중포문에서 많이 사용하므로 제한해야할거 같고..
 * 투포인터 알고리즘이 생각나는데 확인해봐야 겠다..
 * <p>
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (0.02ms, 52.8MB)
 * 테스트 2 〉	통과 (0.03ms, 52.3MB)
 * 테스트 3 〉	통과 (8.59ms, 53.3MB)
 * 테스트 4 〉	실패 (8.58ms, 53.5MB)
 * 테스트 5 〉	실패 (10.26ms, 53.4MB)
 * 테스트 6 〉	실패 (17.35ms, 57.7MB)
 * 테스트 7 〉	실패 (72.98ms, 78.1MB)
 * 테스트 8 〉	실패 (418.29ms, 353MB)
 * 테스트 9 〉	실패 (6015.59ms, 352MB)
 * 테스트 10 〉	실패 (시간 초과)
 * 테스트 11 〉	실패 (시간 초과)
 * 테스트 12 〉	실패 (시간 초과)
 * 테스트 13 〉	실패 (시간 초과)
 * 테스트 14 〉	실행 중단
 * 테스트 15 〉	실행 중단
 * 테스트 16 〉	실행 중단
 * 테스트 17 〉	실행 중단
 */