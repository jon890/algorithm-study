package toss

/**
 * 멋쟁이 숫자
 * 길이가 3인 s의 substring을 10진수로 읽은것
 * 각 자리의 숫자가 모두 같다
 *
 */
class Solution2 {
    fun solution(s: String): Int {
        var start = 0
        val candidates = mutableListOf<Int>()

        while (start <= s.lastIndex - 2) {
            val end = start + 3
            val sub = s.substring(start, end)
            if (sub[0] == sub[1] && sub[1] == sub[2]) {
                candidates.add(sub.toInt())
            }
            start++
        }

        if (candidates.isEmpty())
            return -1

        candidates.sortDescending()
        return candidates[0]
    }

    fun testTemplate(s: String, answer: Int) {
        val ret = solution(s)
        if (ret == answer) {
            println("정답 입니다!!")
        }
    }
}

fun main() {
    Solution2().let {
        it.testTemplate("12223", 222)
        it.testTemplate("111999333", 999)
        it.testTemplate("123", -1)
        it.testTemplate("000123", 0)
    }
}