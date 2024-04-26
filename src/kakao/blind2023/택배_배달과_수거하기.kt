package kakao.blind2023

/**
 * 문제 길이가 압도되는군..
 * 수능 문제를 풀게 하고 싶은건가..
 *
 * 일렬 n개 택배 배달
 * 거리는 각각 1
 * cap개 실을 수 있다
 * 빈 재활용 택배 상자 수거
 *
 * 최소 이동 거리는 얼마인가
 */
class 택배_배달과_수거하기 {

    fun solution(cap: Int, n: Int, deliveries: IntArray, pickups: IntArray): Long {
        var answer: Long = -1
        return answer
    }

    fun testTemplate(cap: Int, n: Int, deliveries: IntArray, pickups: IntArray, answer: Long) {
        val ret = solution(cap, n, deliveries, pickups)

        if (ret == answer) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    택배_배달과_수거하기().let {
        it.testTemplate(4, 5, intArrayOf(1, 0, 3, 1, 2), intArrayOf(0, 3, 0, 4, 0), 16)
    }
}