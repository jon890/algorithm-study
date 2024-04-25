package programmers.level2.kotlin

/**
 * 2m, 3m, 4m 좌석
 * 균형을 이루면 시소 짝꿍
 * 무게 * 좌석 거리 같다면 짝꿍
 *
 * 첫 번째 시도 => 47.1점
 * 두 번째 시도 => 조건 오류 수정 => 94.1점 (시간 초과..)
 * 이중 포문으로 가까스로 성공
 * TODO 정석 방법 확인 필요..
 */
class 시소_짝꿍 {
    fun solution(weights: IntArray): Long {
        // 정렬
        weights.sort()

        var count = 0L
        for (i in weights.indices) {
            for (j in i + 1..weights.lastIndex) {
                if (weights[i] == weights[j]) {
                    count++
                } else if (weights[i] * 3 == weights[j] * 2) {
                    count++
                } else if (weights[i] * 4 == weights[j] * 3) {
                    count++
                } else if (weights[i] * 4 == weights[j] * 2) {
                    count++
                }

                if (weights[i] * 2 < weights[j]) break
            }
        }

        return count
    }

    fun testTemplate(weights: IntArray, answer: Long) {
        val ret = solution(weights)

        if (ret == answer) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    시소_짝꿍().let {
        it.testTemplate(intArrayOf(100, 180, 360, 100, 270), 4)
    }
}