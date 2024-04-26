package programmers.level2.kotlin

import kotlin.math.max
import kotlin.math.min

/**
 * 논리 전개
 * 구간이 1인 지점은 발사해서 제거 (어쩔 수 없다 다른 지점을 쏴서 같이 커버할 순 없음)
 * 그 외에는 구간에서 많이 커버되는 지점에 발사
 * 안 풀릴 것 같다..
 *
 */
class 요격_시스템 {

    fun solution(targets: Array<IntArray>): Int {
        targets.sortWith { o1, o2 -> o1[0] - o2[0] }

        // 첫 번째 영역에 미사일 발사
        var count = 1
        var prevStart = targets[0][0]
        var prevEnd = targets[0][1]

        for (i in 1..targets.lastIndex) {
            // 이전에 발사한 미사일이 다음 영역을 커버하는가?
            val currStart = targets[i][0]
            val currEnd = targets[i][1]

            // 구간 업데이트
            if (prevStart <= currStart && currStart < prevEnd) {
                prevStart = max(prevStart, currStart)
                prevEnd = min(prevEnd, currEnd)
            } else {
                prevStart = currStart
                prevEnd = currEnd
                count++
            }
        }

        return count
    }

    fun testTemplate(targets: Array<IntArray>, answer: Int) {
        val result = solution(targets)
        if (result == answer) {
            println("정답 입니다!!")
        } else {
            println("오답 입니다!!")
        }
    }
}

fun main() {
    요격_시스템().let {
        it.testTemplate(
            arrayOf(
                intArrayOf(4, 5), intArrayOf(4, 8),
                intArrayOf(10, 14), intArrayOf(11, 13),
                intArrayOf(5, 12), intArrayOf(3, 7),
                intArrayOf(1, 4)
            ), 3
        )
    }
}