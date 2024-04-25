package programmers.level2.kotlin

/**
 * 입력값 백만 => 이중포문 불가능
 * 이른 종료로도 불가능하겠지..
 *
 * TODO 새로운 아이디어 필요
 */
class 뒤에_있는_큰_수_찾기 {

    fun solution(numbers: IntArray): IntArray {

        val answer = IntArray(numbers.size) { -1 }
        var max: Int? = null

        for (i in numbers.indices) {
            val a = numbers[i]

            if (max != null && a >= max) {
                answer[i] = -1
                continue
            }

            for (j in i + 1..numbers.size - 1) {
                val b = numbers[j]

                if (a < b) {
                    answer[i] = b
                    break
                }
            }

            // 모든 수는 max 보다 작다
            if (answer[i] == -1) {
                max = a
            }
        }

        return answer
    }

    fun testTemplate(numbers: IntArray, answer: IntArray) {
        val ret = solution(numbers)
        if (answer.contentEquals(ret)) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    뒤에_있는_큰_수_찾기().let {
        it.testTemplate(intArrayOf(2, 3, 3, 5), intArrayOf(3, 5, 5, -1))
        it.testTemplate(intArrayOf(9, 1, 5, 3, 6, 2), intArrayOf(-1, 5, 6, 6, -1, -1))
    }
}