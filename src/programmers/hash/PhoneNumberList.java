package programmers.hash;

/**
 * 프로그래머스
 * 코딩 테스트 연습
 * 해쉬
 *
 * 전화번호 목록
 * https://programmers.co.kr/learn/courses/30/lessons/42577?language=java
 */
public class PhoneNumberList {
    public boolean solution(String[] phone_book) {
        for (String p1 : phone_book) {
            for (String p2 : phone_book) {
                // 같은 객체 일 경우 건너 뛴다
                if (p1 == p2)
                    continue;

                if (p1.startsWith(p2)) {
                    return true;
                }
            }
        }
        return false;
    }
}

/*
2020-06-04
자바 문자열 메소드로 처리할 수 있는문제
따로 해쉬를 사용할 필요가 없다..??

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.78ms, 52.2MB)
테스트 2 〉	통과 (0.64ms, 50.3MB)
테스트 3 〉	통과 (0.51ms, 50.3MB)
테스트 4 〉	통과 (0.75ms, 52.3MB)
테스트 5 〉	통과 (0.64ms, 52MB)
테스트 6 〉	통과 (0.84ms, 50.5MB)
테스트 7 〉	통과 (0.61ms, 52.5MB)
테스트 8 〉	통과 (0.55ms, 52.7MB)
테스트 9 〉	통과 (0.55ms, 52MB)
테스트 10 〉	통과 (0.53ms, 50.3MB)
테스트 11 〉	통과 (0.50ms, 52.5MB)
효율성  테스트
테스트 1 〉	통과 (0.84ms, 59.3MB)
테스트 2 〉	통과 (0.86ms, 59.2MB)
채점 결과
정확성: 84.6
효율성: 15.4
합계: 100.0 / 100.0
 */