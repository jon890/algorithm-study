package programmers.practice.level2

/**
 * 프로그래머스
 * 코딩 테스트 연습
 * Level 2
 *
 * 탑
 * https://programmers.co.kr/learn/courses/30/lessons/42588?language=kotlin
 */
class Top {

    fun solution(heights: IntArray): IntArray {
        /*
          탑 N대를 세웠다.
          모든 탑의 꼭대기에는 신호를 송/수신하는 장치가 있다
          발사한 신호는 신호를 보낸 탑보다 높은 탑만 수신한다
          한 번 수신된 신호는 다른 탑으로 송신되지 않는다
          
          신호는 왼쪽으로 송신되며
          각 탑이 쏜 신호를 어떤 탑이 받았는지 기록한 배열을 리턴
         */
        val answer = IntArray(heights.size)
        for (i in heights.indices) {
            var received = false

            for (j in i downTo 0) {
//               println("i : ${i}, j : ${j}");

                // 더 높은 탑에서 수신
                if (heights[j] > heights[i]) {
                    answer[i] = j + 1
                    received = true
                    break
                }
            }

            // 수신 받지 못했다면..
            if (!received) {
                answer[i] = 0
            }
        }
        print(answer.contentToString())
        return answer
    }
}

/*
2020-07-15
코틀린 언어 공부를 위해서 문제를 코틀린으로 풀어보는중..
특이사항은 계속 intelli j 와 구글링을 통해서 해결해볼 예정이다

채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (2.95ms, 57.8MB)
테스트 2 〉	통과 (2.95ms, 56.8MB)
테스트 3 〉	통과 (2.85ms, 59.6MB)
테스트 4 〉	통과 (2.98ms, 59.3MB)
테스트 5 〉	통과 (3.21ms, 59.2MB)
테스트 6 〉	통과 (2.84ms, 57.4MB)
테스트 7 〉	통과 (3.02ms, 58.9MB)
테스트 8 〉	통과 (3.91ms, 59.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */