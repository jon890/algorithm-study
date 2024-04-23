package programmers.level2.kotlin

/**
 * 여러 개인 경우 길이가 짧은 것
 * 길이 가 짧은 수열이 여러 개이면 시작 인덱스가 작은
 *
 * 첫 시도 => 41.2점
 * 두 번째 시도 => 44.1점
 * 세 번째 시도 => 2차원 배열의 메모리 초과를 어떻게 해결할까?
 * 네 번째 시도 => 이전 합을 1차원 배열로 처리해도 무방하다, 하지만 시간 초과 여전히 발생
 */
class 연속된_부분_수열의_합 {
    fun solution(sequence: IntArray, k: Int): IntArray {
        val prevSum = IntArray(sequence.size) { 0 }
        for (i in sequence.indices) {
            prevSum[i] = sequence[i]
            if (sequence[i] == k) {
                return intArrayOf(i, i)
            }
        }

        for (size in 2..sequence.size) {
            for (start in 0..sequence.size - size) {
                val end = start + size - 1
                val sum = prevSum[start] + sequence[end]
                prevSum[start] = sum
                if (sum == k) {
                    return intArrayOf(start, end)
                }
            }
        }

        throw IllegalStateException("정답을 발견하지 못했습니다")
    }
}

fun main() {
    val sol = 연속된_부분_수열의_합()

    val ret1 = sol.solution(sequence = intArrayOf(1, 2, 3, 4, 5), k = 7)
    if (ret1[0] != 2 || ret1[1] != 3) {
        println("정답이 아님")
    }
}

