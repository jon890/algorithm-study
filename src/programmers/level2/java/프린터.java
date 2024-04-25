package programmers.level2.java;

import java.util.LinkedList;

/**
 * 프로그래머스
 * 코딩 테스트 연습
 * Level 2
 *
 * 프린터
 * https://programmers.co.kr/learn/courses/30/lessons/42587?language=java
 */
public class 프린터 {

    public int solution(int[] priorities, int location) {

        /*
         * 프린터 요청이 들어온 순서대로 인쇄
         * 중요도가 높은 프린터 만들었음
         *
         * 인쇄 대기목록의 가장 앞에 있는 문서(J)를 꺼낸다
         * 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를
         * 대기목록의 가장 마지막으로 투입,
         * 그렇지 않으면 J를를 인쇄
         *
         * 내가 요청한 문서가 몇 번쨰로 인쇄되는가?
         */

        LinkedList<Integer> printer = new LinkedList<>();
        for (int i : priorities) {
            printer.add(i);
        }

        int myPosition = location;
        int answer = 0;

        while (true) {
            boolean checking = myPosition == 0;
            
            int current = printer.poll();

            boolean existBigPriority = printer.stream().anyMatch(i -> current < i);
            if (existBigPriority) {
                printer.addLast(current);

                // 내 문서가 인쇄 차례이지만, 우선순위가 더 높은 문서가 있다면..
                if (checking) {
                    myPosition = printer.size() - 1;
                } else {
                    myPosition -= 1;
                }
            } else {
                // 문서 인쇄
                answer++;
                
                // 내 문서가 인쇄 됨
                if (checking) {
                    break;
                } else {
                    myPosition -= 1;
                }
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        프린터 obj = new 프린터();

//        int[] priorities_1 = {2, 1, 3, 2};
//        int location_1 = 2;
//        System.out.println(obj.solution(priorities_1, location_1));

        int[] priorities_2 = {1, 1, 9, 1, 1, 1};
        int location_2 = 0;
        System.out.println(obj.solution(priorities_2, location_2));
    }
}

/*
2020-07-15
내 포지션을 기록하는 변수를 따로 두엇는데 이를 간단히 할 수 없을까..?

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (5.78ms, 52.6MB)
테스트 2 〉	통과 (9.02ms, 52.7MB)
테스트 3 〉	통과 (4.45ms, 52.3MB)
테스트 4 〉	통과 (4.52ms, 52.9MB)
테스트 5 〉	통과 (3.85ms, 50.8MB)
테스트 6 〉	통과 (5.90ms, 52.3MB)
테스트 7 〉	통과 (5.58ms, 50.9MB)
테스트 8 〉	통과 (7.50ms, 53.2MB)
테스트 9 〉	통과 (4.49ms, 50.7MB)
테스트 10 〉	통과 (6.65ms, 52.9MB)
테스트 11 〉	통과 (7.25ms, 50.3MB)
테스트 12 〉	통과 (4.36ms, 52.8MB)
테스트 13 〉	통과 (7.44ms, 53MB)
테스트 14 〉	통과 (6.06ms, 52.3MB)
테스트 15 〉	통과 (4.23ms, 52.4MB)
테스트 16 〉	통과 (4.67ms, 50.6MB)
테스트 17 〉	통과 (7.10ms, 52.6MB)
테스트 18 〉	통과 (4.56ms, 50.8MB)
테스트 19 〉	통과 (7.53ms, 52.5MB)
테스트 20 〉	통과 (5.13ms, 52.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */