package programmers.level2.kotlin

/**
 * 여러 개인 경우 길이가 짧은 것
 * 길이 가 짧은 수열이 여러 개이면 시작 인덱스가 작은
 *
 * 첫 시도 => 41.2점
 * 두 번째 시도 => 44.1점
 */
class 연속된_부분_수열의_합 {
    fun solution(sequence: IntArray, k: Int): IntArray {
        val map = mutableMapOf<String, String>()
        for (i in sequence.indices) {
            map["${i}_${i}"] = "${sequence[i]}_${1}_${i}"
            if (sequence[i] == k) {
                return intArrayOf(i, i)
            }
        }

        for (size in 2..sequence.size) {
            for (i in 0..sequence.size - size) {
                val end = i + size - 1
                val data = map["${i}_${end - 1}"]?.split("_") ?: throw IllegalStateException()

                val sum = data[0].toInt() + sequence[end]
                map["${i}_${end}"] = "${sum}_${size}_${i}"

                if (sum == k) {
                    return intArrayOf(i, end)
                }
            }
        }

        return intArrayOf(0, 0)
    }
}

fun main() {
    val sol = 연속된_부분_수열의_합()

//    val ret1 = sol.solution(sequence = intArrayOf(1, 2, 3, 4, 5), k = 7)
//    if (ret1[0] != 2 || ret1[1] != 3) {
//        println("$ret1[0] $ret1[1]")
//        println("정답이 아님")
//    }

    val ret2 = sol.solution(intArrayOf(1, 1, 1, 2, 3, 4, 5), 5)
}

