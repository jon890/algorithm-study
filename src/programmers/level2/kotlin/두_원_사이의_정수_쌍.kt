package programmers.level2.kotlin

/**
 * 서로 다른 크기의 원 2개
 *
 * 원 사이의 정수 좌표의 갯수
 * 이중 반복문 => 시간 초과
 * TODO 새로운 방법이 필요해...
 *
 * 채점을 시작합니다.
 * 정확성  테스트
 * 테스트 1 〉	통과 (0.05ms, 61.4MB)
 * 테스트 2 〉	통과 (0.05ms, 58.9MB)
 * 테스트 3 〉	통과 (0.09ms, 59.3MB)
 * 테스트 4 〉	통과 (11.19ms, 59.4MB)
 * 테스트 5 〉	통과 (7.00ms, 59.2MB)
 * 테스트 6 〉	통과 (16.25ms, 58.8MB)
 * 테스트 7 〉	실패 (시간 초과)
 * 테스트 8 〉	실패 (시간 초과)
 * 테스트 9 〉	실패 (시간 초과)
 * 테스트 10 〉	실패 (시간 초과)
 * 채점 결과
 * 정확성: 60.0
 * 합계: 60.0 / 100.0
 */
class 두_원_사이의_정수_쌍 {
    fun solution(r1: Int, r2: Int): Long {
        var count = 0L
        for (x in 1..r2) {
            for (y in 1..r2) {
                if (x * x + y * y >= r1 * r1 && x * x + y * y <= r2 * r2) {
                    count++
                }
            }
        }

        return (count + r2 - r1 + 1) * 4
    }
}

fun main() {
    val sol = 두_원_사이의_정수_쌍()

    val ret1 = sol.solution(r1 = 2, r2 = 3)
    if (ret1 != 20L) {
        println("정답이 아님")
    }
}