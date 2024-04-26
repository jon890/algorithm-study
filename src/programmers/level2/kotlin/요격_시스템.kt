package programmers.level2.kotlin

/**
 * 논리 전개
 * 구간이 1인 지점은 발사해서 제거 (어쩔 수 없다 다른 지점을 쏴서 같이 커버할 순 없음)
 * 그 외에는 구간에서 많이 커버되는 지점에 발사
 * 안 풀릴 것 같다..
 *
 */
class 요격_시스템 {

    fun solution(targets: Array<IntArray>): Int {
        // start asc 정렬
        // find min, max
        targets.sortWith { o1, o2 ->
            o1[0] - o2[0]
        }

        val min = targets[0][0]
        val max = targets.sortedByDescending { it[1] }[0][1]

        // 각 구간에서 요격할 수 있는 미사일 개수, 인덱스 기록
        val data = IntRange(min, max - 1).map {
            val pos = it + 0.5
            var count = 0
            val indexes = mutableListOf<Int>()

            for (i in targets.indices) {
                val target = targets[i]
                val start = target[0]
                val end = target[1]

                if (start < pos && pos < end) {
                    count++
                    indexes.add(i)
                }
            }

            arrayOf(pos, count, indexes)
        }.sortedByDescending { it[1] as Int }

        println("min: $min, max: $max")
        println(data.joinToString { it.contentToString() })

        return 0
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