package programmers.level2.kotlin

import kotlin.math.floor
import kotlin.math.pow
import kotlin.math.sqrt

/**
 * 서로 다른 크기의 원 2개
 *
 * 원 사이의 정수 좌표의 갯수
 * 이중 반복문 => 시간 초과
 * 1중 반복문 => x가 0일 때 우리가 어떻게 갯수를 세는지 다시 생각해보고 힌트를 찾는다
 * Int * Int는 오버플로우가 일어날 수 있다, Math.pow()를 사용하자
 */
class 두_원_사이의_정수_쌍 {
    fun solution(r1: Int, r2: Int): Long {
        var count = 0L
        for (x in 1..r2) {
            val max = sqrt((r2.toDouble().pow(2) - x.toDouble().pow(2))).toLong()

            val min = if (r1 > x) {
                sqrt((r1.toDouble().pow(2) - x.toDouble().pow(2)))
            } else {
                null
            }

            count += max
            min?.let {
                count -= min.toLong()
                if (isLong(min)) count++
            }
        }

        return (count + r2 - r1 + 1) * 4
    }

    fun isLong(num: Double): Boolean {
        return floor(num) == num
    }
}

fun main() {
    val sol = 두_원_사이의_정수_쌍()

    val ret1 = sol.solution(r1 = 2, r2 = 3)
    if (ret1 != 20L) {
        println("정답이 아님")
    }
}