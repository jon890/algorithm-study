package toss

/**
 * 상위 25%중 가장 쉬운 문제
 */
class Solution1 {
    fun solution(levels: IntArray): Int {
        levels.sort()
        val length = levels.size
        val target = length / 4
        if (target == 0) return -1
        return levels[length - target]
    }

    fun testTemplate(levels: IntArray, answer: Int) {
        val ret = solution(levels)
        if (ret == answer) {
            println("정답 입니다!!")
        }
    }
}

fun main() {
    Solution1().let {
        it.testTemplate(intArrayOf(1, 2, 3), -1)
        it.testTemplate(intArrayOf(1, 2, 3, 4), 4)
        it.testTemplate(intArrayOf(1, 2, 3, 4, 5, 6, 7, 8, 9), 8)
    }
}