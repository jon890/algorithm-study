package programmers.level2.kotlin

/**
 * 여러 개인 경우 길이가 짧은 것
 * 길이 가 짧은 수열이 여러 개이면 시작 인덱스가 작은
 *
 * 첫 시도 => 41.2점
 * 두 번째 시도 => 44.1점
 * 세 번째 시도 => 2차원 배열의 메모리 초과를 어떻게 해결할까?
 * 네 번째 시도 => 이전 합을 1차원 배열로 처리해도 무방하다, 하지만 시간 초과 여전히 발생
 *
 * 오름차순으로 정렬 => 투 포인터 알고리즘
 */
class 연속된_부분_수열의_합 {
    fun solution(sequence: IntArray, k: Int): IntArray {
        var left = 0
        var right = 0
        var sum = sequence[0]
        val candidate = mutableListOf<IntArray>()

        while (true) {
            if (sum == k) {
                candidate.add(intArrayOf(left, right, right - left + 1))
                sum -= sequence[left]
                left++
            } else if (sum < k) {
                if (right == sequence.size -1) break
                right++
                sum += sequence[right]
            } else {
                if (left == sequence.size -1) break
                sum -= sequence[left]
                left++
            }
        }

        candidate.sortWith { o1, o2 ->
            // 길이
            if (o1[2] != o2[2]) {
                o1[2] - o2[2]
            } else {
                o1[0] - o2[0]
            }
        }
        val first = candidate.first()
        return intArrayOf(first[0], first[1])
    }

    fun testTemplate(sequence: IntArray, k: Int, answer: IntArray) {
        val ret = solution(sequence, k)
        if (ret[0] == answer[0] && ret[1] == answer[1]) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!: ${ret.contentToString()}")
        }
    }
}

fun main() {
    연속된_부분_수열의_합().let {
        it.testTemplate(intArrayOf(1, 2, 3, 4, 5), 7, intArrayOf(2, 3))
        it.testTemplate(intArrayOf(1, 1, 1, 2, 3, 4, 5), 5, intArrayOf(6, 6))
        it.testTemplate(intArrayOf(2, 2, 2, 2, 2), 6, intArrayOf(0, 2))
    }
}

