package programmers.practice.monthly_code_challenge;

/**
 * 이진 변환 반복하기
 * 프로그래머스 월간 코드 챌린지 시즌 1
 * https://programmers.co.kr/learn/courses/30/lessons/70129
 */
public class 이진_변환_반복하기 {

    public int[] solution(String s) {

        String str = s;
        int deleted_zero = 0;
        int changed = 0;

        while (true) {
            if (str.equals("1")) {
                break;
            }

            // 모든 0을 제거
            int prevLength = str.length();
            str = str.replace("0", "");
            deleted_zero += prevLength - str.length();

            // 길이를 2진법으로 변환한 문자열로 바꿈
            int length = str.length();
            str = convert(length, 2);
            changed++;
        }

        return new int[]{changed, deleted_zero};
    }

    /**
     * base 진법으로 변환한 문자열 반환
     * @param number : 변환할 숫자
     * @param base : 변환할 진법
     * @return
     */
    public String convert(int number, int base) {
        StringBuilder str = new StringBuilder();

        while (number != 0) {
            str.append(number % base);
            number = number / 2;
        }

        return str.reverse().toString();
    }

    public static void main(String[] args) {
        이진_변환_반복하기 obj = new 이진_변환_반복하기();
        obj.solution("110010101001");
    }
}

/**
 * 진법 변환도 자주하다보니 익숙해진다
 *
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (0.09ms, 52.5MB)
 * 테스트 2 〉	통과 (9.49ms, 55.3MB)
 * 테스트 3 〉	통과 (0.07ms, 52.2MB)
 * 테스트 4 〉	통과 (0.07ms, 52.3MB)
 * 테스트 5 〉	통과 (0.09ms, 53.8MB)
 * 테스트 6 〉	통과 (0.18ms, 52.3MB)
 * 테스트 7 〉	통과 (0.35ms, 51.8MB)
 * 테스트 8 〉	통과 (0.30ms, 53.3MB)
 * 테스트 9 〉	통과 (5.21ms, 53.8MB)
 * 테스트 10 〉	통과 (30.10ms, 53.2MB)
 * 테스트 11 〉	통과 (9.31ms, 54.5MB)
 * 채점 결과
 * 정확성: 100.0
 * 합계: 100.0 / 100.0
 */